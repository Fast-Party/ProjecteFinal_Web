import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AutorService {
  idAutor!: number;

  constructor() { }

  setIdAutor(idAutor: number){
    this.idAutor = idAutor;
  }

  getIdAutor(){
    return this.idAutor;
  }
}
