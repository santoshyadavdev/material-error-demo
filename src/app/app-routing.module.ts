import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'tab', loadChildren: () => import('./tabdemo/tabdemo.module').then(m => m.TabdemoModule) },
  { path: 'expansion', loadChildren: () => import('./expansiondemo/expansiondemo.module').then(m => m.ExpansiondemoModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
