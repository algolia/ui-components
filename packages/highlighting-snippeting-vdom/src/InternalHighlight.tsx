/** @jsx createElement */
import { ComponentChildren, ComponentProps, ElementType } from './types';

type HighlightPartProps = {
  children: ComponentChildren;
  classNames: InternalHighlightClassNames;
  highlightedTagName: ElementType;
  nonHighlightedTagName: ElementType;
  isHighlighted: boolean;
};

function createHighlightPartComponent({ createElement }) {
  return function HighlightPart({
    classNames,
    children,
    highlightedTagName,
    isHighlighted,
    nonHighlightedTagName,
  }: HighlightPartProps) {
    const TagName = isHighlighted ? highlightedTagName : nonHighlightedTagName;

    return (
      <TagName
        className={
          isHighlighted ? classNames.highlighted : classNames.nonHighlighted
        }
      >
        {children}
      </TagName>
    );
  };
}

type HighlightedPart = {
  isHighlighted: boolean;
  value: string;
};

export type InternalHighlightClassNames = {
  /**
   * Class names to apply to the root element
   */
  root: string;
  /**
   * Class names to apply to the highlighted parts
   */
  highlighted: string;
  /**
   * Class names to apply to the non-highlighted parts
   */
  nonHighlighted: string;
  /**
   * Class names to apply to the separator between highlighted parts
   */
  separator: string;
};

export type InternalHighlightProps = ComponentProps<'span'> & {
  classNames: InternalHighlightClassNames;
  highlightedTagName?: ElementType;
  nonHighlightedTagName?: ElementType;
  separator?: ComponentChildren;
  parts: HighlightedPart[][];
};

export function createInternalHighlightComponent({ createElement, Fragment }) {
  return function InternalHighlight({
    parts,
    highlightedTagName = 'mark',
    nonHighlightedTagName = 'span',
    separator = ', ',
    className,
    classNames,
    ...props
  }: InternalHighlightProps) {
    const HighlightPart = createHighlightPartComponent({ createElement });

    return (
      <span {...props} className={cx(classNames.root, className)}>
        {parts.map((part, partIndex) => {
          const isLastPart = partIndex === parts.length - 1;

          return (
            <Fragment key={partIndex}>
              {part.map((subPart, subPartIndex) => (
                <HighlightPart
                  key={subPartIndex}
                  classNames={classNames}
                  highlightedTagName={highlightedTagName}
                  nonHighlightedTagName={nonHighlightedTagName}
                  isHighlighted={subPart.isHighlighted}
                >
                  {subPart.value}
                </HighlightPart>
              ))}

              {!isLastPart && (
                <span className={classNames.separator}>{separator}</span>
              )}
            </Fragment>
          );
        })}
      </span>
    );
  };
}

function cx(...classNames: Array<string | undefined>) {
  return classNames.filter(Boolean).join(' ');
}
