import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabdemoComponent } from './tabdemo.component';

const routes: Routes = [{ path: '', component: TabdemoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabdemoRoutingModule { }
