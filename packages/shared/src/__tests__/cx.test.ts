import { cx } from '../cx';

describe('cx', () => {
  test('concatenates class names', () => {
    expect(cx('class1', 'class2')).toBe('class1 class2');
  });

  test('stringifies truthy values', () => {
    expect(cx(1, 2, true)).toBe('1 2 true');
  });

  test('removes falsy values', () => {
    expect(cx('class1', false, undefined, null)).toBe('class1');
  });

  test('returns `undefined` when empty', () => {
    expect(cx('')).toBe(undefined);
    expect(cx(false, undefined, null)).toBe(undefined);
  });

  test('recursively concatenates arrays', () => {
    expect(cx(['class1', 'class2'], ['class3', 'class4'])).toBe(
      'class1 class2 class3 class4'
    );
    expect(cx(['class1', 'class2'], false && ['class3', 'class4'])).toBe(
      'class1 class2'
    );
    expect(
      cx(['class1', false && 'class2'], ['class3', false && 'class4'])
    ).toBe('class1 class3');
  });
});

// Type tests
// helpers extracted from https://github.com/TypeStrong/ts-expect
const expectType = <TType>(_: TType): void => undefined;
type TypeEqual<TTarget, TValue> = (<TActual>() => TActual extends TTarget
  ? 1
  : 2) extends <TActual>() => TActual extends TValue ? 1 : 2
  ? true
  : false;

{
  const actual = cx('class1', 'class2');
  expectType<TypeEqual<'class1 class2', typeof actual>>(true);
}

{
  const actual = cx('class1', false);
  expectType<TypeEqual<'class1', typeof actual>>(true);
}

{
  const actual = cx('class1', ['class2']);
  // nested arrays lose typing because they aren't `const`
  expectType<TypeEqual<string, typeof actual>>(true);
}

{
  const actual = cx(false, undefined, null, 0, '');
  // nested arrays lose typing because they aren't `const`
  expectType<TypeEqual<undefined, typeof actual>>(true);
}
