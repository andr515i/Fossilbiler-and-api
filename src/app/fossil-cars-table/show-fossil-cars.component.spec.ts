import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowFossilCarsComponent } from './show-fossil-cars.component';

describe('ShowFossilCarsComponent', () => {
  let component: ShowFossilCarsComponent;
  let fixture: ComponentFixture<ShowFossilCarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowFossilCarsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShowFossilCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
