import horasExtras from "@/assets/artigo-horas-extras.jpg";
import rescisao from "@/assets/artigo-rescisao.jpg";
import gestante from "@/assets/artigo-gestante.jpg";
import insalubridade from "@/assets/artigo-insalubridade.jpg";
import reversaoJustaCausa from "@/assets/artigo-reversao-justa-causa.jpg";

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
  "Insalubridade",
  "Assédio",
  "Acidentes",
];

export const artigos: Artigo[] = [
  {
    slug: "reversao-da-justa-causa",
    titulo: "Reversão da justa causa: quando a demissão pode ser questionada na Justiça?",
    resumo:
      "Entenda em quais situações a justa causa pode ser questionada, quem deve provar a falta grave e quais direitos podem ser reconhecidos após a reversão.",
    categoria: "Rescisão",
    data: "2026-09-28",
    dataLabel: "28 de setembro de 2026",
    leitura: 12,
    imagem: reversaoJustaCausa,
    secoes: [
      {
        id: "introducao",
        titulo: "O que significa reverter uma justa causa?",
        paragrafos: [
          "A dispensa por justa causa é uma das medidas mais severas que podem ser aplicadas ao trabalhador. Ela decorre da atribuição de uma falta grave e restringe diversas verbas normalmente devidas na dispensa sem justa causa.",
          "A acusação feita pelo empregador, por si só, não significa que a penalidade esteja juridicamente comprovada. Na reclamação trabalhista, documentos, testemunhas e outros elementos de prova podem ser analisados pela Justiça do Trabalho.",
          "A reversão ocorre quando o trabalhador questiona a penalidade e busca demonstrar que a falta grave não foi comprovada, não tinha gravidade suficiente ou não preenchia os requisitos necessários. O resultado sempre depende das circunstâncias e das provas de cada caso.",
        ],
        citacao:
          "A existência de uma justa causa registrada não significa, por si só, que a penalidade será necessariamente mantida ou revertida.",
      },
      {
        id: "justa-causa",
        titulo: "O que é a justa causa?",
        paragrafos: [
          "A justa causa é uma modalidade de extinção do contrato de trabalho decorrente de falta grave praticada pelo empregado. As principais hipóteses estão no artigo 482 da CLT, como improbidade, mau procedimento, desídia, embriaguez em serviço, violação de segredo, indisciplina, insubordinação, abandono de emprego e atos lesivos à honra.",
          "Por representar a penalidade máxima dentro do poder disciplinar do empregador, ela não deve ser aplicada automaticamente ou com base em meras suspeitas. A discussão judicial costuma verificar se o fato realmente ocorreu e se possui gravidade suficiente para justificar a ruptura motivada.",
          "O princípio da continuidade da relação de emprego também é relevante. A Súmula 212 do Tribunal Superior do Trabalho reconhece presunção favorável à continuidade do vínculo em controvérsias sobre a ruptura contratual.",
        ],
      },
      {
        id: "quando-reverter",
        titulo: "Quando a justa causa pode ser revertida?",
        paragrafos: [
          "A penalidade pode ser questionada quando existirem dúvidas sobre a ocorrência da falta, sua autoria, gravidade ou o cumprimento dos requisitos necessários. Isso pode acontecer quando a empresa não prova adequadamente o fato, a punição é desproporcional, há demora injustificada para aplicá-la ou o trabalhador já foi punido pelo mesmo episódio.",
          "A análise considera elementos como previsão legal da conduta, autoria, dolo ou culpa quando pertinentes, nexo causal, proporcionalidade, imediatidade, ausência de perdão tácito e singularidade da punição.",
          "Nem toda justa causa será revertida. Se a empresa comprovar uma falta grave capaz de justificar a dispensa e demonstrar o atendimento dos requisitos legais, a penalidade poderá ser mantida.",
        ],
      },
      {
        id: "requisitos",
        titulo: "Quais requisitos devem ser observados?",
        paragrafos: [
          "A conduta precisa ser suficientemente grave e estar enquadrada em uma hipótese legal, especialmente entre aquelas previstas no artigo 482 da CLT. Não basta que o empregador considere uma atitude inconveniente.",
          "A penalidade também deve ser proporcional. Conforme as circunstâncias, uma advertência ou suspensão pode ser suficiente, enquanto a dispensa imediata pode ser considerada excessiva.",
          "Em regra, deve haver imediatidade entre a ciência da falta e a punição, ressalvado o tempo necessário para apurar os fatos. Uma demora sem justificativa pode indicar perdão tácito. Também não se admite dupla punição pelo mesmo fato, princípio conhecido como non bis in idem.",
          "Em faltas relacionadas à desídia, o histórico disciplinar e a gradação das penalidades podem ser relevantes. Autoria, nexo causal e as circunstâncias concretas também precisam ser avaliados.",
        ],
      },
      {
        id: "onus-da-prova",
        titulo: "Quem deve provar a falta grave?",
        paragrafos: [
          "Em regra, cabe ao empregador demonstrar os fatos que fundamentaram a dispensa motivada. Esse entendimento considera as regras dos artigos 818 da CLT e 373, inciso II, do CPC e o impacto da justa causa sobre os direitos do trabalhador.",
          "Isso não dispensa o trabalhador de produzir provas relacionadas às suas alegações. Dependendo da controvérsia, podem existir encargos probatórios sobre fatos específicos para ambas as partes.",
          "Na prática, a decisão será formada a partir do conjunto de documentos, depoimentos e demais provas apresentadas no processo.",
        ],
      },
      {
        id: "situacoes-comuns",
        titulo: "Situações que podem gerar discussão",
        paragrafos: [
          "Em casos de desídia, podem ser avaliadas a frequência das faltas, advertências, suspensões, histórico funcional e gradação das penalidades. Uma ocorrência isolada de menor gravidade pode suscitar discussão sobre proporcionalidade.",
          "No abandono de emprego, examinam-se tanto a ausência quanto a intenção de não retornar. A Súmula 32 do TST usa o período de 30 dias como referência para o elemento objetivo, sem afastar a análise da intenção do trabalhador.",
          "Acusações de improbidade exigem atenção especial à prova por sua gravidade. Em alegações de indisciplina ou insubordinação, é preciso verificar qual ordem foi dada, se era legítima, se foi descumprida e em quais circunstâncias.",
          "Faltas injustificadas, discussões no ambiente de trabalho, uso inadequado de equipamentos e alegações de mau procedimento também dependem do contexto, do histórico funcional e das provas disponíveis.",
        ],
      },
      {
        id: "provas",
        titulo: "Quais provas podem ajudar?",
        paragrafos: [
          "Advertências, suspensões, comunicações internas, avaliações funcionais, controles de jornada, documentos de ocorrência, e-mails, mensagens e registros corporativos podem ajudar a esclarecer o episódio.",
          "Testemunhas que presenciaram os fatos também podem contribuir. Documentos que demonstrem histórico funcional positivo, ausência de punições anteriores ou procedimentos da empresa incompatíveis com a versão apresentada podem ser relevantes.",
          "Toda prova deve ser analisada quanto à autenticidade, pertinência e forma de obtenção. Informações obtidas ilicitamente ou que violem a privacidade podem gerar questionamentos no processo.",
        ],
      },
      {
        id: "processo",
        titulo: "Como funciona o processo?",
        paragrafos: [
          "O trabalhador normalmente apresenta uma reclamação à Justiça do Trabalho, relatando os fatos e formulando os pedidos. Podem ser discutidas a inexistência ou insuficiência da prova, a desproporcionalidade, a falta de imediatidade e a dupla punição.",
          "A empresa apresenta sua defesa e as provas que sustentam a justa causa. Durante o processo, o juiz pode analisar documentos, mensagens, controles, advertências e depoimentos de testemunhas.",
          "Após a produção das provas, o juiz decide se a penalidade deve ser mantida ou afastada. A decisão pode ser objeto dos recursos previstos na legislação processual trabalhista.",
        ],
      },
      {
        id: "direitos",
        titulo: "Quais direitos podem ser reconhecidos após a reversão?",
        paragrafos: [
          "Se a justa causa for afastada e a ruptura reconhecida como dispensa sem justa causa, poderão ser discutidos aviso-prévio, décimo terceiro proporcional, férias vencidas e proporcionais com um terço, regularização do FGTS e multa de 40% sobre o fundo.",
          "Também pode ser discutido o seguro-desemprego, desde que os requisitos legais sejam preenchidos. Outras parcelas, como diferenças salariais e horas extras, dependerão do contrato e dos pedidos apresentados.",
          "A reversão não torna todas as verbas automaticamente devidas. É necessário verificar o período contratual, os valores já pagos e as particularidades do vínculo.",
        ],
      },
      {
        id: "prazo",
        titulo: "Qual é o prazo para questionar?",
        paragrafos: [
          "Em regra, o trabalhador tem até dois anos após o término do contrato para ajuizar a reclamação trabalhista. Uma vez proposta a ação dentro desse período, a cobrança costuma ficar limitada aos créditos dos cinco anos anteriores ao ajuizamento, conforme o artigo 7º, inciso XXIX, da Constituição Federal.",
          "Não é recomendável deixar a análise para o fim do prazo. Com o passar do tempo, documentos podem ser perdidos, testemunhas podem mudar de endereço e a recordação dos acontecimentos pode ficar menos precisa.",
        ],
      },
      {
        id: "conclusao",
        titulo: "A análise deve ser individual",
        paragrafos: [
          "A reversão da justa causa pode ser discutida quando existem dúvidas sobre a falta grave, sua autoria, a proporcionalidade da punição, a imediatidade ou a suficiência das provas.",
          "Cada situação exige a análise dos documentos, do histórico funcional e das circunstâncias concretas. Uma avaliação jurídica individualizada permite verificar se há fundamentos para questionar a penalidade e quais pedidos podem ser pertinentes.",
        ],
      },
    ],
  },
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
  {
    slug: "adicional-de-insalubridade",
    titulo: "Insalubridade: você pode estar trabalhando em condições prejudiciais à saúde e nem saber",
    resumo:
      "Entenda o que caracteriza um ambiente insalubre, como é calculado o adicional e como provar o direito na Justiça do Trabalho.",
    categoria: "Insalubridade",
    data: "2026-07-30",
    dataLabel: "30 de julho de 2026",
    leitura: 8,
    imagem: insalubridade,
    secoes: [
      {
        id: "introducao",
        titulo: "Muitos trabalhadores desconhecem o direito",
        paragrafos: [
          "Muitos trabalhadores acreditam que apenas quem trabalha em hospitais ou com produtos químicos perigosos tem direito ao adicional de insalubridade. A realidade é diferente.",
          "A insalubridade ocorre quando o trabalhador exerce suas atividades exposto a agentes que podem causar danos à sua saúde acima dos limites permitidos pela legislação. Esses agentes podem ser físicos, químicos ou biológicos.",
        ],
        citacao:
          "A insalubridade não depende da vontade da empresa, mas da realidade das condições de trabalho enfrentadas pelo empregado.",
      },
      {
        id: "o-que-caracteriza",
        titulo: "O que pode caracterizar um ambiente insalubre?",
        paragrafos: [
          "Alguns exemplos de situações que podem indicar insalubridade são:",
          "• Exposição constante a produtos químicos.\n• Contato com lixo, esgoto ou materiais contaminados.\n• Trabalho em ambientes com muito ruído.\n• Exposição excessiva ao calor ou ao frio.\n• Poeiras, fumos, vapores e gases nocivos.\n• Contato frequente com vírus, bactérias ou outros agentes biológicos.",
          "Essas situações não garantem automaticamente o direito ao adicional, mas podem indicar que existe um direito que merece ser analisado.",
        ],
      },
      {
        id: "como-funciona",
        titulo: "Como funciona o adicional de insalubridade?",
        paragrafos: [
          "Quando comprovada a exposição aos agentes nocivos, o trabalhador pode ter direito ao adicional de insalubridade, que pode ser de:",
          "• 10% (grau mínimo);\n• 20% (grau médio);\n• 40% (grau máximo).",
          "O percentual depende da intensidade do risco e é definido por meio de uma perícia técnica realizada durante o processo judicial, quando necessário.",
        ],
      },
      {
        id: "epis",
        titulo: "E se a empresa fornecer EPIs?",
        paragrafos: [
          "O simples fornecimento de Equipamentos de Proteção Individual (EPIs) não elimina automaticamente o direito ao adicional.",
          "É necessário verificar se os equipamentos eram adequados para o risco, entregues regularmente, utilizados corretamente e capazes de eliminar ou neutralizar totalmente o agente nocivo.",
          "Cada caso precisa ser analisado individualmente.",
        ],
      },
      {
        id: "prazo",
        titulo: "Trabalhei nessas condições e nunca recebi. Ainda posso cobrar?",
        paragrafos: [
          "Em muitos casos, sim. O trabalhador pode buscar judicialmente o reconhecimento do direito ao adicional de insalubridade e o pagamento dos valores que deixaram de ser pagos, observados os prazos previstos na legislação trabalhista.",
          "Além do adicional, o reconhecimento da insalubridade pode gerar reflexos em outras verbas trabalhistas, como férias acrescidas de um terço, 13º salário, FGTS e horas extras, quando aplicável.",
        ],
      },
      {
        id: "provas",
        titulo: "Como provar a insalubridade?",
        paragrafos: [
          "Algumas provas importantes são:",
          "• Carteira de Trabalho (CTPS);\n• Contracheques;\n• Fotos e vídeos do ambiente de trabalho;\n• Conversas que demonstrem as atividades realizadas;\n• Documentos fornecidos pela empresa;\n• Testemunhas que trabalharam no mesmo local.",
          "Na maioria das ações, também é realizada uma perícia técnica para verificar as condições reais do ambiente de trabalho.",
        ],
      },
      {
        id: "advogado",
        titulo: "Quando procurar um advogado?",
        paragrafos: [
          "Se você trabalha ou trabalhou em um ambiente que coloca sua saúde em risco e nunca recebeu adicional de insalubridade, é recomendável procurar um advogado especializado em Direito do Trabalho para analisar seu caso.",
          "Cada situação possui características próprias, e somente uma análise individual poderá indicar se há direito ao adicional e às demais verbas decorrentes.",
        ],
      },
    ],
  },
];

export const getArtigo = (slug: string) => artigos.find((a) => a.slug === slug);
