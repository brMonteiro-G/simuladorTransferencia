import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @Output() aoTransferir = new EventEmitter<any>();

  valor: number
  contaDestino: number

  constructor() { }

  ngOnInit(): void {
  }

  transferir() {
    console.log("Transferencia realizada com sucesso")
    const valorEmitir = {valor:this.valor, destino: this.contaDestino}
    this.aoTransferir.emit(valorEmitir)
    this.limparCampos()
  }

  limparCampos(){
    this.contaDestino = 0
    this.valor = 0 
  }

}
