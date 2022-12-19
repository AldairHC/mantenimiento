import { DetalleComponent } from './mantenimiento/detalle/detalle.component';
import { EditarComponent } from './mantenimiento/editar/editar.component';
import { GuardarComponent } from './mantenimiento/guardar/guardar.component';
import { MantenimientoComponent } from './mantenimiento/mantenimiento.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  //listar-guardar-editrar-detalle
  { path: 'mantenimientos', component: MantenimientoComponent },
  { path: 'mantenimientos/guardar', component: GuardarComponent },
  { path: 'mantenimientos/editar/:codigo', component: EditarComponent },
  { path: 'mantenimientos/detalle/:codigo', component: DetalleComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
