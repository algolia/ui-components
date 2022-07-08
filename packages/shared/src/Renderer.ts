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

export type ElementType<TProps = any> = {
  [TKey in keyof JSX.IntrinsicElements]: TProps extends JSX.IntrinsicElements[TKey]
    ? TKey
    : never;
}[keyof JSX.IntrinsicElements];

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
