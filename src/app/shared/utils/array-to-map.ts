
export function arrayToMap<T>(array: T[]): {[k: string]: T} {
  const map: {[key: string]: T} = {};

  array.forEach((item, index) => {
    map[index] = item;
  });

  return map;
}
