import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class Api {

    constructor(private http: HttpClient) {}

    baseUrl = 'http://localhost:3000'

    // Create a profile - Pass the profile data as the second argument to POST method
    createProfile(profileData: { name: string, description: string }) {
        return this.http.post<any>(`${this.baseUrl}/profiles`, profileData);
    }

    // Get all profiles
    getProfiles() {
        return this.http.get<any[]>(`${this.baseUrl}/profiles`);
    }

    // Update a profile
    updateProfile(id: string, updateData: {name: string, description: string }) {
        return this.http.put<any>(`${this.baseUrl}/profiles/${id}`, updateData);
    }

    // Delete a profile
    deleteProfile(id: string) {
        return this.http.delete<any>(`${this.baseUrl}/profiles/${id}`);
    }
}
