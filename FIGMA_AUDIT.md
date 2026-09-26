# Auditoria de layout: Figma × HTML local

Referências: os 13 frames do arquivo `E8zKlOjX2xQBTUuWWhc8cg`, mais os nós `1:5742` (Home em tela menor), `1:5243` (pilares) e `1:7285` (processo UX/UI). Esta revisão compara estrutura, dimensões, colunas, espaçamentos, superfícies e componentes compartilhados. A revisão editorial posterior retirou o card provisório e os travessões do conteúdo exibido.

## Regras compartilhadas

| Elemento | Figma | HTML local após a revisão |
| --- | --- | --- |
| Área de conteúdo | 1.216 px no frame de 1.440 px, com margens de 112 px | `.container` de até 1.216 px centralizado |
| Cabeçalho | 94 px, blur de 6 px, fundo translúcido, logo de 126,8 × 30 px, links Inter 14 px | Dimensões, ícones, fonte e transparência ajustados; aparece ao subir a página |
| Breadcrumb | Ícone de início, divisores SVG de 20 px, gap de 12 px, item atual em marrom | Componente compartilhado nos serviços e no case, usando os SVGs do Figma |
| Faixa de marcas | Home em `#fff8f5`, logos em `#737373` e Gerdau na orientação correta | SVGs extraídos do frame, fundo, espaçamento e orientação ajustados |
| Prova social | “VALIDADO POR” centralizado verticalmente com os logos | Agrupamento flexível compartilhado |
| FAQ | Uma resposta aberta por vez | Abertura exclusiva e transição suave de altura e opacidade |
| Menus de seleção | Campos de 44 a 46 px, seta afastada da borda e menu claro com hover da marca | Contato e filtros de Cases usam lista própria com padding à direita, teclado e visual alinhado ao menu de Soluções |
| Cartões com linha superior | A interação destaca a linha | Sem elevação ou sombra em TechStart, UX/UI e cartões de linha da Home e de Soluções |
| Rodapé | Texto social legível sobre fundo escuro | Contraste corrigido; crédito completo para Yatsar Studio |

## Comparação por página

| Página e frame | Conferência de layout e ajuste |
| --- | --- |
| Home `1:5308` | A abertura de Soluções ocupa duas colunas da grade; Fábrica fecha a primeira linha. A faixa de marcas usa fundo, altura e espaçamento do frame. “Como trabalhamos” usa duas colunas de mesmo peso no desktop e os cartões empilhados do nó móvel `1:5742` em telas estreitas. |
| Sobre `1:5144` | A faixa “Processos validados...” após a hero foi removida como solicitado. A trajetória tem o primeiro parágrafo sob o título na coluna esquerda, dois à direita, título proporcional ao frame e métricas no laranja primário. “Quem confia” distribui os logos por toda a largura disponível. Os pilares seguem o nó `1:5243`, incluindo ícones, linha superior, padding e grade de três colunas. |
| Contato `1:7845` | Hero e formulário em duas colunas de mesmo tamanho com gap de 64 px; título de 72/88 px; formulário com padding de 32 px, campos de 44 px e cantos de 12 px. Cards de contato e espaçamentos da seção final ajustados. |
| Soluções `1:5845` | Hero com título de 72/88 px e largura de 1.008 px; introdução de 48/58 px. A grade tem três colunas e o último item ocupa a linha inteira, com texto empilhado como no frame. |
| TechStart `1:6585` | Perfis em quatro colunas com fundo transparente e linha superior; hover afeta somente a linha. O bloco “Fábrica de Software” usa toda a largura do conteúdo para título e parágrafos, como no nó `1:6756`. |
| Fábrica de Software `1:6371` | Hero com largura de título própria do frame, introdução em duas colunas com gap de 64 px e lista de sinais em duas colunas. As duas frases da seção de TechStart formam um único parágrafo, sem espaço extra entre elas. |
| Inteligência Artificial `1:6826` | Hero com largura específica de 823 px; seis cards de impacto em duas colunas e bordas arredondadas de 8 px. Legenda da prova social centralizada. |
| Mobilidade Corporativa `1:7021` | Grade de aplicações em duas colunas, último cartão na largura total. Introdução e hero seguem a régua compartilhada. |
| UX/UI Design `1:7216` | Processo do nó `1:7285` em três cartões na primeira linha e dois cartões que preenchem toda a segunda linha. Hover colore só a linha superior. |
| Indústria 4.0 `1:7411` | Lista de sinais em duas colunas, seguida dos cartões de conexão e da prova social na ordem do frame. Hero e introdução seguem a régua compartilhada. |
| IT Staff Augmentation `1:7621` | Hero com largura de título de 961 px; tabela comparativa e seis etapas de alocação em grade de três colunas. |
| Cases `1:5946` | Hero, grade de cases, filtros, manifesto e CTA seguem a ordem do frame; prova social com legenda centralizada. |
| Case de IA `1:6154` | Hero de 72/88 px e 800 px de largura; imagem em proporção 1.216 × 400 e métricas com linhas superiores independentes. Cenário, solução e impacto usam 1.216 px de largura e intervalo de 96 px; cartões e depoimento realinhados. |

## Revisão de largura dos textos

Nos frames de 1.440 px, os títulos de hero conservam as larguras específicas do Figma: IA 823 px, Mobilidade 800 px e IT Staff 961 px. Em janelas intermediárias, o tamanho das fontes passa a acompanhar a largura disponível para preservar as quebras de linha e o peso visual do frame. Os títulos de seção seguem 48 px no frame original.

- Impacto de IA: abertura de 800 px para título e descrição.
- Comparativos de Mobilidade e IT Staff: títulos com até 1.008 px.
- Prova social, manifesto e CTA: títulos com até 1.008 px.
- UX/UI, “O que entregamos”: título à esquerda e descrição à direita em duas colunas, conforme a preferência indicada; em telas estreitas, as colunas se empilham.

## Verificação local

- `node --check src/main.js`: sintaxe válida.
- `node audit-copy.cjs`: os textos previstos aparecem nas 13 rotas, exceto as faixas e os campos provisórios removidos por solicitação explícita. A checagem também rejeita travessões no HTML exibido e conteúdo provisório tanto no HTML quanto nos arquivos de conteúdo.
- `node verify-local.cjs`: 13 rotas geradas sem conteúdo indefinido; todos os assets e fontes referenciados existem localmente.
- O navegador integrado bloqueou a inspeção automatizada de `file://`. A comparação visual desta etapa usou capturas dos nós do Figma e inspeção de HTML/CSS; a renderização local não foi medida por sobreposição de pixels.
