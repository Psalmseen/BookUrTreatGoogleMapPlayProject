import { Route, Router } from '@vaadin/router';

const routes: Route[] = [
  {
    path: '/',
    component: 'my-app',
    action: async () => {
      await import('./App');
    },
    children: [
      {
        path: '',
        component: 'lit-home',
        action: async () => {
          await import('./Component/lit-home');
        },
      },
      {
        path: 'about',
        component: 'lit-about',
        action: async () => {
          await import('./Component/lit-about');
        },
      },
      {
        path: 'services',
        component: 'lit-services',
        action: async () => {
          await import('./Component/lit-services');
        },
      },
      {
        path: 'services/:id',
        component: 'lit-service',
        action: async () => {
          await import('./Component/lit-service');
        },
      },
    ],
  },
];

export const router = new Router(document.querySelector('#outlet'));

router.setRoutes(routes);
