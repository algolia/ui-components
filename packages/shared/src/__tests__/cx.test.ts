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
});
