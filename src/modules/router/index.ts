type RouterItem = {
  name: string;
  path: string;
};

export const routesNames = {
  HOME: 'HOME',
};

export const routes: RouterItem[] = [
  {
    name: routesNames.HOME,
    path: '/',
  },
];

export const defaultRoute = '';
