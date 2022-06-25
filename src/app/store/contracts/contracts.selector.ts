import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { ContractState } from './contracts.store';

export const selectContractFeature = ( state: AppState ) => state.contracts;

export const selectContracts = createSelector(
  selectContractFeature,
  (state: ContractState) => state.list
);

export const selectContractLoading = createSelector(
  selectContractFeature,
  (state: ContractState) => state.loading
);