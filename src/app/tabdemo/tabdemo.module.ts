import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';

import { TabdemoRoutingModule } from './tabdemo-routing.module';
import { TabdemoComponent } from './tabdemo.component';


@NgModule({
  declarations: [TabdemoComponent],
  imports: [
    CommonModule,
    MatTabsModule,
    TabdemoRoutingModule
  ]
})
export class TabdemoModule { }
