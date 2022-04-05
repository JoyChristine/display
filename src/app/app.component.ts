import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showMsg = false;
 
  logs: Array<any> = [];
  onToggle() {
    this.showMsg = !this.showMsg;
    
    this.logs.push(this.logs.length +1);
  }

}
