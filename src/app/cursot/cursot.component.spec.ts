import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursotComponent } from './cursot.component';

describe('CursotComponent', () => {
  let component: CursotComponent;
  let fixture: ComponentFixture<CursotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursotComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CursotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
