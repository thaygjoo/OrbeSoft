const fs = require('fs');
const vm = require('vm');
const mapping = {
  home:'/', about:'/sobre', contact:'/contato', solutions:'/solucoes',
  techstart:'/solucoes/techstart', factory:'/solucoes/fabrica-de-software',
  ai:'/solucoes/inteligencia-artificial', mobile:'/solucoes/mobilidade-corporativa',
  ux:'/solucoes/ux-ui-design', industry:'/solucoes/industria-4-0',
  staff:'/solucoes/it-staff-augmentation', cases:'/cases'
};
const copySource=fs.readFileSync('src/figma-copy.js','utf8');
const dataSource=fs.readFileSync('src/data.js','utf8');
const mainSource=fs.readFileSync('src/main.js','utf8');
const editorial=text=>text.replace(/(Passo 0\d) — /g,'$1: ').replaceAll('desafio real — sistema legado travando','desafio real, como um sistema legado travando').replaceAll('dados que não viram decisão — podemos','dados que não viram decisão. Podemos').replaceAll('sistemas — para o campo','sistemas, seja para o campo').replaceAll('operação — ordens de serviço','operação: ordens de serviço').replaceAll('por trás — segurança','por trás: segurança').replaceAll('com contexto — não jogamos','com contexto. Não jogamos').replaceAll(' — escolha','. Escolha').replaceAll(' — é ','. É ').replaceAll(' — porque ',', porque ').replaceAll(' — ',', ').replaceAll('–','-');
const normalize=text=>editorial(text).replace(/<[^>]*>/g,' ').replace(/&nbsp;/g,' ').replace(/&amp;/g,'&').replace(/\s+/g,' ').trim().toLowerCase();
if (/\[empresa\/setor\]|\[verbo de impacto\]|Descri[cç][aã]o em 2 linhas/.test(copySource + dataSource + mainSource)) {
  throw new Error('Conteúdo provisório presente nos arquivos do site');
}
const correctedTypos = { ai: new Set(['Inteligência Artifical']), about: new Set(['Processos validados por gigantes do mercado']) };
let failures = 0;
for(const [name,route] of Object.entries(mapping)){
  let html='';
  const app={set innerHTML(value){html=value}};
  const document={title:'',getElementById:id=>id==='app'?app:null,querySelectorAll:()=>[],querySelector:()=>null};
  const context={window:{scrollY:0,addEventListener:()=>{}},document,location:{search:'?page='+encodeURIComponent(route)},URLSearchParams,console};
  vm.createContext(context);
  vm.runInContext(copySource,context);
  vm.runInContext(dataSource,context);
  vm.runInContext(mainSource,context);
  const copy=context.window.FigmaCopy[name];
  const visible=normalize(html);
  const missing=[...new Set(copy.filter(line=>line.length>=20&&!visible.includes(normalize(line)) && !correctedTypos[name]?.has(line)))];
  if (/[—–]/.test(html) || /\[empresa\/setor\]|\[verbo de impacto\]|Descri[cç][aã]o em 2 linhas/.test(html)) {
    missing.push('Travessão ou conteúdo provisório ainda presente no HTML');
  }
  failures += missing.length;
  console.log(name+': '+(missing.length ? missing.length+' trechos ausentes' : 'cópia completa'));
  for(const line of missing) console.log(' - '+line.slice(0,180));
}
if (failures) process.exitCode = 1;
for (const slug of ['analise-operacional-ia','modernizacao-sistema-legado','redesign-fluxo-cadastro','monitoramento-industrial-tempo-real','ampliacao-capacidade-time-produto']) {
  let html = '';
  const app = {set innerHTML(value){html=value}};
  const document = {title:'',getElementById:id=>id==='app'?app:null,querySelectorAll:()=>[],querySelector:()=>null};
  const context = {window:{scrollY:0,addEventListener:()=>{}},document,location:{search:'?page='+encodeURIComponent('/cases/'+slug)},URLSearchParams,console};
  vm.createContext(context);
  vm.runInContext(copySource,context);
  vm.runInContext(dataSource,context);
  vm.runInContext(mainSource,context);
  if (!html.includes('O CENÁRIO') || !html.includes('A SOLUÇÃO') || !html.includes('O IMPACTO') || html.includes('inactive-link') || /\[cargo\]|[—–]/.test(html)) {
    console.error(slug+': conteúdo do case incompleto');
    process.exitCode = 1;
  } else console.log(slug+': apresentação completa');
}
