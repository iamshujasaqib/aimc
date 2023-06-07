export const Screens = {
  auth: {
    navigator: 'authStack',
    modules: {
      login: 'login',
      register: 'register',
    },
  },
  home: {
    navigator: 'homeTabs',
    modules: {
      main: {
        navigator: 'homeStack',
        modules: {
          home: 'home',
        },
      },
    },
  },
};
