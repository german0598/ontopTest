import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContractsComponent } from './pages/contracts/contracts.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'contracts'
  },
  {
    path: 'contracts',
    component: ContractsComponent
  },

  {
		path: "**",
		redirectTo: "no-encontrado",
	},
  {
    path: 'no-encontrado',
    component: NotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
