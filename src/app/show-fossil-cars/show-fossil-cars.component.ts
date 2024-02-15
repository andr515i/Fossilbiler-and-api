import { DataServiceService } from '../service/data-service.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule, NgFor, NgStyle } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatIcon, MatIconModule } from '@angular/material/icon'
import { ICarData } from '../interface/icar-data';
import { MatDialog } from '@angular/material/dialog';
import { EditCarComponent } from '../dialogue/edit-car/edit-car.component';
import { LiveAnnouncer } from '@angular/cdk/a11y';
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

  getCarData() {
    this.dataService.getCarData().subscribe((data: ICarData[]) => {
      this.dataService.carDataSource.data = data;
    });
  }

  deleteCar(index: number) {
    this.dataService.deleteCar(index).subscribe(() => {
      this.getCarData();
    });
  }

  index: number | null = null;

  carEditData: ICarData | null = null;

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
