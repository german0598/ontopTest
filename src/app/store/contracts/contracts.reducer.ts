import { createReducer, on } from '@ngrx/store';
import * as contractActions from './contracts.actions';
import { ContractState } from './contracts.store';
import { INITSTATECONTRACTS } from '../../shared/constants/general.constanst';

export const initialState: ContractState = {
  loading: false,
  list: INITSTATECONTRACTS
}

export const contractReducer = createReducer(
  initialState,
  on( contractActions.loadContracts, (state) => ({...state, loading: true })),
  on( contractActions.loadedContracts, (state, props) => ({...state, list: props.contracts,loading: false })),
);