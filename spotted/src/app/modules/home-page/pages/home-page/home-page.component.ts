import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { PlanModel } from '../../../../models/plan.model';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { catchError } from 'rxjs';
import { CardContainerComponent } from '../../../../share/card-container/card-container.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [HttpClientModule, RouterLink, CardContainerComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent implements OnInit {
  idUsuario?: number;
  planContainer = 'plan-container';

  planes: PlanModel[] = [];

  imageAutorDefault =
    'https://static.vecteezy.com/system/resources/previews/005/005/788/large_2x/user-icon-in-trendy-flat-style-isolated-on-grey-background-user-symbol-for-your-web-site-design-logo-app-ui-illustration-eps10-free-vector.jpg';

  constructor(private route: ActivatedRoute, private http: HttpClient) {
  }

  async ngOnInit() {
    await this.fetchPlanes(); // Espera a que se completen las llamadas para obtener los planes


  }

  async fetchPlanes() {
    try {
      this.idUsuario = parseInt(this.route.snapshot.paramMap.get('idUsuario')!);
    } catch (error) {
      console.log(error);
    }
    if (this.idUsuario != null) {
      const body = { IdUsuario: this.idUsuario };
      try {
        this.http
          .post('http://localhost:3000/getPlanes', body)
          .pipe(
            catchError((error) => {
              console.log('error is: ', error);
              if (error.status === 404) {
                window.alert('Couldnt load planes');
              }
              return error;
            })
          )
          .subscribe((res: any) => {
            if (res) {
              console.log(res);
              this.planes = res.results;
              console.log(this.planes);

              this.planes.forEach((plan) => {
                plan.ImagenLogoAutor = this.getImageAutorPath(plan);
                plan.ImagenPortada = this.getImagePortadaPath(plan);
              });
              
            } else {
              console.log('empty');
              console.log(res);
            }

          });
      } catch (error) {
        return console.log('sdfd');
      }
    }
  }

  imagenesEventosAndAutor = [
    {
      nombreAutor: 'Razzmatazz',
      imagenLogo:
        'https://scontent-bcn1-1.xx.fbcdn.net/v/t39.30808-6/352821287_3304685189792355_2898452865604277350_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=mZu7JYFxGEsQ7kNvgFoeyyo&_nc_ht=scontent-bcn1-1.xx&oh=00_AYCTKP4eQ1UwlM6_cmmzfc9aEc0bhkpVjUAmeP7TZP54oQ&oe=6648525A',
      eventos: [
        {
          nombreEvento: 'El Dirty',
          versiones: [
            {
              nombreVersion: 'Retrochandaleo',
              imagenPortada:
                'https://www.salarazzmatazz.com/storage/img_cache/room1Dirty24web__1000x540.jpg',
            },
            {
              nombreVersion: 'El Sucio',
              imagenPortada:
                'https://www.salarazzmatazz.com/storage/img_cache/sucioDirty24web__1000x540.jpg',
            },
            {
              nombreVersion: 'The Rave',
              imagenPortada:
                'https://www.salarazzmatazz.com/storage/img_cache/CabeceraDirty_ThaRave__1000x540.jpg',
            },
            {
              nombreVersion: 'La Shady',
              imagenPortada:
                'https://www.salarazzmatazz.com/storage/img_cache/shadyDirty24web__1000x540.jpg',
            },
            {
              nombreVersion: 'Little Sucio',
              imagenPortada:
                'https://www.salarazzmatazz.com/storage/img_cache/littlesucioDirty24web__1000x540.jpg',
            },
          ],
        },
        {
          nombreEvento: 'Mandanga',
          versiones: [
            {
              nombreVersion: 'Main de Hits',
              imagenPortada:
                'https://www.salarazzmatazz.com/storage/img_cache/Mandanga1__1000x540.jpg',
            },
            {
              nombreVersion: 'Perreo Room',
              imagenPortada:
                'https://www.salarazzmatazz.com/storage/img_cache/Mandanga2__1000x540.jpg',
            },
            {
              nombreVersion: 'Karaoke Room',
              imagenPortada:
                'https://www.salarazzmatazz.com/storage/img_cache/Mandanga4__1000x540.jpg',
            },
            {
              nombreVersion: 'El Perreito',
              imagenPortada:
                'https://www.salarazzmatazz.com/storage/img_cache/Mandanga3__1000x540.jpg',
            },
            {
              nombreVersion: 'La Electrónica',
              imagenPortada:
                'https://www.salarazzmatazz.com/storage/img_cache/Mandanga5_B__1000x540.jpg',
            },
          ],
        },
      ],
    },
    {
      nombreAutor: 'Sala Apolo',
      imagenLogo: 'https://www.nitbcn.com/photos/sala-apolo_img:v2466.jpg',
      eventos: [
        {
          nombreEvento: 'Bresh',
          versiones: [
            {
              nombreVersion: 'Bresh',
              imagenPortada:
                'https://dice-media.imgix.net/attachments/2024-01-04/a7e38d43-64f5-432f-a57a-2798c967763d.jpg?rect=0%2C514%2C2480%2C2480&auto=format%2Ccompress&q=80&w=328&fit=max&dpr=1',
            },
            {
              nombreVersion: 'Bresh 2',
              imagenPortada:
                'https://www.cadizturismo.com/storage/app/media/uploaded-files/BRESH-30-DE-JUNIO.jpg',
            },
          ],
        },
        {
          nombreEvento: 'MilkShake',
          versiones: [
            {
              nombreVersion: 'MilkShake',
              imagenPortada:
                'https://d3nxoulyw7bc8u.cloudfront.net/images/events/37361870/7bf7de60-e898-43c2-a911-933c40d0868d.jpg',
            },
            {
              nombreVersion: 'MilkShake 2',
              imagenPortada:
                'https://imgproxy.ra.co/_/quality:66/aHR0cHM6Ly9pbWFnZXMucmEuY28vZGFiNDFlZTcxODU3NjczYjBhMjJjMzljZDE0ZDY0YWZmYTBiMzg2Yi5qcGc=',
            },
          ],
        },
      ],
    },
    {
      nombreAutor: 'Sala Salamandra',
      imagenLogo:
        'https://indiehoy.com/wp-content/uploads/2022/07/salamandra.jpg',
      eventos: [
        {
          nombreEvento: 'Zoco',
          versiones: [
            {
              nombreVersion: 'Zoco',
              imagenPortada:
                'https://th.bing.com/th/id/OIP.jwB1mtpcsrLOFciEZAjuPAAAAA?rs=1&pid=ImgDetMain',
            },
            {
              nombreVersion: 'Zoco 2',
              imagenPortada:
                'https://th.bing.com/th/id/OIP.4mdWfVo2Hl0inr_pZZJz7wAAAA?rs=1&pid=ImgDetMain',
            },
          ],
        },
        {
          nombreEvento: 'Sudor',
          versiones: [
            {
              nombreVersion: 'Sudor',
              imagenPortada:
                'https://www.salamandra.cat/uploads/_images/club/3/resized/428_backendGallery.jpg',
            },
          ],
        },
      ],
    },
  ];
  getImageAutorPath(plan: PlanModel): string {
    const AutorName = plan.NombreAutor;

    // quiero obtener el path del autor que contenga el nombre del autor
    const matchedImageAutor = this.imagenesEventosAndAutor.find(
      (autor) =>
        autor.nombreAutor.replace(/\s/g, '').toUpperCase() ===
        AutorName.replace(/\s/g, '').toUpperCase()
    );

    if (matchedImageAutor) {
      return plan.ImagenLogoAutor = matchedImageAutor.imagenLogo;
    } else {
      return this.imageAutorDefault;
    }
  }

  getImagePortadaPath(plan: PlanModel): string {
    const AutorName = plan.NombreAutor;
    const EventTitle = plan.Titulo;

    // Quiero obtener las dos primeras palabras
    let EventName = EventTitle.split(' ').slice(0, 2).join(' ');

    // Tambien quiero quitar los caracteres especiales de la cadena y los espacios tambien
    EventName = EventName.replace(/[-:\/]/g, '');

    // Quiero obtener todo lo que hay despues de la primera palabra
    let VersionName = EventTitle.split(' ').slice(2).join(' ');

    VersionName = VersionName.replace(/[-:\/]/g, '');

    VersionName = VersionName === '' ? EventName : VersionName;

    VersionName =
      VersionName.length === 1 ? EventName + VersionName : VersionName;

    // quiero obtener el path del autor que contenga el nombre del autor
    const matchedImageAutor = this.imagenesEventosAndAutor.find(
      (autor) =>
        autor.nombreAutor.replace(/\s/g, '').toUpperCase() ===
        AutorName.replace(/\s/g, '').toUpperCase()
    );

    if (matchedImageAutor) {
      //plan.ImagenLogoAutor = matchedImageAutor.imagenLogo;

      const matchedImageEvento = matchedImageAutor.eventos.find(
        (evento) =>
          evento.nombreEvento.replace(/\s/g, '').toUpperCase() ===
          EventName.replace(/\s/g, '').toUpperCase()
      );
      if (matchedImageEvento) {
        const matchedVersion = matchedImageEvento.versiones.find(
          (version) =>
            version.nombreVersion.replace(/\s/g, '').toUpperCase() ===
            VersionName.replace(/\s/g, '').toUpperCase()
        );

        if (matchedVersion) {
          return plan.ImagenPortada = matchedVersion?.imagenPortada;
        } else {
          const indexRandom = Math.floor(
            Math.random() * matchedImageEvento.versiones.length
          );
          return matchedImageEvento.versiones[indexRandom].imagenPortada;
        }
      } else {
        const indexRandom = Math.floor(
          Math.random() * matchedImageAutor?.eventos.length
        );
        const indexRandomVersion = Math.floor(
          Math.random() *
            matchedImageAutor?.eventos[indexRandom].versiones.length
        );
        return matchedImageAutor.eventos[indexRandom].versiones[
            indexRandomVersion
          ].imagenPortada;
      }
    } else {
      //plan.ImagenLogoAutor = this.imageAutorDefault;

      const indexRandom = Math.floor(
        Math.random() * this.imagenesEventosAndAutor.length
      );
      const indexRandomEvento = Math.floor(
        Math.random() * this.imagenesEventosAndAutor[indexRandom].eventos.length
      );
      const indexRandomVersion = Math.floor(
        Math.random() *
          this.imagenesEventosAndAutor[indexRandom].eventos[indexRandomEvento]
            .versiones.length
      );

      return this.imagenesEventosAndAutor[indexRandom].eventos[
          indexRandomVersion
        ].versiones[indexRandomVersion].imagenPortada;
    }
  }
}
