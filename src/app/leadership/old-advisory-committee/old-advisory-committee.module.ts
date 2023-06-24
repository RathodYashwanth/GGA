import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OldAdvisoryCommitteePageRoutingModule } from './old-advisory-committee-routing.module';

import { OldAdvisoryCommitteePage } from './old-advisory-committee.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OldAdvisoryCommitteePageRoutingModule,
    SharedModule
  ],
  declarations: [OldAdvisoryCommitteePage]
})
export class OldAdvisoryCommitteePageModule {}
