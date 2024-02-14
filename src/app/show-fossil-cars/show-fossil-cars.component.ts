import { DataServiceService } from '../service/data-service.service';
import { Component, OnInit } from '@angular/core';
import { CommonModule, NgFor, NgStyle } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTableModule } from '@angular/material/table';
import { MatIcon, MatIconModule } from '@angular/material/icon'
import { ICarData } from '../interface/icar-data';

@Component({
  selector: 'app-show-fossil-cars',
  standalone: true,
  imports: [NgFor, NgStyle, CommonModule, MatSlideToggleModule, MatTableModule, MatIconModule],
  templateUrl: './show-fossil-cars.component.html',
  styleUrl: './show-fossil-cars.component.css'
})
export class ShowFossilCarsComponent implements OnInit {
  displayedColumns: string[] = ['rank', 'model', 'quantity', 'changeQuantityPercent', 'edit', 'delete'];
  constructor(public dataService: DataServiceService) { }

  

  ngOnInit(): void {
    this.dataService.updateGUI();
  }

  getCarData() {
    this.dataService.getCarData().subscribe((data: ICarData[]) => {
      this.dataService.carDataSource = data;
    });
  }

  deleteCar(index: number) {
    this.dataService.deleteCar(index).subscribe(() => {
      this.getCarData();
    });
  }



  editCarDialog() {
    
  }
}
