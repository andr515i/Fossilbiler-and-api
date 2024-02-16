import { Component } from '@angular/core';
import { FossilCarsComponent } from "../fossil-cars/fossil-cars.component";
import { ShowFossilCarsComponent } from "../show-fossil-cars/show-fossil-cars.component";

@Component({
    selector: 'app-is-logged-in',
    standalone: true,
    templateUrl: './is-logged-in.component.html',
    styleUrl: './is-logged-in.component.css',
    imports: [FossilCarsComponent, ShowFossilCarsComponent]
})
export class IsLoggedInComponent {

}
