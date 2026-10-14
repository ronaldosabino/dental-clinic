import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-not-found',
  styleUrl: './not-found.css',
  templateUrl: './not-found.html',
})
export class NotFound {
  readonly whatsapp = '5581XXXXXXXXX';

  get linkWhatsapp(): string {
    const mensagem = encodeURIComponent('Olá! Preciso de ajuda para encontrar uma página no site.');

    return `https://wa.me/${this.whatsapp}?text=${mensagem}`;
  }
}
