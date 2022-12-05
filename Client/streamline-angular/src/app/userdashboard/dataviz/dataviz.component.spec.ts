import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatavizComponent } from './dataviz.component';

describe('DatavizComponent', () => {
  let component: DatavizComponent;
  let fixture: ComponentFixture<DatavizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatavizComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatavizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
