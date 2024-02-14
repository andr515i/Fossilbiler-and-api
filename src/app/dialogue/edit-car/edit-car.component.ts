import { Component, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog'
import { DataServiceService } from '../../service/data-service.service';


@Component({
  selector: 'app-edit-car',
  standalone: true,
  imports: [],
  templateUrl: './edit-car.component.html',
  styleUrl: './edit-car.component.css'
})
export class EditCarComponent {
constructor(
  @Inject(MAT_DIALOG_DATA) private data: any, private dialogRef: MatDialogRef<EditCarComponent>,
 public dataService: DataServiceService 
  ) 
  {
  this.getCar(this.data.index);
}
  closeDialog(save: number): void {
    //0: No change Response
    //1: Good response
    //2: Error response
    this.dialogRef.close(save);
  }

  editCar() {

  }

  getCar(index: number) {
    this.dataService.getCar(index);
  }

}
