const services = [
  {
    slug: 'techstart', name: 'TechStart', eyebrow: 'TECHSTART',
    title: 'Validação estratégica para <em>ideias</em> que merecem virar produto.',
    lead: 'Estruturamos sua iniciativa digital com clareza técnica e validação de mercado, para que cada decisão seja tomada antes de qualquer investimento em desenvolvimento.',
    intro: 'Consultoria pensada para transformar conceito em produto.',
    introText: 'Ideias sem estrutura viram projetos caros. Quando o escopo não está claro, cada nova demanda gera retrabalho, custo extra e decisões tomadas no improviso. A TechStart existe para mudar esse ciclo, entregando o mapa estratégico antes da primeira linha de código.',
    benefits: [
      ['Validação antes do investimento', 'Identificamos o real potencial de mercado da sua ideia e eliminamos os riscos antes que eles virem custos.'],
      ['Escopo com clareza técnica', 'Definimos funcionalidades, arquitetura e prioridades com precisão — para que o desenvolvimento seja eficiente desde o início.'],
      ['Roadmap orientado a resultado', 'Entregamos um plano de execução até o MVP com prazos, requisitos e investimentos mapeados.']
    ],
    detailLabel: 'PERFIS TECHSTART', detailTitle: 'Qual é o seu momento?',
    detailLead: 'A consultoria se adapta ao estágio do seu projeto. Escolha o perfil que mais combina com o seu contexto atual.',
    detail: [
      ['Início Estratégico', 'Ideal para empreendedores e intraempreendedores em fase de ideação.'],
      ['Projeto em Progresso', 'Ideal para startups e empresas que buscam lançar a primeira versão de um produto com segurança.'],
      ['Solução Estruturada', 'Ideal para negócios com um produto já validado ou que necessitam de um plano robusto para crescimento.'],
      ['Projeto Sob Consulta', 'Ideal para médias e grandes empresas, projetos de fomento ou soluções de alta complexidade.']
    ],
    proofTitle: 'Estratégia validada por quem já construiu produtos reais.',
    proofText: 'A TechStart é sustentada pela experiência da Orbe Soft — consultoria que já lançou mais de 100 startups e impactou mais de 10 milhões de usuários.',
    after: { label:'FÁBRICA DE SOFTWARE', title:'O TechStart é o começo. A Fábrica é o que vem depois.', text:'A consultoria termina com um produto validado, um roadmap claro e uma arquitetura definida. A partir daí, você pode seguir com qualquer equipe ou continuar com a Orbe Soft.', link:'/solucoes/fabrica-de-software', linkText:'Conheça a Fábrica de Software' },
    faq: [
      ['Isso serve para mim, mesmo que eu não entenda de tecnologia?', 'Sim. A TechStart foi desenhada exatamente para quem tem a visão do negócio, mas não domina o lado técnico. Nossa função é traduzir sua ideia em um plano executável.'],
      ['Não seria melhor ir direto para o desenvolvimento?', 'Se o escopo já está claro, pode ser. A consultoria evita construir o produto errado e reescrever tudo depois.'],
      ['Quanto tempo leva a consultoria?', 'Varia conforme o perfil do projeto, mas a maioria das entregas acontece entre 2 e 4 semanas.'],
      ['O que acontece depois da consultoria?', 'Você sai com um documento estratégico completo e pode contratar desenvolvimento com a Orbe Soft ou qualquer outro parceiro.']
    ],
    cta: 'Pronto para tirar sua ideia do papel com segurança?'
  },
  {
    slug:'fabrica-de-software', name:'Fábrica de Software', eyebrow:'FÁBRICA DE SOFTWARE',
    title:'Sistemas robustos para <em>operações</em> que não podem parar.',
    lead:'Desenvolvemos soluções sob medida com engenharia de software orientada à estabilidade, escalabilidade e previsibilidade, para empresas que precisam evoluir sem comprometer a continuidade da operação.',
    intro:'Engenharia pensada para sustentar crescimento.',
    introText:'Sistemas engessados travam processos, aumentam o retrabalho e dificultam o crescimento da operação. Quando a estrutura não acompanha o negócio, cada nova demanda representa mais risco, mais custo e menos previsibilidade.',
    benefits:[['Arquiteturas escaláveis','Estruturamos soluções preparadas para acompanhar o crescimento da empresa sem criar gargalos futuros.'],['Evolução com mais previsibilidade','Conduzimos a entrega com método e visão de longo prazo.'],['Integração entre sistemas e operações','Conectamos fluxos, dados e áreas críticas para reduzir ruído operacional.']],
    detailLabel:'PARA QUEM É', detailTitle:'A Fábrica de Software é para quem não pode depender de improvisação.',
    detailLead:'Se algum dos cenários abaixo descreve sua realidade, é provável que sua operação precise de uma estrutura de desenvolvimento mais sólida.',
    detail:['Seu sistema atual trava ou falha com frequência em picos de uso','Sua equipe de TI passa mais tempo apagando incêndio do que evoluindo o produto','Cada nova funcionalidade demora mais do que deveria e gera bugs','A integração entre sistemas é feita manualmente','Você depende de um único desenvolvedor ou fornecedor','Seu sistema não vai aguentar o crescimento planejado'],
    proofTitle:'Processos validados por gigantes do mercado.',
    proofText:'Empresas como Jeep, Vale, Gerdau e Magneti Marelli validaram nossa engenharia em contextos onde estabilidade e previsibilidade são pré-requisitos.',
    after:{label:'TECHSTART',title:'Ainda na fase de ideia? Comece pelo TechStart.',text:'A Fábrica executa com mais velocidade e menos risco quando o produto já passou por validação de mercado e prototipação.',link:'/solucoes/techstart',linkText:'Conheça a TechStart',image:'imgImage.webp'},
    cta:'Pronto para escalar a sua operação com segurança?'
  },
  {
    slug:'inteligencia-artificial', name:'Inteligência Artificial', eyebrow:'INTELIGÊNCIA ARTIFICIAL',
    title:'Decisões mais inteligentes com <em>dados</em> que já existem no seu negócio.',
    lead:'Aplicamos Inteligência Artificial para transformar dados dispersos em eficiência operacional, automação de processos e inteligência de negócio, de forma estruturada e com impacto mensurável.',
    intro:'IA aplicada para sustentar operação e crescimento.',
    introText:'A maioria das empresas já tem os dados. O problema é que eles ficam presos em sistemas isolados, planilhas e processos manuais. Quando a IA não está integrada à operação, a empresa perde tempo, repete erros e toma decisões com informação atrasada.',
    benefits:[['Automação de processos críticos','Eliminamos tarefas repetitivas e propensas a erro, liberando sua equipe para o que realmente importa.'],['Modelos orientados ao seu negócio','Desenvolvemos soluções treinadas para o contexto e os dados da sua operação.'],['Inteligência operacional em tempo real','Painéis, alertas e predições que transformam dados em decisões rápidas.']],
    detailLabel:'ONDE A IA GERA IMPACTO', detailTitle:'IA que resolve problemas reais, não apenas impressiona.',
    detailLead:'Cada setor tem desafios específicos. Veja onde aplicamos inteligência artificial com resultado mensurável:',
    detail:[['Indústria e Manufatura','Manutenção preditiva, controle de qualidade automatizado, previsão de demanda e otimização da produção.'],['Varejo e E-commerce','Personalização, precificação dinâmica, previsão de estoque e análise de comportamento.'],['Saúde e Clínicas','Triagem inteligente, apoio a diagnóstico e gestão de agenda.'],['Financeiro e Seguros','Detecção de fraude, análise de crédito e relatórios preditivos.'],['Logística e Distribuição','Otimização de rotas, previsão de atrasos e gestão de frota.'],['Serviços e Operações Internas','Automação de atendimento, classificação de tickets e apoio à decisão.']],
    proofTitle:'IA que gera resultado, não só impressão.',
    proofText:'Na Orbe Soft, IA não é tendência — é ferramenta. Aplicamos onde há problema real, com estrutura para sustentar o resultado ao longo do tempo.',
    faq:[['Precisamos ter um time de dados para começar?','Não necessariamente. Começamos com um diagnóstico dos dados existentes e dos problemas que eles podem resolver.'],['IA não é coisa para grandes empresas?','Médias empresas também ganham eficiência expressiva com IA.'],['Quanto tempo leva para ver resultado?','Automações simples podem gerar resultado em semanas; modelos preditivos robustos levam de 2 a 4 meses.'],['E se o modelo errar?','Todo modelo tem margem de erro. Entregamos camadas de validação, monitoramento e ajuste.']],
    cta:'Pronto para usar os dados da sua empresa a favor da operação?'
  },
  {
    slug:'mobilidade-corporativa', name:'Mobilidade Corporativa', eyebrow:'MOBILIDADE CORPORATIVA',
    title:'Coloque a sua <em>operação</em> na palma da mão.',
    lead:'Desenvolvemos experiências mobile que conectam equipes, dados e decisões, com agilidade, segurança e integração real aos sistemas da sua empresa.',
    intro:'Mobile pensado para a realidade da sua operação.',
    introText:'Apps genéricos não resolvem problemas específicos. Quando o mobile não está integrado aos processos da empresa, ele se torna mais uma ferramenta paralela. Desenvolvemos soluções que se encaixam onde a operação realmente acontece.',
    benefits:[['Integração com sistemas existentes','Conectamos o app aos seus ERPs, CRMs e fontes de dados.'],['Experiência funcional e fluida','Interfaces que o time adota de verdade, pensadas para o fluxo de trabalho real.'],['Segurança e controle corporativo','Gestão de acessos, permissões e dados sensíveis com padrões corporativos.']],
    detailLabel:'O QUE DESENVOLVEMOS', detailTitle:'Soluções mobile para os contextos mais exigentes.',
    detailLead:'Desenvolvemos conforme o desafio — para times em campo, gestão interna ou experiência do cliente final.',
    detail:[['Apps de Força de Vendas','Catálogo, pedidos offline, histórico de clientes e metas em tempo real.'],['Apps de Gestão de Campo','Ordens de serviço, checklist e coleta de dados com ou sem internet.'],['Dashboards Executivos Mobile','Indicadores em tempo real e alertas críticos em qualquer lugar.'],['Apps de Integração Operacional','Colaboradores, aprovações, workflows e dados entre setores.'],['Apps B2C com Lógica Corporativa','Experiências para o cliente final com segurança e escalabilidade enterprise.']],
    proofTitle:'Mobile que trabalha pela empresa, não contra ela.',
    proofText:'Garantimos que a informação certa chegue à pessoa certa, no momento certo, independentemente de onde ela esteja.',
    cta:'Pronto para levar sua operação para o mobile com segurança?'
  },
  {
    slug:'ux-ui-design', name:'UX/UI Design', eyebrow:'UX/UI DESIGN',
    title:'Produtos digitais que as pessoas <em>realmente</em> conseguem usar.',
    lead:'Criamos experiências digitais claras, funcionais e orientadas ao usuário — para reduzir fricção, aumentar adoção e garantir que o produto entregue o que promete.',
    intro:'Design pensado para gerar resultado, não só aprovação.',
    introText:'Um produto com design ruim não falha porque é feio. Falha porque confunde, frustra e faz o usuário desistir. Design bem feito é investimento, não custo.',
    benefits:[['Pesquisa e arquitetura de informação','Entendemos usuários, comportamento e jornada para organizar o produto com clareza.'],['Interfaces que reduzem fricção','Interfaces que o time adota de verdade, pensadas para o fluxo real.'],['Design system escalável','Componentes consistentes e documentados que aceleram o desenvolvimento.']],
    detailLabel:'NOSSO PROCESSO', detailTitle:'Design que começa com perguntas, não com telas.',
    detailLead:'Cada projeto passa por um processo estruturado, baseado em como as pessoas realmente se comportam.',
    detail:[['Descoberta e Pesquisa','Entrevistas, análise de comportamento, benchmarks e mapeamento das dores.'],['Arquitetura de Informação','Estrutura de navegação, hierarquia de conteúdo e fluxos principais.'],['Wireframes e Protótipo','Validação dos fluxos com stakeholders e usuários reais.'],['Design Visual e UI','Identidade visual, tipografia, cores, componentes e microinterações.'],['Design System e Handoff','Documentação de componentes, tokens e especificações técnicas.']],
    extra:{label:'O QUE ENTREGAMOS',title:'Entregáveis concretos, não apenas telas bonitas.',items:['Mapa de jornada do usuário','Arquitetura de informação e sitemap','Wireframes de todos os fluxos principais','Protótipo navegável para validação','Telas em alta fidelidade (desktop e mobile)','Design system com componentes documentados','Handoff técnico para desenvolvimento','Relatório de pesquisa com usuários']},
    proofTitle:'Clareza é a melhor funcionalidade que um produto pode ter.',
    proofText:'Na Orbe Soft, design é ponto de partida. Entender como as pessoas interagem com o produto define se ele vai crescer ou ser abandonado.',
    cta:'Pronto para transformar a experiência do seu produto digital?'
  },
  {
    slug:'industria-4-0', name:'Indústria 4.0', eyebrow:'INDÚSTRIA 4.0',
    title:'Operação industrial com <em>controle</em>, dados e tecnologia integrados.',
    lead:'Conectamos máquinas, sistemas e pessoas para ampliar a eficiência, reduzir falhas e dar à sua operação a previsibilidade que o crescimento exige.',
    intro:'Tecnologia industrial pensada para quem não pode parar.',
    introText:'Operações industriais não toleram improviso. Quando os sistemas não se comunicam, os dados chegam tarde e as decisões dependem de planilhas manuais, o custo sobe e a margem encolhe.',
    benefits:[['Integração entre máquinas e sistemas','Dados fluem em tempo real do chão de fábrica à gestão.'],['Monitoramento e rastreabilidade','Dashboards, alertas e histórico para antecipar falhas e reduzir perdas.'],['Automação orientada ao processo','Eliminamos etapas manuais críticas e reduzimos variabilidade.']],
    detailLabel:'SINAIS DE ALERTA', detailTitle:'Sua operação está pedindo por mais tecnologia?',
    detailLead:'Alguns sintomas aparecem antes de a empresa reconhecer que o problema é estrutural.',
    detail:['Você ainda recebe dados de produção via planilha ou e-mail','Uma falha em equipamento para toda a linha e você descobre tarde','Seus sistemas de gestão e operação não se comunicam','Decisões de compra dependem de estimativa, não de dado','Você não consegue rastrear uma não conformidade com agilidade','A variabilidade na produção é alta e a causa não é identificada'],
    extra:{label:'CONEXÃO COM O ECOSSISTEMA',title:'Indústria 4.0 funciona melhor quando conectada às outras frentes.',items:['Fábrica de Software','Inteligência Artificial','Mobilidade Corporativa','UX/UI Design']},
    proofTitle:'Indústria 4.0 na prática, não no discurso.',
    proofText:'Trabalhamos com a realidade de cada operação, integrando o que falta e construindo evolução sem parar a produção.',
    cta:'Pronto para dar mais controle e previsibilidade à sua operação industrial?'
  },
  {
    slug:'it-staff-augmentation', name:'IT Staff Augmentation', eyebrow:'IT STAFF AUGMENTATION',
    title:'Capacidade técnica <em>certa</em>, no momento em que você precisa.',
    lead:'Expandimos sua equipe com profissionais de tecnologia alinhados ao ritmo, à cultura e aos desafios da sua operação, sem o custo e o tempo de uma contratação convencional.',
    intro:'Expansão técnica que acompanha o negócio.',
    introText:'Contratar bem leva tempo. E quando o projeto não pode esperar, a operação fica refém da agenda do RH. Staff Augmentation entrega capacidade técnica qualificada, integrada ao seu time, sem abrir mão do controle.',
    benefits:[['Profissionais alinhados ao seu stack','Especialistas com experiência nas tecnologias e metodologias que sua operação já usa.'],['Integração real ao time','Os profissionais operam dentro do seu processo, com visibilidade da sua liderança.'],['Escala no ritmo do projeto','Aumente ou reduza a equipe conforme a demanda.']],
    detailLabel:'STAFF AUGMENTATION VS. OUTRAS OPÇÕES', detailTitle:'Por que empresas escolhem este modelo?',
    detailLead:'Velocidade, flexibilidade e qualidade precisam coexistir.',
    detail:[['Velocidade de início','Rápida e estruturada'],['Controle do trabalho','Alto desde o início'],['Alinhamento ao contexto','Integrado ao seu time'],['Escalabilidade','Flexível'],['Custo em projetos pontuais','Previsível e justo'],['Continuidade e gestão','Compartilhada com a Orbe']],
    extra:{label:'COMO FUNCIONA A ALOCAÇÃO',title:'Do briefing ao primeiro dia de trabalho em menos de duas semanas.',items:['Briefing Técnico','Seleção e Curadoria','Apresentação de Perfis','Entrevista e Validação','Onboarding e Integração','Acompanhamento Contínuo']},
    proofTitle:'Velocidade sem abrir mão da qualidade técnica.',
    proofText:'Entregamos capacidade técnica com contexto. Cada profissional passa por avaliação rigorosa e é acompanhado ao longo do projeto.',
    cta:'Pronto para escalar sua equipe técnica com segurança?'
  }
];

const cases = [
  {title:'Como reduzimos em 40% o tempo de análise operacional com machine learning',category:'Inteligência Artificial',sector:'Indústria',description:'A operação dependia de consolidação manual de dados — horas perdidas por turno, decisões tomadas com informação atrasada.',image:'imgRectangle213.webp'},
  {title:'Como modernizamos um sistema legado crítico sem parar a operação',category:'Fábrica de Software',sector:'Indústria',description:'Um sistema central com anos de acumulação técnica travava o crescimento e concentrava risco em uma estrutura frágil.',image:'imgRectangle214.webp'},
  {title:'Como aumentamos em 60% a taxa de conclusão de cadastro com redesign de fluxo',category:'UX/UI Design',sector:'Serviços',description:'O produto funcionava, mas os usuários abandonavam o onboarding antes de completar o cadastro.',image:'imgRectangle215.webp'},
  {title:'Como reduzimos paradas não planejadas em 35% com monitoramento em tempo real',category:'Indústria 4.0',sector:'Indústria',description:'Falhas em equipamentos eram descobertas tarde demais — quando a linha já havia parado.',image:'imgRectangle216.webp'},
  {title:'Como ampliamos a capacidade de entrega sem aumentar o headcount fixo',category:'IT Staff Augmentation',sector:'Tecnologia',description:'O time de produto tinha backlog crescente e não conseguia entregar features críticas no prazo.',image:'imgRectangle217.webp'}
];
const caseStories = [
  {
    slug:'analise-operacional-ia',
    headline:'Como reduzimos em 40% o tempo de análise operacional com IA.',
    tags:['Indústria','Inteligência Artificial','40% menos tempo de análise'],
    stats:[['40%','menos tempo de análise'],['Dados integrados','em uma única visão'],['Decisões','com informações atualizadas']],
    scenario:{title:'O problema que não podia continuar assim.',paragraphs:[
      'A equipe reunia dados de diferentes sistemas antes de cada análise. A consolidação manual consumia tempo e fazia com que decisões importantes dependessem de informações que já haviam mudado.',
      'O desafio era transformar esse volume de dados em uma leitura clara da operação, sem acrescentar mais uma rotina complexa ao trabalho do time.'
    ]},
    solution:{title:'O que a Orbe Soft fez.',lead:'Organizamos as fontes de informação, estruturamos a análise com inteligência artificial e reunimos os sinais relevantes em uma interface de acompanhamento.',cards:[
      ['Integração de dados','Informações antes dispersas passaram a compor uma base coerente para análise.'],
      ['Modelo de análise','O sistema identifica padrões e destaca situações que exigem atenção.'],
      ['Painel operacional','A equipe acompanha os indicadores e investiga os pontos críticos em um mesmo fluxo.']
    ]},
    impact:{title:'O que mudou depois.',lead:'A análise ficou mais rápida e o time ganhou uma visão mais direta do que acontece na operação.',cards:[
      ['40% menos tempo','na rotina de análise operacional.'],
      ['Mais clareza','para priorizar situações que pedem ação.'],
      ['Menos trabalho manual','na reunião e leitura das informações.']
    ]}
  },
  {
    slug:'modernizacao-sistema-legado',
    headline:'Como modernizamos um sistema legado crítico sem parar a operação.',
    tags:['Indústria','Fábrica de Software','Modernização de sistema'],
    stats:[['Operação ativa','durante a evolução do sistema'],['Legado','transformado por etapas'],['Nova base','para evoluir o produto']],
    scenario:{title:'Uma operação dependente de um sistema difícil de evoluir.',paragraphs:[
      'Anos de ajustes pontuais haviam tornado o sistema central mais difícil de manter. Cada nova demanda esbarrava em dependências antigas e exigia cuidado para não afetar processos em uso.',
      'A empresa precisava modernizar a tecnologia sem interromper o trabalho das equipes que dependiam dela todos os dias.'
    ]},
    solution:{title:'Modernização planejada para conviver com o legado.',lead:'A Orbe Soft dividiu a evolução em etapas, preservando os fluxos necessários à operação enquanto construía uma base mais simples de manter.',cards:[
      ['Mapeamento de fluxos','Identificação dos processos essenciais e das dependências entre módulos.'],
      ['Evolução incremental','Substituição gradual das partes mais críticas, com validação a cada entrega.'],
      ['Transição acompanhada','Adoção da nova estrutura sem exigir uma troca abrupta de todo o sistema.']
    ]},
    impact:{title:'O sistema passou a acompanhar o negócio.',lead:'A modernização abriu espaço para novas entregas e reduziu a dependência de uma estrutura que limitava a evolução do produto.',cards:[
      ['Continuidade','para as equipes que utilizavam o sistema.'],
      ['Mais previsibilidade','na manutenção e nas próximas melhorias.'],
      ['Base técnica renovada','para responder a novas demandas.']
    ]}
  },
  {
    slug:'redesign-fluxo-cadastro',
    headline:'Como aumentamos em 60% a conclusão de cadastro com um fluxo mais claro.',
    tags:['Serviços','UX/UI Design','60% mais cadastros concluídos'],
    stats:[['60%','mais cadastros concluídos'],['Fluxo','redesenhado de ponta a ponta'],['Experiência','mais simples para o usuário']],
    scenario:{title:'O cadastro interrompia a jornada antes do primeiro uso.',paragraphs:[
      'O produto atendia à necessidade do público, mas uma parte relevante das pessoas abandonava o cadastro antes de chegar à experiência principal.',
      'Campos, orientações e etapas não deixavam claro o que era necessário fazer. O problema estava na jornada de entrada, não na proposta do produto.'
    ]},
    solution:{title:'Uma experiência de entrada mais objetiva.',lead:'A Orbe Soft revisou a jornada de cadastro para reduzir dúvidas e dar ao usuário mais clareza sobre cada passo.',cards:[
      ['Diagnóstico da jornada','Leitura dos pontos de atrito e das informações solicitadas em cada etapa.'],
      ['Fluxo simplificado','Organização das ações em uma sequência mais direta.'],
      ['Interface consistente','Textos, estados e feedback visual alinhados ao avanço do usuário.']
    ]},
    impact:{title:'Mais pessoas chegaram ao produto.',lead:'Com menos fricção no início da jornada, a taxa de conclusão de cadastro aumentou e o primeiro contato com o serviço ficou mais simples.',cards:[
      ['60% de aumento','na conclusão do cadastro.'],
      ['Menos dúvidas','sobre o que fazer em cada etapa.'],
      ['Jornada mais fluida','até o primeiro uso do produto.']
    ]}
  },
  {
    slug:'monitoramento-industrial-tempo-real',
    headline:'Como reduzimos em 35% as paradas não planejadas com monitoramento em tempo real.',
    tags:['Indústria','Indústria 4.0','35% menos paradas'],
    stats:[['35%','menos paradas não planejadas'],['Tempo real','na leitura dos equipamentos'],['Alertas','para agir antes da interrupção']],
    scenario:{title:'As falhas apareciam quando a linha já havia parado.',paragraphs:[
      'A equipe tinha poucos sinais reunidos sobre o comportamento dos equipamentos. Muitas ocorrências só eram percebidas depois que afetavam a produção.',
      'Era preciso tornar os dados da operação acessíveis no momento certo para apoiar a manutenção e a tomada de decisão.'
    ]},
    solution:{title:'Visibilidade contínua da operação.',lead:'A Orbe Soft estruturou a coleta e a apresentação dos dados de equipamentos em um sistema de acompanhamento com alertas para desvios relevantes.',cards:[
      ['Dados conectados','Informações dos equipamentos reunidas em um fluxo de monitoramento.'],
      ['Alertas úteis','Sinais de anomalia destacados para investigação da equipe.'],
      ['Painel de operação','Indicadores organizados para leitura rápida e acompanhamento contínuo.']
    ]},
    impact:{title:'A equipe passou a agir mais cedo.',lead:'Com sinais visíveis antes da interrupção, a manutenção pôde priorizar ações preventivas e reduzir as paradas imprevistas.',cards:[
      ['35% menos paradas','não planejadas na operação.'],
      ['Resposta antecipada','a desvios observados nos equipamentos.'],
      ['Visão compartilhada','entre operação e manutenção.']
    ]}
  },
  {
    slug:'ampliacao-capacidade-time-produto',
    headline:'Como ampliamos a capacidade de entrega sem aumentar o time fixo.',
    tags:['Tecnologia','IT Staff Augmentation','Equipe integrada'],
    stats:[['Equipe integrada','ao ritmo do produto'],['Backlog','com prioridades claras'],['Capacidade flexível','conforme a demanda']],
    scenario:{title:'O backlog crescia mais rápido que a capacidade de entrega.',paragraphs:[
      'O time interno conhecia o produto e suas prioridades, mas não tinha espaço suficiente para executar todas as frentes no prazo desejado.',
      'A necessidade era ganhar capacidade técnica sem perder contexto, qualidade ou controle sobre as decisões do produto.'
    ]},
    solution:{title:'Profissionais trabalhando junto com o time.',lead:'A Orbe Soft integrou profissionais ao fluxo de trabalho existente, com prioridades compartilhadas e participação nas decisões técnicas.',cards:[
      ['Entrada com contexto','Conhecimento do produto, das rotinas e dos critérios de entrega.'],
      ['Trabalho integrado','Planejamento e execução conectados ao time interno.'],
      ['Acompanhamento contínuo','Alinhamento frequente para ajustar prioridades e remover impedimentos.']
    ]},
    impact:{title:'Mais capacidade para avançar no roadmap.',lead:'A empresa conseguiu distribuir melhor as frentes de trabalho e manter a evolução do produto sem ampliar permanentemente sua estrutura.',cards:[
      ['Mais foco','para o time interno nas decisões estratégicas.'],
      ['Entregas em paralelo','sem fragmentar a visão do produto.'],
      ['Flexibilidade','para ajustar a capacidade ao momento do negócio.']
    ]}
  }
];
cases.forEach((item, index) => Object.assign(item, caseStories[index]));
const figmaServiceKeys = {
  techstart: 'techstart',
  'fabrica-de-software': 'factory',
  'inteligencia-artificial': 'ai',
  'mobilidade-corporativa': 'mobile',
  'ux-ui-design': 'ux',
  'industria-4-0': 'industry',
  'it-staff-augmentation': 'staff'
};
const copyAfter = (copy, label) => {
  const index = copy.indexOf(label);
  return index < 0 ? null : copy[index + 1];
};
for (const service of services) {
  const copy = window.FigmaCopy[figmaServiceKeys[service.slug]];
  service.introText = copyAfter(copy, service.intro) || service.introText;
  service.benefits = service.benefits.map(([title, description]) => [title, copyAfter(copy, title) || description]);
  service.detailLead = copyAfter(copy, service.detailTitle) || service.detailLead;
  if (typeof service.detail[0] === 'string') {
    const first = copy.indexOf(service.detailLead) + 1;
    if (first > 0) service.detail = copy.slice(first, first + service.detail.length);
  } else if (service.slug !== 'it-staff-augmentation') {
    service.detail = service.detail.map(([title, description]) => [title, copyAfter(copy, title) || description]);
  }
  service.proofText = copyAfter(copy, service.proofTitle) || service.proofText;
  if (service.after) {
    service.after.text = copyAfter(copy, service.after.title) || service.after.text;
    const secondParagraph = copyAfter(copy, service.after.text);
    if (secondParagraph && secondParagraph !== service.after.linkText) service.after.text2 = secondParagraph;
  }
  if (service.faq) service.faq = service.faq.map(([question, answer]) => [question, copyAfter(copy, question) || answer]);
  service.ctaText = copyAfter(copy, service.cta);
}
const factory = services.find(service => service.slug === 'fabrica-de-software');
factory.after.text = copyAfter(window.FigmaCopy.factory, 'Conheça a techstart');
factory.after.text2 = copyAfter(window.FigmaCopy.factory, factory.after.text);
window.OrbeData = { services, cases };
