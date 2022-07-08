/** @jsx createElement */
import { render } from '@testing-library/preact';
import { createElement, Fragment } from 'preact';

import { createHighlightComponent } from '../Highlight';

const Highlight = createHighlightComponent({
  createElement,
  Fragment,
});

describe('Highlight', () => {
  test('renders only wrapper with empty match', () => {
    const { container } = render(<Highlight parts={[]} />);

    expect(container).toMatchInlineSnapshot(`
      <div>
        <span />
      </div>
    `);
  });

  test('renders parts', () => {
    const { container } = render(
      <Highlight
        parts={[
          [
            { isHighlighted: true, value: 'te' },
            { isHighlighted: false, value: 'st' },
          ],
          [{ isHighlighted: false, value: 'nothing' }],
        ]}
      />
    );

    expect(container).toMatchInlineSnapshot(`
      <div>
        <span>
          <mark>
            te
          </mark>
          <span>
            st
          </span>
          <span>
            , 
          </span>
          <span>
            nothing
          </span>
        </span>
      </div>
    `);
  });

  test('renders with custom tag names and separator', () => {
    function Highlighted({ children }) {
      return <strong>{children}</strong>;
    }
    function NonHighlighted({ children }) {
      return <small>{children}</small>;
    }

    const { container } = render(
      <Highlight
        highlightedTagName={Highlighted}
        nonHighlightedTagName={NonHighlighted}
        separator={<strong> - </strong>}
        parts={[
          [
            { isHighlighted: true, value: 'te' },
            { isHighlighted: false, value: 'st' },
          ],
          [{ isHighlighted: false, value: 'nothing' }],
        ]}
      />
    );

    expect(container).toMatchInlineSnapshot(`
      <div>
        <span>
          <strong>
            te
          </strong>
          <small>
            st
          </small>
          <span>
            <strong>
               - 
            </strong>
          </span>
          <small>
            nothing
          </small>
        </span>
      </div>
    `);
  });

  test('accepts custom class names', () => {
    const { container } = render(
      <Highlight
        parts={[
          [
            { isHighlighted: true, value: 'te' },
            { isHighlighted: false, value: 'st' },
          ],
          [{ isHighlighted: false, value: 'nothing' }],
        ]}
        className="MyCustomHighlight"
        classNames={{
          root: 'ROOT',
          highlighted: 'HIGHLIGHTED',
          nonHighlighted: 'NON-HIGHLIGHTED',
          separator: 'SEPARATOR',
        }}
      />
    );

    expect(container).toMatchInlineSnapshot(`
      <div>
        <span
          class="ROOT MyCustomHighlight"
        >
          <mark
            class="HIGHLIGHTED"
          >
            te
          </mark>
          <span
            class="NON-HIGHLIGHTED"
          >
            st
          </span>
          <span
            class="SEPARATOR"
          >
            , 
          </span>
          <span
            class="NON-HIGHLIGHTED"
          >
            nothing
          </span>
        </span>
      </div>
    `);
  });

  test('accepts partial custom class names', () => {
    const { container } = render(
      <Highlight
        parts={[
          [
            { isHighlighted: true, value: 'te' },
            { isHighlighted: false, value: 'st' },
          ],
          [{ isHighlighted: false, value: 'nothing' }],
        ]}
        classNames={{ root: 'ROOT', highlighted: 'HIGHLIGHTED' }}
      />
    );

    expect(container).toMatchInlineSnapshot(`
      <div>
        <span
          class="ROOT"
        >
          <mark
            class="HIGHLIGHTED"
          >
            te
          </mark>
          <span>
            st
          </span>
          <span>
            , 
          </span>
          <span>
            nothing
          </span>
        </span>
      </div>
    `);
  });

  test('forwards `div` props to the root element', () => {
    const { container } = render(
      <Highlight parts={[]} classNames={{ root: 'ROOT' }} aria-hidden="true" />
    );

    expect(container.querySelector('.ROOT')).toHaveAttribute(
      'aria-hidden',
      'true'
    );
  });
});
