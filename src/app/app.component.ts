import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'projetoAngular';

  transferencia: any

  transferir($event){
    this.transferencia = $event
    console.log(this.transferencia)
  }


}
