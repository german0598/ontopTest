import { Component, OnInit } from '@angular/core';
import { dataSelect } from '../../models/select.model';
import { MONTHS } from '../../constants/general.constanst';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  months: dataSelect [] = MONTHS;

  constructor() { }

  ngOnInit(): void {
  }

}
