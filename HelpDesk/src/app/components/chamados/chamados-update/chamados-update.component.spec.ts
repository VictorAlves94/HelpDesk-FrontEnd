import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChamadosUpdateComponent } from './chamados-update.component';

describe('ChamadosUpdateComponent', () => {
  let component: ChamadosUpdateComponent;
  let fixture: ComponentFixture<ChamadosUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChamadosUpdateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChamadosUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
