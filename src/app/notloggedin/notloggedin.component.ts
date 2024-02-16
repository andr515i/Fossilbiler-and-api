import { Component } from '@angular/core';
import { ShowFossilCarsComponent } from "../show-fossil-cars/show-fossil-cars.component";
import { FossilCarsComponent } from "../fossil-cars/fossil-cars.component";
import { AdminCarsComponent } from "../admin-cars/admin-cars.component";

@Component({
    selector: 'app-notloggedin',
    standalone: true,
    templateUrl: './notloggedin.component.html',
    styleUrl: './notloggedin.component.css',
    imports: [ShowFossilCarsComponent, FossilCarsComponent, AdminCarsComponent]
})
export class NotloggedinComponent {

}
