import { Component, Input, OnInit } from '@angular/core';
import { catchError } from 'rxjs';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { ProfileModel } from '../../models/profile.model';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-global-nav',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './global-nav.component.html',
  styleUrl: './global-nav.component.scss'
})
export class GlobalNavComponent implements OnInit{
  statePage: number = 0;
  stateNotif: boolean = false;
  stateMessage: boolean = false;
  @Input() user_id!: number;
  vision_menu: boolean = false;
  actualYear: number = new Date().getFullYear();
  perfilUsuario: ProfileModel;

  constructor(
    private router: Router,
    private http: HttpClient,) {
      this.perfilUsuario = new ProfileModel();
    }
    
  onCheckboxChange(event: Event): void {
    const checkbox = event.target as HTMLInputElement;
    if (checkbox.checked) {
      this.vision_menu = true;
    } else {
      this.vision_menu = false;
    }
  }
  ngOnInit() {

    if (this.user_id != null) {
      const body = { IdUsuario: this.user_id }
      try {
        this.http.post('http://localhost:3000/getInfoUsuarioLogged', body).pipe(catchError(error => {
          console.log('error is: ', error);
          return error;
        })).subscribe((res: any) => {
          if (res) {
            //console.log(res.results[0]);
            this.perfilUsuario = res.results[0];
            console.log("perfil", this.perfilUsuario);
          } else {
            console.log('couldnt post plan')
          }
        })
      } catch (error) {
        return console.log('sdfd', error);
      }
    }

    if (this.router.url.includes('home')){
      this.statePage = 1;
    }else if (this.router.url.includes('explore')){
      this.statePage = 2;
    }else if (this.router.url.includes('my_events')){
      this.statePage = 3;
    }

  }

}
