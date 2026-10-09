import { Component } from '@angular/core';

interface Procedimento {
  nome: string;
  descricao: string;
  numero: string;
}

interface Diferencial {
  titulo: string;
  descricao: string;
}

interface Depoimento {
  nome: string;
  texto: string;
}

interface Pergunta {
  pergunta: string;
  resposta: string;
}

@Component({
  imports: [],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {
  readonly nomeProfissional = 'Dra. Alanda Rayssa';

  // Substitua pelo WhatsApp profissional com código do país e DDD.
  readonly whatsapp = '5581987436309';

  get linkWhatsapp(): string {
    const mensagem = encodeURIComponent(
      'Olá! Gostaria de obter informações e agendar uma consulta.',
    );

    return `https://wa.me/${this.whatsapp}?text=${mensagem}`;
  }

  readonly procedimentos: Procedimento[] = [
    {
      numero: '01',
      nome: 'Implantes dentários',
      descricao: 'Alternativas para reabilitação oral, conforme avaliação individual.',
    },
    {
      numero: '02',
      nome: 'Ortodontia',
      descricao: 'Tratamentos para alinhamento dentário e correção da mordida.',
    },
    {
      numero: '03',
      nome: 'Clareamento dental',
      descricao: 'Cuidados para melhorar a tonalidade dos dentes com orientação profissional.',
    },
    {
      numero: '04',
      nome: 'Limpeza dental',
      descricao: 'Prevenção e cuidados importantes para a saúde bucal.',
    },
    {
      numero: '05',
      nome: 'Restaurações',
      descricao: 'Recuperação da estrutura e da função dos dentes comprometidos.',
    },
    {
      numero: '06',
      nome: 'Próteses dentárias',
      descricao: 'Soluções para reabilitação oral e recuperação da função mastigatória.',
    },
  ];

  readonly diferenciais: Diferencial[] = [
    {
      titulo: 'Atendimento humanizado',
      descricao: 'Atenção às suas dúvidas, necessidades e expectativas em cada consulta.',
    },
    {
      titulo: 'Planejamento individualizado',
      descricao: 'Orientações e possibilidades de tratamento de acordo com sua avaliação.',
    },
    {
      titulo: 'Transparência e confiança',
      descricao: 'Informações claras para que você entenda cada etapa do atendimento.',
    },
    {
      titulo: 'Cuidado contínuo',
      descricao: 'Acompanhamento e orientações adequados ao tratamento recomendado.',
    },
  ];

  readonly depoimentos: Depoimento[] = [
    {
      nome: 'Paciente',
      texto:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore.',
    },
    {
      nome: 'Paciente',
      texto:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore.',
    },
    {
      nome: 'Paciente',
      texto:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore.',
    },
  ];

  readonly perguntas: Pergunta[] = [
    {
      pergunta: 'Como posso agendar uma consulta?',
      resposta:
        'Clique em um dos botões de agendamento para entrar em contato pelo WhatsApp e consultar os horários disponíveis.',
    },
    {
      pergunta: 'Como saber qual tratamento é indicado para mim?',
      resposta:
        'É necessária uma avaliação odontológica individualizada para identificar suas necessidades e discutir as opções de tratamento.',
    },
    {
      pergunta: 'Qual é o valor de um tratamento odontológico?',
      resposta:
        'O valor depende do procedimento e das necessidades de cada paciente. As orientações são fornecidas após a avaliação pertinente.',
    },
    {
      pergunta: 'Onde fica o consultório?',
      resposta:
        'Entre em contato para consultar o endereço, a localização e as informações de atendimento.',
    },
  ];
}
