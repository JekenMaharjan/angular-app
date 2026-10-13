import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class Api {

    constructor(private http: HttpClient) {}

    getProfiles() {
        return this.http.get<any[]>('http://localhost:3000/profiles');
    }
}
