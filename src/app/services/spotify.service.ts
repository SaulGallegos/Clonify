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
      'Authorization': 'Bearer BQAMtQ67LcpiBZHLJdTgr_vvR97syGF1AzrtUnqU3nWG34L07BUstSWhkMJSmWhqz6rEG9f0cdIjkIcIVj8'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', { headers}).pipe( map((data: any) => {
      return data.albums.items;
    }));
  }

  getArtistas(termino: string) {
    const headers = new HttpHeaders({
      // tslint:disable-next-line:object-literal-key-quotes
      'Authorization': 'Bearer BQDje2p_LEXoLWkJLjHfiPySIrEVaSvWQ-u5k-qg7mr0FNjDQhZwnGNx22pMGZUl9OsbxdscZsj6-j_DHv8'
    });

    return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=10`, {headers}).pipe(map((data: any) => {
      return data.artists.items;
    }));
  }

  getArtista(id: string) {
    const headers = new HttpHeaders({
      // tslint:disable-next-line:object-literal-key-quotes
      'Authorization': 'Bearer BQDje2p_LEXoLWkJLjHfiPySIrEVaSvWQ-u5k-qg7mr0FNjDQhZwnGNx22pMGZUl9OsbxdscZsj6-j_DHv8'
    });

    return this.http.get(`https://api.spotify.com/v1/artists/${id}`, {headers});
  }

  getTopTracks(id: string) {
    const headers = new HttpHeaders({
      // tslint:disable-next-line:object-literal-key-quotes
      'Authorization': 'Bearer BQDje2p_LEXoLWkJLjHfiPySIrEVaSvWQ-u5k-qg7mr0FNjDQhZwnGNx22pMGZUl9OsbxdscZsj6-j_DHv8'
    });

    return this.http.get(`https://api.spotify.com/v1/artists/${id}/top-tracks?country=us`, {headers}).pipe(map((data: any) => {
      return data.tracks;
    }));
  }
}
