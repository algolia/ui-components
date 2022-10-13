type ClassValue = string | undefined | boolean | null | number;

type Falsy = 0 | undefined | false | null | '';

type Flat<TArray> = TArray extends [...any[]]
  ? {
      [TIndex in keyof TArray]: TArray[TIndex];
    }
  : TArray;

type RemoveFalsy<TArray extends readonly any[]> = TArray extends [
  infer THead,
  ...infer TTail
]
  ? THead extends Falsy
    ? RemoveFalsy<TTail>
    : [THead, ...RemoveFalsy<TTail>]
  : [];

type Elem = Exclude<ClassValue, Falsy>;
type Join<
  TArr extends readonly Elem[],
  TSeparator extends string = ',',
  TResult extends string = ''
> = TArr extends []
  ? TResult
  : TArr extends readonly [infer THead, ...infer TTail]
  ? TTail extends readonly Elem[]
    ? THead extends Elem
      ? TResult extends ''
        ? Join<TTail, TSeparator, `${THead}`>
        : Join<TTail, TSeparator, `${TResult}${TSeparator}${THead}`>
      : string
    : string
  : string;

type FallbackToUndefined<TValue> = TValue extends '' ? undefined : TValue;

type CX<
  TClasses extends Array<ClassValue | ClassValue[]>
> = FallbackToUndefined<Join<RemoveFalsy<Flat<Flat<TClasses>>>, ' '>>;

export function cx<TClasses extends Array<ClassValue | ClassValue[]>>(
  ...cssClasses: TClasses
): CX<TClasses> {
  return (cssClasses
    .reduce<ClassValue[]>((acc, className) => {
      if (Array.isArray(className)) {
        return acc.concat(className);
      }
      return acc.concat([className]);
    }, [])
    .filter(Boolean)
    .join(' ') || undefined) as CX<TClasses>;
}
