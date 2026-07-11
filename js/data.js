/*
 * Oblitus Limbo — Base de dados da Wiki
 * Sintaxe [[slug]] ou [[slug|Texto exibido]] dentro de qualquer campo de texto
 * é resolvida por linkify.js em um <a> real para outra entidade.
 */

const ENTITIES = {

  /* ==================== PERSONAGENS ==================== */

  "kiana": {
    type: "personagem",
    nome: "Kiana",
    epiteto: "A bardo de [[vardun]] · narradora e protagonista",
    status: "alive",
    statusLabel: "Viva — arrastada para o [[o-limbo|Limbo]]",
    imagem: "Imagens/Kiana.jpeg",
    resumo: "Bardo meia-orc de cabelos brancos e olhos vermelhos, criada em um orfanato e resgatada por Viktor Vanshee. Carrega um poder ainda sem nome.",
    campos: {
      "Biografia": "Encontrada ainda bebê na orla de uma \"floresta proibida\" por [[tia-lanis|Tia Lanis]], cuidadora de um orfanato onde cresceu sofrendo o preconceito de crianças e adultos que a chamavam de \"aberração\" por sua origem não-humana. Sua melhor amiga no orfanato, [[emma|Emma]], e a própria Tia Lanis foram mortas quando o local foi atacado e incendiado por [[gyotto|Gyotto]], o \"garoto da tinta\" — um agente corrompido por [[lorde-krauser|Lorde Krauser]] anos antes. Kiana foi a única criança presente que não sucumbiu ao feitiço de sono do atacante, o que levanta dúvidas sobre sua real natureza. [[viktor-vanshee|Viktor Vanshee]] chegou tarde demais para salvar qualquer outra pessoa, mas matou Gyotto ali mesmo e resgatou Kiana, tornando-se, dali em diante, seu mentor e figura paterna. Kiana reprimiu essa memória por completo — só a recuperou quando a magia de tortura de Krauser rompeu, sem querer, seu próprio bloqueio traumático.",
      "Vínculos": "[[viktor-vanshee|Viktor Vanshee]] (mentor e salvador), [[near-shade|Near Shade]] (amizade que se aprofunda em interesse romântico), [[amnon-akmenos|Amnon Akmenos]] e [[darin-leafheart|Darin Leafheart]] (companheiros de jornada), [[rurik|Rurik]] (figura paterna adotiva em [[vardun|Vardun]]), [[calista-vanshee|Calista Vanshee]] (aliada e quase-irmã mais velha), [[tia-lanis|Tia Lanis]] e [[emma|Emma]] (falecidas, passado reprimido).",
      "Aparência": "Meia-orc, cabelos brancos longos, olhos vermelhos brilhantes mesmo no escuro. Carrega sempre um [[ukulele-de-kiana|ukulele]] e uma [[adaga-de-kael|adaga]].",
      "Feitos": "Massacrou sozinha mais de vinte homens na Taverna de Darius, em [[vardun|Vardun]], num episódio de fúria amnésica (o \"apagão\"). Ajudou a derrotar a criatura multi-elemental do [[vale-das-flores-sangrentas|Vale das Flores Sangrentas]]. Confrontou o Falso Presságio nas ruas de [[hikari|Hikari]]. Lutou no ritual da caverna contra o Presságio-isca. Enfrentou diretamente o verdadeiro Quinto Presságio ([[lorde-krauser|Lorde Krauser]]), desenvolvendo em pleno combate a técnica [[manifestacao-harmonica|Manifestação Harmônica]], decisiva para a derrota final do inimigo.",
      "Status atual": "Gravemente ferida (perdeu um braço e sofreu um ferimento abdominal grave, estabilizados por [[viktor-vanshee|Viktor]]) e sugada para dentro do [[o-limbo|Limbo]] junto com o restante do grupo, no ritual final de Krauser.",
      "Sigilo manifestado": "Não confirmado. Ela própria declara não ter despertado formalmente seu [[sigilos-da-alma|Sigilo da Alma]]. Demonstra, porém, manifestações latentes de força e velocidade sobre-humanas ligadas a estados de fúria e amnésia, além da técnica [[manifestacao-harmonica|Manifestação Harmônica]] — cuja relação exata com um possível Sigilo permanece em aberto. Ver [[estudo-de-caso-kiana|Estudo de Caso: o Sigilo da Alma em Kiana]]."
    },
    quotes: [
      { text: "O meu coração não está partido, Krauser. Ele arde, como um acorde sustentado até doer.", source: "Kiana", context: "Resposta imediata à provocação de Krauser, logo após a morte de Calista." },
      { text: "Posso não ter despertado meu sigilo ainda, Krauser... mas tenho habilidades que só eu sei usar.", source: "Kiana", context: "Momento em que invoca a Manifestação Harmônica pela primeira vez, logo após recuperar a memória do orfanato." }
    ]
  },

  "near-shade": {
    type: "personagem",
    nome: "Near Shade",
    epiteto: "O elfo da máscara",
    status: "alive",
    statusLabel: "Vivo — arrastado para o [[o-limbo|Limbo]]",
    imagem: "Imagens/NearShade.jpeg",
    resumo: "Elfo ladino de máscara preta, amigo de Kiana há três anos. Raramente mostra o rosto ou fala sobre o próprio passado.",
    campos: {
      "Biografia": "Elfo ladino que nunca frequentou escola formal e só aprendeu a ler aos treze anos — um detalhe que carrega como vergonha silenciosa. Cerca de três anos de amizade com [[kiana|Kiana]] antecedem o início da história. Raramente remove a máscara preta que cobre metade de seu rosto; fazê-lo diante de Kiana, em [[hikari|Hikari]], é um dos primeiros sinais visíveis de intimidade crescente entre os dois.",
      "Vínculos": "[[kiana|Kiana]] (amizade que evolui para afeto romântico mútuo), [[amnon-akmenos|Amnon]] e [[darin-leafheart|Darin]] (companheiros de quarto e de aventura).",
      "Aparência": "Traços élficos finos, máscara preta cobrindo metade do rosto, passos silenciosos e quase fantasmagóricos, olhos descritos como \"impossíveis de decifrar\".",
      "Feitos": "Combateu o elemental de água no [[vale-das-flores-sangrentas|Vale das Flores Sangrentas]] (foi derrubado em combate). Executou ataques furtivos precisos contra o Presságio-isca na caverna. Pegou armas de guardas caídos para proteger civis durante o ataque de sombras ao festival de [[hikari|Hikari]].",
      "Status atual": "Sugado para o [[o-limbo|Limbo]] junto com o restante do grupo ao final do volume.",
      "Sigilo manifestado": "Não manifestado/Desconhecido."
    }
  },

  "amnon-akmenos": {
    type: "personagem",
    nome: "Amnon Akmenos",
    epiteto: "O tiefling exilado",
    status: "alive",
    statusLabel: "Vivo — arrastado para o [[o-limbo|Limbo]]",
    imagem: "Imagens/AmnonAkmenos.jpeg",
    resumo: "Tiefling de origem burguesa, expulso da própria família por uma acusação injusta. Esconde a dor atrás de deboche e bebida.",
    campos: {
      "Biografia": "Tiefling de origem burguesa, expulso da própria família após ser injustamente acusado de roubar a \"[[reliquia-de-nostradamus|Relíquia de Nostradamus]]\". Esconde a própria dor atrás de deboche e bebida constante. Seu sobrenome ecoa de forma intrigante em uma memória revelada tardiamente sobre a história oficial dos Presságios, onde um certo \"Gale Akmenos\" é creditado — talvez falsamente — pela morte do Presságio Gauss.",
      "Vínculos": "[[kiana|Kiana]], [[near-shade|Near]] e [[darin-leafheart|Darin]] (grupo de amigos); família Akmenos (rompida e hostil).",
      "Aparência": "Tiefling, chifres curtos, pele de um vermelho vivo.",
      "Feitos": "Segurou com as próprias mãos o núcleo em chamas da criatura elemental do [[vale-das-flores-sangrentas|Vale das Flores Sangrentas]], sofrendo queimaduras graves para permitir que [[calista-vanshee|Calista]] a eliminasse. Lutou com arco contra o Presságio-isca na caverna. Defendeu civis com arma improvisada durante o ataque de sombras em [[hikari|Hikari]].",
      "Status atual": "Sugado para o [[o-limbo|Limbo]] junto com o restante do grupo ao final do volume.",
      "Sigilo manifestado": "Não manifestado/Desconhecido."
    }
  },

  "darin-leafheart": {
    type: "personagem",
    nome: "Darin Leafheart",
    epiteto: "O druida dos lobos",
    status: "alive",
    statusLabel: "Vivo — arrastado para o [[o-limbo|Limbo]]",
    imagem: "Imagens/Darin.jpeg",
    resumo: "Druida humano cujo vínculo com lobos moldou um raro Sigilo Autoformado. Alterna euforia etílica e fuga da própria mente.",
    campos: {
      "Biografia": "Druida humano que alterna entre a euforia etílica e uma \"fuga desesperada da própria mente\". Nunca herdou sigilo algum dos pais — foi sua conexão e paixão por lobos, cultivada desde a infância, que moldou sua própria alma em torno desse instinto, num raro caso de [[sigilos-da-alma|sigilo]] inteiramente autoformado.",
      "Vínculos": "[[kiana|Kiana]], [[near-shade|Near]] e [[amnon-akmenos|Amnon]] (grupo de amigos); [[yuto|Yuto]] (aliado de combate improvisado em [[hikari|Hikari]]).",
      "Aparência": "Cabelos castanhos desgrenhados, presença de \"brilho caótico\".",
      "Feitos": "Identificou o loop espacial que prendia o grupo no [[vale-das-flores-sangrentas|Vale das Flores Sangrentas]]. Atuou como cozinheiro do grupo durante a travessia. Lutou com garras espirituais de lobo contra o Presságio-isca na caverna e, ao lado de [[yuto|Yuto]], contra as sombras gigantes no ataque a [[hikari|Hikari]].",
      "Status atual": "Sugado para o [[o-limbo|Limbo]] junto com o restante do grupo ao final do volume.",
      "Sigilo manifestado": "Instinto de Caça — uma forma de fúria/agilidade lupina, manifestada como uma aura verde-esmeralda e manoplas translúcidas em forma de garras de lobo, com um \"rosnado espiritual\". Origem: Sigilo Autoformado."
    }
  },

  "viktor-vanshee": {
    type: "personagem",
    nome: "Viktor Vanshee",
    epiteto: "O Pilar do Gelo · Mestre do Gelo",
    status: "alive",
    statusLabel: "Vivo, gravemente debilitado — arrastado para o [[o-limbo|Limbo]]",
    imagem: "Imagens/ViktorVanshee.jpeg",
    resumo: "Meio-elfo nascido com o Sigilo do Gelo já desperto — um caso raríssimo de Herança Celestial. Mentor e salvador de Kiana.",
    campos: {
      "Biografia": "Meio-elfo que nasceu já com seu Sigilo desperto, um caso raríssimo de Herança Celestial. Anos antes do início da trama, chegou tarde demais para impedir o massacre de um orfanato, mas matou o atacante — [[gyotto|Gyotto]], o Sexto Presságio, então ainda conhecido apenas como \"o garoto da tinta\" — e resgatou a única sobrevivente, [[kiana|Kiana]], tornando-se seu mentor. Casado com [[calista-vanshee|Calista Vanshee]]. Perdeu o melhor amigo, [[kael|Kael]], em circunstâncias contestadas — Viktor afirma que goblins o mataram, mas o Falso Presságio reivindica ter matado Kael pessoalmente, uma contradição jamais resolvida neste volume. É reverenciado quase como uma divindade por \"[[o-mascarado|o Mascarado]]\", figura de autoridade entre os Presságios, que o descreve como alguém que já matou ao menos um Presságio numerado (o Sexto, Gyotto) e, possivelmente, outro (Gauss, supostamente ligado ao misterioso [[ankiquilarke|Ankiquilarke]]) — ainda que os registros históricos oficiais atribuam essa segunda morte a um tal \"Gale Akmenos\". Foi sequestrado, torturado e quase destruído por [[lorde-krauser|Lorde Krauser]] antes do início da busca do grupo por ele; libertado da corrupção mágica que o consumia apenas pelo sacrifício final de Calista.",
      "Vínculos": "[[kiana|Kiana]] (aprendiz e quase-filha adotiva), [[calista-vanshee|Calista Vanshee]] (esposa, falecida), [[kael|Kael]] (melhor amigo, falecido), [[rurik|Rurik]] (pai), \"[[o-mascarado|o Mascarado]]\" (reverenciado por ele, natureza exata da relação inquietante e não esclarecida).",
      "Aparência": "Traços élficos marcados, cabelos brancos longos presos, veste tons de branco e azul ou um sobretudo pesado; postura de \"viajante antigo\".",
      "Feitos": "Matou [[gyotto|Gyotto]], o Sexto Presságio — o mesmo \"garoto da tinta\" responsável pelo massacre do orfanato de Kiana. Resgatou e criou Kiana. Possivelmente matou também o Presságio Gauss. Foi capturado por Krauser. Libertado pelo sacrifício de Calista. Derrotou [[lorde-krauser|Lorde Krauser]] em combate direto, culminando num golpe surpreendente de fogo branco-dourado chamado \"Punho Flamejante\".",
      "Status atual": "Extremamente debilitado após a batalha; sugado para o [[o-limbo|Limbo]] junto com o restante do grupo pelo ritual final de Krauser.",
      "Sigilo manifestado": "Manipulação do Gelo (Herança Celestial, ligada ao evento conhecido como \"[[ankiquilarke|Ankiquilarke]]\"). Demonstrou também, ao final da luta contra Krauser, um golpe de fogo branco e dourado — \"Punho Flamejante\" — cuja relação com seu Sigilo de gelo permanece sem explicação no volume."
    },
    quotes: [
      { text: "Você é só uma marionete, Krauser. Não sente as cordas que possui em seu pescoço.", source: "Viktor Vanshee", context: "Confronto final na ponte de gelo, antes do golpe decisivo contra o verdadeiro Quinto Presságio." }
    ]
  },

  "calista-vanshee": {
    type: "personagem",
    nome: "Calista Vanshee",
    epiteto: "A arqueira de [[emberfall|EmberFall]]",
    status: "dead",
    statusLabel: "Morta",
    imagem: "Imagens/CalistaVanshee.jpeg",
    resumo: "Esposa de Viktor Vanshee, guerreira e arqueira de precisão extraordinária. Sacrificou-se para purificar o marido da corrupção de Krauser.",
    campos: {
      "Biografia": "Esposa de [[viktor-vanshee|Viktor Vanshee]], natural de [[emberfall|EmberFall]], onde resolvia \"assuntos pendentes da família\" antes do início da trama. Guerreira e arqueira de precisão extraordinária, com conhecimento de runas (embora inferior ao de Viktor). Contou ao grupo a lenda de Kynare e o Corvo Celeste para explicar a natureza dos [[termo-pressagio|Presságios]]. Ao ser atingida pelo cristal vermelho de [[lorde-krauser|Lorde Krauser]], gritou \"MÃE!\" — um grito de agonia que sugere um trauma ou vínculo não resolvido com a própria mãe, jamais esclarecido no volume. No clímax da batalha final, sacrificou a própria vida beijando Viktor para transferir para si a corrupção mágica (as cicatrizes negras) que o consumia, purificando-o ao custo da própria morte.",
      "Vínculos": "[[viktor-vanshee|Viktor Vanshee]] (marido), [[kiana|Kiana]] (quase-irmã mais velha e mentora), [[kael|Kael]] (amigo do casal, falecido), sua mãe (mencionada apenas em um grito de agonia).",
      "Aparência": "Cabelos ruivos ondulados, presença segura e \"maior que a própria vida\".",
      "Feitos": "Resgatou o grupo preso no [[vale-das-flores-sangrentas|Vale das Flores Sangrentas]]. Derrotou a essência de vento da criatura elemental. Investigou [[lorde-krauser|Lorde Krauser]] junto a Kiana em [[hikari|Hikari]]. Lutou bravamente contra Krauser até ser mortalmente ferida. Sacrificou-se para purificar e salvar Viktor.",
      "Status atual": "Morta — sacrifício heroico no clímax do Volume 1.",
      "Sigilo manifestado": "Manipulação de Fios de Sangue, canalizada e limitada com segurança através do próprio arco."
    },
    quotes: [
      { text: "Agora, Viktor, por favor... salve todo mundo. Salve a Kiana.", source: "Calista Vanshee", context: "Últimas palavras antes de beijar Viktor e transferir para si a corrupção mágica que o consumia." }
    ]
  },

  "yuto": {
    type: "personagem",
    nome: "Yuto",
    epiteto: "O ronin de passagem",
    status: "unknown",
    statusLabel: "Destino incerto após o ritual final",
    imagem: "Imagens/Yuto.jpeg",
    resumo: "Ronin viajante que cruza o caminho do grupo em Hikari, em busca de alguém. Luta com maestria puramente marcial.",
    campos: {
      "Biografia": "Ronin viajante que cruza o caminho do grupo em [[hikari|Hikari]] \"por um motivo parecido\" ao deles — em busca de alguém, sem maiores detalhes revelados neste volume. Sereno e observador, promete a [[darin-leafheart|Darin]] que \"seus caminhos se cruzarão novamente\" — presságio que se cumpre quando reaparece, providencialmente, durante o ataque de sombras ao festival.",
      "Vínculos": "[[darin-leafheart|Darin]] (conhecidos de taverna que se tornam aliados de combate); restante do grupo (aliados temporários).",
      "Aparência": "Haori cor de terracota com padrões de ondas negras, quimono azul-escuro, cachecol xadrez cinza, duas katanas embainhadas, cabelo negro com mechas azul e vermelho preso em rabo de cavalo lateral alto, um pequeno galho mascado no canto da boca, curativo no nariz sugerindo brigas recentes.",
      "Feitos": "Salvou Darin de um golpe fatal durante o ataque de sombras em [[hikari|Hikari]]. Derrotou, em conjunto com Darin, uma criatura de sombra gigante. Percebeu que a origem do ataque vinha do castelo — \"o coração desse pesadelo\".",
      "Status atual": "Presente na batalha final contra as sombras em Hikari; seu destino após a abertura do portal para o [[o-limbo|Limbo]] não é esclarecido no volume.",
      "Sigilo manifestado": "Não manifestado/Desconhecido — luta com maestria puramente marcial, sem magia evidente."
    }
  },

  "lorde-krauser": {
    type: "personagem",
    nome: "Lorde Krauser",
    epiteto: "O verdadeiro Quinto Presságio",
    status: "destroyed",
    statusLabel: "Destruído",
    imagem: null,
    resumo: "Draconato rejeitado pelo próprio pai, tornou-se Presságio e governou Hikari por dez anos sob identidade forjada.",
    campos: {
      "Biografia": "Nasceu com traços Draconato visíveis desde o berço. Seu pai humano o rejeitou com violência, chamando-o de \"monstro\" e \"dragão\", e assassinou a mãe de Krauser, Layla, estrangulando-a diante do próprio filho. O jovem Krauser reagiu incinerando o pai vivo com uma rajada de fogo — seu primeiro uso conhecido de poder. Tornou-se, com o tempo, um dos [[termo-pressagio|Presságios]]: seres que venderam o próprio livre-arbítrio por poder a serviço de uma entidade conhecida apenas como \"[[a-presenca|a Presença]]\" ou \"o Mestre\". Já adulto, encontrou na floresta uma criança rejeitada com poderes de \"tinta negra\" — [[gyotto|Gyotto]] — e a corrompeu deliberadamente, reproduzindo, sem hesitar, o mesmo ciclo de abuso que o formara. Anos depois, o já corrompido Gyotto destruiria o orfanato onde [[kiana|Kiana]] crescia, tornando Krauser indiretamente responsável pela morte de [[tia-lanis|Tia Lanis]], [[emma|Emma]] e as demais crianças. Por ser considerado \"o Presságio mais fraco\" do grupo, foi humilhado e exilado por \"[[o-mascarado|o Mascarado]]\" para a cidadezinha de [[hikari|Hikari]], com ordens de assassinar o Lorde local, tomar seu lugar e vigiar secretamente a região. Governou como um \"Lorde heroico\" fabricado por dez anos, orquestrando em segredo o sequestro e a tortura de [[viktor-vanshee|Viktor Vanshee]] através de um Presságio-isca (o \"encapuzado\"/metamorfo).",
      "Vínculos": "Layla (mãe, falecida), o pai (falecido, morto pelo próprio Krauser), \"[[o-mascarado|o Mascarado]]\" (superior direto), [[gyotto|Gyotto]] (vítima que corrompeu, indiretamente causador da tragédia do orfanato de Kiana), [[viktor-vanshee|Viktor Vanshee]] (inimigo declarado).",
      "Aparência": "Híbrido humano-Draconato: metade do rosto humana, de traços nobres e olheiras de exaustão; a outra metade coberta por escamas rígidas, com um olho reptiliano. Veste capa azul profunda, colete de couro utilitário e uma ombreira metálica no lado humano do corpo. Em combate, revela escamas enegrecidas e placas ósseas mais extensas.",
      "Feitos": "Governou [[hikari|Hikari]] por cerca de dez anos sob identidade forjada. Corrompeu [[gyotto|Gyotto]], ainda criança, plantando a semente da tragédia que destruiria o orfanato de Kiana. Orquestrou o sequestro e a tortura de Viktor Vanshee. Matou [[calista-vanshee|Calista Vanshee]]. Feriu gravemente Kiana. Invocou, com o próprio corpo como componente ritual, o feitiço \"[[o-limbo|Oblitus Limbo]]\", abrindo um portal que arrastou todo o grupo protagonista para dentro do Limbo.",
      "Status atual": "Destruído por [[viktor-vanshee|Viktor Vanshee]] no clímax do volume — mas seu golpe final, o ritual \"Oblitus Limbo\", foi bem-sucedido.",
      "Sigilo manifestado": "Tentáculos do Abismo — quatro tentáculos negros e viscerais que rompem sua armadura pelas costas. Demonstrou também uma habilidade adicional chamada \"Armadura Arcana: Frio Absoluto\" (chamas azuis espectrais que neutralizam o gelo), cuja relação exata com seu Sigilo principal não é esclarecida."
    },
    quotes: [
      { text: "Você luta com o coração, Kiana, e é por isso que vai perder! Corações pesados são lentos! Corações partidos são fáceis de esmagar!", source: "Lorde Krauser", context: "Durante o duelo no salão do trono, tentando desestabilizar Kiana logo após a morte de Calista." },
      { text: "Sanguis pro limine, anima pro vana... In tenebris aeternis, mundus dissolvitur. Aperi portam limbi, ubi lux moritur... OBLITUS LIMBO!", source: "Lorde Krauser", context: "O ritual final, em latim, que abre o portal e arrasta o grupo para dentro do Limbo — o evento que dá nome ao livro." }
    ]
  },

  "gyotto": {
    type: "personagem",
    nome: "Gyotto",
    epiteto: "O garoto da tinta · o Sexto Presságio",
    status: "dead",
    statusLabel: "Morto (antes do início da trama)",
    imagem: "Imagens/Gyotto.jpeg",
    resumo: "Criança rejeitada e corrompida por Krauser, transformada em arma. Destruiu o orfanato onde Kiana crescia.",
    campos: {
      "Biografia": "Criança rejeitada pelo mundo, encontrada por [[lorde-krauser|Krauser]] numa floresta aos sete anos de idade, já com os olhos marcados por \"globos de escuridão absoluta\" de pupilas azul-elétricas — sinal de um poder inato sobre uma substância negra e viscosa, semelhante a tinta. Krauser reconheceu nele o mesmo tipo de rejeição que sofrera na própria infância e o corrompeu deliberadamente, moldando-o à imagem do próprio trauma. Anos depois, já como o Sexto Presságio, um Gyotto adolescente — cerca de dezesseis anos — atacou o orfanato onde [[kiana|Kiana]] crescia, matando cuidadoras e crianças com jatos de tinta e um feitiço de sono em massa que adormeceu todas as crianças presentes, exceto Kiana. [[viktor-vanshee|Viktor Vanshee]] chegou durante o massacre e o matou, empalando-o com uma estaca de gelo cristalino — tarde demais para salvar qualquer outra pessoa, mas a tempo de resgatar a única sobrevivente. Sua morte só é mencionada diretamente muito depois, num conselho secreto de Presságios testemunhado por Kiana dentro da mente de Krauser: ali, o Mascarado revela que Gyotto morria \"enquanto procurava pelo [[o-fragmento|Fragmento]]\", e que sua proximidade com Viktor no momento da morte \"não é coincidência\".",
      "Vínculos": "[[lorde-krauser|Lorde Krauser]] (corruptor e figura paterna sombria), [[viktor-vanshee|Viktor Vanshee]] (matador), [[tia-lanis|Tia Lanis]], [[emma|Emma]] e as crianças do orfanato de Kiana (vítimas), [[kiana|Kiana]] (única sobrevivente do seu ataque).",
      "Aparência": "Quando criança na floresta: magro, maltrapilho, olhos de escuridão absoluta com pupilas azul-elétricas. Anos depois, no orfanato: um adolescente magro, sem camisa, calça marrom gasta, os mesmos olhos inumanos — capaz de se dissolver em tinta negra e branca, viscosa, que atravessa paredes como se a matéria sólida fosse ilusória.",
      "Feitos": "Destruiu o orfanato de Kiana, matando Tia Lanis, Emma e todas as demais crianças presentes, exceto Kiana. Procurava por \"[[o-fragmento|o Fragmento]]\" no momento de sua morte — possivelmente ligado à [[peca-perdida|Peça Perdida]] que a Presença busca no prólogo do livro.",
      "Status atual": "Morto — empalado por Viktor Vanshee durante o massacre do orfanato, anos antes do início da trama. Sua morte é relembrada e lamentada pelos demais Presságios num conselho secreto revisitado por Kiana.",
      "Sigilo manifestado": "Poder sobre uma substância negra viscosa (\"tinta\"), capaz de se mover através de superfícies sólidas, formar tentáculos e lâminas, e induzir sono mágico em massa — não é nomeado como um Sigilo da Alma formal no texto, mas sua natureza e escala sugerem fortemente que se trata de um."
    }
  },

  /* ---- personagens secundários (fichas menores) ---- */

  "rurik": {
    type: "personagem",
    nome: "Rurik",
    epiteto: "Dono da Taverna de Rurik, pai de Viktor",
    status: "unknown",
    statusLabel: "Vivo (Vardun)",
    imagem: null,
    resumo: "Dono da taverna que serve de coração social de Vardun. Revelado como pai de Viktor Vanshee.",
    campos: {
      "Biografia": "Dono da Taverna de Rurik, o coração social de [[vardun|Vardun]] e ponto de encontro do grupo protagonista. É revelado a Kiana como o pai de [[viktor-vanshee|Viktor Vanshee]], contando-lhe sobre o criminoso Darius durante a busca por Viktor desaparecido."
    }
  },

  "tia-lanis": {
    type: "personagem",
    nome: "Tia Lanis",
    epiteto: "Cuidadora do orfanato",
    status: "dead",
    statusLabel: "Morta (antes do início da trama)",
    imagem: null,
    resumo: "Cuidadora que encontrou e criou Kiana no orfanato. Morta no ataque de Gyotto.",
    campos: {
      "Biografia": "Cuidadora de um orfanato, foi quem encontrou [[kiana|Kiana]] ainda bebê na orla de uma \"floresta proibida\" e a criou. Ensinou Kiana a tocar o [[ukulele-de-kiana|ukulele]]. Morta junto com [[emma|Emma]] e as demais crianças no ataque de [[gyotto|Gyotto]] ao orfanato."
    },
    quotes: [
      { text: "Você não nasceu para ser odiada, mas para ser a resposta que este mundo ainda não sabe que precisa.", source: "Tia Lanis, a Kiana criança", context: "Resposta ao preconceito que o orfanato inteiro lançava sobre Kiana por sua origem não-humana." }
    ]
  },

  "emma": {
    type: "personagem",
    nome: "Emma",
    epiteto: "Melhor amiga de Kiana no orfanato",
    status: "dead",
    statusLabel: "Morta (antes do início da trama)",
    imagem: null,
    resumo: "Melhor amiga de infância de Kiana no orfanato. Morta no ataque de Gyotto.",
    campos: {
      "Biografia": "Melhor amiga de [[kiana|Kiana]] no orfanato onde ambas cresceram. Morta junto com [[tia-lanis|Tia Lanis]] e as demais crianças no ataque de [[gyotto|Gyotto]] ao orfanato — uma memória que Kiana reprime por completo até o clímax do volume."
    }
  },

  "kael": {
    type: "personagem",
    nome: "Kael",
    epiteto: "Melhor amigo de Viktor",
    status: "dead",
    statusLabel: "Morto, circunstâncias contestadas",
    imagem: null,
    resumo: "Melhor amigo de Viktor e Calista, morto em circunstâncias nunca totalmente esclarecidas.",
    campos: {
      "Biografia": "Melhor amigo de [[viktor-vanshee|Viktor Vanshee]] e amigo do casal Vanshee. Morreu em circunstâncias contestadas — Viktor afirma que goblins o mataram, mas o Falso Presságio (o \"encapuzado\") reivindica ter matado Kael pessoalmente, uma contradição jamais resolvida neste volume. Sua [[adaga-de-kael|adaga]], gravada com símbolos de gelo, é entregue por Kiana a Viktor como presente de aniversário no capítulo de abertura."
    }
  },

  "matilde": {
    type: "personagem",
    nome: "Matilde",
    epiteto: "Anciã de Hikari",
    status: "unknown",
    statusLabel: "Viva (Hikari)",
    imagem: null,
    resumo: "Idosa de Hikari que Kiana ajuda com uma lista de compras simbólicas, em troca de uma pulseira dourada.",
    campos: {
      "Biografia": "Anciã de [[hikari|Hikari]] que Kiana ajuda com uma lista de compras simbólicas enquanto o grupo aguarda a ajuda de [[lorde-krauser|Krauser]] na busca por Viktor. Em troca, presenteia Kiana com a [[pulseira-de-matilde|pulseira dourada]] cuja perda quase custa a vida da protagonista mais tarde."
    }
  },

  "o-mascarado": {
    type: "personagem",
    nome: "O Mascarado",
    epiteto: "Figura de autoridade entre os Presságios",
    status: "unknown",
    statusLabel: "Desconhecido",
    imagem: "Imagens/Mascarado.jpeg",
    resumo: "Figura de autoridade entre os Presságios, com chifres esculpidos em osso antigo. Reverencia Viktor Vanshee quase como uma divindade.",
    campos: {
      "Biografia": "Figura de autoridade entre os [[termo-pressagio|Presságios]], com chifres esculpidos em osso antigo. Comanda reuniões do conselho secreto, decide punições — como o exílio de [[lorde-krauser|Krauser]] para [[hikari|Hikari]] — e reverencia [[viktor-vanshee|Viktor Vanshee]] quase como uma divindade, associando-o ao evento do \"[[ankiquilarke|Ankiquilarke]]\" e à morte do Presságio Gauss. A natureza exata dessa reverência não é esclarecida no Volume 1.",
      "Vínculos": "[[lorde-krauser|Lorde Krauser]] (subordinado, exilado por sua ordem), [[viktor-vanshee|Viktor Vanshee]] (reverenciado por ele)."
    }
  },

  "a-presenca": {
    type: "personagem",
    nome: "A Presença",
    epiteto: "O Mestre · entidade central do Limbo",
    status: "unknown",
    statusLabel: "Desconhecida",
    imagem: null,
    resumo: "Entidade central do Limbo, nunca descrita em detalhe físico. Comanda os Presságios e busca a Peça Perdida.",
    campos: {
      "Biografia": "Entidade central do [[o-limbo|Limbo]], nunca descrita em detalhe físico. Comanda os [[termo-pressagio|Presságios]]/Fios e busca a [[peca-perdida|Peça Perdida]]. Trata a \"Silhueta\" — sua serva de maior hierarquia — como \"Segunda em poder e soberania\". No prólogo do Volume 1, recebe o relato de que o Quinto Fio morreu, mas arrastou consigo para dentro do Limbo \"Aquele que Sabe\" ([[viktor-vanshee|Viktor Vanshee]]) e seus companheiros, e decide não caçá-los ativamente — prefere deixá-los se consumir por dentro."
    },
    quotes: [
      { text: "Deixe que o desespero amadureça a carne deles.", source: "a Presença, no Prólogo", context: "Decisão de não caçar ativamente Viktor e seus companheiros após serem arrastados para o Limbo." }
    ]
  },

  /* ==================== LUGARES ==================== */

  "vardun": {
    type: "lugar",
    nome: "Vardun",
    epiteto: "A ferida aberta",
    status: null,
    statusLabel: null,
    imagem: null,
    resumo: "Cidade de penumbra azulada onde a história começa. Sob a superfície acolhedora, um território doente e violento.",
    campos: {
      "Descrição": "Vardun é onde a história começa e onde [[kiana|Kiana]] lançou suas primeiras raízes conscientes. É uma cidade de penumbra azulada e ar gélido, um lugar que \"pulsa com uma vida febril\" assim que a noite cai — vendedores recolhendo mercadorias, casais perdidos em sussurros, lanternas moribundas pintando o calçamento de ouro velho. Sob essa superfície quase acolhedora, porém, Vardun é uma cidade doente: um território onde crianças tiefling são caçadas e mutiladas ritualisticamente, onde o crime organizado de Darius opera com relativa impunidade, e onde a esperança convive lado a lado com a podridão.",
      "Pontos de interesse": "O coração social de Vardun é a Taverna de [[rurik|Rurik]], ponto de encontro do grupo protagonista, e a estalagem administrada por Helena, onde Kiana se hospeda.",
      "Eventos notáveis": "É em Vardun que Kiana cresce sob a tutela de [[viktor-vanshee|Viktor Vanshee]], que [[kael|Kael]] morre em circunstâncias nunca totalmente esclarecidas, e que Kiana, ao massacrar sozinha mais de vinte homens na busca por vingança, passa a ser vista pelos próprios vizinhos como uma ameaça — uma ferida que a cidade não sabe como tratar."
    }
  },

  "hikari": {
    type: "lugar",
    nome: "Hikari",
    epiteto: "A máscara de ordem",
    status: null,
    statusLabel: null,
    imagem: null,
    resumo: "Cidade murada dominada por um castelo hipnótico. Paz sustentada por justiça implacável — e governada há dez anos por um impostor.",
    campos: {
      "Descrição": "Se [[vardun|Vardun]] é a ferida aberta, Hikari é a máscara de ordem que a esconde. Cidade murada, compacta, erguida em pedra cinzenta, Hikari é dominada por um castelo colossal cuja arquitetura exerce um \"magnetismo quase doentio\" sobre quem a contempla — capaz, por um instante, de fazer Kiana esquecer o próprio nome. Ao contrário de Vardun, aqui as pessoas caminham sem medo, as lojas cheiram a cravo e canela em vez de sangue e mofo, e as crianças gritam de alegria, não de pavor.",
      "Pontos de interesse": "Praça central, onde ocorrem execuções públicas por guilhotina sob a estátua da \"Justiça Desequilibrada\" — uma balança quebrada. Estalagem Carvalho Sereno, onde o grupo se hospeda. Biblioteca de Hikari. O castelo, sede de \"Lorde Krauser\".",
      "O segredo": "Essa paz é sustentada por uma justiça implacável, e por trás de tudo um segredo bem guardado: Hikari é governada, há dez anos, por um impostor. O verdadeiro Quinto Presságio assumiu a identidade de \"[[lorde-krauser|Lorde Krauser]]\" como punição e disfarce, e a cidade inteira vive sob a sombra de um governante que nunca existiu de fato."
    }
  },

  "emberfall": {
    type: "lugar",
    nome: "EmberFall",
    epiteto: "O horizonte distante",
    status: null,
    statusLabel: null,
    imagem: null,
    resumo: "Terra natal de Calista Vanshee, região mais rica e organizada, ligada à Aliança dos Lordes. Nunca visitada no Volume 1.",
    campos: {
      "Descrição": "EmberFall nunca é visitada diretamente ao longo deste volume, mas sua presença paira sobre a narrativa como um horizonte distante. É a terra natal de [[calista-vanshee|Calista Vanshee]], uma região aparentemente mais rica e organizada, ligada a uma estrutura política formal — a [[alianca-dos-lordes|Aliança dos Lordes]] — reconhecível por selos de cera azul e pergaminhos oficiais de convocação.",
      "Ligações e influência": "A arquitetura de [[hikari|Hikari]] (o saguão de mármore polido do castelo, os globos de luz arcana) é comparada às \"grandes casas nobres de EmberFall\", sugerindo uma civilização mais próspera e tecnicamente refinada. Bebidas e bens de luxo vindos de EmberFall circulam nas tavernas de Hikari. Os quadros de \"antigos bardos de EmberFall\" decoram o quarto de Kiana em [[vardun|Vardun]] — um detalhe que sugere que a própria estalagem de Kiana tem alguma ligação histórica com essa região, ainda não explicada."
    }
  },

  "vale-das-flores-sangrentas": {
    type: "lugar",
    nome: "Vale das Flores Sangrentas",
    epiteto: "A floresta amaldiçoada",
    status: null,
    statusLabel: null,
    imagem: "Imagens/ValeDasFloresSangrentas.jpeg",
    resumo: "Floresta amaldiçoada entre Vardun e Hikari que prende viajantes num loop espacial. Domínio de uma criatura multi-elemental.",
    campos: {
      "Descrição": "Entre [[vardun|Vardun]] e [[hikari|Hikari]] estende-se o Vale das Flores Sangrentas — uma floresta amaldiçoada que não aparece em nenhum mapa confiável e que poucos viajantes atravessam sem se perder. O solo é coberto por flores vermelhas e carnudas, de pétalas espessas como carne, exalando um cheiro adocicado e ferroso que Kiana reconhece com horror: é o mesmo odor que sentiu ao despertar do massacre na Taverna de Darius, em Vardun — uma primeira pista, ainda não explicada, de que o vale guarda alguma ligação com a natureza do seu próprio poder.",
      "O loop espacial": "O vale prende quem nele entra num loop espacial: bússolas quebram, param de apontar para qualquer norte real, e os viajantes andam em círculos por dias sem perceber. O grupo de [[kiana|Kiana]] passa oito dias preso ali, registrando a fome e o desespero crescentes num diário improvisado, até que [[darin-leafheart|Darin]] identifica o padrão do loop e, no sétimo dia, runas ocultas são reveladas ao toque na casca de uma árvore.",
      "O domínio interior": "Essas runas funcionam como uma porta — uma \"barreira do infinito\" — para o domínio de uma criatura mutável que habita o vale há cerca de vinte anos: um ser multi-elemental capaz de se transformar sucessivamente em essências de água, vento e fogo. É nesse domínio interior, cercado por um gramado circular e uma rocha vermelha rachada, que o grupo trava a batalha que quase os custa a vida — e de onde só escapam graças à intervenção de [[calista-vanshee|Calista Vanshee]], que os encontra, decifra as runas de proteção e luta ao lado deles."
    }
  },

  /* ==================== LORE ==================== */

  "sigilos-da-alma": {
    type: "lore",
    nome: "Sigilos da Alma",
    epiteto: "O sistema de magia de Oblitus Limbo",
    status: null,
    statusLabel: null,
    imagem: null,
    resumo: "Sistema de poder pessoal: uma marca do espírito que desperta através de combate real ou trauma emocional profundo.",
    campos: {
      "Visão geral": "O universo de Oblitus Limbo é regido por um sistema de poder pessoal chamado Sigilo da Alma: uma marca do espírito, uma habilidade única que funciona como extensão direta da essência de quem a possui. Não é uma disciplina que se aprende como um ofício — é algo que desperta, e a grande maioria das pessoas jamais chega a ver o próprio sigilo, pois seu despertar exige uma experiência de combate real ou um trauma emocional de peso considerável.",
      "Instabilidade e ferramentas": "Sigilos são inerentemente instáveis e perigosos — ter controle total sobre um é quase impossível para uma pessoa comum. Por isso, muitos usuários recorrem a ferramentas físicas para canalizar e limitar seu poder com segurança. [[calista-vanshee|Calista Vanshee]], por exemplo, não tenta controlar sangue livremente no ar: ela usa o próprio arco como limitador, guiando sua Manipulação de Fios de Sangue através das flechas para não se ferir com o próprio dom."
    },
    table: {
      title: "As quatro origens de um Sigilo",
      headers: ["Origem", "Descrição"],
      rows: [
        ["Herança Familiar", "A forma mais comum. O sigilo é transmitido entre gerações de uma mesma linhagem — a avó tinha um sigilo de fogo, passou à mãe, chegou até o neto. É, relativamente, previsível."],
        ["Herança Mesclada", "Quando os sigilos dos dois genitores se fundem no filho, gerando algo novo — um poder híbrido que não pertence inteiramente a nenhum dos dois lados da família."],
        ["Sigilo Autoformado", "Quando os pais nunca despertaram sigilo algum, mas a conexão, a paixão ou o estilo de vida da pessoa molda a própria alma em torno de algo. É o caso de [[darin-leafheart|Darin Leafheart]], cujo vínculo com lobos desde a infância deu forma ao seu Instinto de Caça."],
        ["Herança Celestial", "Extremamente rara — apenas alguns poucos casos registrados na história. A criança já nasce com o sigilo desperto, sem necessidade de trauma ou treino, e o poder manifestado é algo inédito, sem precedente em qualquer ancestral. É o caso de [[viktor-vanshee|Viktor Vanshee]], e está associado a um evento conhecido apenas como \"[[ankiquilarke|o Ankiquilarke]]\"."]
      ]
    },
    table2: {
      title: "Sigilos confirmados no Volume 1",
      headers: ["Personagem", "Sigilo da Alma", "Origem"],
      rows: [
        ["[[viktor-vanshee|Viktor Vanshee]]", "Manipulação do Gelo", "Herança Celestial"],
        ["[[calista-vanshee|Calista Vanshee]]", "Manipulação de Fios de Sangue", "Não especificada"],
        ["[[darin-leafheart|Darin Leafheart]]", "Instinto de Caça (forma/fúria lupina)", "Sigilo Autoformado"],
        ["[[lorde-krauser|Lorde Krauser]]", "Tentáculos do Abismo", "Não especificada"]
      ]
    }
  },

  "estudo-de-caso-kiana": {
    type: "lore",
    nome: "Estudo de Caso: o Sigilo da Alma em Kiana",
    epiteto: "Um mistério propositalmente aberto",
    status: null,
    statusLabel: null,
    imagem: "Imagens/Kiana.jpeg",
    resumo: "Ao contrário de seus companheiros, Kiana nunca declara o nome de um sigilo — mas algo nela desperta repetidas vezes em resposta a dor e desespero.",
    campos: {
      "Introdução": "De todos os mistérios que este volume deixa em aberto, poucos são tão persistentes quanto a verdadeira natureza do poder de [[kiana|Kiana]]. Ao contrário de seus companheiros, ela nunca declara — nem para si mesma — o nome de um sigilo. E, no entanto, algo nela desperta repetidas vezes ao longo da história, sempre em resposta a dor, perda ou desespero absoluto.",
      "A primeira centelha: o ritual de Viktor": "A manifestação mais antiga de que se tem registro remonta à própria infância de Kiana, ainda antes de sua memória consciente. Recém-resgatada, incapaz de falar ou mesmo mover o próprio corpo, ela é cuidada por [[viktor-vanshee|Viktor]], que a veste, pergunta seu nome (sem obter resposta) e então conduz um pequeno ritual: acende velas ao redor dela, uma a uma. Ao terminar, um calor pulsa em seu peito e uma luz dourada emerge de sua pele, desenhando um símbolo não identificado. Não é dor — é a primeira vez, em toda a sua vida consciente, que ela se sente \"vista, amparada\".",
      "O apagão: fúria sem memória": "A manifestação mais visível e perigosa do poder de Kiana é o que ela mesma chama de \"apagão\": em momentos de fúria extrema, seu corpo age com velocidade e precisão sobre-humanas — capaz de massacrar mais de vinte homens armados sozinha — enquanto sua mente simplesmente não está lá. O primeiro grande episódio acontece na Taverna de Darius, em [[vardun|Vardun]]. Mais perturbador ainda: esse mesmo tipo de vazio cobre também sua infância inteira — ela não lembra dos pais, nem de como chegou a Vardun. O apagão do massacre e o apagão de sua origem parecem ser parte do mesmo mecanismo de proteção psíquica.",
      "Rumo ao controle": "É significativo que, ao confrontar o encapuzado (o Falso Presságio) nas ruas de [[hikari|Hikari]], Kiana entre no mesmo estado de instinto puro — \"eu não era mais Kiana, eu era apenas instinto\" — mas, desta vez, lembre de tudo ao retornar a si. O padrão sugere uma evolução gradual: de uma força completamente dissociada e amnésica para algo cada vez mais integrado à sua consciência desperta.",
      "A memória recuperada e a Manifestação Harmônica": "O ponto de virada decisivo acontece no clímax do volume. Ao ser atingida pela magia de tortura do [[colar-de-cristal-vermelho|cristal vermelho]] de [[lorde-krauser|Krauser]] — pensada para quebrá-la psicologicamente — Kiana tem, ao contrário do pretendido, o próprio bloqueio traumático rompido: ela recupera de uma só vez toda a memória reprimida de seu passado no orfanato. Fortalecida por essa integração, ela declara explicitamente a Krauser: \"Posso não ter despertado meu sigilo ainda, Krauser... mas tenho habilidades que só eu sei usar.\" Em seguida, invoca a [[manifestacao-harmonica|Manifestação Harmônica]] — descrita como uma técnica de última instância, que consome cada gota de sua estamina e magia. Mais tarde, é revelado que essa Manifestação atuou como um \"veneno estrutural\" no corpo de Krauser, enfraquecendo-o por dentro e permitindo que o golpe final de Viktor o destruísse."
    },
    calloutTitle: "Em aberto",
    callout: "O Volume 1 não resolve, e talvez propositalmente, a questão central: Kiana possui um Sigilo da Alma formal, ainda não nomeado — ou sua natureza é algo distinto, talvez ligado à sua origem não-humana (ela foi a única criança a resistir ao encantamento de sono de [[gyotto|Gyotto]], o \"garoto da tinta\", no ataque ao orfanato, e o próprio atacante questiona, incrédulo, \"será porque você não é humana?\"). A luz dourada do ritual de Viktor, o apagão de fúria, e a Manifestação Harmônica podem ser três faces do mesmo poder ainda incompreendido — ou três coisas inteiramente diferentes. O mistério permanece propositalmente aberto ao final do volume."
  },

  "sigilo-do-caos": {
    type: "lore",
    nome: "O Sigilo do Caos",
    epiteto: "Natureza desconhecida",
    status: null,
    statusLabel: null,
    imagem: null,
    resumo: "Nenhuma menção a este sigilo aparece no manuscrito do Volume 1. Sua existência, portador e natureza são inteiramente desconhecidos.",
    campos: {
      "Natureza desconhecida": "Nenhuma menção ao \"Sigilo do Caos\" aparece em qualquer ponto do manuscrito do Volume 1. Diferentemente dos sigilos de [[viktor-vanshee|Viktor]], [[calista-vanshee|Calista]], [[darin-leafheart|Darin]] e [[lorde-krauser|Krauser]] — todos nomeados e ao menos parcialmente demonstrados em combate — este sigilo permanece um mistério completo. Não há indícios de quem o possuiria, de sua origem, ou de sua função dentro do [[sigilos-da-alma|sistema de magia]] estabelecido pelo livro. Sua existência, seu portador e sua verdadeira natureza são, por ora, inteiramente desconhecidos."
    }
  },

  "ankiquilarke": {
    type: "lore",
    nome: "O Ankiquilarke",
    epiteto: "O maior mistério em aberto sobre o passado de Viktor",
    status: null,
    statusLabel: null,
    imagem: "Imagens/Ankiquilarke.jpeg",
    imagemWide: true,
    resumo: "Um evento (ou marco temporal) associado à Herança Celestial de Viktor, cercado de ecos e apelidos, mas nunca definido diretamente.",
    campos: {
      "O que o texto diz": "\"Ankiquilarke\" aparece apenas duas vezes no manuscrito do Volume 1, e nunca é definido diretamente — apenas cercado. A primeira menção surge na aula de [[kiana|Kiana]] sobre a Herança Celestial: ela cita o Ankiquilarke como o evento associado a esse tipo raríssimo de sigilo, e confirma que [[viktor-vanshee|Viktor]] nasceu com o seu já desperto. A segunda menção surge muito mais tarde, dentro da própria mente de [[lorde-krauser|Krauser]], num conselho secreto de Presságios: ao debaterem a morte de [[gyotto|Gyotto]], \"[[o-mascarado|o Mascarado]]\" observa que, \"desde o dia do Ankiquilarke, o picolé não dava as caras\" — apelido de deboche para Viktor — e conclui que sua reaparição perto do local onde Gyotto morreu \"não é coincidência\". Isso situa o Ankiquilarke como um acontecimento passado, conhecido pelos Presságios, depois do qual Viktor desapareceu de sua vigilância por um longo período.",
      "A pista da imagem — Gauss": "Nas páginas ilustradas em que os sigilos de Viktor e Calista são apresentados como fichas de personagem, uma figura chamada Gauss parece estar associada ao Ankiquilarke — possivelmente como seu portador original ou como a figura central do próprio evento. O texto corrido do romance nunca chega a apresentar Gauss diretamente: seu único outro rastro é uma fala do Mascarado afirmando que Viktor foi quem \"tirou a vida de Gauss\" — uma afirmação que os registros históricos oficiais do mundo contradizem, atribuindo essa morte a um tal \"Gale Akmenos\". Se Gauss e o Ankiquilarke estão de fato ligados, isso reforça um padrão que já aparece com Gyotto: a história oficial parece ter sido reescrita para apagar o rastro de Viktor."
    },
    calloutTitle: "Suposições",
    callout: "O Ankiquilarke pode ser o nome de uma batalha, cataclisma ou incidente específico — um \"dia\" reconhecível o suficiente para os Presságios o usarem como marco temporal. Pode também ser o nome de um poder, de uma linhagem de Sigilo, ou de um título ligado à Herança Celestial. Se Gauss for de fato o portador original, é possível que o evento seja o confronto em que Viktor teria matado Gauss — a mesma morte que a história oficial atribui, falsamente, a Gale Akmenos. Isso faria do Ankiquilarke tanto uma pessoa/poder quanto o acontecimento que selou seu fim. Fora da ficção: o próximo livro planejado por ByGuizo é um spin-off centrado no passado de Viktor, e levará justamente o título Ankiquilarke."
  },

  "resumo-narrativo": {
    type: "lore",
    nome: "Resumo Narrativo — Volume 1",
    epiteto: "Do prólogo ao desfecho",
    status: null,
    statusLabel: null,
    imagem: null,
    poster: "Imagens/PosterOficial_KianaXKrauser.jpeg",
    resumo: "Linha do tempo completa dos eventos do Volume 1, organizada em ordem cronológica — do prólogo no Limbo ao ritual final Oblitus Limbo.",
    timeline: [
      { title: "Prólogo — A Presença", text: "No coração vivo e faminto do [[o-limbo|Limbo]], uma entidade conhecida apenas como \"[[a-presenca|a Presença]]\" recebe o relato de sua serva mais próxima: o Quinto Fio morreu, mas não em vão — ao perecer, arrastou consigo para dentro do Limbo \"Aquele que Sabe\" e seus companheiros. A [[peca-perdida|Peça Perdida]] continua oculta, mas a Presença decide não caçar os recém-chegados: prefere deixá-los vagar pelo desespero das terras esquecidas, \"domesticando\" a caçada." },
      { title: "O aniversário interrompido", text: "Em [[vardun|Vardun]], a bardo meia-orc [[kiana|Kiana]] se prepara para o aniversário de [[viktor-vanshee|Viktor Vanshee]]. Recebe de Helena, dona da estalagem, uma caixa contendo a [[adaga-de-kael|adaga de Kael]]. No telhado da Taverna de Rurik, Kiana entrega a adaga a Viktor — e é então que um grito corta a noite: uma criança tiefling, Lili, é encontrada brutalmente massacrada num beco. Viktor parte sozinho, determinado a \"acabar com isso\", e desaparece." },
      { title: "A vingança de Kiana", text: "Dias depois, sem notícias de Viktor, Kiana descobre por [[rurik|Rurik]] (revelado como pai de Viktor) que o responsável pelos ataques é o criminoso Darius. Ao confrontá-lo sozinha, descobre que um misterioso \"mascarado\" torturou Viktor a serviço de um mestre desconhecido. Tomada por fúria, Kiana mergulha num \"apagão\": massacra sozinha mais de vinte homens, sem guardar qualquer memória do ato. Encontra, sob o corpo de Darius, uma carta que menciona Calista e a cidade de Hikari." },
      { title: "A partida e o Vale das Flores Sangrentas", text: "Marcada como uma ameaça pelos próprios moradores de Vardun, Kiana parte em busca de Viktor acompanhada por [[near-shade|Near Shade]], [[amnon-akmenos|Amnon Akmenos]] e [[darin-leafheart|Darin Leafheart]]. A jornada os leva ao [[vale-das-flores-sangrentas|Vale das Flores Sangrentas]], que os prende num loop espacial infinito. Após dias de fome e desespero, são resgatados por [[calista-vanshee|Calista Vanshee]], que os conduz até o domínio de uma criatura mutável multi-elemental. O grupo o derrota em conjunto, com Amnon sacrificando-se fisicamente para segurar o núcleo flamejante do monstro." },
      { title: "Chegada a Hikari", text: "Calista conta ao grupo a lenda de Kynare e o Corvo Celeste, explicando os \"[[termo-pressagio|Presságios]]\". O grupo chega a [[hikari|Hikari]] e se hospeda na Estalagem Carvalho Sereno. Kiana e Near aprofundam sua relação na Biblioteca de Hikari. À noite, testemunham uma execução pública comandada por um misterioso Draconato de alta patente — mais tarde identificado como [[lorde-krauser|Lorde Krauser]]. Numa taverna, Darin conhece o ronin errante [[yuto|Yuto]]." },
      { title: "A audiência com Krauser e o encapuzado", text: "Recebidos em audiência, Krauser nega ajuda direta na busca por Viktor, revelando que uma névoa mágica cega seus próprios videntes. Kiana propõe uma troca. Enquanto ajuda a idosa [[matilde|Matilde]], Kiana recebe dela a [[pulseira-de-matilde|pulseira dourada]]. Perdida na névoa da cidade, é confrontada pelo mesmo homem encapuzado que torturou Viktor. Após uma perseguição pelos telhados, o encapuzado se dissolve em fumaça, deixando um desenho de uma entrada de caverna." },
      { title: "O ritual na caverna", text: "Na caverna indicada, o grupo encontra tieflings pendurados em correntes, vítimas de um ritual sombrio comandado por um \"Quinto Presságio\" — que mais tarde se revelará um impostor, um peão criado por Krauser. Com a ajuda inesperada do próprio Krauser, o grupo derrota o Presságio-isca, que comete suicídio ritualístico. De volta à caverna para recuperar sua pulseira perdida, Kiana flagra Krauser sozinho, absorvendo secretamente uma poeira negra residual do ritual — e é expulsa por ele com fúria incomum." },
      { title: "O Festival de Honra", text: "Hikari celebra a vitória sobre o \"mal desmantelado\" com um grande festival. Kiana e Near dançam; ela canta a canção original \"O Alvorecer da Ausência\". No auge da celebração, Calista desaparece — e, pouco depois, silhuetas de sombra emergem por toda a cidade. O grupo se divide: Kiana corre para o castelo, enquanto Near, Amnon e Darin defendem os civis, reencontrando Yuto." },
      { title: "A revelação e a queda de Calista", text: "No salão do trono, Kiana encontra Calista gravemente ferida e Viktor amarrado, corroído por cicatrizes negras. Krauser revela seu verdadeiro rosto: é o autêntico Quinto Presságio, disfarçado como Lorde por dez anos. Numa batalha desigual, Krauser mata Calista — que, com seu último gesto, beija Viktor para transferir para si a corrupção mágica que o consumia, purificando-o ao custo da própria vida." },
      { title: "A fúria de Kiana e a mente de Krauser", text: "Enlouquecida de dor, Kiana enfrenta Krauser e, atingida por seu [[colar-de-cristal-vermelho|cristal de tortura]], tem finalmente restaurada toda a memória reprimida de sua infância. De posse dessa memória, Kiana invoca a [[manifestacao-harmonica|Manifestação Harmônica]], ferindo Krauser com magia sonora, e rouba seu cristal, sendo transportada para dentro da própria mente do inimigo. Ali, testemunha a origem trágica de Krauser e um conselho secreto de Presságios, onde se revela que Krauser foi exilado a Hikari por ser considerado o mais fraco do grupo." },
      { title: "O desfecho — Oblitus Limbo", text: "Expulsa da mente de Krauser, Kiana é gravemente ferida por ele — perde um braço e é perfurada no abdômen. Viktor, finalmente livre da corrupção, intervém e trava um combate devastador contra Krauser, culminando no \"Punho Flamejante\". Krauser, recusando-se a morrer, invoca com o próprio corpo como componente um ritual final — \"OBLITUS LIMBO!\" — abrindo um portal que arrasta Kiana, Viktor, Near, Amnon e Darin para dentro do Limbo. Uma voz enigmática promete a Viktor que a verdadeira história está apenas começando." }
    ]
  },

  /* ==================== ARTEFATOS / OBJETOS ==================== */

  "adaga-de-kael": {
    type: "artefato",
    subtype: "objeto",
    nome: "A Adaga de Kael",
    epiteto: "Objeto",
    status: null,
    statusLabel: null,
    imagem: null,
    resumo: "Lâmina gravada com símbolos de gelo, último legado de um amigo morto. Torna-se a arma pessoal de Kiana.",
    campos: {
      "Descrição": "Lâmina gravada com símbolos de gelo, entregue por [[kiana|Kiana]] a [[viktor-vanshee|Viktor]] como presente de aniversário no capítulo de abertura — o último legado de [[kael|Kael]], um amigo morto em circunstâncias que o próprio livro deixa em dúvida. Torna-se a arma pessoal de Kiana ao longo do volume, presente em quase todos os seus combates."
    }
  },

  "ukulele-de-kiana": {
    type: "artefato",
    subtype: "objeto",
    nome: "O Ukulele de Kiana",
    epiteto: "Objeto",
    status: null,
    statusLabel: null,
    imagem: null,
    resumo: "Mais que um instrumento: a âncora emocional de Kiana desde a infância, e o canal físico da Manifestação Harmônica.",
    campos: {
      "Descrição": "Mais que um instrumento: é a âncora emocional da protagonista desde a infância no orfanato, onde [[tia-lanis|Tia Lanis]] a ensinou a tocar. Destruído uma vez por Tyler, ainda criança, o instrumento retorna às mãos de [[kiana|Kiana]] na vida adulta como o canal físico da [[manifestacao-harmonica|Manifestação Harmônica]] — sua técnica de última instância contra [[lorde-krauser|Lorde Krauser]]."
    }
  },

  "pulseira-de-matilde": {
    type: "artefato",
    subtype: "objeto",
    nome: "A Pulseira Dourada de Matilde",
    epiteto: "Objeto",
    status: null,
    statusLabel: null,
    imagem: null,
    resumo: "Presente aparentemente pequeno cuja perda quase custa a vida de Kiana — o primeiro fio solto da revelação final.",
    campos: {
      "Descrição": "Presente dado por [[matilde|uma anciã de Hikari]] em troca da ajuda do grupo com uma lista de compras simbólicas. Objeto aparentemente pequeno, mas cuja perda quase custa a vida de [[kiana|Kiana]] — foi ao voltar sozinha para recuperá-la na caverna que ela flagrou [[lorde-krauser|Krauser]] absorvendo magia sombria, o primeiro fio solto que levaria à revelação final."
    }
  },

  "colar-de-cristal-vermelho": {
    type: "artefato",
    subtype: "objeto",
    nome: "O Colar de Cristal Vermelho de Krauser",
    epiteto: "Objeto",
    status: null,
    statusLabel: null,
    imagem: null,
    resumo: "Artefato de tortura psíquica que, sem intenção, rompeu o bloqueio traumático de Kiana sobre o massacre do orfanato.",
    campos: {
      "Descrição": "Artefato usado por [[lorde-krauser|Krauser]] para infligir dor psíquica e desenterrar memórias reprimidas — foi o que rompeu, sem intenção, o bloqueio traumático de [[kiana|Kiana]] sobre o massacre do orfanato. Arrancado de Krauser por Kiana no auge da batalha final e usado contra ele mesmo, revelando a mente e o passado do próprio Presságio."
    }
  },

  "orbe-de-calista": {
    type: "artefato",
    subtype: "objeto",
    nome: "O Orbe Azul Cristalino de Calista",
    epiteto: "Objeto",
    status: null,
    statusLabel: null,
    imagem: null,
    resumo: "Item mágico de troca instantânea de vestimenta, usado no instante em que o ataque a Hikari começa.",
    campos: {
      "Descrição": "Item mágico de troca instantânea de vestimenta: ao se dissipar em névoa elétrica, transforma o vestido de festa de [[kiana|Kiana]] de volta em sua armadura e equipamentos de combate completos, incluindo a [[adaga-de-kael|adaga]]. Usado no instante em que o ataque a [[hikari|Hikari]] começa."
    }
  },

  "reliquia-de-nostradamus": {
    type: "artefato",
    subtype: "objeto",
    nome: "A Relíquia de Nostradamus",
    epiteto: "Objeto",
    status: null,
    statusLabel: null,
    imagem: null,
    resumo: "Item cujo suposto roubo levou à expulsão de Amnon Akmenos de sua própria família. Nunca descrita em detalhe.",
    campos: {
      "Descrição": "Item cujo suposto roubo levou à expulsão de [[amnon-akmenos|Amnon Akmenos]] de sua própria família. Nunca é descrita em detalhe no Volume 1 — permanece um fio solto sobre o passado e a inocência de Amnon."
    }
  },

  "o-fragmento": {
    type: "artefato",
    subtype: "termo",
    nome: "O Fragmento",
    epiteto: "Termo / Conceito",
    status: null,
    statusLabel: null,
    imagem: null,
    resumo: "Objeto que Gyotto procurava no momento de sua morte. Possível ligação com a Peça Perdida do prólogo.",
    campos: {
      "Descrição": "Objeto que [[gyotto|Gyotto]] procurava no momento de sua morte, segundo o relato do Mascarado. Sua relação com a [[peca-perdida|Peça Perdida]] do prólogo não é confirmada no texto, mas o paralelo de nomes (e de importância para os Presságios) sugere que podem estar ligados — talvez até serem a mesma coisa vista por ângulos diferentes."
    }
  },

  "peca-perdida": {
    type: "artefato",
    subtype: "termo",
    nome: "A Peça Perdida",
    epiteto: "Termo / Conceito",
    status: null,
    statusLabel: null,
    imagem: null,
    resumo: "O macguffin central do prólogo: o objeto (ou pessoa?) que a Presença busca através de seus Fios/Presságios.",
    campos: {
      "Descrição": "O macguffin central do prólogo: o objeto (ou pessoa?) que \"[[a-presenca|a Presença]]\" busca através de seus [[termo-fio|Fios]]/[[termo-pressagio|Presságios]]. Permanece oculta ao final do Volume 1."
    }
  },

  "alianca-dos-lordes": {
    type: "artefato",
    subtype: "termo",
    nome: "Aliança dos Lordes",
    epiteto: "Termo / Conceito",
    status: null,
    statusLabel: null,
    imagem: null,
    resumo: "Estrutura política formal associada a EmberFall, reconhecível por selos de cera azul e pergaminhos oficiais.",
    campos: {
      "Descrição": "Estrutura política formal associada a [[emberfall|EmberFall]], reconhecível por selos de cera azul e pergaminhos oficiais — sugere que a região opera sob um sistema de governança compartilhada entre múltiplos Lordes. É a ausência desses selos que imediatamente entrega a farsa de [[calista-vanshee|Calista]] ao se apresentar como enviada oficial diante de [[lorde-krauser|Krauser]]."
    }
  },

  "manifestacao-harmonica": {
    type: "artefato",
    subtype: "termo",
    nome: "Manifestação Harmônica",
    epiteto: "Termo / Conceito · técnica de combate",
    status: null,
    statusLabel: null,
    imagem: null,
    resumo: "Técnica de última instância de Kiana: transforma acordes tocados no ukulele em lâminas de som e ondas de choque.",
    campos: {
      "Descrição": "Técnica de última instância de [[kiana|Kiana]]: transforma acordes tocados no [[ukulele-de-kiana|ukulele]] em lâminas de som, ondas de choque e projéteis de energia. Consome toda a estamina e magia de quem a invoca. Sua relação com um possível [[sigilos-da-alma|Sigilo da Alma]] de Kiana permanece em aberto. Ver [[estudo-de-caso-kiana|Estudo de Caso: o Sigilo da Alma em Kiana]]."
    }
  },

  "termo-pressagio": {
    type: "artefato",
    subtype: "termo",
    nome: "Presságio",
    epiteto: "Termo / Conceito",
    status: null,
    statusLabel: null,
    imagem: null,
    resumo: "Designação para os seres que venderam o próprio livre-arbítrio por poder a serviço da Presença. São numerados.",
    campos: {
      "Descrição": "Designação para os seres que venderam o próprio livre-arbítrio por poder a serviço de \"[[a-presenca|a Presença]]\"/\"o Mestre\". Tornam-se, segundo [[calista-vanshee|Calista]], \"cascas vazias preenchidas por vontades que não lhes pertencem\". São numerados (o Quinto — [[lorde-krauser|Krauser]], o Sexto — [[gyotto|Gyotto]]...), sugerindo uma hierarquia ou ordem fixa de membros."
    }
  },

  "termo-fio": {
    type: "artefato",
    subtype: "termo",
    nome: "Fio",
    epiteto: "Termo / Conceito",
    status: null,
    statusLabel: null,
    imagem: null,
    resumo: "Termo usado pela própria Presença para se referir a seus servos mais próximos. Aparenta ser sinônimo de \"Presságio\".",
    campos: {
      "Descrição": "Termo usado pela própria [[a-presenca|Presença]], no prólogo, para se referir a seus servos mais próximos (\"o Quinto Fio\", \"os outros Fios\"). Aparenta ser sinônimo de \"[[termo-pressagio|Presságio]]\", ou talvez a forma como a Presença especificamente os chama — a relação exata entre os dois termos não é explicada."
    }
  },

  "o-limbo": {
    type: "artefato",
    subtype: "termo",
    nome: "O Limbo",
    epiteto: "Termo / Conceito · dimensão",
    status: null,
    statusLabel: null,
    imagem: null,
    resumo: "Dimensão viva e faminta, onde a esperança ia para morrer. Destino final do grupo ao fim do Volume 1.",
    campos: {
      "Descrição": "Dimensão viva e faminta, descrita no prólogo como \"o coração do Limbo, onde a esperança ia para morrer\". Destino final de [[kiana|Kiana]] e do grupo ao fim do Volume 1, e provável cenário do próximo volume. O nome também nomeia o ritual final de [[lorde-krauser|Krauser]] — \"Oblitus Limbo\" — que abre o portal para essa dimensão."
    }
  },

  "aquele-que-sabe": {
    type: "artefato",
    subtype: "termo",
    nome: "Aquele que Sabe",
    epiteto: "Termo / Conceito · epíteto",
    status: null,
    statusLabel: null,
    imagem: null,
    resumo: "Epíteto usado no prólogo para a pessoa arrastada ao Limbo junto de seus companheiros — quase certamente Viktor Vanshee.",
    campos: {
      "Descrição": "Epíteto usado no prólogo para a pessoa arrastada ao [[o-limbo|Limbo]] junto de seus companheiros — quase certamente [[viktor-vanshee|Viktor Vanshee]], dado que é ele quem acaba lá ao final do volume junto a Kiana, Near, Amnon e Darin."
    }
  }

};

/* Mapa auxiliar: type -> label plural / singular usados na UI */
const TYPE_META = {
  personagem: { label: "Personagens", singular: "Personagem", icon: "fa-solid fa-user-ninja", route: "personagens" },
  lugar:      { label: "Lugares",     singular: "Lugar",      icon: "fa-solid fa-map-location-dot", route: "lugares" },
  lore:       { label: "Lore & Sistemas de Magia", singular: "Lore", icon: "fa-solid fa-book-skull", route: "lore" },
  artefato:   { label: "Artefatos & Termos", singular: "Artefato", icon: "fa-solid fa-gem", route: "artefatos" }
};

const STATUS_META = {
  alive:     { cls: "alive",     icon: "fa-solid fa-heart-pulse" },
  dead:      { cls: "dead",      icon: "fa-solid fa-skull" },
  unknown:   { cls: "unknown",   icon: "fa-solid fa-question" },
  destroyed: { cls: "destroyed", icon: "fa-solid fa-explosion" }
};

const STATUS_LABEL_CLASS = {
  alive: "alive",
  dead: "dead",
  unknown: "unknown",
  destroyed: "destroyed"
};
