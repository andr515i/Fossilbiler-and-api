import { Component, EventEmitter, Output } from '@angular/core';
import { DataServiceService } from '../service/data-service.service';
import { ICarData } from '../interface/icar-data';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-fossil-cars',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, CommonModule],
  templateUrl: './fossil-cars.component.html',
  styleUrl: './fossil-cars.component.css'
})
export class FossilCarsComponent {
  carForm: FormGroup;

  constructor(private dataservice: DataServiceService, private fb: FormBuilder) {
    this.carForm = this.fb.group({
      rank: [null, [Validators.required, Validators.min(1)]],
      model: ['', [Validators.required, Validators.pattern(/^[A-Z]/)]],
      quantity: [null, [Validators.required, Validators.pattern(/^-?(?!0$)\d+$/)]],
      changeQuantityPercent: [null, [Validators.required]]
    })
  }
  // rank: number | null = null;
  // quantity: number | string | null = null;
  // model: string | null = null;
  // changeQuantityPercent: number | string | null = null;


  onSubmit() {
    if (this.carForm.valid) {
      const formData = this.carForm.value;
      this.dataservice.createCar(formData).subscribe(
        (data) => {
          this.dataservice.updateGUI();    
        }
      );
      this.carForm.setValue({
        rank: null,
        model: null,
        quantity: null,
        changeQuantityPercent: null
      });

      
      
    }
    else {
      alert("form is invalid");
    }
  }



  getErrorsMessage() {
    if (this.carForm.get('model')?.hasError('pattern')) {
      return "Must start with a CAPITALIZED Letter.";
    }
    return this.carForm.get('model')?.hasError('required') ? "you must enter a value." : "";
  }

}