import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogRef, MatDialogTitle } from '@angular/material/dialog'
import { DataServiceService } from '../../service/data-service.service';
import { FormBuilder, FormGroup, FormsModule, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ICarData } from '../../interface/icar-data';
import { ICarEditData } from '../../interface/icar-edit-data';
import { CommonModule, NgFor, NgStyle } from '@angular/common';


@Component({
  selector: 'app-edit-car',
  standalone: true,
  imports: [MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    ReactiveFormsModule,
    CommonModule],
  templateUrl: './edit-car.component.html',
  styleUrl: './edit-car.component.css'
})
export class EditCarComponent {

  carForm: FormGroup;

  constructor(private fb: FormBuilder, @Inject(MAT_DIALOG_DATA) public data: ICarEditData, public dialogRef: MatDialogRef<EditCarComponent>, public dataService: DataServiceService) {
    this.carForm = this.fb.group({
      rank: [data.carData?.rank, [Validators.required, Validators.min(1)]],
      model: [data.carData?.model, [Validators.required, Validators.pattern(/^[A-Z]/)]],
      quantity: [data.carData?.quantity, [Validators.required, Validators.pattern(/^-?(?!0$)\d+$/)]],
      changeQuantityPercent: [data.carData?.changeQuantityPercent, [Validators.required]]
    });
  }



  closeDialog(save: number): void {
    //0: No change Response
    //1: Good response
    //2: Error response
    this.dialogRef.close(save);
  }

  editCar() {
    if (this.carForm.valid) {
      const formData = this.carForm.value;
      this.dataService.editCar(formData, this.data.index).subscribe(() => {
        this.dataService.updateGUI();
        this.dialogRef.close(true);
      });
    } else {
      // Handle invalid form
    }
  }

  getCar(index: number) {
    this.dataService.getCar(index);
  }

  getErrorsMessage() {
    if (this.carForm.get('model')?.hasError('pattern')) {
      return "Must start with a CAPITALIZED Letter.";
    }
    return this.carForm.get('model')?.hasError('required') ? "you must enter a value." : "";
  }
}
