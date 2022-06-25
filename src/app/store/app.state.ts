import { ActionReducerMap } from '@ngrx/store';
import { ContractState } from './contracts/contracts.store';
import { contractReducer } from './contracts/contracts.reducer';

export interface AppState {
  contracts: ContractState
}

export const ROOT_REDUCER: ActionReducerMap<AppState> = {
  contracts: contractReducer
};