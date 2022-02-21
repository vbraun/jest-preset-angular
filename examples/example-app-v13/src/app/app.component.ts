import { Component } from '@angular/core';
import { AddEvent } from '@progress/kendo-angular-grid';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
    
    onAdd(event: AddEvent): void {
    }
}
