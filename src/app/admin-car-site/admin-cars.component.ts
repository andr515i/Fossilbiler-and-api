import { Component } from '@angular/core';
import { DataServiceService } from '../service/data-service.service';
import { MatTableModule } from '@angular/material/table';
@Component({
  selector: 'app-admin-cars',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './admin-cars.component.html',
  styleUrl: './admin-cars.component.css'
})
export class AdminCarsComponent {
constructor (public dataService: DataServiceService) {}


displayedColumns: string[] = ['rank', 'model', 'quantity', 'changeQuantityPercent'];

ngOnInit(): void {
  this.dataService.updateGUI();
}
}
