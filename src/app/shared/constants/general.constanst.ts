import { dataSelect } from '../models/select.model';
import { Contract } from '../models/contracts.model';

export const MONTHS: dataSelect [] = [
  {value: 1, text: 'JAN'},
  {value: 2, text: 'FEB'},
  {value: 3, text: 'MAR'},
  {value: 4, text: 'ABR'},
  {value: 5, text: 'MAY'},
  {value: 6, text: 'JUN'},
  {value: 7, text: 'JUL'},
  {value: 8, text: 'AUG'},
  {value: 9, text: 'SEP'},
  {value: 10, text: 'OCT'},
  {value: 11, text: 'NOV'},
  {value: 12, text: 'DIC'},
];

export const CONTRACTSTYPE: dataSelect [] = [
  {value: 1, text: 'Traditional'},
  {value: 2, text: 'Other'},
]

export const STATUS: dataSelect [] = [
  {value: 'AT', text: 'Active'},
  {value: 'SP', text: ' Signature pending'},
]

export const INITSTATECONTRACTS: Contract[] = [
  {
    img: 'Ellipse-29.png',
    contractorName: 'Darlene Robertson',
    amount: 200,
    startDate: new Date(),
    status: {code: 'AT', text: 'Active'},
    type: 'Traditional'
  },
  {
    img: 'Ellipse-41.png',
    contractorName: 'Darlene Robertson',
    amount: 300,
    startDate: new Date(),
    status: {code: 'SP', text: 'Signature pending'},
    type: 'Traditional'
  },
  {
    img: 'Ellipse-43.png',
    contractorName: 'Darlene Robertson',
    amount: 500,
    startDate: new Date(),
    status: {code: 'AT', text: 'Active'},
    type: 'Traditional'
  }
];

export const CONTRACTS: Contract[] = [
  {
    img: 'Ellipse-29.png',
    contractorName: 'Darlene Robertson',
    amount: 200,
    startDate: new Date(),
    status: {code: 'AT', text: 'Active'},
    type: 'Traditional'
  },
  {
    img: 'Ellipse-41.png',
    contractorName: 'Darlene Robertson',
    amount: 300,
    startDate: new Date(),
    status: {code: 'SP', text: 'Signature pending'},
    type: 'Traditional'
  },
  {
    img: 'Ellipse-43.png',
    contractorName: 'Darlene Robertson',
    amount: 500,
    startDate: new Date(),
    status: {code: 'AT', text: 'Active'},
    type: 'Traditional'
  },
  {
    img: 'Ellipse-43.png',
    contractorName: 'Darlene Robertson',
    amount: 500,
    startDate: new Date(),
    status: {code: 'AT', text: 'Active'},
    type: 'Traditional'
  }
];