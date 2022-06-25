import { Contract } from '../../shared/models/contracts.model';

export interface ContractState {
  loading: boolean;
  list: Contract[]
}