export const withNaming = (module: string) => (name: string) =>
  `${module}.${name}`;
