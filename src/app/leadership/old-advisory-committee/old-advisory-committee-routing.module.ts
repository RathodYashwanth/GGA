import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OldAdvisoryCommitteePage } from './old-advisory-committee.page';

const routes: Routes = [
  {
    path: '',
    component: OldAdvisoryCommitteePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OldAdvisoryCommitteePageRoutingModule {}
