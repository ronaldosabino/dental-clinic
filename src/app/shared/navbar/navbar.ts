import { Component, HostListener } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-navbar',
  styleUrl: './navbar.css',
  templateUrl: './navbar.html',
})
export class Navbar {
  menuAberto = false;

  readonly nomeProfissional = 'Dra. Alanda Rayssa';

  readonly whatsapp = '+55 81 8743-6309';

  readonly links = [
    { texto: 'Início', destino: '#inicio' },
    { texto: 'Procedimentos', destino: '#procedimentos' },
    { texto: 'Sobre', destino: '#sobre' },
    { texto: 'Depoimentos', destino: '#depoimentos' },
    { texto: 'Dúvidas', destino: '#duvidas' },
    { texto: 'Contato', destino: '#contato' },
  ];

  get linkWhatsapp(): string {
    const mensagem = encodeURIComponent('Olá! Gostaria de informações e de agendar uma consulta.');

    return `https://wa.me/${this.whatsapp}?text=${mensagem}`;
  }

  alternarMenu(): void {
    this.menuAberto = !this.menuAberto;
  }

  fecharMenu(): void {
    this.menuAberto = false;
  }

  @HostListener('document:keydown.escape')
  aoPressionarEscape(): void {
    this.fecharMenu();
  }
}
