import { Routes } from '@angular/router';
import { AdminCarsComponent } from './admin-cars/admin-cars.component';
import { NotloggedinComponent } from './notloggedin/notloggedin.component';
import { adminGuard } from './guards/auth-login.guard';
import { IsLoggedInComponent } from './is-logged-in/is-logged-in.component';


export const routes: Routes = [
    {path: 'admin', component: IsLoggedInComponent},
    {path: 'home', component: NotloggedinComponent, pathMatch: 'full'},
    {path: '',  redirectTo: 'home', pathMatch: 'full'},
    { path: 'admin', component: IsLoggedInComponent },
    { path: 'home', component: NotloggedinComponent, pathMatch: 'full' },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {
      path: 'fossilAdmin',
      component: AdminCarsComponent,
      pathMatch: 'full',
      canActivate: [adminGuard("admin")], // Use the Guard class here
    },
    
];
