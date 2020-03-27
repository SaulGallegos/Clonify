import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent {

  constructor(private spotify: SpotifyService) { }

  buscar(termino: string) {
    this.spotify.getArtista(termino)
      .subscribe(data => {
        console.log(data);
      });
  }

}
