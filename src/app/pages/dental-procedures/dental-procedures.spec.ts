import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DentalProcedures } from './dental-procedures';

describe('DentalProcedures', () => {
  let component: DentalProcedures;
  let fixture: ComponentFixture<DentalProcedures>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DentalProcedures],
    }).compileComponents();

    fixture = TestBed.createComponent(DentalProcedures);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
