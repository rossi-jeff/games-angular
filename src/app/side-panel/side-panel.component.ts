import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-side-panel',
  templateUrl: './side-panel.component.html',
  styleUrls: ['./side-panel.component.css'],
})
export class SidePanelComponent {
  @Output() toggle = new EventEmitter();

  closeClicked = () => {
    this.toggle.emit()
  };
}
