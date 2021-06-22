import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './components/views/carro/cadastrar/cadastrar.component';
import { ListarComponent } from './components/views/carro/listar/listar.component';

const routes: Routes = [
  {
    //Rota para listar 
    path : '',
    component: ListarComponent
  },
  {
    //Rota para cadastrar
    path : 'components/carro/cadastrar',
    component: CadastrarComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
