import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewmedicineComponent } from './viewmedicine.component';

describe('ViewmedicineComponent', () => {
  let component: ViewmedicineComponent;
  let fixture: ComponentFixture<ViewmedicineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewmedicineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewmedicineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});