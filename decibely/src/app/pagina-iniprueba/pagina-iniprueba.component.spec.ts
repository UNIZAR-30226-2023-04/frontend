import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaInipruebaComponent } from './pagina-iniprueba.component';

describe('PaginaInipruebaComponent', () => {
  let component: PaginaInipruebaComponent;
  let fixture: ComponentFixture<PaginaInipruebaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaInipruebaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaInipruebaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
