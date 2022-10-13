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
