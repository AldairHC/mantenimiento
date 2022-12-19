import { Mantenimiento } from './../../model/mantenimiento';
import { Component } from '@angular/core';
import { MantenimientoService } from 'src/app/service/mantenimiento.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent {
  mantenimiento: Mantenimiento = null;

  constructor(
    private mantenimientoService: MantenimientoService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit() {
    const codigo = this.activatedRoute.snapshot.params.codigo;
    this.mantenimientoService.MantenimientoPorId(codigo).subscribe(
      data => {
        this.mantenimiento = data;
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Error', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
        this.router.navigate(['/mantenimientos']);
      }
    );

  }

  onUpdateMantenimiento(): void {
    const codigo = this.activatedRoute.snapshot.params.codigo;
    this.mantenimientoService.ActualizarMantenimiento(codigo, this.mantenimiento).subscribe(
      data => {
        this.toastr.success('Mantenimiento Actualizado', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.router.navigate(['/mantenimientos']);
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Error', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
        this.router.navigate(['/mantenimientos']);
      }
    );
  }
}
