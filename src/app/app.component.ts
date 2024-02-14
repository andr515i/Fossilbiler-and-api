import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FossilCarsComponent } from "./fossil-cars/fossil-cars.component";
import { ShowFossilCarsComponent } from './show-fossil-cars/show-fossil-cars.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, FossilCarsComponent, ShowFossilCarsComponent]
})
export class AppComponent {
  title = 'fossilbiler';
}
