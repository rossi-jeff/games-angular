import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private readonly baseUrl = 'https://games-nest.jeff-rossi.com';
  private headers: { [key: string]: string } = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  };

  constructor(private http: HttpClient) {}

  public get(options: { path: string }) {
    return this.http.get(`${this.baseUrl}/${options.path}`, {
      headers: this.headers,
      observe: 'body',
      responseType: 'json',
    });
  }

  public post(options: {
    path: string;
    body: { [key: string]: any };
    token?: string;
  }) {
    if (options.token)
      this.headers['Authorization'] = `Bearer ${options.token}`;
    return this.http.post(
      `${this.baseUrl}/${options.path}`,
      { ...options.body },
      {
        headers: this.headers,
        observe: 'body',
        responseType: 'json',
      }
    );
  }

  public patch(options: { path: string; body: { [key: string]: any } }) {
    return this.http.patch(
      `${this.baseUrl}/${options.path}`,
      { ...options.body },
      {
        headers: this.headers,
        observe: 'body',
        responseType: 'json',
      }
    );
  }
}
