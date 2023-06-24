import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LeadershipPage } from './leadership.page';

const routes: Routes = [
  {
    path: '',
    component: LeadershipPage
  },
  {
    path: 'founders',
    loadChildren: () => import('./founders/founders.module').then( m => m.FoundersPageModule)
  },
  {
    path: 'new-executive-committee',
    loadChildren: () => import('./new-executive-committee/new-executive-committee.module').then( m => m.NewExecutiveCommitteePageModule)
  },
  {
    path: 'board-of-directors',
    loadChildren: () => import('./board-of-directors/board-of-directors.module').then( m => m.BoardOfDirectorsPageModule)
  },
  {
    path: 'old-advisory-committee',
    loadChildren: () => import('./old-advisory-committee/old-advisory-committee.module').then( m => m.OldAdvisoryCommitteePageModule)
  },
  {
    path: 'executive-committee',
    loadChildren: () => import('./executive-committee/executive-committee.module').then( m => m.ExecutiveCommitteePageModule)
  },
  {
    path: 'advisory-committee',
    loadChildren: () => import('./advisory-committee/advisory-committee.module').then( m => m.AdvisoryCommitteePageModule)
  },
  {
    path: 'other-committee',
    loadChildren: () => import('./other-committee/other-committee.module').then( m => m.OtherCommitteePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LeadershipPageRoutingModule {}
