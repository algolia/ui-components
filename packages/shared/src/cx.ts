type classValue = string | undefined | boolean | null | number;

export function cx(...cssClasses: Array<classValue | classValue[]>) {
  return (
    cssClasses
      .reduce<classValue[]>((acc, className) => {
        if (Array.isArray(className)) {
          return acc.concat(className);
        }
        return acc.concat([className]);
      }, [])
      .filter(Boolean)
      .join(' ') || undefined
  );
}
