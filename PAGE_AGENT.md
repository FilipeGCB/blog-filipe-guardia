# PageAgent no Blog do Filipe

## Estado atual

A integração é uma **prévia técnica** do PageAgent para o site estático publicado no GitHub Pages.

- O agente não é carregado automaticamente.
- Um cartão explica o recurso e pede ativação explícita.
- O script externo só é baixado após o clique do visitante.
- Nenhuma chave de API foi adicionada ao repositório.
- A versão oficial de demonstração está fixada em `1.8.1` para evitar mudanças inesperadas.

## Como testar

1. Abra o Blog do Filipe.
2. Aguarde o cartão **Explorar o site com IA** aparecer no canto inferior.
3. Clique em **Ativar agente experimental**.
4. Use o painel criado pelo PageAgent para pedir ações na página, por exemplo:
   - `Encontre os artigos sobre agentes de IA.`
   - `Leve-me até a seção de projetos.`
   - `Mostre onde Filipe explica sua experiência profissional.`

## Configuração

A configuração fica em `site-config.js`, no objeto `pageAgent`.

Para ocultar completamente o recurso:

```js
pageAgent: {
  enabled: false
}
```

O comportamento e o cartão de ativação ficam isolados em `page-agent-loader.js`. O próprio `site-config.js` conecta esse carregador às páginas existentes, evitando a necessidade de editar cada HTML individualmente.

## Limite desta versão

O arquivo `page-agent.demo.js` usa o serviço de teste oferecido pelo projeto PageAgent e deve ser tratado apenas como avaliação técnica. O visitante recebe esse aviso antes da ativação.

Além disso, o PageAgent opera principalmente sobre a página atual. Navegação autônoma entre páginas exige uma arquitetura adicional, como a extensão do projeto ou outra camada de orquestração.

## Caminho recomendado para produção

Como o blog é estático, uma chave de modelo não pode ser gravada no JavaScript público. A versão de produção deve usar um endpoint intermediário controlado, por exemplo uma função serverless, com:

- chave armazenada como segredo no servidor;
- limite de requisições e orçamento;
- validação de origem do blog;
- modelos e ações permitidos explicitamente;
- registro de erros e consumo;
- bloqueio de instruções que tentem sair do escopo do site;
- aviso de privacidade e consentimento compatíveis com o uso real.

Depois disso, o carregador pode usar a distribuição do PageAgent sem inicialização automática e criar uma instância apontando para esse endpoint protegido.