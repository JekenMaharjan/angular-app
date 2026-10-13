import { Component, signal } from '@angular/core';
import { form, FormField } from '@angular/forms/signals';
import { Highlight } from '../directives/highlight';
import { HoverEffect } from '../directives/hover-effect';
import { Api } from '../api';

// Define the TypeScript interface for data model
interface ProfileData {
    name: string;
    description: string;
}

@Component({
    selector: 'app-user',
    imports: [FormField, Highlight, HoverEffect],
    templateUrl: './user.html',
    styleUrl: './user.css',
})
export class User {
    profiles: any[] = [];

    constructor(private api: Api) {
        this.api.getProfiles().subscribe({
            next: (res) => {
                this.profiles = res;
            },
            error: (err) => {
                console.error('Error fetching profiles', err);
            },
        });
    }
    

    // Create the source-of-truth model signal
    profileModel = signal<ProfileData>({
        name: '',
        description: '',
    });

    // Create the FieldTree using form()
    profileForm = form(this.profileModel);

    handleSubmit(event: SubmitEvent) {
        event.preventDefault(); // Prevent standard browser reload

        // Read the raw data payload directly from the model signal for submission/logging
        const formData = this.profileModel();
        console.log('Submitted Payload: ', formData);
        console.log('Submitted Name: ', formData.name);
        console.log('Submitted Description: ', formData.description);
    }
}
