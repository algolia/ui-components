/** @jsx createElement */
import type { Renderer } from '@algolia/ui-components-shared';

import {
  createInternalHighlightComponent,
  InternalHighlightProps,
  InternalHighlightClassNames,
} from './InternalHighlight';

export type HighlightClassNames = InternalHighlightClassNames;

export type HighlightProps = Omit<InternalHighlightProps, 'classNames'> & {
  classNames?: Partial<HighlightClassNames>;
};

export function createHighlightComponent({
  createElement,
  Fragment,
}: Renderer) {
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
