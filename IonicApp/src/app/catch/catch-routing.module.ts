import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CatchPage } from './catch.page';

const routes: Routes = [
  {
    path: '',
    component: CatchPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CatchPageRoutingModule {}
