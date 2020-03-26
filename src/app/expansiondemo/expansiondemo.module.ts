import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { ExpansiondemoRoutingModule } from './expansiondemo-routing.module';
import { ExpansiondemoComponent } from './expansiondemo.component';


@NgModule({
  declarations: [ExpansiondemoComponent],
  imports: [
    CommonModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    ExpansiondemoRoutingModule
  ]
})
export class ExpansiondemoModule { }
