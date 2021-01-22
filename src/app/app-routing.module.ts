import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListContainerComponent, FlowContainerComponent } from './components';

const routes: Routes = [
  {
    path: 'factorio-lab/list',
    component: ListContainerComponent,
  },
  {
    path: 'factorio-lab/flow',
    component: FlowContainerComponent,
  },
  {
    path: '**',
    redirectTo: 'factorio-lab/list',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
