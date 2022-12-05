import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./features/start/start.module').then((m) => m.StartModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      // initialNavigation: 'enabled',
      relativeLinkResolution: 'corrected',
      enableTracing: false,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
