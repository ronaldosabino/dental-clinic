import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  menuAberto = false;

  readonly nomeProfissional = 'Dra. Alanda Rayssa';

  // Informe o número real somente com dígitos.
  readonly whatsapp = '5581XXXXXXXXX';

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
