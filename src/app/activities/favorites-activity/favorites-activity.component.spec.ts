import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritesActivityComponent } from './favorites-activity.component';

describe('FavoritesActivityComponent', () => {
  let component: FavoritesActivityComponent;
  let fixture: ComponentFixture<FavoritesActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoritesActivityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavoritesActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
