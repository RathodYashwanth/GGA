import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewExecutiveCommitteePage } from './new-executive-committee.page';

const routes: Routes = [
  {
    path: '',
    component: NewExecutiveCommitteePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewExecutiveCommitteePageRoutingModule {}