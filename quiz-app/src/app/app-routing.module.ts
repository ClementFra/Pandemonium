import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./features/home/home').then((m) => m.Home),
  },
  {
    path: 'quiz',
    loadChildren: () =>
      import('./features/quiz/quiz').then((m) => m.Quiz),
  },
  {
    path: 'results',
    loadChildren: () =>
      import('./features/results/results').then((m) => m.Results),
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
