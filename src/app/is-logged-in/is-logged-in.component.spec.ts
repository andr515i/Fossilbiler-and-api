import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IsLoggedInComponent } from './is-logged-in.component';

describe('IsLoggedInComponent', () => {
  let component: IsLoggedInComponent;
  let fixture: ComponentFixture<IsLoggedInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IsLoggedInComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IsLoggedInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
