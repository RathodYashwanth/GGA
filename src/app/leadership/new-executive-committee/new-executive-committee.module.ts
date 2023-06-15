import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewExecutiveCommitteePageRoutingModule } from './new-executive-committee-routing.module';

import { NewExecutiveCommitteePage } from './new-executive-committee.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewExecutiveCommitteePageRoutingModule,
    SharedModule
  ],
  declarations: [NewExecutiveCommitteePage]
})
export class NewExecutiveCommitteePageModule {}