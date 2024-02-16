import { DataServiceService } from '../service/data-service.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule, NgFor, NgStyle } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon'
import { ICarData } from '../interface/icar-data';
import { MatDialog } from '@angular/material/dialog';
import { EditCarComponent } from '../dialogue/edit-car/edit-car.component';
import { MatSort, MatSortModule, Sort } from '@angular/material/sort';

@Component({
  selector: 'app-show-fossil-cars',
  standalone: true,
  imports: [NgFor, NgStyle, CommonModule, MatSlideToggleModule, MatTableModule, MatIconModule, MatSortModule],
  templateUrl: './show-fossil-cars.component.html',
  styleUrl: './show-fossil-cars.component.css'
})
export class ShowFossilCarsComponent implements OnInit {
  displayedColumns: string[] = ['rank', 'model', 'quantity', 'changeQuantityPercent', 'edit', 'delete'];
  constructor(public dataService: DataServiceService, public dialog: MatDialog) { }
  @ViewChild(MatSort, { static: true }) sort!: MatSort;

  ngAfterViewInit() {
    this.dataService.updateGUI();
    this.dataService.carDataSource.sort = this.sort;
  }


  ngOnInit(): void {
    this.dataService.updateGUI();
  }



  deleteCar(index: number) {
    this.dataService.deleteCar(index).subscribe(() => {
      this.dataService.updateGUI();
    });
  }

  editCarDialog(carData: ICarData, currentIndex: number) {
    console.log(`${carData.rank} and ${carData.model} `);

    const dialogRef = this.dialog.open(EditCarComponent, {
      data: {
        index: currentIndex,
        carData: carData
      },
    });

    dialogRef.afterOpened().subscribe(() => {
      console.log(`data inside: ${dialogRef.componentInstance.data.carData.model}`);
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log('The dialog was closed');
    });
  }

}
