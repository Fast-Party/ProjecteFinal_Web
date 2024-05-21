import { Component } from '@angular/core';

@Component({
  selector: 'app-global-footer',
  standalone: true,
  imports: [],
  templateUrl: './global-footer.component.html',
  styleUrl: './global-footer.component.scss'
})
export class GlobalFooterComponent {
  actualYear = new Date().getFullYear();
}
