import { Component, computed, signal } from '@angular/core';

@Component({
    selector: 'app-profile',
    imports: [],
    templateUrl: './profile.html',
    styleUrl: './profile.css',
})
export class Profile { 
    constructor() {
        // Signal on string/char

        // Create a signal with 'signal' function
        const firstName = signal('Morgan');

        // Read a signal value by calling it - signals are functions
        console.log(firstName()); // Morgan

        // Change the value of this signal by calling its 'set' method with a new value
        firstName.set('Jaime');
        console.log(firstName()); // Jaime

        // You can also use the 'update method to change the value based on the previous value
        firstName.update((name) => name.toUpperCase());
        console.log(firstName()); // JAIME

        const firstNameLowerCase = computed(() => firstName().toLowerCase());
        console.log(firstNameLowerCase()); // jaime

        console.log(firstName()); // JAIME

        firstName.set('JeKeN');
        console.log(firstNameLowerCase()); // jeken

        // ============================================================

        // Signal on count/numbers

        // Create a signal with an initial value
        const count = signal(0);

        // Read the value (call it like a function)
        console.log(count()); // 0

        // Overwrite the value directly
        count.set(5);
        console.log(count()); // 5

        // Change the value based on what it currently is
        count.update(currentValue => currentValue + 1);
        console.log(count()); // 6

        // ============================================================

        // Total Price Calculation

        // Writable signals
        const price = signal(200);
        const quantity = signal(4);

        // Computed signal
        const totalPrice = computed(() => price() * quantity());
        console.log(totalPrice()); // 800

        // Change quantity
        quantity.set(3);

        // Here, totalPrice updates automatically
        console.log(totalPrice()); // 600
    }

    // ============================================================

    // Real-world use
    firstName = signal('Jeken');
    lastName = signal('Maharjan');
    
    // Computed value combine firstname and lastname
    fullName = computed(() => `${this.firstName()} ${this.lastName()}`);

    updateFirstName() {
        // List of names
        const names = ['Gopal', 'Bob', 'Alice', 'David', 'Site', 'Hari'];

        // Pick a random index from the array
        const randomIndex = Math.floor(Math.random() * names.length);
        const selectedName = names[randomIndex];

        // Set the signal to the signal randomly chosen name
        this.firstName.set(selectedName); // Updates fullName automatically in the template
    }

    updateLastName() {
        // List of castes
        const caste = ['Maharjan', 'Rai', 'Shakya', 'Dangol', 'Sthapit', 'Gurung'];

        // Pick a random index from the array
        const randomIndex = Math.floor(Math.random() * caste.length);
        const selectedName = caste[randomIndex];

        // Set the signal to the signal randomly chosen name
        this.lastName.set(selectedName); // Updates fullName automatically in the template
    }

    updateFullName() {
        // List of names & castes
        const names = ['Gopal', 'Bob', 'Alice', 'David', 'Site', 'Hari'];
        const caste = ['Maharjan', 'Rai', 'Shakya', 'Dangol', 'Sthapit', 'Gurung'];

        // Pick a random index from the array
        const nameRandomIndex = Math.floor(Math.random() * names.length);
        const casteRandomIndex = Math.floor(Math.random() * caste.length);
        const selectedName = names[nameRandomIndex];
        const selectedCaste = names[casteRandomIndex];

        // Set the signal to the signal randomly chosen name
        this.firstName.set(selectedName);
        this.lastName.set(selectedCaste);
    }
}
