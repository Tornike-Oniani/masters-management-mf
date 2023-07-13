export const prefixClasses = (...cls) => {
  const result = [];

  cls.forEach((maybeClass) => {
    if (maybeClass && typeof maybeClass === 'string') {
      maybeClass
        .split(' ')
        .forEach((singleClass) => result.push(`cr-${singleClass}`));
    }
  });

  return result.join(' ');
};
