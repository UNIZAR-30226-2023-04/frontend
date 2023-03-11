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

// Obtener elementos del DOM
const progressBar = document.querySelector('.progress-bar') as HTMLDivElement;
const progress = document.querySelector('.progress') as HTMLDivElement;

// Definir variables
let isPlaying = false;
let progressWidth = 0;

// Función para actualizar la barra de progreso
function updateProgress() {
  if (isPlaying && progressWidth < 100) {
    progressWidth += 1;
    progress.style.width = `${progressWidth}%`;
  }
}

// Actualizar la barra de progreso cada segundo
setInterval(updateProgress, 1000);

// Evento para iniciar o pausar la reproducción
const playButton = document.querySelector('#play-button') as HTMLButtonElement;
playButton.addEventListener('click', () => {
  isPlaying = !isPlaying;
  if (isPlaying) {
    playButton.innerText = 'Pausar';
  } else {
    playButton.innerText = 'Reproducir';
  }
});

// Evento para reiniciar la reproducción
const restartButton = document.querySelector('#restart-button') as HTMLButtonElement;
restartButton.addEventListener('click', () => {
  isPlaying = false;
  progressWidth = 0;
  progress.style.width = `${progressWidth}%`;
  playButton.innerText = 'Reproducir';
});
