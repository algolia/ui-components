/** @jsx createElement */
import {
  InternalHighlightProps,
  InternalHighlightClassNames,
  createInternalHighlightComponent,
} from './InternalHighlight';

export type HighlightClassNames = InternalHighlightClassNames;

export type HighlightProps = Omit<InternalHighlightProps, 'classNames'> & {
  classNames?: Partial<HighlightClassNames>;
};

export function createHighlightComponent({ createElement, Fragment }) {
  return function Highlight({ classNames = {}, ...props }: HighlightProps) {
    const InternalHighlight = createInternalHighlightComponent({
      createElement,
      Fragment,
    });

    return (
      <InternalHighlight
        classNames={{
          root: '',
          highlighted: '',
          nonHighlighted: '',
          separator: '',
          ...classNames,
        }}
        {...props}
      />
    );
  };
}
