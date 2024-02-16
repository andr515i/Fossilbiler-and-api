import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FossilCarsComponent } from "./fossil-cars-create-form/fossil-cars-create-form.component";
import { ShowFossilCarsComponent } from './fossil-cars-table/show-fossil-cars.component';
import { AdminCarsComponent } from "./admin-car-site/admin-cars.component";
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
