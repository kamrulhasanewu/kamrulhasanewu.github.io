import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TrainnigComponent } from './trainnig.component';

describe('TrainnigComponent', () => {
  let component: TrainnigComponent;
  let fixture: ComponentFixture<TrainnigComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainnigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainnigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
