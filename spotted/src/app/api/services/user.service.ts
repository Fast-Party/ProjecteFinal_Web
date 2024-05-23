import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
 idUsuario!: number;

  constructor() { }

  setIdUsuario(idUsuario: number){
    this.idUsuario = idUsuario;
  }

  getIdUsuario(){
    return this.idUsuario;
  }
}
