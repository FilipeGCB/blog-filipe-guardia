export interface PortableGuide {
  id: string;
  slug: string;
  category: string;
  title: string;
  summary: string;
  activateWhen: string;
  inputs: string;
  process: string[];
  delivery: string;
  quality: string;
  examples: string[];
}

export const guideCompatibility = ['ChatGPT', 'Copilot', 'Claude', 'outros assistentes com contexto Markdown'] as const;

export const portableGuides: PortableGuide[] = [
  {
    id: 'A01', slug: 'plataforma-aprendizagem', category: 'Aprendizagem & experiências',
    title: 'Plataformas de Aprendizagem Interativa',
    summary: 'Transforma um curso já estruturado em uma aplicação com prática, feedback, progresso e evidência de domínio.',
    activateWhen: 'Já existem curso, competências e conteúdo e você quer transformar isso em uma experiência de aprendizagem funcional.',
    inputs: 'Curso, público, competências, critérios de domínio e restrições técnicas.',
    process: ['Definir o estágio: desenho, vertical slice, pronto para piloto ou release.', 'Separar arquitetura pedagógica da implementação.', 'Construir primeiro uma fatia vertical.', 'Validar prática, feedback, progresso, acessibilidade e persistência.'],
    delivery: 'Aplicação ou fatia funcional, matriz de cobertura e evidências de teste.',
    quality: 'Sem participantes reais, declarar “pronto para piloto”, nunca “validado”.',
    examples: ['Transforme esta formação em uma plataforma interativa.', 'Crie uma vertical slice do módulo 1 com prática e feedback.']
  },
  {
    id: 'A03', slug: 'data-stories', category: 'Aprendizagem & experiências',
    title: 'Data Stories Interativas',
    summary: 'Transforma relatório ou estudo em narrativa analítica rastreável e acessível.',
    activateWhen: 'Há uma pergunta decisória, métricas definidas e fontes rastreáveis; não use quando os números ainda não reconciliam.',
    inputs: 'Pergunta, dados, métricas, definições, fontes, período e público.',
    process: ['Validar qualidade e definições.', 'Separar fatos, interpretações e recomendações.', 'Organizar uma sequência de evidências.', 'Oferecer tabela ou dado subjacente para cada visual principal.'],
    delivery: 'Data story, inventário de evidências, tabelas e limitações.',
    quality: 'Sem verdade analítica certificada, entregar análise de lacunas, não narrativa conclusiva.',
    examples: ['Transforme este relatório em uma narrativa de decisão.', 'Conte a história destes dados sem perder a rastreabilidade.']
  },
  {
    id: 'A09', slug: 'grafo-organizacional', category: 'Aprendizagem & experiências',
    title: 'Grafo do Cérebro Organizacional',
    summary: 'Organiza documentos e relações em navegação por árvore, busca, backlinks, órfãos e links quebrados.',
    activateWhen: 'Existe uma fonte autorizada de arquivos ou notas e entender as relações entre os conteúdos importa.',
    inputs: 'Modo de acesso, fontes autorizadas, tipos de entidade, relações e privacidade.',
    process: ['Declarar o modo real de acesso.', 'Começar por Markdown, árvore, busca, backlinks, órfãos e links quebrados.', 'Construir uma vertical slice antes de novos conectores.'],
    delivery: 'Índice, modelo do grafo, busca, navegação e cobertura.',
    quality: 'Nunca afirmar acesso a pasta, repositório ou fonte corporativa sem acesso real.',
    examples: ['Organize estas notas como um mapa navegável de conhecimento.', 'Encontre documentos órfãos e relações quebradas neste acervo.']
  },
  {
    id: 'A12', slug: 'sites-cinematograficos', category: 'Aprendizagem & experiências',
    title: 'Sites Cinematográficos e Experiências Web Animadas',
    summary: 'Produz sites narrativos com direção visual, movimento intencional, progressive enhancement e acessibilidade.',
    activateWhen: 'Narrativa e emoção fazem parte do objetivo; não use quando animação seria apenas decoração.',
    inputs: 'Objetivo, público, narrativa, conteúdo, referências visuais e limites de publicação.',
    process: ['Definir tese visual e cenas.', 'Construir conteúdo funcional sem animação.', 'Adicionar movimento com propósito.', 'Implementar reduced motion e fallbacks.'],
    delivery: 'Site funcional, direção visual e evidências desktop/mobile.',
    quality: 'Movimento deve servir à narrativa e nunca impedir acessibilidade ou leitura.',
    examples: ['Transforme este conteúdo em um site narrativo de alto impacto.', 'Crie uma experiência web animada com fallback acessível.']
  },
  {
    id: 'A14', slug: 'experiencias-3d', category: 'Aprendizagem & experiências',
    title: 'Experiências 3D na Web',
    summary: 'Cria aplicações 3D somente quando profundidade ou posição carregam significado.',
    activateWhen: 'O eixo Z ajuda a compreender relações; não use 3D apenas por espetáculo quando 2D for mais claro.',
    inputs: 'Significado espacial, dados, dispositivos-alvo e limites de GPU e acessibilidade.',
    process: ['Executar capability check.', 'Justificar o uso de 3D.', 'Projetar cena, câmera e interação.', 'Entregar alternativa 2D equivalente.', 'Adaptar qualidade ao dispositivo.'],
    delivery: 'Experiência 3D, fallback 2D e relatório de compatibilidade.',
    quality: '3D precisa melhorar a compreensão e ter alternativa acessível.',
    examples: ['Visualize estas relações em 3D porque a profundidade é parte do dado.', 'Projete uma experiência WebGL com fallback 2D equivalente.']
  },
  {
    id: 'A15', slug: 'leitor-documentos', category: 'Aprendizagem & experiências',
    title: 'Leitor de Documentos e Experiência de Leitura',
    summary: 'Projeta leitura segura e confortável para formatos declaradamente suportados.',
    activateWhen: 'Busca, outline, histórico e modos de leitura agregam valor ao consumo de documentos.',
    inputs: 'Formatos, exemplos, fidelidade necessária, ambiente browser-only ou serviço e regras de privacidade.',
    process: ['Classificar cada formato por capacidade real.', 'Separar browser-only de conversores de servidor.', 'Proteger contra conteúdo ativo.', 'Testar amostras reais.'],
    delivery: 'Matriz de suporte, leitor para formatos reais e registro de perdas ou limitações.',
    quality: 'Nunca prometer suporte universal a formatos que não foram realmente testados.',
    examples: ['Crie um leitor web para estes documentos com busca e outline.', 'Defina quais formatos podem ser lidos com segurança neste ambiente.']
  },
  {
    id: 'A16', slug: 'engenharia-cursos', category: 'Aprendizagem & experiências',
    title: 'Engenharia de Cursos Baseados em Evidências',
    summary: 'Transforma necessidade e corpus em competências, avaliações, currículo, práticas e pilotagem.',
    activateWhen: 'O curso ainda precisa ser projetado; não use apenas para construir a interface de um curso pronto.',
    inputs: 'Problema de desempenho, público, fontes, restrições e competências conhecidas.',
    process: ['Separar diagnóstico, desenho, produção, piloto e manutenção.', 'Projetar tarefas autênticas e avaliações antes das aulas.', 'Produzir currículo e práticas.', 'Definir piloto, transferência e governança.'],
    delivery: 'Mapa de competências, currículo, avaliações e plano de piloto.',
    quality: 'Não declarar transferência de aprendizagem sem aplicação real.',
    examples: ['Projete este curso a partir das competências que a pessoa precisa demonstrar.', 'Crie currículo e avaliações antes de escrever as aulas.']
  },
  {
    id: 'O01', slug: 'artefatos-web', category: 'Aprendizagem & experiências',
    title: 'Artefatos Web Visuais e Interativos',
    summary: 'Constrói sites, dashboards, simuladores e experiências HTML com comportamento real.',
    activateWhen: 'O entregável principal é web e a interação importa; não use para entregar apenas um mockup de um sistema funcional.',
    inputs: 'Objetivo, público, conteúdo ou dados, referências visuais e restrições técnicas.',
    process: ['Definir comportamento e aceite.', 'Construir HTML semântico.', 'Implementar interação progressivamente.', 'Testar responsividade, teclado e erros.'],
    delivery: 'Artefato funcional, arquivos organizados, instruções de execução e relatório de testes.',
    quality: 'Interações críticas devem ser demonstradas por evidência de teste.',
    examples: ['Crie um dashboard HTML funcional a partir destes dados.', 'Transforme este briefing em um simulador web interativo.']
  },
  {
    id: 'O02', slug: 'documentos-office', category: 'Dados, pesquisa & documentos',
    title: 'Documentos, Comunicação e Arquivos Office',
    summary: 'Produz ou melhora documentos, apresentações, PDFs e comunicações com método editorial e validação do arquivo.',
    activateWhen: 'O entregável é documento, apresentação, PDF ou comunicação e estrutura, clareza e acabamento importam.',
    inputs: 'Modo dominante, público, objetivo, tom, conteúdo, referências e regras de identidade/confidencialidade.',
    process: ['Selecionar um único modo dominante.', 'Detectar se o ambiente pode gerar, abrir e validar o arquivo.', 'Produzir estrutura e conteúdo.', 'Gerar o formato quando possível.', 'Validar legibilidade, layout e integridade.'],
    delivery: 'Arquivo ou texto final, modo usado, limitações de geração/validação e checklist editorial.',
    quality: 'Não afirmar que abriu ou validou um arquivo sem capacidade ou evidência real.',
    examples: ['Crie uma apresentação executiva.', 'Transforme estas notas em um documento profissional.']
  },
  {
    id: 'O03', slug: 'dados-analytics', category: 'Dados, pesquisa & documentos',
    title: 'Dados, Analytics, Planilhas e Dashboards',
    summary: 'Conduz da pergunta de negócio à validação dos dados, cálculo, análise e visualização.',
    activateWhen: 'Há uma pergunta de negócio, dados disponíveis e a resposta precisa ser auditável.',
    inputs: 'Pergunta e decisão, dados e dicionário, período e filtros, regras de cálculo e reconciliação.',
    process: ['Definir pergunta e métricas.', 'Fazer profiling e checar qualidade.', 'Calcular e reconciliar.', 'Analisar hipóteses e segmentos.', 'Visualizar sem alterar a verdade analítica.'],
    delivery: 'Análise reproduzível, cálculos, evidências, dashboard/tabela quando solicitado e limitações.',
    quality: 'Não ocultar inconsistências; separar dado, interpretação e recomendação.',
    examples: ['Analise esta planilha e encontre os principais drivers.', 'Crie um dashboard depois de validar os cálculos.']
  },
  {
    id: 'O04', slug: 'pesquisa-sintese', category: 'Dados, pesquisa & documentos',
    title: 'Pesquisa, Busca, Inteligência e Síntese',
    summary: 'Pesquisa fontes, reconstrói evidências, trata conflitos e entrega síntese com confiança explícita.',
    activateWhen: 'A resposta depende de fontes externas ou corporativas, há risco de informação desatualizada ou é preciso comparar versões.',
    inputs: 'Pergunta, escopo, fontes disponíveis/autorizadas, recorte temporal e critérios de qualidade.',
    process: ['Declarar fontes e conectores realmente disponíveis.', 'Buscar fontes primárias e atuais.', 'Separar fato, inferência e lacuna.', 'Comparar conflitos e datas.', 'Sintetizar com citações e confiança.'],
    delivery: 'Resposta ou relatório fundamentado, mapa de fontes, conflitos/lacunas e próximos passos.',
    quality: 'Não inventar acesso a fontes; citar afirmações materiais e respeitar temporalidade.',
    examples: ['Pesquise a documentação oficial e monte uma síntese.', 'Compare o que mudou entre estas versões.']
  },
  {
    id: 'O05', slug: 'operacoes-riscos', category: 'Operações & governança',
    title: 'Operações, Processos, Riscos e Compliance',
    summary: 'Reconstrói trabalho real, exceções, controles, responsabilidades e evidências.',
    activateWhen: 'É necessário documentar, melhorar ou auditar um processo real.',
    inputs: 'Objetivo, atores, etapas, sistemas, exceções, riscos, controles e indicadores.',
    process: ['Mapear o fluxo real, não apenas o ideal.', 'Explicitar entradas, decisões, exceções e saídas.', 'Definir controles, responsáveis e evidências.', 'Produzir procedimento, runbook ou matriz adequada.'],
    delivery: 'Processo executável, RACI, riscos, controles e governança.',
    quality: 'Regras não confirmadas devem ficar explicitamente como “a validar”.',
    examples: ['Reconstrua este processo com exceções, controles e responsáveis.', 'Crie um runbook executável a partir deste fluxo operacional.']
  },
  {
    id: 'O13', slug: 'paginas-vivas', category: 'Operações & governança',
    title: 'Páginas Vivas, Briefings e Governança de Projetos',
    summary: 'Mantém status, decisões, riscos, prioridades e mudanças por delta.',
    activateWhen: 'O projeto muda com o tempo e precisa preservar histórico, responsáveis e estado atual.',
    inputs: 'Fontes, responsáveis, estado atual, marcos, riscos e cadência.',
    process: ['Definir esquema reutilizável.', 'Registrar estado e data de corte.', 'Atualizar por delta.', 'Destacar decisões, bloqueios e responsáveis.'],
    delivery: 'Página viva, registro de decisões, riscos, prioridades e changelog.',
    quality: 'Nunca apagar histórico silenciosamente.',
    examples: ['Transforme este projeto em uma página viva de acompanhamento.', 'Atualize o briefing apenas com o delta desde a última versão.']
  },
  {
    id: 'O14', slug: 'modificadores-qualidade', category: 'Operações & governança',
    title: 'Modificadores de Explicação, Aprendizagem e Verificação',
    summary: 'Adiciona explicação, ensino ou revisão adversarial a uma habilidade principal.',
    activateWhen: 'O usuário quer aprender ou a solução precisa ser desafiada; use sempre junto de um método principal.',
    inputs: 'Habilidade principal, objetivo da revisão e nível de explicação/verificação desejado.',
    process: ['Selecionar somente o modificador necessário.', 'Aplicar após o método principal.', 'Registrar achados e correções provocadas pela revisão.'],
    delivery: 'Explicação, plano de aprendizagem ou revisão adversarial com mudanças e incertezas.',
    quality: 'Não usar o modificador como substituto de uma habilidade principal.',
    examples: ['Explique passo a passo a solução que você acabou de construir.', 'Faça uma revisão adversarial desta análise antes de fechar.']
  },
  {
    id: 'O16', slug: 'comparacao-historias', category: 'Operações & governança',
    title: 'Comparação de Histórias, Parecer e E-mail HTML',
    summary: 'Compara versões, identifica mudanças e impactos, produz parecer e comunicação.',
    activateWhen: 'Existem versões comparáveis e uma decisão ou comunicação depende das diferenças.',
    inputs: 'Versões, datas, critério de comparação, público e decisão.',
    process: ['Normalizar escopo e versões.', 'Comparar fato a fato.', 'Separar mudança, impacto e opinião.', 'Produzir matriz, parecer e comunicação.'],
    delivery: 'Matriz comparativa, parecer, comunicação e lacunas.',
    quality: 'Não inventar a intenção de quem alterou o documento.',
    examples: ['Compare estas duas versões e mostre o impacto das mudanças.', 'Gere um parecer e um e-mail claro a partir desta comparação.']
  },
  {
    id: 'O06', slug: 'produto-mercado', category: 'Produto, finanças & estratégia',
    title: 'Produto, Mercado, Vendas e Marketing',
    summary: 'Estrutura descoberta, proposta de valor, PRD, oferta, entrada no mercado ou vendas.',
    activateWhen: 'Existe uma decisão de produto, mercado, vendas ou marketing; escolha um modo dominante por rodada.',
    inputs: 'Modo dominante, problema, público, objetivo, evidências, estágio e restrições.',
    process: ['Selecionar o modo dominante.', 'Adicionar apenas módulos secundários indispensáveis.', 'Separar hipótese de evidência.', 'Produzir o artefato do modo.', 'Definir testes e métricas.'],
    delivery: 'PRD, análise, oferta, GTM ou playbook com hipóteses, experimentos, métricas, riscos e decisões.',
    quality: 'Não tentar executar quatro disciplinas inteiras na mesma rodada.',
    examples: ['Transforme esta hipótese em um PRD testável.', 'Estruture a oferta e o menor experimento para validar o mercado.']
  },
  {
    id: 'O07', slug: 'financas-cfo', category: 'Produto, finanças & estratégia',
    title: 'Finanças, CFO e Pequenos Negócios',
    summary: 'Organiza transações, conciliação, fechamento, caixa, margem e decisões gerenciais.',
    activateWhen: 'Há dados financeiros e necessidade de análise gerencial.',
    inputs: 'Extratos, faturas ou registros, período, entidades, categorias e regras conhecidas.',
    process: ['Normalizar preservando origem.', 'Classificar com confiança e revisão.', 'Conciliar saldos e totais.', 'Separar visão gerencial de obrigação fiscal.', 'Entregar análises e pendências.'],
    delivery: 'Base conciliada, fluxo de caixa, margem ou fechamento com pendências e nível de confiança.',
    quality: 'Sem reconciliação, declarar “não validado”; não substituir orientação contábil ou fiscal profissional.',
    examples: ['Concilie estas transações e mostre as pendências.', 'Monte uma visão gerencial de caixa e margem a partir destes registros.']
  },
  {
    id: 'O15', slug: 'conselho-diretor', category: 'Produto, finanças & estratégia',
    title: 'Conselho Diretor e Decisões Estratégicas',
    summary: 'Avalia ideias, projetos, negócios e investimentos por lentes especializadas antes do veredito.',
    activateWhen: 'Há escolha relevante, trade-off ou compromisso de recursos.',
    inputs: 'Decisão concreta, objetivo, horizonte, restrição dominante, materiais e opções conhecidas.',
    process: ['Formular a decisão.', 'Escolher de quatro a seis lentes relevantes.', 'Analisar cada lente isoladamente.', 'Comparar opções reais, incluindo não agir.', 'Emitir veredito, condições e menor teste que reduza a incerteza.'],
    delivery: 'Síntese executiva, convergências, divergências, recomendação, condições e próximos passos.',
    quality: 'Quando um único modelo simula perspectivas, chamar de “lentes isoladas”, não agentes independentes.',
    examples: ['Avalie esta decisão de investimento por lentes distintas.', 'Compare estas opções e diga qual menor teste reduz a incerteza principal.']
  },
  {
    id: 'O08A', slug: 'pessoas-rh', category: 'Pessoas & atendimento',
    title: 'Pessoas e RH',
    summary: 'Apoia onboarding, competências, desenvolvimento, feedback e comunicação com revisão humana.',
    activateWhen: 'O modo é claramente RH e existem políticas, critérios e responsável humano pela revisão.',
    inputs: 'Modo RH, políticas, critérios, público, contexto, dados autorizados e responsável pela revisão.',
    process: ['Declarar o modo exclusivo.', 'Minimizar dados pessoais.', 'Produzir apoio, nunca decisão autônoma.', 'Identificar vieses e impactos.', 'Encaminhar alto impacto para revisão humana.'],
    delivery: 'Material de onboarding, mapa de competências, feedback ou plano com riscos e limitações.',
    quality: 'Não inferir atributos sensíveis nem automatizar decisões de alto impacto sobre pessoas.',
    examples: ['Estruture este onboarding com critérios claros de domínio.', 'Ajude a preparar um feedback para revisão humana.']
  },
  {
    id: 'O08B', slug: 'atendimento-suporte', category: 'Pessoas & atendimento',
    title: 'Atendimento, Suporte e Conhecimento',
    summary: 'Organiza tickets, triagem, escalonamento, respostas e base de conhecimento.',
    activateWhen: 'Há solicitações, incidentes ou dúvidas recorrentes e políticas de prioridade/escalonamento.',
    inputs: 'Canais, tipos de solicitação, SLA, prioridade, escalonamento, base de conhecimento e limites de ação.',
    process: ['Declarar modo exclusivo de suporte.', 'Classificar impacto e urgência.', 'Propor resposta ou ação segura.', 'Escalar quando necessário.', 'Registrar solução reutilizável.'],
    delivery: 'Triagem, resposta, escalonamento, artigo de conhecimento e lacunas.',
    quality: 'Não inventar política, SLA ou autorização.',
    examples: ['Triagem estes tickets e proponha o escalonamento correto.', 'Transforme as soluções recorrentes em uma base de conhecimento.']
  },
  {
    id: 'O09', slug: 'engenharia-software', category: 'Software & agentes',
    title: 'Engenharia de Software, Entrega e Qualidade',
    summary: 'Implementa, depura, testa e entrega código com evidência.',
    activateWhen: 'Existe código, repositório ou especificação e um comportamento esperado que precisa ser implementado ou corrigido.',
    inputs: 'Repositório/arquivos, comportamento esperado, ambiente, restrições e testes existentes.',
    process: ['Reproduzir ou definir o comportamento.', 'Fazer a menor mudança segura.', 'Executar testes disponíveis.', 'Coletar evidências.', 'Revisar diff, risco e rollback.'],
    delivery: 'Código ou patch, testes, evidências, resumo e riscos.',
    quality: 'Não declarar teste sem comando, relatório, screenshot, log ou matriz manual equivalente.',
    examples: ['Corrija este bug e prove com teste de regressão.', 'Implemente esta feature com a menor mudança segura e valide o diff.']
  },
  {
    id: 'O10', slug: 'seguranca-legado', category: 'Software & agentes',
    title: 'Segurança e Modernização de Legados',
    summary: 'Contesta achados e moderniza preservando regras de negócio e equivalência.',
    activateWhen: 'O modo dominante é segurança ou modernização e existem evidências, autorização e critérios de equivalência.',
    inputs: 'Modo, evidências, código, arquitetura, regras de negócio e limites de teste.',
    process: ['Selecionar o modo exclusivo.', 'Reproduzir com segurança.', 'Desafiar falsos positivos quando houver evidência.', 'Definir mudança mínima ou equivalência.', 'Testar e registrar risco residual.'],
    delivery: 'Parecer ou plano, prova de equivalência, testes, risco residual e rollback.',
    quality: 'Ações ofensivas, destrutivas ou não autorizadas ficam fora do método.',
    examples: ['Revise este achado de segurança antes de aceitar a correção.', 'Modernize este módulo preservando as regras de negócio e prove equivalência.']
  },
  {
    id: 'O11', slug: 'contexto-skills', category: 'Software & agentes',
    title: 'Contexto, Instruções, Automação e Skills',
    summary: 'Cria, audita, versiona e testa instruções, skills e automações.',
    activateWhen: 'Um método precisa virar instrução reutilizável ou uma biblioteca de instruções precisa de governança.',
    inputs: 'Objetivo, público, ambiente, capacidades, instruções existentes e casos positivos/negativos.',
    process: ['Definir contrato e limites.', 'Remover pressupostos sobre ferramentas.', 'Separar referência extensa de instrução compacta.', 'Testar ativação e não ativação.', 'Versionar e registrar changelog.'],
    delivery: 'Skill/instrução, testes, conflitos, versão e governança.',
    quality: 'Uma instrução só está pronta quando há critérios claros de ativação, limites e teste.',
    examples: ['Transforme este método em uma skill reutilizável.', 'Audite estas instruções e encontre conflitos ou ativações indevidas.']
  },
  {
    id: 'O12', slug: 'agentes-apis-mcp', category: 'Software & agentes',
    title: 'Agentes, APIs, MCP e Integrações',
    summary: 'Projeta integrações com contratos, segurança, observabilidade e documentação atual.',
    activateWhen: 'Sistemas, ferramentas, agentes, APIs ou MCP precisam se integrar de forma confiável.',
    inputs: 'Objetivo, fronteiras, sistemas, documentação, autenticação, dados, limites e falhas esperadas.',
    process: ['Verificar documentação oficial atual.', 'Definir contratos, permissões e responsabilidades.', 'Criar ferramentas pequenas e auditáveis.', 'Projetar erros, confirmações e observabilidade.', 'Testar sucesso, negação e falhas.'],
    delivery: 'Arquitetura, contratos, código/configuração, testes, riscos e operação.',
    quality: 'Usar menor privilégio e confirmação para ações críticas; não gerar implementação version-dependent sem documentação atual.',
    examples: ['Projete esta integração via MCP com contratos e permissões explícitas.', 'Conecte este agente a uma API com observabilidade e tratamento de falhas.']
  }
];

export const guideCategories = [...new Set(portableGuides.map((guide) => guide.category))];

if (portableGuides.length !== 24) {
  throw new Error(`Portable guide catalog must contain 24 guides, found ${portableGuides.length}`);
}
