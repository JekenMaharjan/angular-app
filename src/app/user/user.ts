import { Component, signal } from '@angular/core';
import { form, FormField } from '@angular/forms/signals';
import { Api } from '../api';

// Define the TypeScript interface for data model
interface ProfileData {
    name: string;
    description: string;
}

@Component({
    selector: 'app-user',
    imports: [FormField],
    templateUrl: './user.html',
    styleUrl: './user.css',
})
export class User {
    // Track open/close state of modal popup using a signal
    isPopupOpen = signal(false);

    profiles = signal<any[]>([]);

    // Store the ID of the user currently being edited
    editingId = signal<string | null>(null);

    togglePopup(isOpen: boolean) {
        this.isPopupOpen.set(isOpen);
        if(!isOpen) {
            this.editingId.set(null);
            this.profileModel.set({ name: '', description: '' });
        }
    }

    // Pre-fill form and open modal with clicked user data
    startEdit(p: { id: string; name: string; description: string}) {
        this.editingId.set(p.id);
        this.profileModel.set({
            name: p.name,
            description: p.description
        });
        this.isPopupOpen.set(true);
    }

    constructor(private api: Api) {
        this.loadProfiles();
    }

    loadProfiles() {
        this.api.getProfiles().subscribe({
            next: (res) => {
                this.profiles.set(res);
                console.log('All user profile retrieved successfully.');
            },
            error: (err) => console.error('Error fetching profiles', err)
        })
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

        this.api.createProfile(formData).subscribe({
            next: (newProfile) => {
                this.loadProfiles();
                this.profileModel.set({ name: '', description: ''});
                console.log('User created successfully.');
            },
            error: (err) => console.error('Error saving profile', err)
        })
    }

    // Handle Delete Button Click
    onDelete(id: string) {
        this.api.deleteProfile(id).subscribe({
            next: () => {
                this.loadProfiles(); // Refresh list from backend
                console.log('User deleted successfully.');
            },
            error: (err) => console.log('Error deleting profile', err)
        });
    }

    // Handle Update Button Click (using current form value as the update payload)
    onUpdate(event: SubmitEvent) {
        event.preventDefault;
        const id = this.editingId();
        if (!id) return;

        const updatedData = this.profileModel();

        this.api.updateProfile(id, updatedData).subscribe({
            next: (res) => {
                console.log('Successfully updated:', res);
                this.loadProfiles(); // Refresh list from backend
                this.profileModel.set({ name: '', description: '' }); // Clear form
            },
            error: (err) => console.error('Error updating profile', err)
        });
    }
}
