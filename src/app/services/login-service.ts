import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private http = inject(HttpClient); 
  private apiUrl = 'http://localhost:8080/skeycha';

  createUser(username: string,password:string): Observable<string> {
    const login = this.apiUrl+"/login";
    return this.http.post<string>(login, {username,password});
  }

  loginUser(username?: string,password?:string){
    console.log('Username password '+username+' '+password);
    const login = this.apiUrl+"/signIn";
    let httpHeaders = new HttpHeaders();
// WARNING: For POST requests, body is set to null by browsers.

  // var xhr = new XMLHttpRequest();
  // xhr.withCredentials = true;

  // xhr.addEventListener("readystatechange", function() {
  //   if(this.readyState === 4) {
  //     console.log(this.responseText);
  //   }
  // });
  // const credentials = btoa(`${username}:${password}`);

  // xhr.open("POST", "http://localhost:8080/skeycha/signIn");
  // xhr.setRequestHeader("accept", "*/*");
  // xhr.setRequestHeader("Authorization", `Basic ${credentials}`);

  // xhr.send();    

    this.http.post(
    'http://localhost:8080/skeycha/signIn',
    {}, // body
    {
      headers: new HttpHeaders({
        'accept': '*/*',
        'Authorization': `Basic ${btoa(username + ':' + password)}`
      }),
      withCredentials: true,
      responseType: 'text' as 'json',
      observe: 'response' 
    }
  ).subscribe({
    next: (response) => {
      console.log('Body:', response.body);
    console.log('Status:', response.status);
    console.log('Headers:', response.headers);

    // Example: get a specific header
    const authToken = response.headers.get('Authorization');
    console.log('Authorization header:', authToken);
    },
    error: (err) => {
      console.error('Error occurred:', err);
      if (err.status === 401) {
        console.error('Unauthorized: Invalid credentials');
      } else if (err.status === 0) {
        console.error('Network error: Backend not reachable');
      }
    },
    complete: () => {
      console.log('Request completed');
    }
  });

// let config = {
//   method: 'post',
//   maxBodyLength: Infinity,
//   url: 'http://localhost:8080/skeycha/signIn',
//   headers: { 
//     'accept': '*/*', 
//     'Authorization': 'Basic Z2FnYW5fc2luZ2gxOTg2NjFAeWFob28uY29tOkliYW5lempzQEAyNDAw'
//   }
// };

// axios.request(config)
// .then((response) => {
//   console.log(JSON.stringify(response.data));
// })
// .catch((error) => {
//   console.log(error);
// });

  }

  
}
