# Orbe Soft

Site estático em HTML, CSS e JavaScript. Abra `index.html` para revisar localmente. As páginas usam o parâmetro `?page=` na URL, de modo que a Vercel pode servir os arquivos diretamente sem etapa de build.

## Verificação

```sh
node verify-local.cjs
node audit-copy.cjs
```

## Publicação

Importe este repositório na Vercel como projeto estático. Use a raiz do repositório como diretório de publicação e deixe o comando de build vazio. Não é necessário configurar variáveis de ambiente.

O formulário de contato abre o aplicativo de e-mail do visitante com a mensagem preenchida. Ele não envia dados por um servidor.

Os cinco cases atuais são narrativas fictícias aceitas para a prévia. Consulte [CASES_EDITORIAL.md](CASES_EDITORIAL.md) antes de divulgar resultados como dados reais.
