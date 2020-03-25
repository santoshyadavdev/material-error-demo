import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';

import { TabdemoRoutingModule } from './tabdemo-routing.module';
import { TabdemoComponent } from './tabdemo.component';
import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
  declarations: [TabdemoComponent],
  imports: [
    CommonModule,
    MatTabsModule,
    MatFormFieldModule,
    TabdemoRoutingModule
  ]
})
export class TabdemoModule { }
