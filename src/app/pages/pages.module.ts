import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContractsComponent } from './contracts/contracts.component';
import { NotFoundComponent } from './not-found/not-found.component';


@NgModule({
  declarations: [
    ContractsComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
