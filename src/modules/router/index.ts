type RouterItem = {
  name: string;
  path: string;
};

export const routesNames = {
  HOME: 'HOME',
  THEME_CONSTRUCTOR: 'THEME_CONSTRUCTOR',
};

export const routes: RouterItem[] = [
  {
    name: routesNames.HOME,
    path: '/',
  },
  {
    name: routesNames.THEME_CONSTRUCTOR,
    path: '/theme-constructor',
  },
];

export const defaultRoute = '';
