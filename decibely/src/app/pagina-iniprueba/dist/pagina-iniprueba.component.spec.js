"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const pagina_iniprueba_component_1 = require("./pagina-iniprueba.component");
describe('PaginaInipruebaComponent', () => {
    let component;
    let fixture;
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield testing_1.TestBed.configureTestingModule({
            declarations: [pagina_iniprueba_component_1.PaginaInipruebaComponent]
        })
            .compileComponents();
        fixture = testing_1.TestBed.createComponent(pagina_iniprueba_component_1.PaginaInipruebaComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
// Obtener elementos del DOM
const progressBar = document.querySelector('.progress-bar');
const progress = document.querySelector('.progress');
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
const playButton = document.querySelector('#play-button');
playButton.addEventListener('click', () => {
    isPlaying = !isPlaying;
    if (isPlaying) {
        playButton.innerText = 'Pausar';
    }
    else {
        playButton.innerText = 'Reproducir';
    }
});
// Evento para reiniciar la reproducción
const restartButton = document.querySelector('#restart-button');
restartButton.addEventListener('click', () => {
    isPlaying = false;
    progressWidth = 0;
    progress.style.width = `${progressWidth}%`;
    playButton.innerText = 'Reproducir';
});
