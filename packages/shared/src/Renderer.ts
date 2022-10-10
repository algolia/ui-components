// Prevents type errors when using without a JSX implementation
// (e.g., Angular InstantSearch via InstantSearch.js)
// In the future, this may be fixable by accepting a JSX generic to every type
// or a `createRenderer` function that implies a JSX generic.
declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface Element {}
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface IntrinsicElements {}
  }
}

export type Pragma = (
  type: any,
  props: Record<string, any> | null,
  ...children: ComponentChildren[]
) => JSX.Element;

export type PragmaFrag = any;

type ComponentChild =
  | VNode<any>
  | object
  | string
  | number
  | boolean
  | null
  | undefined;

export type ComponentChildren = ComponentChild[] | ComponentChild;

type PropsWithChildren<TProps> = TProps & { children?: ComponentChildren };

type FunctionComponent<TProps = {}> = (
  props: PropsWithChildren<TProps>,
  context?: any
) => JSX.Element;

export type ElementType<TProps = any> =
  | {
      [TKey in keyof JSX.IntrinsicElements]: TProps extends JSX.IntrinsicElements[TKey]
        ? TKey
        : never;
    }[keyof JSX.IntrinsicElements]
  | FunctionComponent<TProps>;

export type ComponentProps<
  TComponent extends keyof JSX.IntrinsicElements
> = JSX.IntrinsicElements[TComponent];

export type VNode<TProps = any> = {
  type: any;
  props: TProps & { children: ComponentChildren; key?: any };
};

export type Renderer = {
  /**
   * The function to create virtual nodes.
   *
   * @default preact.createElement
   */
  createElement: Pragma;
  /**
   * The component to use to create fragments.
   *
   * @default preact.Fragment
   */
  Fragment: PragmaFrag;
};
