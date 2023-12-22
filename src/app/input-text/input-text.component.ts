import { Component } from '@angular/core';

@Component({
  selector: 'app-input-text',
  standalone: true,
  imports: [],
  templateUrl: './input-text.component.html',
  styleUrl: './input-text.component.css',
})
export class InputTextComponent {
  name = '';

  changName(e: any) {
    this.name = e.target.value;
  }

  resetName() {
    this.name = '';
  }
}
