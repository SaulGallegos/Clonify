import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('Listooo');
   }

  getNewReleases() {
    const headers = new HttpHeaders({
      // tslint:disable-next-line:object-literal-key-quotes
      'Authorization': 'Bearer BQCG0QfVB-NhRqPKLnPF5YkZP1IUrmlqKH7mGdk3OJrVenhwe5gWfrE3uuakVBy48VpyId_WZPUD__dJscE'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', { headers}).pipe( map((data: any) => {
      return data.albums.items;
    }));
  }

  getArtista(termino: string) {
    const headers = new HttpHeaders({
      // tslint:disable-next-line:object-literal-key-quotes
      'Authorization': 'Bearer BQCG0QfVB-NhRqPKLnPF5YkZP1IUrmlqKH7mGdk3OJrVenhwe5gWfrE3uuakVBy48VpyId_WZPUD__dJscE'
    });

    return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=10`, {headers}).pipe(map((data: any) => {
      return data.artists.items;
    }));
  }

}
