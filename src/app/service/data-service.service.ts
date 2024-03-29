import { Injectable } from '@angular/core';
import { ICarData } from '../interface/icar-data';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ICarEditData } from '../interface/icar-edit-data';
import { MatTable, MatTableDataSource } from '@angular/material/table';
@Injectable({
  providedIn: 'root'
})
export class DataServiceService {


  private apiUrl: string = 'https://localhost:7215/api/Car';
  private apiLoginUrl: string = 'https://localhost:7215/api/Login'

  constructor(private httpClient: HttpClient) { }
  
  
  public carDataSource: MatTableDataSource<ICarData> = new MatTableDataSource<ICarData>;
  
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
  
  editCar(row: ICarData, currentIndex: number): Observable<any> {
    return this.httpClient.put(`${this.apiUrl}/EditCar/${currentIndex}`, row)
  }
  
  updateGUI() {
    this.getCarData().subscribe((data: any) => {
      this.carDataSource.data = data;
    });
  }
  
  
  getCar(index: number): Observable<any> {
    const request = { Index: index }
    return this.httpClient.get(`${this.apiUrl}/GetCar${index}`);
  }

}
