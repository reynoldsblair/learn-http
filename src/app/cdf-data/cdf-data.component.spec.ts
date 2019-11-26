import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CdfDataComponent } from './cdf-data.component';

describe('CdfDataComponent', () => {
  let component: CdfDataComponent;
  let fixture: ComponentFixture<CdfDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CdfDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CdfDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
