import { Component, Input, OnInit } from '@angular/core';
import { Contract } from '../../models/contracts.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() listElements: Contract[] | null = [];

  constructor() { }

  ngOnInit(): void {
  }

}
