type ClassValue = string | undefined | boolean | null | number;

export function cx(...cssClasses: Array<ClassValue | ClassValue[]>) {
  return (
    cssClasses
      .reduce<ClassValue[]>((acc, className) => {
        if (Array.isArray(className)) {
          return acc.concat(className);
        }
        return acc.concat([className]);
      }, [])
      .filter(Boolean)
      .join(' ') || undefined
  );
}
