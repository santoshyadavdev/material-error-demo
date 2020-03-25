import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExpansiondemoComponent } from './expansiondemo.component';

const routes: Routes = [{ path: '', component: ExpansiondemoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExpansiondemoRoutingModule { }
