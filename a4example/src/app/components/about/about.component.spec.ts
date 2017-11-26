import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AoutComponent } from './aout.component';

describe('AoutComponent', () => {
  let component: AoutComponent;
  let fixture: ComponentFixture<AoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
