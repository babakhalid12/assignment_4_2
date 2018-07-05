import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonreadingComponent } from './jsonreading.component';

describe('JsonreadingComponent', () => {
  let component: JsonreadingComponent;
  let fixture: ComponentFixture<JsonreadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsonreadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsonreadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
