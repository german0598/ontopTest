import { createReducer, on } from '@ngrx/store';
import * as contractActions from './contracts.actions';
import { ContractState } from './contracts.store';

export const initialState: ContractState = {
  loading: false,
  list: [
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
  ]
}

export const contractReducer = createReducer(
  initialState,
  on( contractActions.loadContracts, (state) => ({...state, loading: true })),
  on( contractActions.loadedContracts, (state, props) => ({...state, list: props.contracts,loading: false })),
);