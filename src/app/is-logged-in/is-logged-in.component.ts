import { Component } from '@angular/core';
import { FossilCarsComponent } from "../fossil-cars-create-form/fossil-cars-create-form.component";
import { ShowFossilCarsComponent } from "../fossil-cars-table/show-fossil-cars.component";

@Component({
    selector: 'app-is-logged-in',
    standalone: true,
    templateUrl: './is-logged-in.component.html',
    styleUrl: './is-logged-in.component.css',
    imports: [FossilCarsComponent, ShowFossilCarsComponent]
})
export class IsLoggedInComponent {

}
