import { Component, OnInit } from '@angular/core';
import { Carro } from 'src/app/models/Carro';
import { CarroService } from 'src/app/services/carro.service';
import { Router } from "@angular/router";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  modelo!: string;
  placa!: string;
  ano!: string;

  constructor(private service: CarroService, private router: Router, private snack: MatSnackBar) { }

  ngOnInit(): void {
  }

  cadastrar(): void {
    let carro = new Carro();
    carro.modelo = this.modelo;
    carro.placa = this.placa
    carro.ano = Number.parseInt(this.ano);
    this.service.cadastrar(carro).subscribe(() => {
      console.log(carro);
      this.snack.open("Carro Cadastrado", "", {
        duration: 3000,
        horizontalPosition: "right",
        verticalPosition: "top",
      });
      this.router.navigate([""]);
    });
}
}


