document.addEventListener('DOMContentLoaded', () => {

  'use strict';

  // ==========================================
  // SEU CONTEÚDO AQUI — Edite estes arrays
  // ==========================================
  // fases: 'fase-1' | 'fase-2' | 'fase-3'
  // tipos: 'historia' (texto) | 'foto' (imagem em assets/img/)
  // Para fotos: coloque a imagem em assets/img/ e use
  //   tipo: 'foto', imagem: 'assets/img/nome.jpg', alt: 'descrição'
  const MEMORIAS = [
    // ============================================
    // MEMÓRIA 1 — Imagem 4: Pré-escola (2014)
    // ============================================
    {
      id: 1,
      fase: 'pre-escola',
      tipo: 'historia',
      ano: '2014',
      titulo: 'O primeiro dia no prézinho',
      conteudo: `
        <div style="width:100%;border-bottom:1px solid var(--line);margin-bottom:1rem;overflow:hidden;">
          <img src="assets/img/4.jpeg" alt="Primeiro dia do prézinho, 2014" class="memoria-imagem" loading="lazy" style="display:block;width:100%;height:auto;max-height:320px;object-fit:contain;filter:grayscale(.35) contrast(1.1);">
        </div>
        <strong>O primeiro dia no prézinho.</strong> Eu era pequenininha, com a mochila quase do meu tamanho e o coração batendo forte. Lembro da professora recebendo com um sorriso, do cheiro de giz de cera novo e daquela soneca após o almoço, deitada num colchonete colorido enquanto o mundo lá fora ainda não fazia ideia de quem eu seria. Foi onde tudo começou: a primeira amizade, o primeiro desenho pendurado na parede e a certeza de que a escola podia ser um lugar acolhedor. Cada risinho daquela turminha ainda ecoa em mim.
      `
    },

    // ============================================
    // MEMÓRIA 2 — Imagem 5: Ensino Fundamental (2015–2019)
    // ============================================
    {
      id: 2,
      fase: 'fundamental',
      tipo: 'historia',
      ano: '2015—2019',
      titulo: 'Anos de aprendizado no fundamental',
      conteudo: `
        <div style="width:100%;border-bottom:1px solid var(--line);margin-bottom:1rem;overflow:hidden;">
          <img src="assets/img/5.jpeg" alt="Ensino Fundamental, 2015-2019" class="memoria-imagem" loading="lazy" style="display:block;width:100%;height:auto;max-height:320px;object-fit:contain;filter:grayscale(.35) contrast(1.1);">
        </div>
        <strong>Anos de aprendizado no fundamental.</strong> Foram cinco anos de alfabeto, tabuada, recreio corrido e lições de casa feitas à pressa antes da aula começar. Lembro de aprender a ler de verdade, de escrever meu nome sem errar, de trocar figurinhas e de brincar de pular corda no pátio. As amizades foram se fortalecendo, ano após ano, e cada professor deixou um pedacinho de lição que leva para a vida. Foi aqui que a criança vai dando lugar à pré-adolescente, e que a escola deixou de ser apenas um lugar — virou parte da minha história.
      `
    },

    // ============================================
    // MEMÓRIA 3 — Segundo Ano: Turma toda junta na sala (imagem 9) — PRIMEIRO do ensino médio
    // Salve essa foto como assets/img/9.jpeg
    // ============================================
    {
      id: 6,
      fase: 'ensino-medio',
      tipo: 'historia',
      ano: '2024—2026',
      titulo: 'Segundo ano — a turma toda junta',
      conteudo: `
        <div style="width:100%;border-bottom:1px solid var(--line);margin-bottom:1rem;overflow:hidden;">
          <img src="assets/img/9.jpeg" alt="Segundo ano, turma toda junta na sala de aula" class="memoria-imagem" loading="lazy" style="display:block;width:100%;height:auto;max-height:320px;object-fit:contain;filter:grayscale(.35) contrast(1.1);">
        </div>
        <strong>Segundo ano — a turma toda junta.</strong> Esse é o meu segundo ano do ensino médio: todo mundo reunido na sala, com aquela bagunça gostosa que só a nossa turma sabe fazer. Uns em pé nas carteiras, outros sentados no chão, uns fazendo careta para a câmera e outros só rindo de tudo. O ventilador no teto girava enquanto a gente tentava se acertar para a foto, e mesmo com todo mundo grudado, cada um ainda tinha seu próprio jeito de estar ali. Foi o ano em que a gente já se conhecia de verdade, já sabia quem sentava onde, quem tirava qual nota e quem sempre esquecia a caneta. Essa foto guarda o barulho da nossa risada coletiva e a sensação de que, por mais que o tempo estivesse passando, naquele momento a gente era só nós — a turma inteira, do jeito que é.
      `
    },

    // ============================================
    // MEMÓRIA 4 — Imagem 8: Turma inteira / Sala inteira — SEGUNDO do ensino médio
    // ============================================
    {
      id: 5,
      fase: 'ensino-medio',
      tipo: 'historia',
      ano: '2024—2026',
      titulo: 'A turma inteira, última volta',
      conteudo: `
        <div style="width:100%;border-bottom:1px solid var(--line);margin-bottom:1rem;overflow:hidden;">
          <img src="assets/img/8.jpeg" alt="Turma inteira, 2024-2026" class="memoria-imagem" loading="lazy" style="display:block;width:100%;height:auto;max-height:320px;object-fit:contain;filter:grayscale(.35) contrast(1.1);">
        </div>
        <strong>A turma inteira, última volta.</strong> Todos juntos, pela última vez. Essa foto fecha o ciclo: do prézinho à turma inteira do ensino médio, doze anos de escola vividos como uma grande corrida. Cada pessoa ali tem um pedaço da minha história — o colega de carteira, o amigo do corredor, o professor que acreditou, a risada compartilhada no intervalo. Agora chega a bandeira xadrez, mas o importante é que a pista continua. Levo cada um desses rostos comigo, para onde quer que eu vá.
      `
    },

    // ============================================
    // MEMÓRIA 5 — Imagem 6: Minhas amigas — TERCEIRO do ensino médio
    // ============================================
    {
      id: 3,
      fase: 'ensino-medio',
      tipo: 'historia',
      ano: '2024—2026',
      titulo: 'Minhas amigas do ensino médio',
      conteudo: `
        <div style="width:100%;border-bottom:1px solid var(--line);margin-bottom:1rem;overflow:hidden;">
          <img src="assets/img/6.jpeg" alt="Grupo de amigas, ensino médio" class="memoria-imagem" loading="lazy" style="display:block;width:100%;height:auto;max-height:320px;object-fit:contain;filter:grayscale(.35) contrast(1.1);">
        </div>
        <strong>Minhas amigas do ensino médio.</strong> Se o fundamental foi descoberta, o ensino médio foi consolidação. Foi com esse grupo de amigas que aprendi o que significa ter gente ao lado nos dias difíceis. Risadas escondidas na cadeira do fundo, segredos sussurrados no recreio, trabalhos feitos juntas na madrugada e ombro amigo sempre que precisava. Elas foram meu porto seguro em meio a provas, mudanças e incertezas. Cada foto com elas guarda um pedaço de quem eu me tornei.
      `
    },

    // ============================================
    // MEMÓRIA 6 — Imagem 7: Entre risadas e projetos — QUARTO do ensino médio
    // ============================================
    {
      id: 4,
      fase: 'ensino-medio',
      tipo: 'historia',
      ano: '2024—2026',
      titulo: 'Entre risadas e projetos',
      conteudo: `
        <div style="width:100%;border-bottom:1px solid var(--line);margin-bottom:1rem;overflow:hidden;">
          <img src="assets/img/7.jpeg" alt="Grupo de amigas, projetos e saídas" class="memoria-imagem" loading="lazy" style="display:block;width:100%;height:auto;max-height:320px;object-fit:contain;filter:grayscale(.35) contrast(1.1);">
        </div>
        <strong>Entre risadas e projetos.</strong> Mais um capítulo com as mesmas amigas, mas agora com um gosto diferente: já estávamos quase no fim. Trabalhos em grupo que viravam conversa interminável, saídas depois da aula, planos para o futuro traçados entre um lanche e outro. Foi nessa fase que entendi que amizade verdadeira não é só estar junto nos momentos fáceis — é estar presente quando a prova é difícil, quando a nota não sai como esperado e quando o cansaço aperta. Cada memória com elas é um combustível para a próxima etapa.
      `
    }
  ];

  // Categorias reais: ENEM, Agro, Sociedade, Tecnologia, Meio Ambiente
  // (os textos dos textos das redações foram deixados em branco —
  //  preencha o campo "texto" de cada uma)
    const REDACOES_DATA = [
    { 
      id: 1, 
      titulo: "Mudanças climáticas e a crise hídrica no Brasil", 
      tema: "Quando a seca encontra a enchente: impactos sociais e econômicos das mudanças no ciclo hidrológico",
      categorias: ["Meio Ambiente", "Sociedade"],
      texto: "O sociólogo Zygmunt Bauman, da Polônia, criou o termo 'Modernidade Líquida' ao afirmar que os arranjos sociais do mundo de hoje são fluidos e imprevisíveis. Essa metáfora encaixa-se perfeitamente na crise climática brasileira, na qual o ciclo da água, anteriormente previsível, virou uma montanha-russa, com estados sofrendo com secas extremas, enquanto outros vivem as consequências de enchentes devastadoras. Assim, resta claro que o agravamento socioeconômico do fenômeno se dá devido à ausência de planejamento urbano e à vulnerabilidade do agronegócio.\n\nDe início, a falta de infraestrutura nas cidades faz da chuva uma tragédia. O geógrafo Milton Santos alertava para o risco do crescimento desordenado da cidade brasileira. A impermeabilização do solo, por conta do crescimento desmesurado de asfaltamento, não permite a entrada da água na Terra, promovendo as inundações de grande porte que atingem principalmente os bairros populares. Essas enchentes destroem habitações e promovem a proliferação de doenças e a morte de uma parcela da população de que os governantes costumam cuidar menos.\n\nAdemais, no campo, a estiagem prolongada causa um forte prejuízo à economia. A obra 'Vidas Secas', de Graciliano Ramos, mostra como a estiagem é antiga e faz parte da rotina do sertanejo até hoje. A seca destrói plantações, encarece os alimentos e faz com que milhares de pessoas deixem o campo rumo às cidades. O agronegócio registra prejuízos bilionários, o que impacta na elevação da inflação e do desemprego nas maiores cidades, afetando a economia nacional.\n\nDiante disso, medidas estruturais tornam-se urgentes. O governo, em colaboração com o Ministério do Meio Ambiente, precisa desenvolver infraestrutura verde e sistemas de drenagem eficientes nas cidades, além de estabelecer fundos de auxílio emergencial para pequenos agricultores atingidos pela seca. Campanhas de conscientização pública sobre o consumo de água também devem ser intensificadas. A adaptação às mudanças climáticas é a única maneira de enfrentar os impactos destrutivos da fúria da natureza." 
    },
    { 
      id: 2, 
      titulo: "Canetas emagrecedoras e a pressão estética", 
      tema: "A estética como imperativo: riscos e implicações do uso indiscriminado de canetas emagrecedoras",
      categorias: ["Sociedade", "Tecnologia"],
      texto: "Em 'Vigiar e Punir', Michel Foucault examina os mecanismos pelos quais a sociedade exerce controle sobre os corpos. Nas redes sociais contemporâneas, esse mecanismo ganhou nova forma: são elas que hoje ditam padrões estéticos inatingíveis. Sob essa perspectiva, o uso indiscriminado de canetas emagrecedoras sem prescrição médica configura uma grave crise de saúde pública, alimentada tanto pela busca cega pela perfeição física quanto pelas falhas na fiscalização.\n\nOs riscos à saúde física, antes de tudo, são alarmantes. A Constituição Federal de 1988 e a Organização Mundial da Saúde (OMS) asseguram o direito à saúde e a definem como estado de completo bem-estar físico, mental e social, e não apenas como ausência de doença. A busca por uma estética inatingível, porém, impulsiona o consumo irregular dessas substâncias, cujo uso descontrolado pode provocar distúrbios metabólicos e problemas cardíacos, chegando até ao desenvolvimento de transtornos alimentares. A vaidade, assim, converte-se em ameaça letal.\n\nA pressão psicológica agrava esse quadro. O mito grego de Narciso ilustra a obsessão perigosa pela própria imagem; na contemporaneidade, o ambiente virtual difunde continuamente fotos editadas e corpos irreais, o que gera ansiedade e baixa autoestima nos jovens. Alienado, o indivíduo na busca pelo 'corpo perfeito' passa a mutilar o próprio corpo em nome de um padrão comercial imposto, sem medir as consequências irreversíveis dessa prática.\n\nDiante disso, cabe ao Ministério da Saúde e à Anvisa endurecer a fiscalização da venda desses medicamentos, com multas severas às farmácias irregulares e o bloqueio dos sites que os comercializam. As escolas, por sua vez, devem promover a aceitação corporal e a educação midiática por meio de palestras com psicólogos. Afinal, a beleza não deve custar a integridade da vida." 
    },
    { 
      id: 3, 
      titulo: "Deepfakes e desinformação na era da IA", 
      tema: "O uso da Inteligência Artificial e as deepfakes: o que é real e o que é fictício na vida online?",
      categorias: ["Tecnologia", "Sociedade"],
      texto: "No romance 1984, de George Orwell, o autor descreve um mundo onde a verdade pode ser alterada e controlada pelo regime. Na atualidade, temos com as Deepfakes um novo perigo para a humanidade, uma vez que esses vídeos (e também áudios) falsos são cada vez mais usados para abalar a base da sociedade e realizar fraudes.\n\nNo que tange às figuras políticas e sociais, podemos ver claramente como essas imagens e sons podem ser empregados para prejudicar nosso sistema democrático. O termo 'pós-verdade', que ficou conhecido em todo o mundo após ter sido selecionado como Word of the Year em 2016 pelo Dicionário Oxford, ilustra bem o declínio da relevância dos fatos. Com isso, as deepfakes possibilitam a veiculação de fake news que podem interferir em processos eleitorais ou levar a atos de agressão e rebelião. Caso o indivíduo não tenha meios de confirmar a veracidade de tais informações, ficará exposto.\n\nAlém disso, elas são utilizadas para fins criminosos na internet. O 'Efeito Bumerangue', conforme definido pela Sociologia, ocorre quando uma pessoa recebe as repercussões de algo que ela mesma realizou. Assim, o uso de softwares que permitem a produção de deepfakes tem dado origem a esquemas que tiram milhões das vítimas, mediante a falsificação da imagem e fala de seus entes queridos. A desconfiança quanto aos dados transmitidos pelos meios virtuais levará a grandes perdas financeiras para a sociedade.\n\nDiante do exposto, é preciso que haja esforços tanto por parte do Poder Público quanto das próprias redes sociais, no sentido de coibir o uso indevido dessas tecnologias e implementar sistemas de cross-checking. Por fim, a tarefa de educar as novas gerações para conviver com a internet sem perder a noção do que é real é de responsabilidade das escolas." 
    },
    { 
      id: 4, 
      titulo: "Bets e o endividamento dos jovens", 
      tema: "Da diversão ao endividamento: efeitos socioeconômicos das bets na vida de jovens brasileiros",
      categorias: ["Tecnologia", "Sociedade"],
      texto: "Em 'Casa de Bonecas', o dramaturgo norueguês Henrik Ibsen dirigiu sua crítica à falsa sensação de segurança e à ruína financeira decorrente de decisões impulsivas. Tal reflexão mantém estreita relação com a atual febre das plataformas de apostas esportivas, conhecidas como 'bets'. Sob a aparência de entretenimento fácil, essas empresas vêm atraindo o público jovem e alimentando uma epidemia de endividamento e ludopatia, quadro que exige intervenção urgente do Estado e da sociedade.\n\nO marketing agressivo figura, antes de tudo, como principal instrumento de aliciamento. A teoria econômica do 'Nudge' (empurrão), proposta por Richard Thaler, esclarece o modo como as empresas utilizam gatilhos psicológicos para induzir comportamentos. Influenciadores digitais prometem enriquecimento rápido e omitem as estatísticas reais de perdas; impulsionados pela adrenalina, muitos jovens comprometem salários e contraem dívidas profundas com agiotas, na crença equivocada de que o jogo seria uma ferramenta de ascensão social.\n\nO impacto econômico, além disso, alcança a base familiar. Karl Marx advertiu sobre a alienação do trabalhador em relação ao fruto do seu trabalho, e nas bets o jovem perde em segundos, para os algoritmos das empresas, o salário que suou para ganhar, perpetuando um ciclo de miséria. A ausência de educação financeira nas escolas deixa uma lacuna explorada pela indústria do vício, que destrói famílias e a saúde mental de milhares de brasileiros.\n\nMedidas enérgicas são, portanto, necessárias. O governo federal deve restringir de imediato a publicidade dessas plataformas, proibindo o patrocínio por influenciadores. Cabe ainda ao Ministério da Educação implementar a educação financeira como disciplina obrigatória na grade curricular, ensinando os jovens a administrar o dinheiro e a reconhecer os perigos do jogo, de modo a proteger o futuro econômico da nação." 
    },
    { 
      id: 5, 
      titulo: "Inclusão digital no Brasil", 
      tema: "Inclusão digital no Brasil: caminhos e desafios na sociedade contemporânea",
      categorias: ["Tecnologia", "Sociedade"],
      texto: "Ao examinar o processo de globalização, o geógrafo Milton Santos cunhou a expressão 'meio técnico-científico-informacional' para caracterizar a presente era tecnológica. O Brasil, contudo, expõe uma contradição marcante: num mundo densamente interconectado, milhões de cidadãos permanecem à margem da era digital. Trata-se de uma exclusão que transcende a esfera técnica, configurando-se como um fenômeno social que restringe o exercício da cidadania e aprofunda desigualdades historicamente constituídas.\n\nA carência de infraestrutura constitui, primeiramente, um obstáculo de ordem física. Embora o Marco Civil da Internet (Lei 12.965/2014) consagre o direito ao acesso como essencial ao exercício da cidadania, as periferias e as zonas rurais convivem com conexões precárias ou mesmo inexistentes. A escassez de investimentos em redes de fibra ótica nessas localidades bloqueia o acesso a serviços públicos básicos que foram, em larga medida, transferidos para plataformas online, intensificando, com isso, a exclusão social.\n\nHá, em acréscimo, o desafio do letramento digital. O educador Paulo Freire concebia a educação como uma prática de liberdade, e, no ambiente virtual, a simples posse do dispositivo se revela insuficiente: torna-se imperativo manejá-lo com criticidade. A ausência de capacitação para operar as ferramentas tecnológicas mantém o sujeito num estado de alienação, inviabilizando a busca por empregos qualificados e a própria defesa contra fraudes cibernéticas.\n\nA inclusão, por conseguinte, precisa ser integral para que se concretize. Cabe ao poder público, em articulação com as instituições escolares, expandir a infraestrutura de internet e distribuir dispositivos nas comunidades carentes, ao mesmo tempo que se investe de modo consistente na formação docente para o letramento digital. Converter a tecnologia em instrumento de emancipação, por essa via, constitui a condição para que a democratização digital se efetive no país." 
    },
    { 
      id: 6, 
      titulo: "Cultura fitness e transtornos corporais", 
      tema: "Cultura fitness: bem-estar ou busca por estética inatingível?",
      categorias: ["Sociedade"],
      texto: "Apolo, na mitologia grega, encarnava os ideais de beleza e perfeição física, um modelo que muitos aspiravam alcançar. Na contemporaneidade, porém, tal busca deixou o plano mitológico para se converter em um imperativo imposto pelo universo das redes sociais, diluindo a já tênue fronteira entre o cuidado genuíno com a saúde e a obsessão estética. Esse deslocamento tem fomentado uma crise de saúde mental e o aparecimento de transtornos perigosos entre os jovens.\n\nCabe, inicialmente, estabelecer uma distinção rigorosa entre saúde e obsessão. A atividade física constitui um direito assegurado pela Constituição, mas seu exercício excessivo conduz a patologias como a vigorexia e a ortorexia. O filósofo Michel Foucault oferece subsídios para essa análise ao conceituar o 'corpo dócil', aquele moldado por exigências sociais. Sob essa ótica, o indivíduo abandona a prática do exercício como fonte de prazer e passa à condição de sujeito escravizado, empenhado na perseguição de um padrão muscular e alimentar inatingível.\n\nA comparação incessante nos ambientes virtuais atua como agravante desse quadro. Naomi Wolf, em 'O Mito da Beleza', desvela o modo como a indústria aufere lucro por meio da insegurança feminina e, acrescente-se, masculina. A exposição sistemática a corpos editados digitalmente e o recurso indiscriminado a anabolizantes comprometem órgãos vitais, ao mesmo tempo em que deflagra estados severos de ansiedade e depressão. Oculta-se, sob a promessa ilusória de aceitação social, um expressivo sofrimento de ordem física e psicológica.\n\nEvidencia-se, portanto, a premência de ressignificar a noção de saúde. Às escolas incumbe a tarefa de fomentar debates sobre diversidade corporal e autoconhecimento, com vistas à desconstrução dos padrões irreais que vigoram. Ao Ministério da Saúde, por sua vez, compete elaborar campanhas midiáticas que advirtam acerca dos perigos inerentes aos transtornos alimentares e ao consumo de anabolizantes. O verdadeiro bem-estar funda-se no equilíbrio mental e na observância dos limites próprios do corpo." 
    },
    { 
      id: 7, 
      titulo: "Direitos indígenas e demarcação de terras", 
      tema: "Povos originários e direitos constitucionais: desafios para a efetivação da cidadania indígena no Brasil",
      categorias: ["Sociedade", "Meio Ambiente"],
      texto: "A Constituição Federal de 1988, denominada Constituição Cidadã, garantiu aos diferentes povos indígenas a titularidade sobre suas terras e a preservação de suas tradições. No entanto, mais de 3 décadas depois, ainda existe um grande abismo entre a norma e a realidade, decorrente principalmente da cobiça e de séculos de racismo.\n\nO principal problema, assim, refere-se às terras. Embora a obra Macunaíma (Mário de Andrade) demonstre todo o potencial cultural dos povos originários, vemos diariamente atos de brutalidade no contexto da expansão do agronegócio e da extração de minérios em áreas já delimitadas. São assassinatos de chefes e demais membros dessas comunidades. Com o Estado inerte, a cobiça assume força suficiente para extinguir essas populações.\n\nTambém se faz necessário que o poder público desenvolva ações voltadas ao atendimento adequado. O conceito de 'Etnocentrismo', na Sociologia, remete à visão de mundo centrada nos costumes da sociedade que se analisa, ignorando as demais. Isso se reflete, por exemplo, no atendimento à saúde e à escola, que raramente contemplam a medicina ou idiomas dos povos originários. Sem efetiva inclusão, eles continuarão expostos a graves carências.\n\nPortanto, a questão de salvaguardar esses grupos não admite qualquer concessão. É dever do Estado aumentar o controle (também junto à FUNAI) e condenar os responsáveis pela ocupação irregular de terras. Da mesma forma, deve-se garantir que o ensino nas escolas inclua a temática sobre a população negra e indígena (Lei nº 11.645/08), permitindo a construção de uma identidade brasileira." 
    },
    { 
      id: 8, 
      titulo: "Algoritmos, bolhas e autonomia individual", 
      tema: "Consumo, mídia e cultura: como referências mediadas por algoritmos influenciam os modos de vida na sociedade contemporânea",
      categorias: ["Tecnologia", "Sociedade"],
      texto: "No 'Mito da Caverna', Platão descreve indivíduos acorrentados que tomavam as sombras projetadas na parede como a única realidade existente. Os algoritmos das redes sociais operam hoje de modo análogo a essas correntes: ao filtrarem a informação, produzem bolhas de conteúdo personalizado que condicionam referências culturais e padrões de consumo, com risco para a autonomia e para o pensamento crítico.\n\nA diversidade informacional é, em primeiro lugar, restringida por esses mecanismos. A 'Espiral do Silêncio', teoria formulada pela socióloga Elisabeth Noelle-Neumann, sustenta que os indivíduos tendem a se recolher quando sua opinião parece minoritária, e nas redes os algoritmos amplificam esse isolamento ao exibir sobretudo o que o usuário já endossa. O debate democrático se enfraquece, a sociedade se polariza e a circulação de notícias falsas e de discursos de ódio encontra condições favoráveis à sua proliferação.\n\nA cultura do 'influencer', por sua vez, impõe padrões de vida inalcançáveis. Em 'Vida para Consumo', Zygmunt Bauman alerta para a conversão dos cidadãos em mercadorias. Diante da exposição permanente a vidas editadas e a bens de luxo, o indivíduo experimenta frustração e é levado ao consumo desenfreado: consome não pelo valor de uso, mas na tentativa de pertencer a um grupo ou de alcançar a falsa felicidade difundida pelas mídias.\n\nA educação midiática constitui, portanto, o caminho para a libertação. Cabe à escola ensinar os alunos a questionar os algoritmos e a consumir informação de maneira crítica. Ao poder público compete, em paralelo, regulamentar as plataformas digitais, exigindo transparência nos algoritmos e limitando a difusão de conteúdo manipulado, de modo que a tecnologia sirva ao cidadão, e não o contrário." 
    },
    { 
      id: 9, 
      titulo: "Preservação do patrimônio histórico", 
      tema: "Os desafios para a preservação dos monumentos históricos no Brasil contemporâneo",
      categorias: ["Sociedade", "Cultura"],
      texto: "Para Maurice Halbwachs, autor da Teoria da Memória Coletiva, são necessárias referências no espaço que permitam à coletividade construir e manter seu passado. No Brasil, os monumentos assumem esse papel; contudo, devido à falta de cuidado, verbas e às conquistas made-in imobiliário, a conservação dos bens históricos transformou-se numa questão recorrente e ameaça apagar a cultura brasileira.\n\nÉ perceptível a falta de ações do Estado no sentido de restaurar esses imóveis. Como exemplo, podemos citar o fogo que destruiu grande parte do Palácio de Manguinhos (RJ), memorial de importantes avanços científicos e históricos. Diversos prédios encontram-se abandonados e deteriorados, sendo alvos constantes de crimes, enquanto a falta de conservação faz com que muitos museus e templos religiosos se tornem focos de perigo, podendo levar à destruição de acervos e peças.\n\nAlém disso, os próprios cidadãos tendem a não se identificar com esses locais. Tal processo de 'perda de raízes' é agravado pela falta de iniciativas de educação patrimonial, já que quando o indivíduo não tem consciência sobre a importância e origem de determinado bem histórico, tende a não se importar e até mesmo a danificá-lo (ex: grafites). Outro elemento que contribui para a destruição desses patrimônios é o avanço imobiliário, que busca demoli-los sob a pretensão de 'evoluir' a cidade.\n\nPortanto, torna-se necessária a criação de uma rede de cooperação entre Estado e setor privado para garantir a revitalização e ocupação desses prédios. Por fim, cabe aos professores e instituições de ensino desenvolver atividades como visitas e cursos de educação patrimonial, que possam contribuir para que a nova geração identifique-se com a história do Brasil." 
    },
    { 
      id: 10, 
      titulo: "Exploração espacial e desigualdade", 
      tema: "Exploração espacial no século XXI: desafios para a conciliação entre avanço científico e responsabilidade social",
      categorias: ["Tecnologia", "Sociedade"],
      texto: "A corrida espacial que ocorreu ao longo da Guerra Fria entre EUA e União Soviética foi um grande marco para o desenvolvimento científico. Entretanto, no século XXI, esta exploração evoluiu para um mercado de grandes perspectivas com apoio da iniciativa privada. Ocorre que o avanço da tecnologia e a exploração do espaço levantam questões de ordem ética. Como conciliar o desenvolvimento da tecnologia e a exploração do espaço com o dever social perante um planeta de extrema desigualdade?\n\nA priorização das necessidades é invertida. A pirâmide de Necessidades de Abraham Maslow apresenta as necessidades básicas do homem na base da pirâmide, como a alimentação e a moradia. Porém, bilhões de dólares são investidos em viagens espaciais e mineração de asteroides. Milhões de pessoas no planeta ainda não possuem saneamento básico. O avanço da ciência não pode ser justificativa para o descaso com a miséria social.\n\nO espaço também é uma nova fronteira para o desmatamento ambiental. Na Tragédia dos Comuns, Garrett Hardin explica o desperdício de recursos compartilhados pelo interesse particular. Grande parte dos lixos espaciais e a ocupação desordenada das órbitas ameaça as comunicações e segurança globais. É evidente que não existe uma forte governança internacional desta questão.\n\nPortanto, é necessário delinear limites éticos. A Organização das Nações Unidas e os estados devem criar fortes tratados internacionais que regulamentem a exploração do espaço. As receitas obtidas nesta nova frente tecnológica devem ser destinadas a fundos que visem combater a fome e as mudanças climáticas no planeta. Deste modo o desenvolvimento da ciência será efetivamente ao serviço do Homem." 
    },
    { 
      id: 11, 
      titulo: "Conservação da fauna brasileira", 
      tema: "Espécies em extinção e equilíbrio ecológico: desafios para a conservação da fauna brasileira",
      categorias: ["Meio Ambiente"],
      texto: "A 'Teoria do Caos' foi desenvolvida por Edward Lorenz, que afirmou que o bater de asas de uma borboleta poderia causar um tornado do outro lado do mundo. Analogamente, o desmatamento, as queimadas e o tráfico de animais que ocorrem no Brasil têm contribuído para a rápida extinção de espécies, o que desencadeia uma série de efeitos em cascata, podendo colocar em risco não só o próprio equilíbrio ecológico, mas também a nossa sobrevivência.\n\nEm primeiro lugar, com a extinção de uma espécie qualquer, toda a cadeia alimentar fica desequilibrada. O Relatório do IPCC (Painel Intergovernamental sobre Mudanças Climáticas) alerta para os riscos da diminuição da biodiversidade. Com a destruição de habitats naturais para a expansão desordenada da agricultura, os predadores e polinizadores ficam prejudicados. A ausência de abelhas, por exemplo, resulta na queda da produção de alimentos.\n\nAdemais, o tráfico de animais silvestres é outra ferida social. Na obra 'A Revolução dos Bichos', de George Orwell, podemos encontrar uma alegoria sobre a exploração e domínio. Todos os anos, milhões de animais são retirados da floresta para suprir o mercado ilegal. Esses animais sofrem maus-tratos. Isso continua acontecendo devido à ineficiência de fiscalização e impunidade. Por consequência, o ecossistema brasileiro fica ainda mais fragilizado.\n\nPortanto, a preservação é urgente. O Estado deve aumentar a fiscalização nas regiões mais remotas com o uso de tecnologias como drones e satélites. Além disso, ele deve aumentar as penas para os crimes ambientais. Também é importante a educação ambiental. As comunidades locais precisam ter acesso a fontes de renda sustentáveis, como o ecoturismo. Dessa forma, a preservação passa a ser uma fonte de renda." 
    },
    { 
      id: 12, 
      titulo: "Migração e acolhimento de refugiados", 
      tema: "Migração e acolhimento: desafios da convivência em contextos globais",
      categorias: ["Sociedade"],
      texto: "Promulgada em 1948, a Declaração Universal dos Direitos Humanos garante a todo cidadão o direito de buscar asilo em outros países caso esteja sendo perseguido. Contudo, o que vivemos no decorrer do século XXI é que milhões de pessoas são obrigadas a deixar seus lares devido a diversos fatores. Crises humanitárias, conflitos armados e desastres climáticos tornaram o acolhimento de pessoas em situação de migração um dos maiores desafios da ordem mundial. Este desafio tem sido obstaculizado pela ação da xenofobia e falta de políticas públicas de integração.\n\nO preconceito é o primeiro grande obstáculo a ser enfrentado pelos migrantes. A Lei de Migração, promulgada no Brasil em 2017, foi criada durante a onda de defesa dos direitos humanos intransigentes. Esta lei prevê medidas de acolhimento aos imigrantes. Porém, na prática, o que vemos é o efeito da xenofobia. Muitas vezes, a dificuldade de comunicação e dificuldades de reconhecimento de diplomas acadêmicos levam o imigrante a trabalhar na informalidade. A onda de discurso de ódio aumenta a tensão na sociedade, levando o imigrante, que chega já fragilizado por traumas, a um maior isolamento.\n\nOutro problema a ser destacado é a falta de políticas de acolhimento. Na 'Ética da Alteridade', o filósofo Emmanuel Lévinas defende que o Outro deve ser acolhido na sua totalidade radical. Porém, o que observamos é falta de apoio psicológico, moradia digna e assistência social adequada. As famílias continuam nos abrigos superlotados. A desatenção do Estado gera um ambiente propício para a exploração de trabalho dos imigrantes. Isto configura-se como uma flagrante violação de direitos básicos.\n\nÉ necessário que o processo de integração seja feito coletivamente. O poder público precisa atuar no rápido processo de emissão de documentos, criar programas de capacitação profissional e cuidados psicossociais para os migrantes. É também papel das instituições de ensino e mídias combater a desinformação e desenvolver a empatia para que se entenda que a diversidade cultural não é uma ameaça à identidade nacional, mas sim uma riqueza." 
    },
    { 
      id: 13, 
      titulo: "Eventos climáticos extremos", 
      tema: "El Niño e mudanças climáticas: desafios para a preparação da sociedade diante de eventos extremos",
      categorias: ["Meio Ambiente", "Sociedade"],
      texto: "Júlio Verne, em suas obras visionárias, previu que a natureza iria se revoltar contra a civilização. O que antes estava presente nas obras de ficção tornou-se realidade no mundo contemporâneo. O efeito combinado do fenômeno El Niño e das mudanças climáticas no mundo está impactando a sociedade atualmente. A incapacidade de prevenção das cidades e das regiões rurais diante do evento de secas e chuvas extremas evidencia um grande problema de gestão.\n\nEm primeira análise, deve-se destacar a ausência de estrutura. Em 2022, a cidade de Petrópolis (RJ) foi cenário de uma tragédia que ceifou a vida de centenas de pessoas. A incapacidade de se prevenir o problema ilustra a ineficácia dos sistemas de alerta. Além disso, o desafio de uma chuva normal se tornar um desastre devido à falta de infraestrutura evidencia que a Defesa Civil muitas vezes fica refém do papel reativo, pois o dano já não pode ser reparado quando se chega a esta etapa.\n\nAdicionalmente, a crise climática é uma crise de justiça social. A ideia de Justiça Climática retrata que, na crise ambiental, quem mais sofre é a camada mais pobre da sociedade. As políticas de ocupação desordenada de encostas e margens de rios motivadas pela especulação imobiliária expõem os segmentos mais vulneráveis às áreas de risco. Quando a natureza se revolta, quem paga pelos deslizamentos e pelas doenças são as periferias.\n\nO melhor remédio é a prevenção, e, para isso, é necessário que o poder público invista em planejamento urbano visando o desenvolvimento de cidades resilientes, além de um sistema de monitoramento meteorológico de alta precisão. Para garantir a segurança e a dignidade da população, é necessário criar um fundo nacional de adaptação climática para reestruturar as cidades e evacuar as áreas de risco com antecedência." 
    },
    { 
      id: 14, 
      titulo: "Obsolescência programada e o descarte de lixo eletrônico", 
      tema: "Obsolescência tecnológica e descarte de resíduos eletrônicos: desafios para a sustentabilidade no Brasil",
      categorias: ["Meio Ambiente", "Tecnologia"],
      texto: "Vida para Consumo. Na obra do sociólogo Zygmunt Bauman, Vida para Consumo, ele descreve a sociedade atual como uma 'sociedade de descarte', onde tudo é efêmero e a renovação acontece com muita rapidez. Isso acontece também na área de tecnologias, onde diversos aparelhos ficam ultrapassados logo depois de serem comprados. O descarte incorreto desse tipo de lixo tornou-se um grande problema para o meio ambiente brasileiro.\n\nPrimeiramente, cabe ressaltar que o consumo é estimulado pela chamada Obsolescência Programada. No Documentário Obsolescência Programada é mostrado que as indústrias fazem isso para que os produtos tenham uma durabilidade menor, e assim o consumidor seja obrigado a comprar novamente. Além disso, celulares, computadores e baterias contêm metais pesados como chumbo e mercúrio, que ao serem descartados em lixões comuns contaminam o solo, lençóis freáticos e prejudicam a saúde humana e a fauna.\n\nAlém disso, ocorre um absurdo desperdício de dinheiro. Conforme diz a Lei de Lavoisier (Química), na natureza nada se cria, nada se perde, tudo se transforma. Isso quer dizer que alguns eletrônicos possuem metais raros e preciosos como o ouro e o cobre. Eles poderiam ser reciclados, porém não existem pontos de coleta convenientes, e toneladas de material valioso são enterrados, desperdiçando energia e recursos minerais.\n\nÉ necessário um verdadeiro compromisso de responsabilidade. É muito importante que a Política Nacional de Resíduos Sólidos seja executada. Criação de mais pontos de coleta, além da logística reversa - dos próprios fabricantes. Também é fundamental a implantação muito cedo nas escolas de educação para consumo consciente, para mostrar que o consumo nos dias atuais tem reflexo direto na conservação do meio ambiente." 
    },
    { 
      id: 15, 
      titulo: "Agro forte, futuro sustentável", 
      tema: "Agro forte, futuro sustentável: equilíbrio entre produção e meio ambiente",
      categorias: ["Agro", "Meio Ambiente"],
      texto: "'Desenvolvimento Sustentável' foi um conceito bastante disseminado a partir do relatório Brundtland publicado em 1987. O conceito baseia-se na ideia de que, apesar de atendermos às necessidades do presente, não devemos prejudicar as possibilidades de sobrevivência das futuras gerações. No Brasil, o setor de agronegócio representa grande importância para a economia nacional, porém o crescimento desordenado desse setor tem constituído-se como uma ameaça ao nosso bioma.\n\nEm primeiro lugar, o problema da exploração predatória deve ser destacado. Na teoria, o modelo de exploração que leva à 'Tragédia dos Comuns', elaborado por Garrett Hardin, explica como o indivíduo, ao buscar a maximização da exploração dos recursos comuns, acaba levando este recurso ao colapso. Isso também pode ser observado na prática brasileira, quando buscamos lucros imediatos através do desmatamento desenfreado e do uso excessivo de agrotóxicos. Essas práticas prejudicam a qualidade do solo e dos recursos hídricos. E, além disso, acabam prejudicando a própria atividade agrícola, pois afetam o ciclo de chuvas.\n\nPor outro lado, a tecnologia e o conhecimento científico podem ajudar a mudar esse cenário. O paradigma de 'Economia Circular', sistematizado pela Fundação Ellen MacArthur, defende a reintegração dos resíduos e a minimização do desperdício. Algumas tecnologias, como a ILPF (Integração Lavoura-Pecuária-Floresta), permitem a reconstrução de pastos degradados e o sequestro de carbono. Assim, é possível obter aumento da produtividade junto com a preservação dos ecossistemas.\n\nPortanto, ações do Estado junto com a sociedade civil são necessárias para resolver esse impasse. O Ministério da Agricultura, juntamente com o IBAMA, deve aumentar as ações de controle e incentivar, através de desoneração de impostos, os produtores que adotarem sistemas de agricultura de baixo nível de emissão de carbono. Além disso, as instituições de ensino rural e de extensão devem promover a educação ambiental do agricultor para que ele entenda que a preservação da floresta não está em oposição à pujança da produção, mas antes, que elas estão complementares." 
    },
    { 
      id: 16, 
      titulo: "O respeito às diferenças como caminho para a superação dos conflitos sociais", 
      tema: "O respeito às diferenças como caminho para a superação dos conflitos sociais na sociedade contemporânea",
      categorias: ["Sociedade", "ENEM"],
      texto: "Na Declaração Universal dos Direitos Humanos, proclamada pela ONU em 1948, afirma-se que todos os homens nascem livres e iguais em dignidade e em direitos. Entretanto, observa-se na sociedade atual que há sérios conflitos decorrentes da intolerância às diferenças. Dessa forma, o respeito à diversidade vai além de um imperativo moral; ele é fundamental para a construção de uma sociedade pacífica.\n\nPrimeiramente, cabe examinar a origem dos conflitos, a qual está associada ao etnocentrismo, termo utilizado em sociologia para designar a tendência que cada cultura possui de julgar todas as demais partindo do seu próprio padrão como medida. Assim sendo, o outro é considerado inferior. Tal ideia equivocada leva a um preconceito de minorias étnicas, religiosas, de gênero, entre outros. Isso gera tanto a violência simbólica quanto a violência física. Além disso, há a desagregação social e a normalização da exclusão.\n\nAlém disso, a empatia e o diálogo são ferramentas importantes para que os abismos sociais possam ser preenchidos. O filósofo Emmanuel Lévinas afirmou em sua obra 'Ética da Alteridade' que o outro deve ser totalmente acolhido na sua condição de homem. Para isso, o julgamento imediato deve ser substituído pelo verdadeiro diálogo. Nesse contexto, nas redes sociais, espaço marcado pela polarização e muitas vezes pelo hostilidade, a escuta ativa e a prática da empatia são atos de resistência. Além de promoverem a mudança na sociedade.\n\nPor fim, cabe destacar que a educação e o Estado têm o privilégio e o dever de incentivar o respeito. É papel do Ministério da Educação implantar de forma efetiva projetos pedagógicos que tenham a diversidade cultural e de gênero como foco. Isso inclui a capacitação dos professores para que eles possam atuar como mediadores de debates construtivos. Também é função do poder público punir severamente os crimes de ódio. Cabe ainda ao poder público criar campanhas nas mídias que incentivem a paz. A diferença, então, deixa de ser um problema e passa a ser um elo." 
    },
    { 
      id: 17, 
      titulo: "Caminhos para combater a intolerância religiosa no Brasil", 
      tema: "Caminhos para combater a intolerância religiosa no Brasil",
      categorias: ["Sociedade", "ENEM"],
      texto: "Conforme o artigo 5º da Constituição Federal de 1988, conhecida também como Constituição Cidadã, é garantida a liberdade de consciência e de crença a toda pessoa. Entretanto, o Brasil ainda vive diversos casos de intolerância religiosa, apesar de ser um Estado laico. Nesse sentido, são necessárias medidas do Estado para combater a problemática e fomentar a prática educativa voltada à diversidade.\n\nEm primeiro plano, nota-se que a intolerância religiosa decorre de um preconceito histórico-estrutural. Isso pode ser compreendido a partir do conceito de racismo estrutural criado pelo jurista Silvio Almeida. De acordo com o autor, a prevalência das religiões de matriz africana, como o Candomblé e a Umbanda, como alvo principal de ataques na sociedade brasileira ocorre porque a herança escravocrata do país levou à marginalização e satanização de sua crença e prática. Dessa forma, percebe-se que a violência contra a religião não é algo individual, mas sim um reflexo de uma sociedade incapaz de superar um passado excludente.\n\nAdemais, a brandura do sistema penal e a omissão da sociedade contribuem para manutenção da violência. Hannah Arendt criou o conceito de banalidade do mal para expressar como a indiferença e falta de reflexão de pessoas comuns possibilitam a concretização de ações atrozes. Sob esse viés, a depredação de terreiros e a agressão contra fiéis, em um cenário de silenciamento coletivo, evidenciam a incapacidade do Estado de cumprir sua função protetora. Assim, vê-se que a ausência de punição exemplar gera um clima de impunidade, o que incita a repetição da violência.\n\nPortanto, caminhos precisam ser traçados para que seja possível enfrentar a questão. Para isso, é importante que o Ministério Público e as Secretarias de Segurança Pública criem delegacias especializadas no combate aos crimes de ódio e intolerância religiosa, a fim de acolher adequadamente as vítimas. Além disso, as instituições de ensino devem incluir em seus currículos a educação para o respeito entre as religiões. Isso será possível por meio de visitas e diálogo com diferentes matrizes de fé. Somente quando a sociedade internalizar o respeito à crença do outro é que a liberdade de culto será plena." 
    }
  ];
  // ==========================================
  // BIBLIOTECAS (fallback gracioso)
  // ==========================================
  const temGSAP = typeof gsap !== 'undefined';
  const temST = temGSAP && typeof ScrollTrigger !== 'undefined';
  const temLenis = typeof Lenis !== 'undefined';
  const reduzMovimento = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const anima = temGSAP && !reduzMovimento;
  if (temST) gsap.registerPlugin(ScrollTrigger);

  // ==========================================
  // PRELOADER EM GRADE
  // ==========================================
  const loader = document.getElementById('page-loader');
  const loaderGrade = document.getElementById('loader-grade');
  const loaderPct = document.getElementById('loader-pct');

  if (loaderGrade) {
    for (let i = 0; i < 96; i++) {
      const cell = document.createElement('span');
      loaderGrade.appendChild(cell);
    }
  }
  const celulas = loaderGrade ? [...loaderGrade.children] : [];
  let progresso = 0;
  const timer = setInterval(() => {
    progresso = Math.min(100, progresso + 20);
    const p = Math.floor(progresso);
    if (loaderPct) loaderPct.textContent = String(p).padStart(2, '0');
    const acesas = Math.floor((progresso / 100) * celulas.length);
    celulas.forEach((c, i) => c.classList.toggle('lit', i < acesas));
    if (progresso >= 100) {
      clearInterval(timer);
      celulas.forEach(c => c.classList.add('lit'));
      setTimeout(() => { if (loader) loader.classList.add('hidden'); }, 420);
    }
  }, 80);

  // ==========================================
  // BARRA DE "VOLTA" — progresso de leitura
  // ==========================================
  const voltaBar = document.getElementById('volta-bar');

  function atualizarVolta() {
    const doc = document.documentElement;
    const max = doc.scrollHeight - doc.clientHeight;
    const pct = max > 0 ? (doc.scrollTop / max) * 100 : 0;
    if (voltaBar) voltaBar.style.width = pct + '%';
  }
  window.addEventListener('scroll', atualizarVolta, { passive: true });

  // ==========================================
  // SMOOTH SCROLL (Lenis)
  // ==========================================
  let lenis = null;
  if (temLenis) {
    lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true
    });
    if (temGSAP) {
      lenis.on('scroll', () => { if (temST) ScrollTrigger.update(); atualizarVolta(); });
      gsap.ticker.add((time) => lenis.raf(time * 1000));
      gsap.ticker.lagSmoothing(0);
    } else {
      const loop = (t) => { lenis.raf(t); requestAnimationFrame(loop); };
      requestAnimationFrame(loop);
    }
  }
  atualizarVolta();

  // ==========================================
  // TEMA (nocturno / claro / paddock)
  // ==========================================
  const themeToggle = document.getElementById('theme-toggle');
  const html = document.documentElement;
  const temas = ['nocturno', 'claro', 'paddock'];
  const icones = { nocturno: '◐', claro: '●', paddock: '◆' };
  let indiceTema = temas.indexOf(html.getAttribute('data-theme'));
  if (indiceTema < 0) indiceTema = 0;
  function atualizaIcone() { themeToggle.textContent = icones[html.getAttribute('data-theme')] || '◐'; }
  atualizaIcone();
  themeToggle.addEventListener('click', () => {
    indiceTema = (indiceTema + 1) % temas.length;
    html.setAttribute('data-theme', temas[indiceTema]);
    localStorage.setItem('tema-portfolio', temas[indiceTema]);
    atualizaIcone();
  });

  // ==========================================
  // HERO — split + cena 3D guiada pelo mouse
  // ==========================================
  const heroTitle = document.getElementById('hero-title');
  const heroSubtitle = document.getElementById('hero-subtitle');
  const heroSpecs = document.querySelector('.hero-specs');
  const heroSection = document.getElementById('hero');
  const cena = document.getElementById('cena');

  const textoTitulo = heroTitle.textContent.trim();
  const linhas = heroTitle.innerHTML.split('<br>');
  heroTitle.innerHTML = '';
  linhas.forEach((linha, i) => {
    const bloco = document.createElement('span');
    bloco.style.display = 'block';
    [...linha.trim()].forEach(c => {
      const span = document.createElement('span');
      span.className = 'char';
      span.style.display = 'inline-block';
      span.style.transform = 'translateY(110%)';
      span.style.opacity = '0';
      span.textContent = c;
      bloco.appendChild(span);
    });
    heroTitle.appendChild(bloco);
  });

  if (anima) {
    gsap.to('.hero-title .char', { y: 0, opacity: 1, duration: .9, stagger: .03, ease: 'power4.out', delay: .5 });
    gsap.to(heroSubtitle, { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 1.3 });
    gsap.to(heroSpecs, { opacity: 1, duration: .9, ease: 'power2.out', delay: 1.6 });

    // Câmera 3D do hero — reage ao mouse
    let ticking = false;
    heroSection.addEventListener('mousemove', (e) => {
      if (!cena || ticking) return;
      requestAnimationFrame(() => {
        const rect = heroSection.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
        const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
        gsap.to(cena, { rotateY: x * 8, rotateX: -y * 6, duration: .9, ease: 'power2.out' });
        gsap.to('.hero-content', { x: x * -22, y: y * -12, duration: .9, ease: 'power2.out' });
        ticking = false;
      });
      ticking = true;
    });
  } else {
    gsap && gsap.set('.hero-title .char', { y: 0, opacity: 1 });
    if (heroSubtitle) heroSubtitle.style.opacity = 1;
    if (heroSpecs) heroSpecs.style.opacity = 1;
  }

  // ==========================================
  // REVELAR NO SCROLL + CENA ENTRA EM 3D
  // ==========================================
  if (anima && temST) {
    gsap.utils.toArray('.reveal').forEach(el => {
      gsap.fromTo(el,
        { opacity: 0, y: 50, rotateX: -35, transformPerspective: 900 },
        { opacity: 1, y: 0, rotateX: 0, duration: .9, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 88%' } }
      );
    });

    // A cena "afunda" enquanto o scroll começa — sensação de câmera em movimento
    gsap.to(cena, {
      translateZ: -260, scale: .92, opacity: .35, ease: 'none',
      scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: 1.2 }
    });
  }

  // ==========================================
  // UTILITÁRIOS
  // ==========================================
  function escapeHtml(t) { const d = document.createElement('div'); d.textContent = t; return d.innerHTML; }
  function escapeRegExp(s) { return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }
  function tempoLeitura(t) { return Math.max(1, Math.ceil((t || '').split(/\s+/).length / 200)); }

  // ==========================================
  // INCLINAÇÃO 3D REAL (tilt por mouse) — cards
  // ==========================================
  const TILT = 12; // graus máximos
  const tiltCards = (card) => {
    card.style.transformStyle = 'preserve-3d';
    const onMove = (e) => {
      const rect = card.getBoundingClientRect();
      const px = ((e.clientX ?? (e.touches && e.touches[0].clientX)) - rect.left) / rect.width;
      const py = ((e.clientY ?? (e.touches && e.touches[0].clientY)) - rect.top) / rect.height;
      const rotX = (0.5 - py) * TILT;
      const rotY = (px - 0.5) * TILT;
      card.style.transform = `perspective(900px) rotateX(${rotX.toFixed(2)}deg) rotateY(${rotY.toFixed(2)}deg) translateY(-10px) translateZ(14px)`;
    };
    const reset = () => { card.style.transform = ''; };
    card.addEventListener('mousemove', onMove);
    card.addEventListener('mouseleave', reset);
    card.addEventListener('touchmove', onMove, { passive: true });
    card.addEventListener('touchend', reset);
  };

  // ==========================================
  // TIMELINE — render + filtro
  // ==========================================
  const track = document.getElementById('timeline-track');
  const botoesFase = document.querySelectorAll('.nav-year');
  let faseAtiva = 'pre-escola';

  function renderTimeline() {
    track.innerHTML = '';
    MEMORIAS.filter(m => m.fase === faseAtiva).forEach((mem, i) => {
      const card = document.createElement('article');
      card.className = 'timeline-card ' + (mem.tipo === 'foto' ? 'photo-card' : 'story-card');
      const cor = i % 3 === 0 ? '' : (i % 3 === 1 ? 'vermelha' : 'azul');

      if (mem.tipo === 'foto') {
        card.innerHTML = `
          <span class="card-tag ${cor}">${escapeHtml(mem.ano)} · FOTO</span>
          <img src="${escapeHtml(mem.imagem || '')}" alt="${escapeHtml(mem.alt || '')}"
               class="photo-card-image" loading="lazy" onerror="this.style.display='none'">
          <span class="photo-card-caption">${escapeHtml(mem.titulo)}</span>`;
      } else {
        card.innerHTML = `<span class="card-tag ${cor}">${escapeHtml(mem.ano)} · ${escapeHtml(faseAtiva.toUpperCase())}</span>
          <div class="story-header">
            <span class="story-ano">${escapeHtml(mem.ano)}</span>
            <span class="story-fase">${escapeHtml(faseAtiva.replace('-', ' '))}</span>
          </div>
          <div class="story-corpo">
            <strong>${escapeHtml(mem.titulo)}</strong><br><br>${mem.conteudo}
          </div>`;
      }
      track.appendChild(card);
      tiltCards(card);
    });
  }

  botoesFase.forEach(btn => {
    btn.addEventListener('click', () => {
      botoesFase.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      faseAtiva = btn.dataset.fase;
      renderTimeline();
      if (temST) setTimeout(() => ScrollTrigger.refresh(), 150);
    });
  });

  // ==========================================
  // PORTFÓLIO — render, filtro, busca, vista
  // ==========================================
  const grid = document.getElementById('redacoes-grid');
  const searchInput = document.getElementById('search-input');
  const searchHint = document.getElementById('search-hint');
  const filtroBotoes = document.querySelectorAll('.filtro-btn');
  const sortSelect = document.getElementById('sort-select');
  const viewBotoes = document.querySelectorAll('.view-btn');
  const contador = document.getElementById('contador-pecas');

  let filtroAtivo = 'all';
  let buscaAtiva = '';
  let ordemAtiva = 'default';
  let vistaAtiva = 'grid';

  function aplicarFiltros() {
    let resultado = REDACOES_DATA.filter(r => {
      const passaFiltro = filtroAtivo === 'all' || r.categorias.includes(filtroAtivo);
      const passaBusca = !buscaAtiva ||
        r.titulo.toLowerCase().includes(buscaAtiva) ||
        r.tema.toLowerCase().includes(buscaAtiva);
      return passaFiltro && passaBusca;
    });

    if (ordemAtiva === 'titulo') resultado = [...resultado].sort((a, b) => a.titulo.localeCompare(b.titulo));
    else if (ordemAtiva === 'tempo') resultado = [...resultado].sort((a, b) => tempoLeitura(a.texto) - tempoLeitura(b.texto));

    grid.innerHTML = '';
    grid.classList.toggle('lista', vistaAtiva === 'list');

    if (!resultado.length) {
      grid.innerHTML = '<p class="vazio">Nenhuma peça encontrada.</p>';
    } else {
      resultado.forEach(r => {
        const card = document.createElement('article');
        card.className = 'card';
        card.tabIndex = 0;
        card.setAttribute('role', 'button');
        card.setAttribute('aria-label', 'Abrir: ' + r.titulo);
        card.dataset.cat = r.categorias[0] || '';

        let tituloHTML = escapeHtml(r.titulo);
        if (buscaAtiva) {
          tituloHTML = tituloHTML.replace(new RegExp(`(${escapeRegExp(buscaAtiva)})`, 'gi'), '<mark>$1</mark>');
        }

        const imgHTML = r.imagem
          ? `<img src="${escapeHtml(r.imagem)}" alt="${escapeHtml(r.titulo)}" class="card-img" loading="lazy" width="400" height="240" onerror="this.style.display='none'">`
          : '';

        card.innerHTML = `
          <span class="card-numero">${String(r.id).padStart(2, '0')}</span>
          ${imgHTML}
          <div class="card-body">
            <span class="card-cat">${escapeHtml(r.categorias[0] || '')}</span>
            <h3 class="card-titulo">${tituloHTML}</h3>
            <p class="card-tema">${escapeHtml(r.tema)}</p>
            <div class="card-pe">
              <span>${tempoLeitura(r.texto)} min de leitura</span>
              <span class="abrir">Abrir →</span>
            </div>
          </div>`;

        card.addEventListener('click', () => abrirModal(r));
        card.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); abrirModal(r); }
        });
        grid.appendChild(card);
        tiltCards(card);
      });
    }

    if (contador) contador.textContent = String(resultado.length).padStart(2, '0');
    if (searchHint) searchHint.textContent = buscaAtiva ? `${resultado.length} resultado(s)` : `${resultado.length} peça(s)`;
    if (temST) ScrollTrigger.refresh();
  }

  searchInput.addEventListener('input', (e) => { buscaAtiva = e.target.value.toLowerCase().trim(); aplicarFiltros(); });
  filtroBotoes.forEach(btn => btn.addEventListener('click', () => {
    filtroBotoes.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    filtroAtivo = btn.dataset.filter;
    aplicarFiltros();
  }));
  sortSelect.addEventListener('change', (e) => { ordemAtiva = e.target.value; aplicarFiltros(); });
  viewBotoes.forEach(btn => btn.addEventListener('click', () => {
    viewBotoes.forEach(b => { b.classList.remove('active'); b.setAttribute('aria-pressed', 'false'); });
    btn.classList.add('active');
    btn.setAttribute('aria-pressed', 'true');
    vistaAtiva = btn.dataset.view;
    aplicarFiltros();
  }));

  // ==========================================
  // MODAL
  // ==========================================
  const modalOverlay = document.getElementById('modal-overlay');
  const modalClose = document.getElementById('modal-close');
  const modalTitulo = document.getElementById('modal-title');
  const modalTema = document.getElementById('modal-tema');
  const modalTempo = document.getElementById('modal-tempo');
  const modalTexto = document.getElementById('modal-text');
  const modalIndicador = document.getElementById('modal-page-indicator');
  const modalNumero = document.getElementById('modal-numero');
  const focaveis = 'button, a, input, select, textarea, [tabindex]:not([tabindex="-"])';
  let modalAberto = false;

  function abrirModal(r) {
    modalNumero.textContent = String(r.id).padStart(2, '0');
    modalTitulo.textContent = r.titulo;
    modalTema.textContent = r.tema;
    modalTempo.textContent = 'Leitura: ' + tempoLeitura(r.texto) + ' min';
    modalIndicador.textContent = 'Peça ' + r.id + ' de ' + REDACOES_DATA.length;
    modalTexto.textContent = r.texto || '[ Texto será inserido aqui. ]';

    modalOverlay.classList.add('active');
    modalAberto = true;
    document.body.style.overflow = 'hidden';
    if (lenis) lenis.stop();

    setTimeout(() => { const alvo = modalOverlay.querySelector(focaveis); if (alvo) alvo.focus(); }, 360);
  }

  function fecharModal() {
    modalOverlay.classList.remove('active');
    modalAberto = false;
    document.body.style.overflow = '';
    if (lenis) lenis.start();
  }

  modalClose.addEventListener('click', fecharModal);
  modalOverlay.addEventListener('click', (e) => { if (e.target === modalOverlay) fecharModal(); });

  // ==========================================
  // TECLADO + ANCORAS
  // ==========================================
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalAberto) fecharModal();
    if (e.key === 'Tab' && modalAberto) {
      const els = [...modalOverlay.querySelectorAll(focaveis)];
      if (!els.length) return;
      const atual = els.indexOf(document.activeElement);
      if (e.shiftKey && atual <= 0) { e.preventDefault(); els[els.length - 1].focus(); }
      else if (!e.shiftKey && atual === els.length - 1) { e.preventDefault(); els[0].focus(); }
    }
  });

  document.querySelectorAll('a[href^="#"]').forEach(ancora => {
    ancora.addEventListener('click', (e) => {
      const id = ancora.getAttribute('href');
      if (id === '#') return;
      const alvo = document.querySelector(id);
      if (!alvo) return;
      e.preventDefault();
      if (lenis) lenis.scrollTo(alvo, { offset: -70, duration: 1.1 });
      else alvo.scrollIntoView({ behavior: 'smooth' });
    });
  });

  // ==========================================
  // EASTER EGG (Konami) — MODO PIKA
  // ==========================================
  const konami = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'p', 'k'];
  let indiceKonami = 0;
  document.addEventListener('keydown', (e) => {
    if (['INPUT', 'TEXTAREA', 'SELECT'].includes(e.target.tagName) || e.target.isContentEditable) { indiceKonami = 0; return; }
    if (e.key.toLowerCase() === konami[indiceKonami]) {
      indiceKonami++;
      if (indiceKonami === konami.length) { indiceKonami = 0; modoPika(); }
    } else { indiceKonami = 0; }
  });

  function modoPika() {
    const flash = document.createElement('div');
    flash.className = 'pika-flash';
    document.body.appendChild(flash);
    setTimeout(() => flash.remove(), 650);
    const aviso = document.createElement('div');
    aviso.textContent = 'MODO PIKA';
    Object.assign(aviso.style, {
      position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%,-50%)',
      zIndex: '99999', fontFamily: 'Anton, sans-serif', letterSpacing: '.08em',
      textTransform: 'uppercase', fontSize: 'clamp(2rem,8vw,5rem)', color: '#fff',
      background: '#e10600', padding: '1rem 2.5rem', border: '3px solid #fff',
      boxShadow: '0 0 60px rgba(225,6,0,.8)', pointerEvents: 'none'
    });
    document.body.appendChild(aviso);
    setTimeout(() => { aviso.remove(); }, 2600);
  }

  // ==========================================
  // INICIALIZAÇÃO
  // ==========================================
  renderTimeline();
  aplicarFiltros();
  if (temST) setTimeout(() => ScrollTrigger.refresh(), 500);

});
