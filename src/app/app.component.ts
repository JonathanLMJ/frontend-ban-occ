import { Component, ElementRef } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import { ApiAwsService } from './apiAws.service';

interface InformacionUsuario {
  nit             : string;
  nombre          : string;
  capa            : string;
  segmento        : string;
  gerenteRelacion : string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'front-end-ban-occ';
  
  usuario : InformacionUsuario = {
    nit             : "",
    nombre          : "",
    capa            : "",
    segmento        : "",
    gerenteRelacion : ""
  }

  getResponse : any = [];

  constructor(
    private http: HttpClient,
    private api: ApiAwsService,
    private elemRef : ElementRef 
  ) {

  }

  ngOnInit(): void {

    this.api.getUserInfo().subscribe(
      response => {
        this.getResponse      = response;
        this.usuario.nit      = this.getResponse.nit;
        this.usuario.nombre   = this.getResponse.nombre;
        this.usuario.capa     = this.getResponse.capa;
        this.usuario.segmento = this.getResponse.segmento;            
        this.usuario.gerenteRelacion = this.getResponse.gerenteRelacion;
      }, 
      error => {
        console.log("error:");
          console.log(error);
      }
    );
  }
  
  openMenu(){
    let iconBar = this.elemRef.nativeElement.querySelector(".logo-bar");
    let hamMenu = this.elemRef.nativeElement.querySelector(".ham-menu");
    let closeMenuIcon = this.elemRef.nativeElement.querySelector(".close-menu-icon"); 

    if(iconBar.classList.contains('off')){      
      iconBar.classList.remove('off');
      iconBar.classList.add('on');  
      closeMenuIcon.classList.add('on');
      hamMenu.classList.add('show');
    } 
  }

  closeMenu(){
    let iconBar = this.elemRef.nativeElement.querySelector(".logo-bar");
    let hamMenu = this.elemRef.nativeElement.querySelector(".ham-menu");
    let closeMenuIcon = this.elemRef.nativeElement.querySelector(".close-menu-icon"); 

    if(closeMenuIcon.classList.contains('on')){      
      closeMenuIcon.classList.remove('on'); 
      hamMenu.classList.remove('show');
      iconBar.classList.add('off');
      iconBar.classList.remove('on') 
    } 
  }

}
