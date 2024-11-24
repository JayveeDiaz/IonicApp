import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CatchPageRoutingModule } from './catch-routing.module';

import { CatchPage } from './catch.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CatchPageRoutingModule
  ],
  declarations: [CatchPage]
})
export class CatchPageModule {}
