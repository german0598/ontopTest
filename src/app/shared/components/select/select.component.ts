import { Component, Input, OnInit } from '@angular/core';
import { dataSelect } from '../../models/select.model';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {

  @Input() placeholder = 'Select option';
  @Input() elements: dataSelect[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
