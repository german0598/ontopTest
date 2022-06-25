import { createAction, props } from '@ngrx/store';
import { Contract } from '../../shared/models/contracts.model';

export const loadContracts = createAction(
  '[Contract Page] load contracts'
);

export const loadedContracts = createAction(
  '[Contract Page] loaded success',
  props<{ contracts:  Contract[] }>()
);