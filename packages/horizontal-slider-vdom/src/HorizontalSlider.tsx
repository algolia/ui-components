/* eslint-disable @typescript-eslint/no-unused-vars */
/** @jsx createElement */
import { ComponentChildren, cx, Renderer } from '@algolia/ui-components-shared';

import {
  FrameworkProps,
  HorizontalSliderProps,
  HorizontalSliderTranslations,
  RecordWithObjectID,
} from './types';

// basic types to allow this file to compile without @types/react or preact
// this is a minimal subset of the actual types, coming from the JSX namespace
interface IntrinsicElement extends JSX.IntrinsicAttributes {
  children?: ComponentChildren;

  className?: string;
  id?: string;
  tabIndex?: string | number;
  title?: string;

  onClick?: (event: MouseEvent) => void;
  onKeyDown?: (event: KeyboardEvent) => void;
  onScroll?: (event: MouseEvent) => void;
}

interface IntrinsicSvgElement extends IntrinsicElement {
  width?: string;
  height?: string;
  viewBox?: string;
  fill?: string;
  fillRule?: string;
  clipRule?: string;
  d?: string;
}

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      div: IntrinsicElement;
      button: IntrinsicElement;
      ol: IntrinsicElement;
      li: IntrinsicElement;
      svg: IntrinsicSvgElement;
      path: IntrinsicSvgElement;
    }
  }
}

let lastHorizontalSliderId = 0;

export function generateHorizontalSliderId() {
  return `uic-horizontal-slider-${lastHorizontalSliderId++}`;
}

export function updateNavigationButtonsProps({
  listRef,
  nextButtonRef,
  previousButtonRef,
}: Pick<FrameworkProps, 'listRef' | 'nextButtonRef' | 'previousButtonRef'>) {
  if (
    !listRef.current ||
    !previousButtonRef.current ||
    !nextButtonRef.current
  ) {
    return;
  }

  previousButtonRef.current.hidden = listRef.current.scrollLeft <= 0;
  nextButtonRef.current.hidden =
    listRef.current.scrollLeft + listRef.current.clientWidth >=
    listRef.current.scrollWidth;
}

export function createHorizontalSliderComponent({ createElement }: Renderer) {
  return function HorizontalSlider<TObject extends RecordWithObjectID>(
    props: HorizontalSliderProps<TObject> & FrameworkProps
  ) {
    const {
      listRef,
      nextButtonRef,
      previousButtonRef,
      sliderIdRef,
      updateNavigationButtonsProps,
    } = props;
    const translations: Required<HorizontalSliderTranslations> = {
      sliderLabel: 'Items',
      nextButtonLabel: 'Next',
      nextButtonTitle: 'Next',
      previousButtonLabel: 'Previous',
      previousButtonTitle: 'Previous',
      ...props.translations,
    };
    const classNames = props.classNames ?? {};

    function scrollLeft() {
      if (listRef.current) {
        listRef.current.scrollLeft -= listRef.current.offsetWidth * 0.75;
      }
    }

    function scrollRight() {
      if (listRef.current) {
        listRef.current.scrollLeft += listRef.current.offsetWidth * 0.75;
      }
    }

    if (props.items.length === 0) {
      return null;
    }

    return (
      <div className={cx('uic-HorizontalSlider-container', classNames.root)}>
        <button
          ref={previousButtonRef}
          title={translations.previousButtonTitle}
          aria-label={translations.previousButtonLabel}
          aria-controls={sliderIdRef.current}
          className={cx(
            'uic-HorizontalSlider-navigation',
            'uic-HorizontalSlider-navigation--previous',
            classNames.navigation,
            classNames.navigationPrevious
          )}
          onClick={(event) => {
            event.preventDefault();
            scrollLeft();
          }}
        >
          <svg width="8" height="16" viewBox="0 0 8 16" fill="none">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7.13809 0.744078C7.39844 1.06951 7.39844 1.59715 7.13809 1.92259L2.27616 8L7.13809 14.0774C7.39844 14.4028 7.39844 14.9305 7.13809 15.2559C6.87774 15.5814 6.45563 15.5814 6.19528 15.2559L0.861949 8.58926C0.6016 8.26382 0.6016 7.73618 0.861949 7.41074L6.19528 0.744078C6.45563 0.418641 6.87774 0.418641 7.13809 0.744078Z"
              fill="currentColor"
            />
          </svg>
        </button>

        <ol
          className={cx('uic-HorizontalSlider-list', classNames.list)}
          ref={listRef}
          tabIndex={0}
          id={sliderIdRef.current}
          aria-roledescription="carousel"
          aria-label={translations.sliderLabel}
          aria-live="polite"
          onScroll={updateNavigationButtonsProps}
          onKeyDown={(event) => {
            if (event.key === 'ArrowLeft') {
              event.preventDefault();
              scrollLeft();
            } else if (event.key === 'ArrowRight') {
              event.preventDefault();
              scrollRight();
            }
          }}
        >
          {props.items.map((item, index) => (
            <li
              key={item.objectID}
              className={cx('uic-HorizontalSlider-item', classNames.item)}
              aria-roledescription="slide"
              aria-label={`${index + 1} of ${props.items.length}`}
            >
              <props.itemComponent item={item} />
            </li>
          ))}
        </ol>

        <button
          ref={nextButtonRef}
          title={translations.nextButtonTitle}
          aria-label={translations.nextButtonLabel}
          aria-controls={sliderIdRef.current}
          className={cx(
            'uic-HorizontalSlider-navigation',
            'uic-HorizontalSlider-navigation--next',
            classNames.navigation,
            classNames.navigationNext
          )}
          onClick={(event) => {
            event.preventDefault();
            scrollRight();
          }}
        >
          <svg width="8" height="16" viewBox="0 0 8 16" fill="none">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0.861908 15.2559C0.601559 14.9305 0.601559 14.4028 0.861908 14.0774L5.72384 8L0.861908 1.92259C0.601559 1.59715 0.601559 1.06952 0.861908 0.744079C1.12226 0.418642 1.54437 0.418642 1.80472 0.744079L7.13805 7.41074C7.3984 7.73618 7.3984 8.26382 7.13805 8.58926L1.80472 15.2559C1.54437 15.5814 1.12226 15.5814 0.861908 15.2559Z"
              fill="currentColor"
            />
          </svg>
        </button>
      </div>
    );
  };
}
