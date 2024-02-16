import { Component } from '@angular/core';
import { ShowFossilCarsComponent } from "../fossil-cars-table/show-fossil-cars.component";
import { FossilCarsComponent } from "../fossil-cars-create-form/fossil-cars-create-form.component";
import { AdminCarsComponent } from "../admin-car-site/admin-cars.component";

@Component({
    selector: 'app-notloggedin',
    standalone: true,
    templateUrl: './notloggedin.component.html',
    styleUrl: './notloggedin.component.css',
    imports: [ShowFossilCarsComponent, FossilCarsComponent, AdminCarsComponent]
})
export class NotloggedinComponent {

}
