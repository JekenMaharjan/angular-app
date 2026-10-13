import { Routes } from '@angular/router';
import { Profile } from './profile/profile';
import { User } from './user/user';
import { Test } from './test/test';

export const routes: Routes = [
    { path:'user', component: User },
    { path:'profile', component: Profile },
    { path:'test', component: Test },
];
