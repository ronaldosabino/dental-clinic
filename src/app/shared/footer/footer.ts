import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-footer',
  styleUrl: './footer.css',
  templateUrl: './footer.html',
})
export class Footer {
  readonly anoAtual = new Date().getFullYear();

  readonly nomeProfissional = 'Dra. Alanda Rayssa';

  readonly cro = 'CRO-PE 22440';

  readonly whatsapp = '5581987436309';

  readonly telefoneExibicao = '(81) 9 8743-6309';

  readonly email = 'contato@exemplo.com.br';

  readonly endereco = '[Endereço do consultório]';

  readonly cidade = 'Recife - PE';

  readonly instagramUrl = 'https://www.instagram.com/dra.alandabezerra/';

  get linkWhatsapp(): string {
    const mensagem = encodeURIComponent(
      'Olá! Gostaria de obter informações sobre o atendimento odontológico.',
    );

    return `https://wa.me/${this.whatsapp}?text=${mensagem}`;
  }
}
