import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {
  nuevasCanciones: any[] = [];
  error = false;
  mensaje: string;
  constructor(private spotify: SpotifyService) {
    this.spotify.getNewReleases()
      .subscribe(data => {
        console.log(data);
        this.nuevasCanciones = data;
      }, (er) => {
        this.error = true;
        this.mensaje = er.error.error.message;
      });
  }

}
