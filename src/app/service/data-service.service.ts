import { Injectable } from '@angular/core';
import { ICarData } from '../interface/icar-data';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ICarEditData } from '../interface/icar-edit-data';
@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  private apiUrl: string = 'https://localhost:7215/api/Car';
  constructor(private httpClient: HttpClient) { }
  public carDataSource: ICarData[] = [];
  getCarData(): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}/GetCars`);
  }

  createCar(carData: ICarData): Observable<any> {
    return this.httpClient.post(`${this.apiUrl}/PostCars`, carData);
  }

  deleteCar(index: number): Observable<any> {
    
    const httpOptions = {
      body: {
        Index: index
      }
    };
    return this.httpClient.delete(`${this.apiUrl}/DeleteCar`, httpOptions);
  }

  request: ICarEditData | null = null
  editCar(row: ICarData, currentIndex:number): Observable<any> {
     this.request = {
      carData: row,
      index: currentIndex
     }
    return this.httpClient.put(`${this.apiUrl}/EditCar`, this.request)
  }

  updateGUI() {
    this.getCarData().subscribe((data: any) => {

      this.carDataSource = data;
    });
   }


   getCar(index: number): Observable<any>{
    const request = {Index: index}
    return this.httpClient.get(`${this.apiUrl}/GetCar${index}`);
   }

}
