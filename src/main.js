(function () {
const { services, cases } = window.OrbeData;

const asset = (name) => './public/assets/' + name;
const servicePath = (service) => '/solucoes/' + service.slug;
const button = (text, href = '/contato', kind = 'solid') => `<a class="button ${kind}" href="${href}">${text}<img class="button-arrow" src="${asset('imgArrowNarrowRight.svg')}" alt="" /></a>`;
const overline = (text) => `<div class="overline">${text}</div>`;
const logo = (light = false) => `<img class="logo" src="${asset(light ? 'imgLogoOrbeW1.svg' : 'imgLogoOrbeW.svg')}" alt="Orbe Soft" />`;
const breadcrumbs = (items) => `<nav class="breadcrumbs" aria-label="Navegação estrutural"><a class="breadcrumb-home" href="/" aria-label="Início"><img src="${asset('breadcrumb-home.svg')}" alt="" /></a>${items.map((item,i)=>`<img class="breadcrumb-divider" src="${asset('breadcrumb-slash.svg')}" alt="" />${item.href ? `<a href="${item.href}">${item.label}</a>` : `<span aria-current="page">${item.label}</span>`}`).join('')}</nav>`;
const figmaTextAfter = (page, label) => {
  const copy = window.FigmaCopy[page];
  const index = copy.indexOf(label);
  return index < 0 ? '' : copy[index + 1];
};
const figmaTextsAfter = (page, label, count) => {
  const copy = window.FigmaCopy[page];
  const index = copy.indexOf(label);
  return index < 0 ? [] : copy.slice(index + 1, index + 1 + count);
};
const listedCases = [...cases];
cases.forEach(item => {
  const exactDescription = figmaTextAfter('cases', item.title);
  if (exactDescription && exactDescription !== 'LER CASE COMPLETO') item.description = exactDescription;
});

function header(home = false) {
  return `<header class="site-header ${home ? 'header-home' : ''}">
    <div class="header-inner">
      <a class="brand" href="/" aria-label="Orbe Soft — início"><img class="logo logo-header" src="${asset(home ? 'header-logo-home.svg' : 'imgLogoOrbeW.svg')}" alt="Orbe Soft" /></a>
      <button class="menu-toggle" type="button" aria-label="Abrir menu" aria-expanded="false">☰</button>
      <nav class="main-nav" aria-label="Navegação principal">
        <div class="nav-links"><div class="nav-dropdown"><a href="/solucoes">Soluções <img class="nav-chevron" src="${asset(home ? 'nav-chevron-light.svg' : 'nav-chevron-dark.svg')}" alt="" /></a>
          <div class="dropdown-panel">${services.map(s => `<a href="${servicePath(s)}">${s.name}</a>`).join('')}</div>
        </div>
        <a href="/cases">Cases</a><a href="/sobre">Sobre</a><span class="language"><img src="${asset('imgFrame.svg')}" alt="" /><span>PT</span></span></div>
        <a class="button solid header-cta" href="/contato">Falar com especialista<img class="button-arrow" src="${asset('imgArrowNarrowRight.svg')}" alt="" /></a>
      </nav>
    </div>
  </header>`;
}

function footer() {
  return `<footer class="footer" id="rodape">
    <div class="footer-art" aria-hidden="true"><img class="footer-vector-one" src="${asset('footer-vector-1.svg')}" alt="" /><img class="footer-vector-two" src="${asset('footer-vector-2.svg')}" alt="" /></div>
    <div class="container footer-main">
      <div class="footer-brand">${logo(true)}<p>Acompanhe nossas redes</p>
        <div class="socials">
          <span aria-label="Instagram"><img src="${asset('imgInstagramSocialSvg.svg')}" alt="" /></span>
          <span aria-label="Facebook"><img src="${asset('imgFacebookSocialSvg.svg')}" alt="" /></span>
          <span aria-label="LinkedIn"><img src="${asset('imgLinkedinSocialSvg.svg')}" alt="" /></span>
        </div>
      </div>
      <div class="footer-links"><strong>Sobre</strong><a href="/">Home</a><a href="/sobre">Quem Somos</a><a href="/solucoes">Soluções</a><a href="/cases">Cases</a></div>
      <div class="footer-links"><strong>Links Rápidos</strong><a href="/contato">Contato</a><a href="mailto:contato@orbesoft.com.br?subject=Trabalhe%20Conosco">Trabalhe Conosco</a><span>Termos de Uso</span><span>Políticas de Privacidade</span><span>Políticas de Cookies</span></div>
    </div>
    <div class="container footer-bottom"><span>© 2017-2026 - Orbe Soft</span><span class="footer-credit">Created by <span class="orange" aria-hidden="true">●</span> <strong>Yaxa Studio</strong></span><a href="#topo">Voltar ao topo ↑</a></div>
  </footer>`;
}

function proofStrip(dark = false, withLabel = true, tone = 'warm') {
  return `<div class="proof-strip ${dark ? 'proof-dark' : ''} ${tone === 'gray' ? 'proof-gray' : ''}">
    <div class="container">
      ${withLabel ? '<p class="proof-label">PROCESSOS VALIDADOS POR GIGANTES DO MERCADO</p>' : ''}
      <div class="proof-logos">
        <img class="jeep-logo" src="${asset('home-proof-jeep.svg')}" alt="Jeep" />
        <span class="vale-logo" role="img" aria-label="Vale"><span class="vale-rot"><img src="${asset('home-proof-vale-1.svg')}" alt="" /><img src="${asset('home-proof-vale-2.svg')}" alt="" /><img src="${asset('home-proof-vale-3.svg')}" alt="" /></span></span>
        <span class="gerdau-logo" role="img" aria-label="Gerdau"><img class="gerdau-symbol-first" src="${asset('home-proof-gerdau-1.svg')}" alt="" /><img class="gerdau-symbol-second" src="${asset('home-proof-gerdau-2.svg')}" alt="" /><img class="gerdau-word" src="${asset('home-proof-gerdau-word.svg')}" alt="" /></span>
        <img src="${asset('home-proof-magneti.svg')}" alt="Magneti Marelli" />
        <img src="${asset('home-proof-editora.svg')}" alt="Editora Árvore da Vida" />
      </div>
    </div>
  </div>`;
}

function cta(title, text = 'Converse com um de nossos especialistas para desenhar a solução certa para o seu negócio.', buttonText = 'AGENDAR DIAGNÓSTICO ESTRATÉGICO') {
  return `<section class="cta-wrap"><div class="container"><div class="cta-panel">
    <h2>${title}</h2><p>${text}</p>${button(buttonText, '/contato', 'light')}
  </div></div></section>`;
}

function caseCard(item, index, featured = false) {
  const caseHref = '/cases/' + item.slug;
  return `<article class="case-card ${featured ? 'featured-card' : ''}">
    <a href="${caseHref}" class="case-image"><img src="${asset(item.image)}" alt="${item.category}" loading="lazy" /></a>
    <div class="case-meta">${item.category} <span>•</span> ${item.sector}</div>
    <h3><a href="${caseHref}">${item.title}</a></h3>
    <p>${item.description}</p>
    <a class="text-link" href="${caseHref}">LER CASE COMPLETO <span>→</span></a>
  </article>`;
}

function relatedCases(current = null) {
  const related = cases.filter(item => item !== current).slice(0, 2);
  return `<section class="section related-cases"><div class="container">
    <div class="section-heading center">${overline('CASES')}<h2>Histórias de impacto real.</h2></div>
    <div class="case-grid two">${related.map(caseCard).join('')}</div>
    <div class="center more-link">${button('VER TODOS OS CASES', '/cases')}</div>
  </div></section>`;
}

function filterDropdown(id, label, defaultText, values) {
  return `<div class="form-select filter-select" data-form-select>
    <button class="form-select-trigger" type="button" aria-label="${label}" aria-haspopup="listbox" aria-expanded="false"><span>${defaultText}</span><img src="${asset('nav-chevron-dark.svg')}" alt="" /></button>
    <div class="form-select-menu" role="listbox" aria-label="${label}" inert><button type="button" role="option" aria-selected="true" data-value="">${defaultText}</button>${values.map(value=>`<button type="button" role="option" aria-selected="false" data-value="${value}">${value}</button>`).join('')}</div>
    <select class="form-select-native" id="${id}" tabindex="-1" aria-hidden="true"><option value="">${defaultText}</option>${values.map(value=>`<option value="${value}">${value}</option>`).join('')}</select>
  </div>`;
}

function homePage() {
  const order = [services[1], services[2], services[0], services[3], services[4], services[5], services[6]];
  const homeIcons = ['5308-imgBuilding07.svg','5308-imgCpuChip01.svg','5308-imgLoading02.svg','5308-imgDataflow03.svg','5308-imgLayoutAlt01.svg','5308-imgIntersectSquare.svg','5308-imgUserPlus02.svg'];
  const stepIcons = ['5308-imgSearchMd.svg','5308-imgCheckCircleBroken.svg','5308-imgSettings01.svg','5308-imgUmbrella02.svg','5308-imgTrendUp01.svg'];
  const steps = [
    ['Consultoria e Diagnóstico','Antes de qualquer linha de código, entendemos o seu negócio. Mapeamos gargalos, validamos premissas e definimos o que precisa ser construído.'],
    ['Prototipação e Validação','Transformamos o problema em solução tangível antes do desenvolvimento, com protótipos navegáveis e validação com usuários reais.'],
    ['Desenvolvimento e Engenharia','Código limpo, arquitetura escalável e ciclos de entrega transparentes. Você acompanha o progresso e aprova as entregas.'],
    ['Qualidade e Mitigação de Risco','Cada entrega passa por validação técnica rigorosa antes de ir para produção.'],
    ['Análise de Resultados e Evolução','Acompanhamos os resultados, medimos o impacto e estruturamos a próxima evolução.']
  ];
  return `${header(true)}<main>
    <section class="home-hero"><div class="container hero-content">${overline('ORBE SOFT')}
      <h1>Tecnologia que escala o que a sua empresa já faz bem.</h1>
      <p>Engenharia de software, inteligência artificial e consultoria estratégica para empresas que precisam crescer com previsibilidade.</p>
      <div class="button-row">${button('AGENDAR DIAGNÓSTICO ESTRATÉGICO','/contato','light')}${button('CONHECER O ECOSSISTEMA','#solucoes','outline-light')}</div>
    </div></section>
    ${proofStrip(false, true)}
    <section class="section" id="solucoes"><div class="container">
      <div class="service-grid"><div class="home-solutions-intro">${overline('SOLUÇÕES')}<h2>Um ecossistema completo para cada fase do seu crescimento.</h2><p>Do primeiro MVP à operação industrial em escala — escolha a frente que resolve o seu desafio agora.</p></div>${order.map((s,i)=>`<article class="service-tile"><img class="tile-icon" src="${asset(homeIcons[i])}" alt="" /><h3>${s.name}</h3><p>${figmaTextAfter('home',s.name)}</p><a class="text-link" href="${servicePath(s)}">EXPLORAR SOLUÇÃO <span>→</span></a></article>`).join('')}</div>
    </div></section>
    <section class="section process-section"><div class="container process-grid">
      <div class="process-intro">${overline('COMO TRABALHAMOS')}<div class="process-intro-desktop"><h2>Não entregamos apenas software. Entregamos previsibilidade.</h2><p>Da consultoria inicial à análise de resultados, cada projeto segue um processo estruturado que garante escopo controlado, entregas previsíveis e investimento protegido.</p></div><div class="process-intro-mobile"><h2>Não entregamos apenas software. Entregamos <em>previsibilidade</em>.</h2><p>Do primeiro MVP à operação industrial em escala — escolha a frente que resolve o seu desafio agora.</p></div></div>
      <div class="step-list">${steps.map((s,i)=>`<article class="step-card"><span class="step-icon-box"><img class="step-icon" src="${asset(stepIcons[i])}" alt="" /></span><h3>Passo 0${i+1} — ${s[0]}</h3><p>${figmaTextAfter('home',`Passo 0${i+1} — ${s[0]}`) || s[1]}</p></article>`).join('')}</div>
    </div></section>
    <section class="section"><div class="container"><div class="section-heading">${overline('RESULTADOS')}<h2>Evidências de que o método funciona.</h2><p>Não mostramos telas. Mostramos o que mudou depois que a tecnologia entrou em operação.</p></div><div class="case-grid two">${caseCard(cases[0],0)}${caseCard(cases[1],1)}</div><div class="more-link">${button('VER TODOS OS CASES','/cases')}</div></div></section>
    ${cta('Pronto para dar o próximo passo tecnológico da sua empresa?', 'Se você tem um desafio real — sistema legado travando, produto que não sai do papel, operação que não escala, dados que não viram decisão — podemos começar com um diagnóstico sem compromisso.', 'FALAR COM UM ESPECIALISTA')}
  </main>${footer()}`;
}

function solutionsPage() {
  const blurbs = [
    ['Valide sua ideia antes de investir em desenvolvimento.','Diagnóstico estratégico, prototipação e validação de mercado para transformar um conceito em produto com demanda real.'],
    ['Sistemas robustos para operações que não podem parar.','Arquitetura escalável, código limpo e processos de entrega previsíveis para empresas em crescimento.'],
    ['Transforme dados em decisões. Automatize o que trava sua operação.','Modelos preditivos, automação inteligente e análise de dados para ganhar eficiência.'],
    ['Coloque a sua operação na palma da mão da sua equipe.','Aplicativos nativos e híbridos de alta performance, integrados aos seus sistemas.'],
    ['Interfaces que sua equipe usa — e o seu cliente não abandona.','Design centrado no usuário e testes de usabilidade para sistemas que precisam ser adotados.'],
    ['Integre o chão de fábrica ao software corporativo em tempo real.','IoT, automação industrial e realidade aumentada para operações exigentes.'],
    ['Expanda sua capacidade técnica sem perder o controle do projeto.','Squads sêniores integrados à sua equipe com a governança de um parceiro tecnológico.']
  ];
  return `${header()}<main><section class="page-hero solutions-hero container">${overline('NOSSAS SOLUÇÕES')}
    <h1>Não vendemos serviços avulsos. Construímos o <em>pilar tecnológico</em> da sua empresa.</h1>
    <p>A Orbesoft reúne sete frentes de engenharia e consultoria para que a sua empresa não precise procurar diferentes fornecedores. Um ecossistema integrado, do primeiro diagnóstico até a inteligência operacional.</p>
    ${button('AGENDAR DIAGNÓSTICO ESTRATÉGICO')}
  </section>
  <section class="section solutions-list"><div class="container"><div class="section-heading split">${overline('INTRODUÇÃO')}<h2>Um ecossistema completo. Uma única parceria.</h2><p>${figmaTextAfter('solutions','Um ecossistema completo. Uma única parceria.')}</p></div>
    <div class="solution-grid">${services.map((s,i)=>`<article class="solution-item">${overline(s.name)}<h3>${blurbs[i][0]}</h3><p>${figmaTextAfter('solutions',blurbs[i][0]) || blurbs[i][1]}</p><a class="text-link" href="${servicePath(s)}">EXPLORAR SOLUÇÃO <span>→</span></a></article>`).join('')}</div>
  </div></section>
  <section class="dark-band"><div class="container">${overline('CONEXÃO')}<h2>Nenhuma rota é um beco sem saída.</h2><p>${figmaTextAfter('solutions','Nenhuma rota é um beco sem saída.')}</p></div></section>
  ${cta('A rota certa começa pelo seu cenário.', figmaTextAfter('solutions','A rota certa começa pelo seu cenário.'), 'FALE COM UM ESPECIALISTA')}
  </main>${footer()}`;
}

function detailSection(s) {
  const isString = typeof s.detail[0] === 'string';
  const icons = {
    techstart: ['6585-imgRocket01.svg','6585-imgRocket01.svg','6585-imgRocket01.svg','6585-imgRocket01.svg'],
    'inteligencia-artificial': ['6826-imgSettings01.svg','6826-imgShoppingCart03.svg','6826-imgMedicalCross.svg','6826-imgBank.svg','6826-imgRoute.svg','6826-imgTool02.svg'],
    'mobilidade-corporativa': ['7021-imgPhone02.svg','7021-imgList.svg','7021-imgBarChart10.svg','7021-imgLink04.svg','7021-imgUsers01.svg']
  }[s.slug] || [];
  const warningIcon = '6371-imgAlertTriangle.svg';
  return `<section class="section detail-section detail-${s.slug}"><div class="container">
    <div class="section-heading split">${overline(s.detailLabel)}<h2>${s.detailTitle}</h2><p>${s.detailLead}</p></div>
    <div class="detail-grid ${isString ? 'check-grid' : ''}">${s.detail.map((item,i) => isString
      ? `<div class="check-item"><img class="check-icon" src="${asset(warningIcon)}" alt="" /><span>${item}</span></div>`
      : `<article class="detail-card"><div class="detail-icon">${s.slug==='ux-ui-design' ? String(i+1).padStart(2,'0') : `<img src="${asset(icons[i] || '6585-imgRocket01.svg')}" alt="" />`}</div><h3>${item[0]}</h3><p>${item[1]}</p></article>`).join('')}</div>
  </div></section>`;
}

function comparisonSection(type) {
  const mobile = type === 'mobile';
  const heading = mobile ? 'Por que uma solução sob medida entrega mais do que uma plataforma pronta.' : 'Por que empresas escolhem este modelo?';
  const labels = mobile
    ? ['Integração com seus sistemas','Personalização de fluxo','Custo ao longo do tempo','Adoção pelo time','Escalabilidade']
    : ['Velocidade de início','Controle do trabalho','Alinhamento ao contexto','Escalabilidade','Custo em projetos pontuais','Continuidade e gestão'];
  const columns = mobile
    ? [
      ['Plataforma genérica','Parcial ou via conectores caros','Limitada pelo produto','Cresce com usuários/módulos','Depende de adaptação da equipe','Depende do fornecedor'],
      ['Solução Orbe','Nativa, construída para o seu stack','Total, orientada ao seu processo','Previsível e sem depender de licença','Desenhada para o fluxo real de uso','Controlada por você']
    ]
    : [
      ['CLT','Lenta','Total','Alto, mas demora','Burocrática','Alto','Interna'],
      ['Freelancer','Rápida, mas incerta','Total','Variável','Limitada','Baixo-médio','Sua responsabilidade'],
      ['Staff Augmentation','Rápida e estruturada','Total','Alto desde o início','Flexível','Previsível e justo','Compartilhada com a Orbe']
    ];
  const title = mobile ? 'APP PRÓPRIO VS. SOLUÇÃO GENÉRICA' : 'STAFF AUGMENTATION VS. OUTRAS OPÇÕES';
  const intro = mobile ? '' : 'Cada modelo de contratação técnica tem seu lugar. Staff Augmentation se destaca quando velocidade, flexibilidade e qualidade precisam coexistir.';
  return `<section class="section comparison-section"><div class="container">
    <div class="section-heading center">${overline(title)}<h2>${heading}</h2>${intro ? `<p>${intro}</p>` : ''}</div>
    <div class="table-scroll"><table class="comparison-table"><thead><tr><th scope="col"></th>${columns.map((c,i)=>`<th scope="col" class="${i===columns.length-1?'highlight':''}">${c[0]}</th>`).join('')}</tr></thead>
      <tbody>${labels.map((label,i)=>`<tr><th scope="row">${label}</th>${columns.map((c,j)=>`<td class="${j===columns.length-1?'highlight':''}">${c[i+1]}</td>`).join('')}</tr>`).join('')}</tbody>
    </table></div>
    ${mobile ? '<p class="comparison-note">Plataformas genéricas resolvem casos genéricos. Se sua operação tem especificidades, uma solução própria paga o investimento rapidamente.</p>' : ''}
  </div></section>`;
}

function extraSection(service) {
  const extra = service.extra;
  if (service.slug === 'it-staff-augmentation') {
    const copy = window.FigmaCopy.staff;
    return `<section class="section allocation-section"><div class="container"><div class="section-heading">${overline(extra.label)}<h2>${extra.title}</h2><p>${figmaTextAfter('staff',extra.title)}</p></div>
      <div class="allocation-grid">${extra.items.map((title,i)=>`<article><span>0${i+1}</span><h3>${title}</h3><p>${figmaTextAfter('staff',title)}</p></article>`).join('')}</div>
    </div></section>`;
  }
  if (service.slug === 'industria-4-0') {
    return `<section class="section ecosystem-section"><div class="container"><div class="section-heading center">${overline(extra.label)}<h2>${extra.title}</h2><p>${figmaTextAfter('industry',extra.title)}</p></div>
      <div class="ecosystem-grid">${extra.items.map(title=>`<article><h3><img src="${asset('7411-imgIntersectSquare.svg')}" alt="" /> + ${title}</h3><p>${figmaTextAfter('industry','+ '+title)}</p></article>`).join('')}</div>
    </div></section>`;
  }
  const icons = ['7216-imgMap01.svg','7216-imgBookOpen01.svg','7216-imgCubeOutline.svg','7216-imgLaptop02.svg','7216-imgImageIndentLeft.svg','7216-imgPackage.svg','7216-imgTool01.svg','7216-imgBarChart10.svg'];
  return `<section class="section extra-section extra-ux-ui-design"><div class="container"><div class="section-heading extra-heading-grid"><div>${overline(extra.label)}<h2>${extra.title}</h2></div><p>${figmaTextAfter('ux',extra.title)}</p></div>
    <div class="check-grid">${extra.items.map((x,i)=>`<div class="check-item"><img class="check-icon" src="${asset(icons[i])}" alt="" /><span>${x}</span></div>`).join('')}</div>
  </div></section>`;
}

function faqSection(service) {
  const isAI = service.slug === 'inteligencia-artificial';
  return `<section class="section faq-section"><div class="container faq-layout"><div>${overline(isAI ? 'DESMISTIFICANDO A IA' : 'FAQ')}<h2>${isAI ? 'Perguntas que todo gestor faz antes de decidir.' : 'Perguntas<br />Frequentes.'}</h2></div>
    <div class="faq-list">${service.faq.map((item,i)=>`<div class="faq-item ${i===0?'is-open':''}"><button class="faq-question" type="button" aria-expanded="${i===0?'true':'false'}" aria-controls="faq-${service.slug}-${i}">${item[0]} <span aria-hidden="true">⌄</span></button><div class="faq-answer" id="faq-${service.slug}-${i}" ${i===0?'':'inert'}><div><p>${item[1]}</p></div></div></div>`).join('')}</div>
  </div></section>`;
}

function servicePage(s) {
  return `${header()}<main>
    <section class="service-hero hero-${s.slug} container">${breadcrumbs([{label:'Soluções',href:'/solucoes'},{label:s.name}])}${overline(s.eyebrow)}<h1>${s.title}</h1><p>${s.lead}</p>${button('FALAR COM UM ESPECIALISTA')}</section>
    <section class="section service-intro"><div class="container intro-grid"><div>${overline('SOLUÇÃO ORBE')}<h2>${s.intro}</h2><p>${s.introText}</p></div>
      <div class="benefits">${s.benefits.map(b=>`<article><img class="benefit-icon" src="${asset('6585-imgTypeOutline.svg')}" alt="" /><div><h3>${b[0]}</h3><p>${b[1]}</p></div></article>`).join('')}</div>
    </div></section>
    ${s.slug === 'it-staff-augmentation' ? comparisonSection('staff') : detailSection(s)}
    ${s.slug === 'mobilidade-corporativa' ? comparisonSection('mobile') : ''}
    ${s.extra ? extraSection(s) : ''}
    <section class="proof-feature"><div class="container">${overline('PROVA SOCIAL')}<h2>${s.proofTitle}</h2><p>${s.proofText}</p><div class="proof-validation"><small>VALIDADO POR</small>${proofStrip(true,false)}</div></div></section>
    ${s.slug === 'fabrica-de-software' ? relatedCases() : ''}
    ${s.after ? s.slug === 'fabrica-de-software'
      ? `<section class="section after-section after-fabrica-de-software"><div class="container"><img class="after-image" src="${asset(s.after.image)}" alt="" /><div class="after-grid"><div><h2>${s.after.title}</h2>${button(s.after.linkText,s.after.link)}</div><div><p>${s.after.text} ${s.after.text2}</p></div></div></div></section>`
      : `<section class="section after-section after-${s.slug}"><div class="container">${overline(s.after.label)}<h2>${s.after.title}</h2><p>${s.after.text}</p>${s.after.text2 ? `<p>${s.after.text2}</p>` : ''}${button(s.after.linkText,s.after.link)}</div></section>`
      : ''}
    ${s.slug !== 'fabrica-de-software' ? relatedCases() : ''}
    ${s.faq ? faqSection(s) : ''}
    ${cta(s.cta, s.ctaText || 'Converse com um especialista para entender seu cenário e construir um caminho seguro para a sua operação.', 'Agendar Diagnóstico Estratégico.')}
  </main>${footer()}`;
}

function casesPage() {
  return `${header()}<main><section class="page-hero container">${overline('CASES')}<h1>Resultados que <em>provam</em> o<br /> que a tecnologia pode<br /> fazer pelo seu negócio.</h1><p>Cada projeto que entregamos começa com um problema real e termina com impacto mensurável. Aqui estão as histórias de quem confiou na Orbe Soft para transformar operação, produto e decisão em resultado.</p>${button('FALAR COM UM ESPECIALISTA')}</section>
    <section class="section cases-list"><div class="container"><h2>Encontre o case mais próximo da realidade da sua operação.</h2>
      <div class="filters"><input id="case-search" type="search" placeholder="Pesquisar cases" aria-label="Pesquisar cases" />
        ${filterDropdown('solution-filter','Filtrar por solução','Todas as soluções',[...new Set(cases.map(c=>c.category))])}
        ${filterDropdown('sector-filter','Filtrar por setor','Todos os setores',[...new Set(cases.map(c=>c.sector))])}
      </div><div class="case-grid listing" id="case-results">${listedCases.map(caseCard).join('')}</div><p class="empty-state" hidden>Nenhum case encontrado.</p>
    </div></section>
    <section class="proof-feature"><div class="container">${overline('MANIFESTO')}<h2>Cases não são portfólio. São evidência.</h2><p>${figmaTextAfter('cases','Cases não são portfólio. São evidência.')}</p><div class="proof-validation"><small>VALIDADO POR</small>${proofStrip(true,false)}</div></div></section>
    ${cta('Seu desafio pode ser o próximo case.', figmaTextAfter('cases','Seu desafio pode ser o próximo case.'))}
  </main>${footer()}`;
}

function caseDetailPage(item) {
  const tags = item.tags.map(tag => `<span>${tag}</span>`).join('<i aria-hidden="true"></i>');
  const stats = item.stats.map(([value, label]) => `<div><strong>${value}</strong><span>${label}</span></div>`).join('');
  const scenario = item.scenario.paragraphs.map(paragraph => `<p>${paragraph}</p>`).join('');
  const solutionCards = item.solution.cards.map(([title, text]) => `<article><h3>${title}</h3><p>${text}</p></article>`).join('');
  const impactCards = item.impact.cards.map(([title, text]) => `<article><strong>${title}</strong> ${text}</article>`).join('');
  return `${header()}<main><section class="case-detail-hero container">${breadcrumbs([{label:'Cases',href:'/cases'},{label:item.category,href:'/cases'},{label:item.headline}])}
    ${overline(item.category.toLocaleUpperCase('pt-BR'))}<h1>${item.headline}</h1>
    <p class="case-tags">${tags}</p>
    <img class="case-hero-image" src="${asset(item.image)}" alt="${item.category}: ${item.headline}" />
    <div class="stats">${stats}</div>
  </section>
  <div class="case-story-group"><section class="section story-section"><div class="container narrow">${overline('O CENÁRIO')}<h2>${item.scenario.title}</h2>${scenario}</div></section>
  <section class="section story-section"><div class="container narrow">${overline('A SOLUÇÃO')}<h2>${item.solution.title}</h2><p>${item.solution.lead}</p><div class="three-cards">${solutionCards}</div></div></section>
  <section class="section story-section"><div class="container narrow">${overline('O IMPACTO')}<h2>${item.impact.title}</h2><p>${item.impact.lead}</p><div class="three-cards impact">${impactCards}</div></div></section></div>
  ${cta('Seu desafio tem solução.', figmaTextAfter('caseDetail','Seu desafio tem solução.'))}
  ${relatedCases(item)}
  </main>${footer()}`;
}

function aboutPage() {
  const pillars = [['Visão de negócio','Toda decisão tecnológica precisa fazer sentido para a operação. Buscamos eficiência, escala, estabilidade e retorno mensurável sobre o investimento.'],['Transparência',figmaTextAfter('about','Transparência')],['Previsibilidade','Crescimento não combina com improviso. Nossa metodologia existe para reduzir incerteza, validar direção e sustentar a evolução com mais controle.']];
  const trajectory = figmaTextsAfter('about','Uma trajetória medida em resultados, não em promessas.',3);
  return `${header()}<main><section class="page-hero container">${overline('SOBRE A ORBESOFT')}<h1>Engenharia de software<br /> com visão de <em>negócio</em>.<br /> Desde o primeiro dia.</h1><p>${figmaTextAfter('about','SOBRE A ORBESOFT')}</p><div class="button-row">${button('CONHEÇA NOSSAS SOLUÇÕES','/solucoes')}${button('VER CASES DE SUCESSO','/cases','outline')}</div></section>
    <section class="section trajectory-section"><div class="container"><div class="trajectory-grid"><div>${overline('TRAJETÓRIA')}<h2>Uma trajetória medida em resultados, não em promessas.</h2><p>${trajectory[0]}</p></div><div class="trajectory-copy">${trajectory.slice(1).map(text=>`<p>${text}</p>`).join('')}</div></div>
      <div class="stats"><div><h3><strong>+300</strong> <span>Empresas atendidas</span></h3><p>De médias indústrias a grandes corporações como Jeep e Vale</p></div><div><h3><strong>+100</strong> <span>Produtos no mercado</span></h3><p>Iniciativas digitais estruturadas, validadas e lançadas com método.</p></div><div><h3><strong>+10M</strong> <span>de Usuários ativos</span></h3><p>A prova de que tecnologia bem feita é tecnologia que as pessoas adotam.</p></div></div>
    </div></section>
    <section class="section pillars-section"><div class="container"><div class="section-heading">${overline('NOSSOS PILARES')}<h2>O que nos diferencia não é o que fazemos. É como fazemos.</h2></div><div class="three-cards pillars">${pillars.map((p,i)=>`<article><img class="pillar-icon" src="${asset(['5243-imgEye.svg','5243-imgSearchRefraction.svg','5243-imgTrendUp.svg'][i])}" alt="" /><h3>${p[0]}</h3><p>${p[1]}</p></article>`).join('')}</div></div></section>
    <section class="dark-band manifesto"><div class="container">${overline('MANIFESTO')}<h2>Tecnologia, para nós, não é produto final.<br /> É alavanca estratégica.</h2><p>${figmaTextAfter('about','Manifesto')}</p><blockquote>“Trabalhamos com equipes que fazem perguntas difíceis antes de aceitar um escopo. Que validam antes de construir. Que entregam com documentação porque sabem que o software vai sobreviver ao projeto.”</blockquote><p>Um parceiro tecnológico de verdade não some após o deploy. Ele acompanha os resultados, ajusta a rota e escala junto com a operação do cliente.</p><p>É assim que a Orbesoft pensa. É assim que entregamos.</p></div></section>
    <section class="section about-trust"><div class="container"><div class="section-heading split">${overline('QUEM CONFIA')}<h2>Formados pelo padrão de exigência de quem não aceita improviso.</h2><div><p>Sistemas críticos de grandes indústrias não permitem erro de escopo, prazo estourado ou arquitetura frágil.</p><p>Foi atendendo esse nível de exigência que desenvolvemos os processos, a maturidade e a capacidade técnica que aplicamos em cada projeto hoje.</p></div></div>${proofStrip(false,false)}</div></section>
    ${cta('Quando a tecnologia impacta o negócio, a escolha do parceiro importa!', figmaTextAfter('about','a escolha do parceiro importa!'))}
  </main>${footer()}`;
}

function contactPage() {
  return `${header()}<main><section class="contact-section container">
    <div class="contact-intro">${overline('ENTRAR EM CONTATO')}<h1>Vamos desenhar a <em>solução ideal</em> para o seu desafio.</h1><p>Preencha os dados e nosso time fará um diagnóstico preliminar da sua operação para entender o cenário atual, identificar o principal gargalo e direcionar a rota tecnológica mais adequada para o seu negócio.</p></div>
    <form class="contact-form" id="contact-form">
      <label>Nome<input name="nome" type="text" placeholder="Seu nome completo" autocomplete="name" required /></label>
      <label>E-mail corporativo<input name="email" type="email" placeholder="nome@empresa.com.br" autocomplete="email" required /></label>
      <label>WhatsApp<input name="telefone" type="tel" placeholder="(00) 00000-0000" autocomplete="tel" required /></label>
      <label>Empresa<input name="empresa" type="text" placeholder="Nome da empresa" required /></label>
      <div class="form-field"><label id="challenge-label">Qual o seu principal desafio tecnológico hoje?</label><div class="form-select" data-form-select>
        <button class="form-select-trigger" type="button" aria-haspopup="listbox" aria-expanded="false" aria-labelledby="challenge-label challenge-value"><span id="challenge-value">Selecione</span><img src="${asset('nav-chevron-dark.svg')}" alt="" /></button>
        <div class="form-select-menu" role="listbox" aria-labelledby="challenge-label" inert>
          ${['Validar uma ideia','Desenvolver ou modernizar software','Aplicar Inteligência Artificial','Criar um aplicativo','Melhorar a experiência do usuário','Conectar a operação industrial','Expandir a equipe técnica'].map(value=>`<button type="button" role="option" aria-selected="false" data-value="${value}">${value}</button>`).join('')}
        </div>
        <select class="form-select-native" name="desafio" tabindex="-1" aria-hidden="true"><option value="">Selecione</option><option>Validar uma ideia</option><option>Desenvolver ou modernizar software</option><option>Aplicar Inteligência Artificial</option><option>Criar um aplicativo</option><option>Melhorar a experiência do usuário</option><option>Conectar a operação industrial</option><option>Expandir a equipe técnica</option></select>
      </div></div>
      <button type="submit" class="button solid">SOLICITAR DIAGNÓSTICO ESTRATÉGICO <span>→</span></button>
      <p>Um de nossos especialistas fará uma análise prévia do seu contexto e entrará em contato em até 1 dia útil.</p>
      <p id="form-status" role="status" hidden></p>
    </form>
  </section>
  <section class="section contact-direct"><div class="container"><div class="section-heading split"><h2>Precisa de um contato direto?</h2><p>${figmaTextAfter('contact','Precisa de um contato direto?')}</p></div>
    <div class="two-cards"><article><span class="contact-icon"><img src="${asset('7845-imgMessageChatCircle.svg')}" alt="" /></span><h3>Fale com a nossa equipe</h3><p>${figmaTextAfter('contact','Fale com a nossa equipe')}</p><a href="mailto:contato@orbesoft.com.br">contato@orbesoft.com.br</a></article>
      <article><span class="contact-icon"><img src="${asset('7845-imgPhone.svg')}" alt="" /></span><h3>Prefere uma conversa direta?</h3><p>${figmaTextAfter('contact','Prefere uma conversa direta?')}</p><a href="tel:+554888233780">+55 48 8823-3780</a></article></div>
  </div></section></main>${footer()}`;
}

function refineEditorial(markup) {
  return markup
    .replace(/(Passo 0\d) — /g, '$1: ')
    .replaceAll('desafio real — sistema legado travando', 'desafio real, como um sistema legado travando')
    .replaceAll('dados que não viram decisão — podemos', 'dados que não viram decisão. Podemos')
    .replaceAll('sistemas — para o campo', 'sistemas, seja para o campo')
    .replaceAll('operação — ordens de serviço', 'operação: ordens de serviço')
    .replaceAll('por trás — segurança', 'por trás: segurança')
    .replaceAll('com contexto — não jogamos', 'com contexto. Não jogamos')
    .replaceAll(' — escolha', '. Escolha')
    .replaceAll(' — é ', '. É ')
    .replaceAll(' — porque ', ', porque ')
    .replaceAll(' — ', ', ')
    .replaceAll('–', '-');
}

const path = new URLSearchParams(location.search).get('page') || '/';
let html = path === '/' || path === '/index.html' ? homePage()
  : path === '/solucoes' ? solutionsPage()
  : path === '/cases' ? casesPage()
  : cases.find(item => path === '/cases/' + item.slug) ? caseDetailPage(cases.find(item => path === '/cases/' + item.slug))
  : path === '/sobre' ? aboutPage()
  : path === '/contato' ? contactPage()
  : services.find(s=>servicePath(s)===path) ? servicePage(services.find(s=>servicePath(s)===path))
  : homePage();
const app = document.getElementById('app');
app.innerHTML = refineEditorial(`<div id="topo"></div>${html}`);
app.classList.add('route-entering');
document.title = (path === '/' ? 'Home' : path.split('/').filter(Boolean).pop().replaceAll('-', ' ')) + ' | Orbe Soft';
document.querySelectorAll('a[href^="/"]').forEach(link => {
  link.href = './index.html?page=' + encodeURIComponent(link.getAttribute('href'));
});

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', event => {
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    const target = document.getElementById(link.getAttribute('href').slice(1));
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
      block: 'start'
    });
  });
});

let pendingNavigation = 0;
document.addEventListener('click', event => {
  if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
  const link = event.target instanceof Element ? event.target.closest('a[href]') : null;
  if (!link || link.hasAttribute('download') || (link.target && link.target !== '_self')) return;
  const href = link.getAttribute('href');
  if (!href || href.startsWith('#')) return;
  const next = new URL(link.href, location.href);
  if (next.origin !== location.origin || !next.pathname.endsWith('/index.html') || !next.searchParams.has('page')) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  event.preventDefault();
  if (pendingNavigation) clearTimeout(pendingNavigation);
  app.classList.remove('route-entering');
  document.body.classList.add('is-navigating');
  pendingNavigation = window.setTimeout(() => location.assign(next.href), 190);
});
window.addEventListener('pageshow', event => {
  if (!event.persisted) return;
  app.classList.remove('route-entering');
  document.body.classList.remove('is-navigating');
});

// Suaviza a roda do mouse em todas as rotas, preservando rolagens internas e a preferência de movimento reduzido.
if (typeof window.matchMedia === 'function' && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  // Âncoras usam scrollIntoView com animação explícita. Na roda do mouse,
  // cada passo do requestAnimationFrame precisa atualizar a posição sem uma segunda animação do navegador.
  let wheelTarget = window.scrollY;
  let wheelFrame = 0;
  const hasScrollableParent = (target, delta) => {
    for (let element = target instanceof Element ? target : null; element && element !== document.body; element = element.parentElement) {
      const overflow = window.getComputedStyle(element).overflowY;
      const room = element.scrollHeight - element.clientHeight;
      if (/(auto|scroll)/.test(overflow) && room > 1 && ((delta > 0 && element.scrollTop < room - 1) || (delta < 0 && element.scrollTop > 1))) return true;
    }
    return false;
  };
  const advanceWheel = () => {
    const remaining = wheelTarget - window.scrollY;
    if (Math.abs(remaining) < 0.8) {
      window.scrollTo(0, wheelTarget);
      wheelFrame = 0;
      document.documentElement.style.scrollBehavior = '';
      return;
    }
    window.scrollTo(0, window.scrollY + remaining * 0.16);
    wheelFrame = requestAnimationFrame(advanceWheel);
  };
  window.addEventListener('wheel', event => {
    if (event.ctrlKey || event.metaKey || event.shiftKey || Math.abs(event.deltaX) > Math.abs(event.deltaY)) return;
    if (event.target?.closest?.('select, textarea, input, [contenteditable="true"]')) return;
    const scale = event.deltaMode === 1 ? 16 : event.deltaMode === 2 ? window.innerHeight : 1;
    const delta = event.deltaY * scale;
    if (Math.abs(delta) < 1 || (event.deltaMode === 0 && Math.abs(delta) < 50) || hasScrollableParent(event.target, delta)) return;
    event.preventDefault();
    if (!wheelFrame) wheelTarget = window.scrollY;
    const limit = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
    wheelTarget = Math.max(0, Math.min(limit, wheelTarget + delta));
    if (!wheelFrame) {
      document.documentElement.style.scrollBehavior = 'auto';
      wheelFrame = requestAnimationFrame(advanceWheel);
    }
  }, { passive: false });
  document.querySelectorAll('a[href^="#"]').forEach(link => link.addEventListener('click', () => {
    if (wheelFrame) cancelAnimationFrame(wheelFrame);
    wheelFrame = 0;
    document.documentElement.style.scrollBehavior = '';
  }));
}

const menuToggle = document.querySelector('.menu-toggle');
menuToggle?.addEventListener('click', () => {
  const open = document.querySelector('.main-nav').classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.textContent = open ? '✕' : '☰';
});

const siteHeader = document.querySelector('.site-header');
let lastScrollY = window.scrollY;
let scrollScheduled = false;
const updateHeader = () => {
  const y = Math.max(0, window.scrollY);
  const delta = y - lastScrollY;
  siteHeader?.classList.toggle('is-scrolled', y > 24);
  if (y < 110 || document.querySelector('.main-nav.open')) {
    siteHeader?.classList.remove('is-hidden');
  } else if (delta > 7) {
    siteHeader?.classList.add('is-hidden');
  } else if (delta < -7) {
    siteHeader?.classList.remove('is-hidden');
  }
  if (Math.abs(delta) > 7 || y < 110) lastScrollY = y;
  scrollScheduled = false;
};
window.addEventListener('scroll', () => {
  if (scrollScheduled) return;
  scrollScheduled = true;
  requestAnimationFrame(updateHeader);
}, { passive: true });
updateHeader();

document.querySelectorAll('.faq-list').forEach(list => {
  list.addEventListener('click', event => {
    const button = event.target.closest('.faq-question');
    if (!button || !list.contains(button)) return;
    const selected = button.closest('.faq-item');
    const wasOpen = selected.classList.contains('is-open');
    list.querySelectorAll('.faq-item').forEach(item => {
      const open = item === selected && !wasOpen;
      item.classList.toggle('is-open', open);
      item.querySelector('.faq-question').setAttribute('aria-expanded', String(open));
      item.querySelector('.faq-answer').inert = !open;
    });
  });
});

const filterCases = () => {
  const search = (document.getElementById('case-search')?.value || '').toLocaleLowerCase('pt-BR');
  const solution = document.getElementById('solution-filter')?.value || '';
  const sector = document.getElementById('sector-filter')?.value || '';
  const matches = listedCases.filter(c => (!search || (c.title+' '+c.description+' '+c.category).toLocaleLowerCase('pt-BR').includes(search)) && (!solution || c.category===solution) && (!sector || c.sector===sector));
  const results = document.getElementById('case-results');
  if (results) {
    results.innerHTML = refineEditorial(matches.map(caseCard).join(''));
    results.querySelectorAll('a[href^="/"]').forEach(link => {
      link.href = './index.html?page=' + encodeURIComponent(link.getAttribute('href'));
    });
  }
  const empty = document.querySelector('.empty-state');
  if (empty) empty.hidden = matches.length > 0;
};
['case-search','solution-filter','sector-filter'].forEach(id => document.getElementById(id)?.addEventListener(id==='case-search'?'input':'change', filterCases));

document.querySelectorAll('[data-form-select]').forEach(formSelect => {
  const trigger = formSelect.querySelector('.form-select-trigger');
  const menu = formSelect.querySelector('.form-select-menu');
  const native = formSelect.querySelector('.form-select-native');
  const options = [...menu.querySelectorAll('[role="option"]')];
  const setOpen = open => {
    formSelect.classList.toggle('is-open', open);
    trigger.setAttribute('aria-expanded', String(open));
    menu.inert = !open;
  };
  trigger.addEventListener('click', () => setOpen(!formSelect.classList.contains('is-open')));
  trigger.addEventListener('keydown', event => {
    if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      event.preventDefault();
      setOpen(true);
      options[event.key === 'ArrowDown' ? 0 : options.length - 1].focus();
    }
  });
  options.forEach(option => option.addEventListener('click', () => {
    native.value = option.dataset.value;
    trigger.querySelector('span').textContent = option.textContent;
    formSelect.classList.toggle('has-value', Boolean(native.value));
    trigger.removeAttribute('aria-invalid');
    options.forEach(item => item.setAttribute('aria-selected', String(item === option)));
    const status = document.getElementById('form-status');
    if (status) status.hidden = true;
    native.dispatchEvent(new Event('change', { bubbles: true }));
    setOpen(false);
    trigger.focus();
  }));
  menu.addEventListener('keydown', event => {
    if (event.key === 'Escape' || event.key === 'Tab') {
      setOpen(false);
      if (event.key === 'Escape') { event.preventDefault(); trigger.focus(); }
    } else if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      event.preventDefault();
      const index = options.indexOf(document.activeElement);
      options[(index + (event.key === 'ArrowDown' ? 1 : -1) + options.length) % options.length].focus();
    }
  });
  document.addEventListener('click', event => {
    if (!formSelect.contains(event.target)) setOpen(false);
  });
});

document.getElementById('contact-form')?.addEventListener('submit', (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const challenge = form.querySelector('.form-select-native');
  if (challenge && !challenge.value) {
    const trigger = form.querySelector('.form-select-trigger');
    trigger.setAttribute('aria-invalid', 'true');
    trigger.focus();
    const status = document.getElementById('form-status');
    status.hidden = false;
    status.textContent = 'Selecione o principal desafio tecnológico para continuar.';
    return;
  }
  if (!form.reportValidity()) return;
  const data = new FormData(form);
  const subject = encodeURIComponent('Diagnóstico Estratégico: '+data.get('empresa'));
  const body = encodeURIComponent(`Nome: ${data.get('nome')}\nE-mail: ${data.get('email')}\nWhatsApp: ${data.get('telefone')}\nEmpresa: ${data.get('empresa')}\nDesafio: ${data.get('desafio')}`);
  const status = document.getElementById('form-status');
  status.hidden = false;
  status.textContent = 'Seu aplicativo de e-mail será aberto com os dados preenchidos. Envie a mensagem para concluir o contato.';
  location.href = `mailto:contato@orbesoft.com.br?subject=${subject}&body=${body}`;
});
})();
