import { Mantenimiento } from './../../model/mantenimiento';
import { Component } from '@angular/core';
import { MantenimientoService } from 'src/app/service/mantenimiento.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-guardar',
  templateUrl: './guardar.component.html',
  styleUrls: ['./guardar.component.css']
})
export class GuardarComponent {
  mantenimiento : Mantenimiento = new Mantenimiento();

  constructor(
    private mantenimientoService: MantenimientoService,
    private toastr: ToastrService,
    private router: Router
    ) { }

  ngOnInit() {
  }

  crearMantemiento(): void {
    this.mantenimientoService.GuardarMantenimiento(this.mantenimiento).subscribe(
      mantenimiento => {
        this.toastr.success('Mantenimiento Registrado Correctamente', 'OK', {
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

  guardar(){
    console.log(this.mantenimiento);
    this.crearMantemiento();
  }
}
