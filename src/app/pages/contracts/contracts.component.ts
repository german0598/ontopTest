import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Contract } from '../../shared/models/contracts.model';
import { AppState } from '../../store/app.state';
import { loadContracts, loadedContracts } from '../../store/contracts/contracts.actions';
import { selectContracts } from '../../store/contracts/contracts.selector';
import { dataSelect } from '../../shared/models/select.model';
import { CONTRACTSTYPE, STATUS, CONTRACTS } from '../../shared/constants/general.constanst';

@Component({
  selector: 'app-contracts',
  templateUrl: './contracts.component.html',
  styleUrls: ['./contracts.component.scss']
})
export class ContractsComponent implements OnInit {

  contracts: Observable<Contract[]> = new Observable();
  contractTypes = CONTRACTSTYPE;
  statusList = STATUS;

  constructor( private state: Store<AppState> ) { }

  ngOnInit(): void {
    this.state.dispatch( loadContracts() );
    this.contracts = this.state.select( selectContracts );

    // Simulando la carga de datos
    setTimeout(() => {
      this.state.dispatch( loadedContracts({ contracts:  CONTRACTS}) );
    }, 2000);
  }

}
