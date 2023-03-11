import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagina-iniprueba',
  templateUrl: './pagina-iniprueba.component.html',
  styleUrls: ['./pagina-iniprueba.component.css']
})
export class PaginaInipruebaComponent implements OnInit {
  title: string = "Mi reproductor de música";
  songs: string[] = ["Canción 1", "Canción 2", "Canción 3", "Canción 4", "Canción 5"];
  currentSong: string = "Canción 1";
  artist: string = "Artista de la canción";
  imageSrc: string = "imagen-cancion.jpg";
  currentTime: number = 0;
  duration: number = 180;

  constructor() { }

  ngOnInit(): void {
  }

  changeSong(song: string) {
    this.currentSong = song;
  }

  updateTime(event: any) {
    this.currentTime = event.target.currentTime;
  }

  updateDuration(event: any) {
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
}
