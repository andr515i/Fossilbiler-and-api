import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FossilCarsComponent } from "./fossil-cars/fossil-cars.component";
import { ShowFossilCarsComponent } from './show-fossil-cars/show-fossil-cars.component';
import { AdminCarsComponent } from "./admin-cars/admin-cars.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { NotloggedinComponent } from "./notloggedin/notloggedin.component";
import { IsLoggedInComponent } from "./is-logged-in/is-logged-in.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, FossilCarsComponent, ShowFossilCarsComponent, AdminCarsComponent, NavbarComponent, NotloggedinComponent, IsLoggedInComponent]
})
export class AppComponent {
  title = 'fossilbiler';
}
