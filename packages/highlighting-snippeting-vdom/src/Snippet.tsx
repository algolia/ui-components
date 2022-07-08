/** @jsx createElement */
import type { Renderer } from '@algolia/ui-components-shared';

import {
  createInternalHighlightComponent,
  InternalHighlightProps,
  InternalHighlightClassNames,
} from './InternalHighlight';

export type SnippetClassNames = InternalHighlightClassNames;

export type SnippetProps = Omit<InternalHighlightProps, 'classNames'> & {
  classNames?: Partial<SnippetClassNames>;
};

export function createSnippetComponent({ createElement, Fragment }: Renderer) {
  return function Snippet({ classNames = {}, ...props }: SnippetProps) {
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
