import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContractsComponent } from './contracts/contracts.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ContractsComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class PagesModule { }
