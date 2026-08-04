import horasExtras from "@/assets/artigo-horas-extras.jpg";
import rescisao from "@/assets/artigo-rescisao.jpg";
import gestante from "@/assets/artigo-gestante.jpg";

export type Secao = { id: string; titulo: string; paragrafos: string[]; citacao?: string };

export type Artigo = {
  slug: string;
  titulo: string;
  resumo: string;
  categoria: string;
  data: string; // ISO
  dataLabel: string;
  leitura: number; // minutos
  imagem: string;
  secoes: Secao[];
};

export const categorias = [
  "Todos",
  "Direito do Trabalho",
  "Empregado",
  "Empregador",
  "Verbas Trabalhistas",
  "Rescisão",
  "Horas Extras",
  "Assédio",
  "Acidentes",
];

export const artigos: Artigo[] = [
  {
    slug: "o-que-sao-horas-extras",
    titulo: "O que são horas extras e quando o trabalhador tem direito",
    resumo:
      "Entenda como a jornada de trabalho é contada, quando a hora extra é devida e quais são os adicionais previstos na legislação trabalhista.",
    categoria: "Horas Extras",
    data: "2026-06-12",
    dataLabel: "12 de junho de 2026",
    leitura: 6,
    imagem: horasExtras,
    secoes: [
      {
        id: "conceito",
        titulo: "O conceito de hora extra",
        paragrafos: [
          "Hora extra é todo tempo trabalhado além da jornada contratada. Na maioria dos contratos, a jornada padrão é de 8 horas diárias e 44 horas semanais, conforme a Constituição Federal.",
          "Sempre que o empregado permanece à disposição do empregador além desse limite, surge o direito ao pagamento do período excedente com o adicional legal.",
        ],
        citacao:
          "O tempo à disposição do empregador integra a jornada, ainda que o trabalhador não esteja executando tarefas.",
      },
      {
        id: "adicional",
        titulo: "Qual é o valor do adicional",
        paragrafos: [
          "O adicional mínimo é de 50% sobre o valor da hora normal. Convenções e acordos coletivos podem prever percentuais superiores, sendo comum encontrar 60%, 70% ou 100% em determinadas categorias.",
          "Nos domingos e feriados sem folga compensatória, o pagamento costuma ser em dobro.",
        ],
      },
      {
        id: "provas",
        titulo: "Como provar as horas extras",
        paragrafos: [
          "Os cartões de ponto são a principal prova. Registros informais, mensagens, e-mails, escalas e testemunhas também podem sustentar o pedido.",
          "Quando a empresa possui mais de 20 empregados e não apresenta os controles de jornada, presume-se verdadeira a jornada informada pelo trabalhador.",
        ],
      },
      {
        id: "prazo",
        titulo: "Prazo para cobrar",
        paragrafos: [
          "O trabalhador pode cobrar os últimos cinco anos de horas extras, contados do ajuizamento da ação, com limite de dois anos após o fim do contrato.",
        ],
      },
    ],
  },
  {
    slug: "como-funciona-a-rescisao",
    titulo: "Como funciona a rescisão de contrato de trabalho",
    resumo:
      "Quais são as modalidades de rescisão, as verbas devidas em cada uma delas e os prazos que empregado e empresa precisam cumprir.",
    categoria: "Rescisão",
    data: "2026-05-28",
    dataLabel: "28 de maio de 2026",
    leitura: 7,
    imagem: rescisao,
    secoes: [
      {
        id: "modalidades",
        titulo: "Modalidades de rescisão",
        paragrafos: [
          "O contrato pode terminar por dispensa sem justa causa, dispensa por justa causa, pedido de demissão, rescisão indireta, acordo entre as partes ou término do prazo determinado.",
          "Cada modalidade gera um conjunto diferente de verbas, por isso a classificação correta é decisiva para o valor final.",
        ],
      },
      {
        id: "verbas",
        titulo: "Verbas rescisórias mais comuns",
        paragrafos: [
          "Saldo de salário, aviso prévio, férias vencidas e proporcionais com um terço, décimo terceiro proporcional, FGTS e, quando cabível, a multa de 40%.",
          "Na dispensa sem justa causa também há a liberação do FGTS e a habilitação ao seguro-desemprego.",
        ],
        citacao:
          "Conferir o termo de rescisão antes de assinar evita a perda de valores que dificilmente serão recuperados sem ação judicial.",
      },
      {
        id: "prazos",
        titulo: "Prazos de pagamento",
        paragrafos: [
          "O pagamento deve ocorrer em até dez dias corridos contados do término do contrato. O atraso gera multa equivalente a um salário do empregado.",
        ],
      },
      {
        id: "indireta",
        titulo: "Rescisão indireta",
        paragrafos: [
          "Quando a empresa comete falta grave — atraso reiterado de salários, ausência de depósitos do FGTS, rigor excessivo ou assédio —, o empregado pode pedir a rescisão indireta e receber como se tivesse sido dispensado sem justa causa.",
        ],
      },
    ],
  },
  {
    slug: "estabilidade-da-gestante",
    titulo: "Estabilidade da gestante: o que a lei garante",
    resumo:
      "A trabalhadora grávida tem proteção contra a dispensa desde a confirmação da gravidez até cinco meses após o parto. Veja como esse direito funciona na prática.",
    categoria: "Empregado",
    data: "2026-05-05",
    dataLabel: "5 de maio de 2026",
    leitura: 5,
    imagem: gestante,
    secoes: [
      {
        id: "prazo-estabilidade",
        titulo: "Período de proteção",
        paragrafos: [
          "A estabilidade vai da confirmação da gravidez até cinco meses após o parto, conforme o Ato das Disposições Constitucionais Transitórias.",
          "O desconhecimento da gravidez pela empresa, ou mesmo pela própria trabalhadora no momento da dispensa, não afasta o direito.",
        ],
        citacao:
          "A garantia protege o emprego da gestante independentemente de comunicação prévia ao empregador.",
      },
      {
        id: "contratos",
        titulo: "Contrato de experiência e temporário",
        paragrafos: [
          "A jurisprudência reconhece a estabilidade também nos contratos por prazo determinado, incluindo o contrato de experiência.",
        ],
      },
      {
        id: "dispensa",
        titulo: "O que fazer em caso de dispensa",
        paragrafos: [
          "A trabalhadora pode pedir a reintegração ao emprego ou a indenização correspondente aos salários e demais direitos do período de estabilidade.",
          "Reunir exames, atestados e o termo de rescisão facilita a análise do caso e a definição da melhor estratégia.",
        ],
      },
    ],
  },
];

export const getArtigo = (slug: string) => artigos.find((a) => a.slug === slug);
