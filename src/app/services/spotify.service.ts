import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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
      'Authorization': 'Bearer BQBV1eGGDrjt2hOD3jcdUBBWE-Ne4fZ5QY1ugSO2uqnhUwQAjdzbFsPsdgZK50vD0Q2R_tn-g8KIVg73g_c'
    });

    this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', { headers})
      .subscribe(data => {
        console.log(data);
      });
  }

}
