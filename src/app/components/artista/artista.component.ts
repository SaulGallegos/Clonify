import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html'
})
export class ArtistaComponent {

  artista: any = {};
  topTracks: any[] = [];

  constructor(private router: ActivatedRoute, private spotify: SpotifyService) {
    this.router.params.subscribe(params => {
      // tslint:disable-next-line:no-string-literal
      this.getArtista(params['id']);
      // tslint:disable-next-line:no-string-literal
      this.getTopTracks(params['id']);
    });
  }

  getArtista(id: string) {
    this.spotify.getArtista(id).subscribe(artista => {
      this.artista = artista;
    });
  }

  getTopTracks(id: string) {
    this.spotify.getTopTracks(id)
      .subscribe(topTracks => {
        this.topTracks = topTracks;
      });
  }
}
