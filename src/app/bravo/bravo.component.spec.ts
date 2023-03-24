import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BravoComponent } from './bravo.component';

describe('BravoComponent', () => {
  let component: BravoComponent;
  let fixture: ComponentFixture<BravoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BravoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BravoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
