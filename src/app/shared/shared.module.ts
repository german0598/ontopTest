import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TableComponent } from './components/table/table.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { SelectComponent } from './components/select/select.component';
import { CalendarComponent } from './components/calendar/calendar.component';

@NgModule({
  declarations: [
    NavbarComponent,
    TableComponent,
    SelectComponent,
    CalendarComponent
  ],
  imports: [
    CommonModule,
    MatMenuModule,
    MatIconModule
  ],
  exports: [
    NavbarComponent,
    TableComponent,
    SelectComponent,
    CalendarComponent
  ]
})
export class SharedModule { }
