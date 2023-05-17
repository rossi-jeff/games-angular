import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-guess-word-hint-list',
  templateUrl: './guess-word-hint-list.component.html',
  styleUrls: ['./guess-word-hint-list.component.css'],
})
export class GuessWordHintListComponent {
  @Input() hints!: string[];
}
