import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'orders/:id/invoice',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      return ['10053', '10052', '10051', '10050', '10049', '10048', '10047', '10046'].map(id => ({ id }));
    }
  },
  {
    path: 'orders/:id',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      return ['10053', '10052', '10051', '10050', '10049', '10048', '10047', '10046'].map(id => ({ id }));
    }
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
