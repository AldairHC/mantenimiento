import { Mantenimiento } from './../model/mantenimiento';
import { Component } from '@angular/core';
import { MantenimientoService } from '../service/mantenimiento.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-mantenimiento',
  templateUrl: './mantenimiento.component.html',
  styleUrls: ['./mantenimiento.component.css']
})
export class MantenimientoComponent {
  mantenimiento: Mantenimiento[] = [];

  constructor(
    private mantenimientoService: MantenimientoService,
    private toastr: ToastrService
    ) { }

  ngOnInit() {
    this.cargarMantenimiento();
  }

  cargarMantenimiento(): void {
    this.mantenimientoService.ListaMantenimiento().subscribe(
      data => {
        this.mantenimiento = data;
      },
      err => {
        console.log(err);
      }
    );
  }

  borrarMantenimiento(codigo: number) {
    this.mantenimientoService.ElimnarMantenimiento(codigo).subscribe(
      data => {
        this.toastr.success('Mantenimiento Eliminado', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.cargarMantenimiento();
      },
      err => {
         this.toastr.success('Mantenimiento Eliminado', 'OK', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
        this.cargarMantenimiento();
      }
    );
  }
}
