import { Component } from '@angular/core';

@Component({
  selector: 'app-audio-player',
  template: `
    <button (click)="playAudio()">Reproducir</button>
  `,
})
export class AudioPlayerComponent {
  audio: HTMLAudioElement;

  constructor() {
    this.audio = new Audio('./assets/a.mp3');
  }

  playAudio() {
    this.audio.play();
  }
}