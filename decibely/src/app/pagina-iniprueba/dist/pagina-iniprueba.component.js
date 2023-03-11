"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaginaInipruebaComponent = void 0;
const core_1 = require("@angular/core");
let PaginaInipruebaComponent = class PaginaInipruebaComponent {
    constructor() {
        this.title = "Mi reproductor de música";
        this.songs = ["Canción 1", "Canción 2", "Canción 3", "Canción 4", "Canción 5"];
        this.currentSong = "Canción 1";
        this.artist = "Artista de la canción";
        this.imageSrc = "imagen-cancion.jpg";
        this.currentTime = 0;
        this.duration = 180;
    }
    ngOnInit() {
    }
    changeSong(song) {
        this.currentSong = song;
    }
    updateTime(event) {
        this.currentTime = event.target.currentTime;
    }
    updateDuration(event) {
        this.duration = event.target.duration;
    }
    getCurrentTime() {
        const minutes = Math.floor(this.currentTime / 60);
        const seconds = Math.floor(this.currentTime % 60);
        return `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
    }
    getDuration() {
        const minutes = Math.floor(this.duration / 60);
        const seconds = Math.floor(this.duration % 60);
        return `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
    }
};
PaginaInipruebaComponent = __decorate([
    (0, core_1.Component)({
        selector: 'app-pagina-iniprueba',
        templateUrl: './pagina-iniprueba.component.html',
        styleUrls: ['./pagina-iniprueba.component.css']
    })
], PaginaInipruebaComponent);
exports.PaginaInipruebaComponent = PaginaInipruebaComponent;
