import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuerySpecsComponent } from './query-specs.component';

describe('QuerySpecsComponent', () => {
  let component: QuerySpecsComponent;
  let fixture: ComponentFixture<QuerySpecsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuerySpecsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuerySpecsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
