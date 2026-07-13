/*
 * Oblitus Limbo — Base de dados do site
 * Sintaxe [[slug]] ou [[slug|Texto exibido]] dentro de qualquer campo de texto
 * é resolvida por linkify.js em um <a> real para outra entidade.
 */

const ENTITIES = {

  /* ==================== PERSONAGENS ==================== */

  "kiana": {
    type: "personagem",
    grupo: "protagonistas",
    peso: 1,
    nome: "Kiana",
    epiteto: "A bardo de [[vardun]] · narradora e protagonista",
    status: "alive",
    statusLabel: "Viva",
    imagem: "Imagens/Personagens/Kiana.jpeg",
    resumo: "Bardo meia-orc de cabelos brancos e olhos vermelhos, criada em um orfanato e resgatada por Viktor Vanshee. Carrega um poder ainda sem nome.",
    campos: {
      "Biografia": "Encontrada por [[tia-lanis|Tia Lanis]] na orla de uma \"floresta proibida\" com apenas alguns dias de vida, envolta em panos estranhos. Não havia bilhete algum: Lanis soube seu nome por um sussurro da própria alma. Os diretores do [[o-orfanato|orfanato]] não a queriam — viam sua aparência como \"o prenúncio de uma maldição\" —, mas Lanis bateu o pé e a manteve. Cresceu como a única criança não-humana entre humanas, chamada de \"aberração\", espancada pelo valentão [[tyler|Tyler]] e protegida apenas por [[emma|Emma]] e pela própria Lanis. Aprendeu a ler e a tocar [[ukulele-de-kiana|ukulele]] ali. Numa única noite, perdeu tudo: [[gyotto|Gyotto]], o Sexto Presságio, atacou o orfanato e matou todos — exceto ela, a única imune ao seu feitiço de sono. [[viktor-vanshee|Viktor Vanshee]] chegou tarde demais para salvar qualquer outra pessoa, matou Gyotto e a resgatou, tornando-se seu mentor e figura paterna. Kiana reprimiu essa memória inteira por anos; só a recuperou quando a magia de tortura de [[lorde-krauser|Krauser]] rompeu, sem querer, seu próprio bloqueio traumático.",
      "Vínculos": [
        { slug: "viktor-vanshee", nome: "Viktor Vanshee", relacao: "Mentor" },
        { slug: "near-shade", nome: "Near Shade", relacao: "Interesse romântico" },
        { slug: "amnon-akmenos", nome: "Amnon Akmenos", relacao: "Amigo" },
        { slug: "darin-leafheart", nome: "Darin Leafheart", relacao: "Amigo" },
        { slug: "rurik", nome: "Rurik", relacao: "Figura paterna adotiva" },
        { slug: "calista-vanshee", nome: "Calista Vanshee", relacao: "Aliada" },
        { slug: "tia-lanis", nome: "Tia Lanis", relacao: "Cuidadora" },
        { slug: "emma", nome: "Emma", relacao: "Melhor amiga" },
        { slug: "velha-mira", nome: "Velha Mira", relacao: "Avó de coração" },
        { slug: "helena", nome: "Helena", relacao: "Hospedeira" },
        { slug: "matilde", nome: "Matilde", relacao: "Neta de coração" }
      ],
      "Aparência": "Meia-orc de \"beleza improvável\". Cabelos brancos longos que descem \"como neve recém-assentada\" sobre ombros fortes; olhos vermelhos que brilham mesmo no escuro, \"profundos como brasas guardando segredos demais\". Carrega sempre o [[ukulele-de-kiana|ukulele]] às costas e a [[adaga-de-kael|adaga de Kael]] à cintura.",
      "Personalidade": "Impulsiva, teimosa, leitora voraz — aprendeu a ler sozinha, catando páginas rasgadas trazidas pelo vento. Odeia não conseguir controlar o próprio rubor. Protege os outros até de si mesma: quando criança, mentiu para [[tia-lanis|Tia Lanis]] dizendo que havia caído sobre o ukulele, só para não denunciar [[tyler|Tyler]], o menino que a espancava.",
      "Feitos": "Massacrou sozinha mais de vinte homens na taverna de [[darius|Darius]], em [[vardun|Vardun]], num episódio de fúria amnésica (o \"apagão\"). Sustentou o grupo com magia de bardo contra a [[essencia-mutavel|criatura multi-elemental]] do [[vale-das-flores-sangrentas|Vale das Flores Sangrentas]]. Confrontou o [[falso-pressagio|Falso Presságio]] nas ruas de [[hikari|Hikari]] e o perseguiu pelos telhados. Cantou \"O Alvorecer da Ausência\" diante de toda a cidade. Enfrentou o verdadeiro Quinto Presságio ([[lorde-krauser|Lorde Krauser]]), invadiu sua mente, roubou seu [[colar-de-cristal-vermelho|cristal]] — e o derrotou por dentro com a [[manifestacao-harmonica|Manifestação Harmônica]].",
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
    grupo: "protagonistas",
    peso: 3,
    nome: "Near Shade",
    epiteto: "O elfo da máscara",
    status: "alive",
    statusLabel: "Vivo",
    imagem: "Imagens/Personagens/NearShade.jpeg",
    resumo: "Elfo ladino de máscara preta, amigo de Kiana há três anos. Raramente mostra o rosto ou fala sobre o próprio passado.",
    campos: {
      "Biografia": "Elfo ladino que nunca frequentou escola formal e só aprendeu a ler aos treze anos — um detalhe que carrega como vergonha silenciosa. Cerca de três anos de amizade com [[kiana|Kiana]] antecedem o início da história. Raramente remove a máscara preta que cobre metade de seu rosto; fazê-lo diante de Kiana, em [[hikari|Hikari]], é um dos primeiros sinais visíveis de intimidade crescente entre os dois.",
      "Vínculos": [
        { slug: "kiana", nome: "Kiana", relacao: "Interesse romântico" },
        { slug: "amnon-akmenos", nome: "Amnon Akmenos", relacao: "Amigo" },
        { slug: "darin-leafheart", nome: "Darin Leafheart", relacao: "Amigo" }
      ],
      "Aparência": "Traços élficos finos, máscara preta cobrindo metade do rosto, passos silenciosos e quase fantasmagóricos, olhos descritos como \"impossíveis de decifrar\".",
      "Feitos": "Combateu o elemental de água no [[vale-das-flores-sangrentas|Vale das Flores Sangrentas]] (foi derrubado em combate). Executou ataques furtivos precisos contra o Presságio-isca na caverna. Pegou armas de guardas caídos para proteger civis durante o ataque de sombras ao festival de [[hikari|Hikari]].",
      "Status atual": "Sugado para o [[o-limbo|Limbo]] junto com o restante do grupo ao final do volume.",
      "Sigilo manifestado": "Não manifestado/Desconhecido."
    }
  },

  "amnon-akmenos": {
    type: "personagem",
    grupo: "protagonistas",
    peso: 4,
    nome: "Amnon Akmenos",
    epiteto: "O tiefling exilado",
    status: "alive",
    statusLabel: "Vivo",
    imagem: "Imagens/Personagens/AmnonAkmenos.jpeg",
    resumo: "Tiefling de origem burguesa, expulso da própria família por uma acusação injusta. Esconde a dor atrás de deboche e bebida.",
    campos: {
      "Biografia": "Tiefling de origem burguesa, expulso da própria família após ser injustamente acusado de roubar a \"[[reliquia-de-nostradamus|Relíquia de Nostradamus]]\". Esconde a própria dor atrás de deboche e bebida constante. Seu sobrenome ecoa de forma intrigante em uma memória revelada tardiamente sobre a história oficial dos Presságios, onde um certo \"Gale Akmenos\" é creditado — talvez falsamente — pela morte do Presságio Gauss.",
      "Vínculos": [
        { slug: "kiana", nome: "Kiana", relacao: "Amiga" },
        { slug: "near-shade", nome: "Near Shade", relacao: "Amigo" },
        { slug: "darin-leafheart", nome: "Darin Leafheart", relacao: "Amigo" },
        { slug: null, nome: "Família Akmenos", relacao: "Família (rompida)" }
      ],
      "Aparência": "Tiefling, chifres curtos, pele de um vermelho vivo.",
      "Feitos": "Segurou com as próprias mãos o núcleo em chamas da criatura elemental do [[vale-das-flores-sangrentas|Vale das Flores Sangrentas]], sofrendo queimaduras graves para permitir que [[calista-vanshee|Calista]] a eliminasse. Lutou com arco contra o Presságio-isca na caverna. Defendeu civis com arma improvisada durante o ataque de sombras em [[hikari|Hikari]].",
      "Status atual": "Sugado para o [[o-limbo|Limbo]] junto com o restante do grupo ao final do volume.",
      "Sigilo manifestado": "Não manifestado/Desconhecido."
    }
  },

  "darin-leafheart": {
    type: "personagem",
    grupo: "protagonistas",
    peso: 5,
    nome: "Darin Leafheart",
    epiteto: "O druida dos lobos",
    status: "alive",
    statusLabel: "Vivo",
    imagem: "Imagens/Personagens/Darin.jpeg",
    resumo: "Druida humano cujo vínculo com lobos moldou um raro Sigilo Autoformado. Alterna euforia etílica e fuga da própria mente.",
    campos: {
      "Biografia": "Druida humano que alterna entre a euforia etílica e uma \"fuga desesperada da própria mente\". Nunca herdou sigilo algum dos pais — foi sua conexão e paixão por lobos, cultivada desde a infância, que moldou sua própria alma em torno desse instinto, num raro caso de [[sigilos-da-alma|sigilo]] inteiramente autoformado.",
      "Vínculos": [
        { slug: "kiana", nome: "Kiana", relacao: "Amiga" },
        { slug: "near-shade", nome: "Near Shade", relacao: "Amigo" },
        { slug: "amnon-akmenos", nome: "Amnon Akmenos", relacao: "Amigo" },
        { slug: "yuto", nome: "Yuto", relacao: "Aliado" }
      ],
      "Aparência": "Cabelos castanhos desgrenhados, presença de \"brilho caótico\".",
      "Feitos": "Identificou o loop espacial que prendia o grupo no [[vale-das-flores-sangrentas|Vale das Flores Sangrentas]]. Atuou como cozinheiro do grupo durante a travessia. Lutou com garras espirituais de lobo contra o Presságio-isca na caverna e, ao lado de [[yuto|Yuto]], contra as sombras gigantes no ataque a [[hikari|Hikari]].",
      "Status atual": "Sugado para o [[o-limbo|Limbo]] junto com o restante do grupo ao final do volume.",
      "Sigilo manifestado": "Instinto de Caça — uma forma de fúria/agilidade lupina, manifestada como uma aura verde-esmeralda e manoplas translúcidas em forma de garras de lobo, com um \"rosnado espiritual\". Origem: Sigilo Autoformado."
    }
  },

  "viktor-vanshee": {
    type: "personagem",
    grupo: "protagonistas",
    peso: 2,
    nome: "Viktor Vanshee",
    epiteto: "O Pilar do Gelo · Mestre do Gelo",
    status: "alive",
    statusLabel: "Vivo",
    imagem: "Imagens/Personagens/ViktorVanshee.jpeg",
    resumo: "Meio-elfo nascido com o Sigilo do Gelo já desperto — um caso raríssimo de Herança Celestial. Mentor e salvador de Kiana.",
    campos: {
      "Biografia": "Meio-elfo que nasceu já com seu Sigilo desperto — um caso raríssimo de **Herança Celestial**. Anos antes da trama, chegou tarde demais para impedir o massacre de um [[o-orfanato|orfanato]], mas matou o atacante ([[gyotto|Gyotto]], o Sexto Presságio) e resgatou a única sobrevivente, [[kiana|Kiana]], tornando-se seu mentor. Casado com [[calista-vanshee|Calista Vanshee]]; filho de [[rurik|Rurik]]. Perdeu o melhor amigo, [[kael|Kael]], em circunstâncias contestadas — Viktor afirma que goblins o mataram, mas o [[falso-pressagio|Falso Presságio]] reivindica tê-lo matado pessoalmente e o acusa de ser \"um mestre em pintar tragédias para esconder a própria podridão\". A contradição jamais é resolvida neste volume. Foi sequestrado, torturado e quase destruído por [[lorde-krauser|Krauser]] antes do início da busca; só foi libertado da corrupção mágica que o consumia pelo sacrifício final de Calista.",
      "O que os Presságios querem dele": "Entre os [[termo-pressagio|Presságios]], seu nome inspira reverência e medo. O [[o-mascarado|Mascarado]] o chama de \"o peixe grande\", ordena que ninguém o toque — \"precisamos do Vanshee com vida por enquanto\" — e declara ter **\"planos para o que corre nas veias daquele homem\"**. Um detalhe que o Volume 1 nunca explica, mas que aponta para algo em seu sangue ou em sua linhagem. É também ele o mais provável \"[[aquele-que-sabe|Aquele que Sabe]]\" do prólogo.",
      "Vínculos": [
        { slug: "kiana", nome: "Kiana", relacao: "Aprendiz" },
        { slug: "calista-vanshee", nome: "Calista Vanshee", relacao: "Esposa" },
        { slug: "kael", nome: "Kael", relacao: "Melhor amigo" },
        { slug: "rurik", nome: "Rurik", relacao: "Pai" },
        { slug: "gauss", nome: "Gauss", relacao: "Matou-o (segundo o Mascarado)" }
      ],
      "Aparência": "Trinta e poucos anos. Traços élficos acentuando o rosto angular, longos cabelos brancos presos de um jeito simples, força rústica e contida. Veste tons de branco e azul — \"trajes de um viajante antigo que carrega histórias que ele raramente se permite contar\". Mãos cobertas de cicatrizes rudes.",
      "Feitos": "Matou [[gyotto|Gyotto]], o Sexto Presságio, empalando-o com uma estaca de gelo cristalino. Resgatou e criou [[kiana|Kiana]]. Segundo o Mascarado, também tirou a vida do Presságio [[gauss|Gauss]] — feito que os livros de história atribuem falsamente a [[gale-akmenos|Gale Akmenos]]. Sobreviveu ao cativeiro de Krauser e o derrotou em combate direto: envolveu seu braço em gelo negro até o osso estalar, empalou-o numa floresta de lanças de gelo e finalizou com o \"Punho Flamejante\".",
      "Status atual": "Extremamente debilitado após a batalha; sugado para o [[o-limbo|Limbo]] junto com o restante do grupo pelo ritual final de Krauser.",
      "Sigilo manifestado": "**Manipulação do Gelo** ([[sigilos-da-alma|Herança Celestial]]). Sua aura chega a ocupar um salão inteiro e a trincar metal à distância. Ao final da luta, porém, demonstrou algo inexplicável: o **\"Punho Flamejante\"**, uma explosão de chamas brancas e douradas — \"o Mestre do Gelo manipulando o sol\" —, um golpe que seu próprio corpo não deveria ser capaz de conter e que lhe queimou a pele. A natureza dessa segunda chama nunca é explicada."
    },
    quotes: [
      { text: "Você é só uma marionete, Krauser. Não sente as cordas que possui em seu pescoço.", source: "Viktor Vanshee", context: "Confronto final na ponte de gelo, antes do golpe decisivo contra o verdadeiro Quinto Presságio." }
    ]
  },

  "calista-vanshee": {
    type: "personagem",
    grupo: "protagonistas",
    peso: 6,
    nome: "Calista Vanshee",
    epiteto: "A arqueira de [[emberfall|EmberFall]]",
    status: "dead",
    statusLabel: "Morta",
    imagem: "Imagens/Personagens/CalistaVanshee.jpeg",
    resumo: "Esposa de Viktor Vanshee, guerreira e arqueira de precisão extraordinária. Sacrificou-se para purificar o marido da corrupção de Krauser.",
    campos: {
      "Biografia": "Esposa de [[viktor-vanshee|Viktor Vanshee]], natural de [[emberfall|EmberFall]], onde resolvia \"assuntos pendentes da família\" quando a trama começa. Arqueira de precisão extraordinária, conhecedora de [[runas|runas]] — \"não tanto quanto o Viktor, claro\". É ela quem resgata o grupo do [[vale-das-flores-sangrentas|Vale]], quem conta a lenda de Kynare, quem desconfia de [[lorde-krauser|Krauser]] primeiro e quem lidera a investigação em [[hikari|Hikari]]. No clímax, sacrificou a própria vida beijando Viktor para transferir para si a corrupção mágica (as cicatrizes negras) que o consumia — purificando-o ao custo da própria morte.",
      "Personalidade": "Prática, afiada e maternal a seu modo — administra o dinheiro do grupo, impõe horários e é chamada por [[near-shade|Near]], com humor, de \"a responsável\". É a primeira a sentir que algo está errado em Krauser: \"Há um silêncio em Krauser que me incomoda.\"",
      "Vínculos": [
        { slug: "viktor-vanshee", nome: "Viktor Vanshee", relacao: "Marido" },
        { slug: "kiana", nome: "Kiana", relacao: "Quase-irmã" },
        { slug: "kael", nome: "Kael", relacao: "Amigo" },
        { slug: null, nome: "Sua mãe", relacao: "Trauma não esclarecido" }
      ],
      "Aparência": "Cabelos ruivos ondulados, frequentemente presos num rabo de cavalo perfeito que \"parecia pegar fogo contra a luz pálida\". Armadura sempre polida. Presença segura e \"maior que a própria vida\". No festival, aparece em vestido azul-marinho com prata — \"a personificação da lua\".",
      "Feitos": "Resgatou o grupo preso no [[vale-das-flores-sangrentas|Vale das Flores Sangrentas]] e decifrou as [[runas|runas]] da barreira. Derrotou a essência de vento da [[essencia-mutavel|criatura elemental]], voando impulsionada pelo próprio vento dela. Enfrentou [[lorde-krauser|Lorde Krauser]] em audiência sem se intimidar. Lutou contra ele até ser mortalmente ferida. Sacrificou-se para purificar e salvar [[viktor-vanshee|Viktor]].",
      "Status atual": "Morta — sacrifício heroico no clímax do Volume 1.",
      "Sigilo manifestado": "**Manipulação de Fios de Sangue**, canalizada e limitada com segurança através do próprio **arco** — o exemplo modelar de como um [[sigilos-da-alma|Sigilo]] instável é domado por um limitador físico. Em combate, dispara flechas \"imbuídas em fios carmesins\" que restringem os movimentos do inimigo; contra Krauser, usou os fios como agulhas de aço."
    },
    calloutTitle: "O grito não explicado",
    callout: "Ao ser atingida pelo [[colar-de-cristal-vermelho|cristal vermelho]] de [[lorde-krauser|Krauser]] — o artefato que desenterra memórias reprimidas à força —, Calista gritou uma única palavra: **\"MÃE!\"**. Um grito de agonia que aponta para um trauma jamais esclarecido no Volume 1. O mesmo cristal que devolveu a [[kiana|Kiana]] a memória do orfanato arrancou de Calista algo que o leitor nunca chega a ver.",
    quotes: [
      { text: "Agora, Viktor, por favor... salve todo mundo. Salve a Kiana.", source: "Calista Vanshee", context: "Últimas palavras antes de beijar Viktor e transferir para si a corrupção mágica que o consumia." }
    ]
  },

  "yuto": {
    type: "personagem",
    grupo: "aliados",
    peso: 1,
    nome: "Yuto",
    epiteto: "O ronin de passagem",
    status: "unknown",
    statusLabel: "Desconhecido",
    imagem: "Imagens/Personagens/Yuto.jpeg",
    resumo: "Ronin viajante que cruza o caminho do grupo em Hikari, em busca de alguém. Luta com maestria puramente marcial.",
    campos: {
      "Biografia": "Ronin viajante que cruza o caminho do grupo em [[hikari|Hikari]] \"por um motivo parecido\" ao deles — em busca de alguém, sem maiores detalhes revelados neste volume. Sereno e observador, promete a [[darin-leafheart|Darin]] que \"seus caminhos se cruzarão novamente\" — presságio que se cumpre quando reaparece, providencialmente, durante o ataque de sombras ao festival.",
      "Vínculos": [
        { slug: "darin-leafheart", nome: "Darin Leafheart", relacao: "Aliado" }
      ],
      "Aparência": "Haori cor de terracota com padrões de ondas negras, quimono azul-escuro, cachecol xadrez cinza, duas katanas embainhadas, cabelo negro com mechas azul e vermelho preso em rabo de cavalo lateral alto, um pequeno galho mascado no canto da boca, curativo no nariz sugerindo brigas recentes.",
      "Feitos": "Salvou Darin de um golpe fatal durante o ataque de sombras em [[hikari|Hikari]]. Derrotou, em conjunto com Darin, uma criatura de sombra gigante. Percebeu que a origem do ataque vinha do castelo — \"o coração desse pesadelo\".",
      "Status atual": "Presente na batalha final contra as sombras em Hikari; seu destino após a abertura do portal para o [[o-limbo|Limbo]] não é esclarecido no volume.",
      "Sigilo manifestado": "Não manifestado/Desconhecido — luta com maestria puramente marcial, sem magia evidente."
    }
  },

  "lorde-krauser": {
    type: "personagem",
    grupo: "antagonistas",
    peso: 1,
    nome: "Lorde Krauser",
    epiteto: "O verdadeiro Quinto Presságio",
    status: "dead",
    statusLabel: "Morto",
    imagem: "Imagens/Personagens/LordeKrauser.jpg",
    resumo: "Draconato rejeitado pelo próprio pai, tornou-se Presságio e governou Hikari por dez anos sob identidade forjada.",
    campos: {
      "Biografia": "Nasceu com traços Draconato visíveis desde o berço. Seu pai humano o rejeitou com violência — \"Eu não sou pai de um monstro... de um dragão!\" — e assassinou sua mãe, **Layla**, estrangulando-a diante do próprio filho. O menino reagiu incinerando o pai vivo com uma rajada de fogo: **criado no ódio, batizado no fogo**. Tornou-se, com o tempo, um dos [[termo-pressagio|Presságios]]. Já adulto, encontrou numa floresta uma criança rejeitada com poderes de tinta negra — [[gyotto|Gyotto]], de uns sete anos — e a corrompeu deliberadamente, reproduzindo sem hesitar o mesmo ciclo de abuso que o formara. Anos depois, o já corrompido Gyotto destruiria o [[o-orfanato|orfanato]] onde [[kiana|Kiana]] crescia, tornando Krauser o **autor indireto** da morte de [[tia-lanis|Tia Lanis]], [[emma|Emma]] e todas as crianças.",
      "A gaiola de castigo": "Por ser considerado **o Presságio mais fraco**, foi humilhado e exilado pelo [[o-mascarado|Mascarado]] para [[hikari|Hikari]], com ordens de assassinar o Lorde local, tomar seu lugar e \"apodrecer lá\" até descobrir algo. Hikari **nunca foi um reino** para ele: era uma *gaiola de castigo*. Ainda assim, governou como um \"Lorde heroico\" fabricado por dez anos, conquistando a devoção genuína do povo — enquanto mantinha [[viktor-vanshee|Viktor Vanshee]] sequestrado e o torturava em segredo, no próprio castelo.",
      "Vínculos": [
        { slug: null, nome: "Layla", relacao: "Mãe" },
        { slug: "o-mascarado", nome: "O Mascarado", relacao: "Superior e algoz" },
        { slug: "gyotto", nome: "Gyotto", relacao: "Corrompido por ele" },
        { slug: "falso-pressagio", nome: "O Falso Presságio", relacao: "Peão" },
        { slug: "viktor-vanshee", nome: "Viktor Vanshee", relacao: "Inimigo" }
      ],
      "Aparência": "Híbrido humano-Draconato. Metade do rosto humana, de traços nobres e olheiras de exaustão; a outra metade coberta por escamas escuras e brilhantes, com um olho reptiliano. Cabelos longos, lisos e negros \"como piche\". [[kiana|Kiana]] o descreve como possuidor de \"uma **beleza terrível**\". Veste capa azul profunda, colete de couro utilitário e uma ombreira metálica no lado humano — roupas de general em campo, não de rei ornamentado.",
      "Feitos": "Governou [[hikari|Hikari]] por dez anos sob identidade forjada. Corrompeu [[gyotto|Gyotto]] ainda criança. Orquestrou o sequestro e a tortura de Viktor. Matou [[calista-vanshee|Calista Vanshee]]. Feriu gravemente [[kiana|Kiana]]. Invocou, com o próprio corpo como componente, o ritual [[oblitus-limbo|Oblitus Limbo]].",
      "Status atual": "**Destruído** — o corpo derretendo por dentro, corroído pela [[manifestacao-harmonica|Manifestação Harmônica]] de Kiana e estilhaçado pelo Punho Flamejante de [[viktor-vanshee|Viktor]]. Mas seu golpe final foi bem-sucedido.",
      "Sigilo manifestado": "**Tentáculos do Abismo** — quatro tentáculos negros e viscerais que rompem sua armadura pelas costas. Demonstrou ainda a **\"Armadura Arcana: Frio Absoluto\"**: chamas azuis espectrais que não aquecem, mas consomem a própria existência do que tocam, anulando o gelo (\"Você não pode congelar o que já é o próprio zero!\"). A relação entre as duas habilidades não é esclarecida."
    },
    calloutTitle: "Derrotado por uma canção que ele mesmo pediu",
    callout: "Foi Krauser quem convidou [[kiana|Kiana]] ao palco no Festival de Honra (\"Ouvi dizer que a jovem tem talento\"). E foi a música dela — a [[manifestacao-harmonica|Manifestação Harmônica]] — que penetrou em suas células e agiu como um veneno estrutural, colapsando-o por dentro. O golpe que o matou foi, literalmente, **encomendado pela própria vítima**.",
    quotes: [
      { text: "Você luta com o coração, Kiana, e é por isso que vai perder! Corações pesados são lentos! Corações partidos são fáceis de esmagar!", source: "Lorde Krauser", context: "Durante o duelo no salão do trono, tentando desestabilizar Kiana logo após a morte de Calista." },
      { text: "Sanguis pro limine, anima pro vana... In tenebris aeternis, mundus dissolvitur. Aperi portam limbi, ubi lux moritur... OBLITUS LIMBO!", source: "Lorde Krauser", context: "O ritual final, em latim, que abre o portal e arrasta o grupo para dentro do Limbo — o evento que dá nome ao livro." }
    ]
  },

  "gyotto": {
    type: "personagem",
    grupo: "antagonistas",
    peso: 2,
    nome: "Gyotto",
    epiteto: "O garoto da tinta · o Sexto Presságio",
    status: "dead",
    statusLabel: "Morto",
    imagem: "Imagens/Personagens/Gyotto.jpeg",
    resumo: "Criança rejeitada e corrompida por Krauser, transformada em arma. Destruiu o orfanato onde Kiana crescia.",
    campos: {
      "Biografia": "Criança rejeitada pelo mundo, encontrada por [[lorde-krauser|Krauser]] numa floresta aos sete anos de idade, já com os olhos marcados por \"globos de escuridão absoluta\" de pupilas azul-elétricas — sinal de um poder inato sobre uma substância negra e viscosa, semelhante a tinta. Krauser reconheceu nele o mesmo tipo de rejeição que sofrera na própria infância e o corrompeu deliberadamente, moldando-o à imagem do próprio trauma. Anos depois, já como o Sexto Presságio, um Gyotto adolescente — cerca de dezesseis anos — atacou o orfanato onde [[kiana|Kiana]] crescia, matando cuidadoras e crianças com jatos de tinta e um feitiço de sono em massa que adormeceu todas as crianças presentes, exceto Kiana. [[viktor-vanshee|Viktor Vanshee]] chegou durante o massacre e o matou, empalando-o com uma estaca de gelo cristalino — tarde demais para salvar qualquer outra pessoa, mas a tempo de resgatar a única sobrevivente. Sua morte só é mencionada diretamente muito depois, num conselho secreto de Presságios testemunhado por Kiana dentro da mente de Krauser: ali, o Mascarado revela que Gyotto morria \"enquanto procurava pelo [[peca-perdida|Fragmento]]\", e que sua proximidade com Viktor no momento da morte \"não é coincidência\".",
      "Vínculos": [
        { slug: "lorde-krauser", nome: "Lorde Krauser", relacao: "Corruptor" },
        { slug: "viktor-vanshee", nome: "Viktor Vanshee", relacao: "Inimigo" }
      ],
      "Aparência": "Quando criança na floresta: magro, maltrapilho, olhos de escuridão absoluta com pupilas azul-elétricas. Anos depois, no orfanato: um adolescente magro, sem camisa, calça marrom gasta, os mesmos olhos inumanos — capaz de se dissolver em tinta negra e branca, viscosa, que atravessa paredes como se a matéria sólida fosse ilusória.",
      "Feitos": "Destruiu o orfanato de [[kiana|Kiana]], matando [[tia-lanis|Tia Lanis]], [[emma|Emma]] e todas as demais crianças presentes, exceto Kiana. Procurava pela [[peca-perdida|Peça Perdida (o Fragmento)]] no momento de sua morte. É desprezado pelo próprio conselho depois de morto — \"Gyotto sempre foi um imprestável mesmo\", diz a criança do conselho.",
      "Status atual": "Morto — empalado por Viktor Vanshee durante o massacre do orfanato, anos antes do início da trama. Sua morte é relembrada e lamentada pelos demais Presságios num conselho secreto revisitado por Kiana.",
      "Sigilo manifestado": "Poder sobre uma substância negra viscosa (\"tinta\"), capaz de se mover através de superfícies sólidas, formar tentáculos e lâminas, e induzir sono mágico em massa — não é nomeado como um Sigilo da Alma formal no livro, mas sua natureza e escala sugerem fortemente que se trata de um."
    }
  },

  /* ---- personagens secundários (fichas menores) ---- */

  "rurik": {
    type: "personagem",
    grupo: "aliados",
    peso: 2,
    nome: "Rurik",
    epiteto: "Dono da Taverna de Rurik, pai de Viktor",
    status: "alive",
    statusLabel: "Vivo",
    imagem: null,
    resumo: "Dono da taverna que serve de coração social de Vardun. Revelado como pai de Viktor Vanshee.",
    campos: {
      "Biografia": "Dono da Taverna de Rurik, o coração social de [[vardun|Vardun]] e ponto de encontro do grupo protagonista. É revelado a Kiana como o pai de [[viktor-vanshee|Viktor Vanshee]], contando-lhe sobre o criminoso Darius durante a busca por Viktor desaparecido."
    }
  },

  "tia-lanis": {
    type: "personagem",
    grupo: "passado",
    peso: 1,
    nome: "Tia Lanis",
    epiteto: "Cuidadora do orfanato",
    status: "dead",
    statusLabel: "Morta",
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
    grupo: "passado",
    peso: 2,
    nome: "Emma",
    epiteto: "Melhor amiga de Kiana no orfanato",
    status: "dead",
    statusLabel: "Morta",
    imagem: null,
    resumo: "Melhor amiga de infância de Kiana no orfanato. Morta no ataque de Gyotto.",
    campos: {
      "Biografia": "Melhor amiga de [[kiana|Kiana]] no orfanato onde ambas cresceram. Morta junto com [[tia-lanis|Tia Lanis]] e as demais crianças no ataque de [[gyotto|Gyotto]] ao orfanato — uma memória que Kiana reprime por completo até o clímax do volume."
    }
  },

  "kael": {
    type: "personagem",
    grupo: "passado",
    peso: 4,
    nome: "Kael",
    epiteto: "Melhor amigo de Viktor",
    status: "dead",
    statusLabel: "Morto",
    imagem: null,
    resumo: "Melhor amigo de Viktor e Calista, morto em circunstâncias nunca totalmente esclarecidas.",
    campos: {
      "Biografia": "Melhor amigo de [[viktor-vanshee|Viktor Vanshee]] e amigo do casal Vanshee. Morreu em circunstâncias contestadas — Viktor afirma que goblins o mataram, mas o Falso Presságio (o \"encapuzado\") reivindica ter matado Kael pessoalmente, uma contradição jamais resolvida neste volume. Sua [[adaga-de-kael|adaga]], gravada com símbolos de gelo, é entregue por Kiana a Viktor como presente de aniversário no capítulo de abertura."
    }
  },

  "matilde": {
    type: "personagem",
    grupo: "aliados",
    peso: 4,
    nome: "Matilde",
    epiteto: "Anciã de Hikari",
    status: "alive",
    statusLabel: "Viva",
    imagem: null,
    resumo: "Idosa de Hikari que Kiana ajuda com uma lista de compras simbólicas, em troca de uma pulseira dourada.",
    campos: {
      "Biografia": "Anciã de [[hikari|Hikari]] que Kiana ajuda com uma lista de compras simbólicas enquanto o grupo aguarda a ajuda de [[lorde-krauser|Krauser]] na busca por Viktor. Em troca, presenteia Kiana com a [[pulseira-de-matilde|pulseira dourada]] cuja perda quase custa a vida da protagonista mais tarde."
    }
  },

  "o-mascarado": {
    type: "personagem",
    grupo: "pressagios",
    peso: 3,
    nome: "O Mascarado",
    epiteto: "Presságio de numeração não revelada · a autoridade do conselho",
    status: "unknown",
    statusLabel: "Desconhecido",
    imagem: "Imagens/Personagens/Mascarado.jpeg",
    resumo: "Presságio que preside o conselho. Sua numeração nunca é revelada, mas está acima de Krauser — logo, entre o Primeiro e o Quarto.",
    campos: {
      "Biografia": "**Presságio** e autoridade operacional do conselho, com máscara e chifres \"esculpidos em osso antigo\". Sua presença silencia o ar. É quem convoca as reuniões, quem revela a morte de [[gyotto|Gyotto]], quem desmente os livros de história e quem condena [[lorde-krauser|Krauser]] ao exílio em [[hikari|Hikari]] — transmitindo as ordens do Mestre.",
      "Sua numeração": "O livro **nunca revela** que número ele é. Mas a hierarquia deixa claro que ele está **acima de Krauser**, o Quinto: é ele quem pune, humilha e exila o Quinto Presságio, e quem fala em nome da [[a-presenca|Presença]] diante do conselho. Isso o coloca necessariamente entre o **Primeiro e o Quarto** — mas onde exatamente, o Volume 1 não diz.",
      "O interesse em Viktor": "Reverencia [[viktor-vanshee|Viktor Vanshee]] de um modo perturbador — chama-o de \"o peixe grande\" e ordena que ninguém o toque: \"preciso do Vanshee com vida por enquanto. Eu tenho **planos para o que corre nas veias daquele homem**.\" A natureza dessa reverência, e o que exatamente ele quer do sangue de Viktor, permanecem sem explicação.",
      "Vínculos": [
        { slug: "lorde-krauser", nome: "Lorde Krauser", relacao: "Subordinado" },
        { slug: "o-conselho", nome: "O Conselho", relacao: "Preside-o" },
        { slug: "a-presenca", nome: "A Presença", relacao: "Mestre" },
        { slug: "viktor-vanshee", nome: "Viktor Vanshee", relacao: "Reverencia-o" }
      ]
    }
  },

  "a-presenca": {
    type: "personagem",
    grupo: "pressagios",
    peso: 1,
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

  "a-silhueta": {
    type: "personagem",
    grupo: "pressagios",
    peso: 2,
    nome: "A Silhueta",
    epiteto: "A Segunda · a serva de maior hierarquia da Presença",
    status: "unknown",
    statusLabel: "Desconhecida",
    imagem: null,
    resumo: "Chamada de \"a Segunda em poder e soberania\" — o que a coloca como a Segunda Presságio, logo abaixo da própria Presença.",
    campos: {
      "Biografia": "A serva de maior hierarquia da [[a-presenca|Presença]], explicitamente chamada de \"**a Segunda em poder e soberania entre os seus**\". Mulher que flutua rente ao chão, com movimentos \"elegantes como fitas de seda negra ao vento\" — uma graça que desaparece por completo diante da gravidade esmagadora do Mestre, que a força de joelhos. Chora lágrimas de sangue e não ousa limpá-las: \"a dor era o lembrete de sua inferioridade\".",
      "A Segunda Presságio": "O título que a Presença lhe dá é a chave: se os [[termo-pressagio|Presságios]] são **numerados** por hierarquia — o Quinto ([[lorde-krauser|Krauser]]), o Sexto ([[gyotto|Gyotto]]) — e ela é \"a Segunda em poder e soberania\", então ela é a **Segunda Presságio**. Isso a coloca imediatamente abaixo da própria Presença e acima de todos os outros, inclusive do [[o-mascarado|Mascarado]].",
      "Seu papel": "É ela quem, no prólogo, traz a notícia de que o Quinto Fio caiu. E é a ela que cabe a ordem final: **vigiar** o grupo dentro do [[o-limbo|Limbo]], enquanto a Presença os deixa apodrecer no desespero.",
      "Vínculos": [
        { slug: "a-presenca", nome: "A Presença", relacao: "Mestre" },
        { slug: "termo-pressagio", nome: "Os Presságios", relacao: "A Segunda" }
      ]
    },
    quotes: [
      { text: "Vigie, Segunda. A caçada não acabou. Ela apenas se tornou... doméstica.", source: "a Presença, à Silhueta", context: "A ordem final do prólogo — e a frase que só faz sentido completo quando o livro termina exatamente onde começou." }
    ]
  },

  "o-conselho": {
    type: "personagem",
    grupo: "pressagios",
    peso: 4,
    nome: "O Conselho",
    epiteto: "Os demais Presságios · a mulher, o velho e a criança",
    status: "unknown",
    statusLabel: "Desconhecido",
    imagem: null,
    resumo: "Os outros Presságios do conselho — três figuras não nomeadas que julgam, humilham e punem seus pares.",
    campos: {
      "Biografia": "Os **demais [[termo-pressagio|Presságios]]**: além do [[o-mascarado|Mascarado]] e de [[lorde-krauser|Krauser]], a memória revelada dentro da mente de Krauser mostra outros três, reunidos sob uma **lua antropomórfica de sorriso macabro**. Nenhum deles é nomeado, e nenhuma de suas numerações é revelada — mas todos ocupam o mesmo conselho que julga, humilha e pune seus pares.",
      "As três figuras": "**A mulher** — postura altiva e desprezo aristocrático. É ela quem humilha Krauser por não conseguir manter o próprio sigilo estável. **O velho** — curvado, de risada seca e asmática, descarta a morte de [[gyotto|Gyotto]] com um \"menos um\" e resmunga que \"se ele caiu, é porque não era digno\". **A criança** — voz infantil \"carregada de uma malícia que me deu náuseas\", brinca com algo invisível nas mãos e dá de ombros para a morte de Gyotto: \"sempre foi um imprestável mesmo\".",
      "O que o conselho revela": "É nessa reunião que se decide o destino de Krauser — exilado a [[hikari|Hikari]] por ser considerado o **mais fraco** — e que se revela o que os Presságios sabem sobre [[viktor-vanshee|Viktor]]: que ele matou Gyotto, que a história oficial mente sobre [[gauss|Gauss]], e que o Mascarado tem planos para o que corre em suas veias.",
      "Vínculos": [
        { slug: "o-mascarado", nome: "O Mascarado", relacao: "Preside o conselho" },
        { slug: "lorde-krauser", nome: "Lorde Krauser", relacao: "Exilado por eles" },
        { slug: "termo-pressagio", nome: "Os Presságios", relacao: "Membros" }
      ]
    }
  },

  "falso-pressagio": {
    type: "personagem",
    grupo: "antagonistas",
    peso: 3,
    nome: "O Falso Presságio",
    epiteto: "O encapuzado · a isca criada por Krauser",
    status: "dead",
    statusLabel: "Morto",
    imagem: null,
    resumo: "Não era um Presságio de verdade: um peão criado por Krauser com um único propósito — distrair o grupo da busca por Viktor.",
    campos: {
      "Biografia": "Homem magro envolto num manto \"tão negro que parecia devorar a luz\", com um sorriso descrito como \"uma fenda branca e macabra que se estendia além do que a anatomia permitiria\". **Não era um Presságio de verdade** — nunca teve número, nunca esteve no conselho, nunca serviu à [[a-presenca|Presença]]. Era um **peão criado por [[lorde-krauser|Krauser]]** com um propósito único e limitado: **distrair o grupo da busca por [[viktor-vanshee|Viktor]]**.",
      "A encenação": "Krauser o fabricou como uma isca. O plano era simples: o falso Presságio se passaria pelo \"Quinto\" comandando um ritual na caverna, o grupo iria atrás dele, e o próprio Krauser apareceria para \"ajudar\" a derrotá-lo — encerrando a ameaça publicamente, conquistando a confiança de todos e desviando as suspeitas de si mesmo. Funcionou: depois da caverna, [[hikari|Hikari]] celebrou o \"mal desmantelado\" com um festival, e ninguém olhou para o Lorde.",
      "O que ele disse": "Confrontou [[kiana|Kiana]] na névoa de Hikari e plantou a dúvida mais corrosiva do volume: reivindicou ter matado [[kael|Kael]] com as próprias mãos, contradizendo a versão de Viktor sobre goblins, e o acusou de ser \"um mestre em pintar tragédias para esconder a própria podridão\". Depois de uma perseguição pelos telhados, dissolveu-se em fumaça, deixando o desenho de uma caverna: \"Vá ver o que o seu herói realmente é.\" Se essa provocação era verdade ou apenas parte da encenação de Krauser, o volume não resolve.",
      "Em combate": "Empunha uma **flamberge curta**, de lâmina em ziguezague, \"que parecia pulsar com vontade própria\". Não bloqueia golpes — simplesmente não está lá onde a lâmina chega. Dissolve-se em fumaça negra. Ao ser derrotado na caverna, recusa-se a revelar o paradeiro de Viktor e comete suicídio ritualístico, transformando o próprio braço em lâmina de sombra — levando consigo o que sabia.",
      "Vínculos": [
        { slug: "lorde-krauser", nome: "Lorde Krauser", relacao: "Criador" }
      ]
    }
  },

  "gauss": {
    type: "personagem",
    grupo: "pressagios",
    peso: 5,
    nome: "Gauss",
    epiteto: "O nome ligado ao Ankiquilarke",
    status: "dead",
    statusLabel: "Morto",
    imagem: null,
    resumo: "Figura que nunca aparece em cena. Existe em uma única linha de diálogo — e no material ilustrado, associado ao Ankiquilarke.",
    campos: {
      "Biografia": "Nunca aparece em cena. Existe em **uma única linha de diálogo** — o [[o-mascarado|Mascarado]] revelando que [[viktor-vanshee|Viktor Vanshee]] é \"o mesmo homem que tirou a vida de Gauss\" — e no material ilustrado do livro, onde aparece associado ao [[ankiquilarke|Ankiquilarke]], aparentemente como seu portador.",
      "Era um Presságio?": "**O livro nunca diz.** É uma dedução tentadora — o Mascarado o menciona no meio de uma conversa sobre a morte de [[gyotto|Gyotto]], um Presságio numerado, e o compara a ele como mais uma baixa causada por Viktor. Mas em nenhum momento Gauss recebe um número, é chamado de Presságio ou é situado dentro do conselho. Ele pode ter sido um deles, ou pode ter sido outra coisa inteiramente: um portador de Herança Celestial fora da hierarquia, um inimigo antigo, alguém de quem só os Presságios se lembram. **A questão fica em aberto.**",
      "A história reescrita": "Os livros de história do mundo creditam sua morte a um tal [[gale-akmenos|Gale Akmenos]]. O Mascarado desmente com desprezo: \"Eles são escritos por covardes que não sabem da verdade.\" É o mesmo padrão de apagamento que se repete com Gyotto — a história oficial parece ter sido reescrita para apagar o rastro de Viktor.",
      "Vínculos": [
        { slug: "viktor-vanshee", nome: "Viktor Vanshee", relacao: "Matador" },
        { slug: "ankiquilarke", nome: "Ankiquilarke", relacao: "Portador (segundo o material ilustrado)" }
      ]
    }
  },

  "gale-akmenos": {
    type: "personagem",
    grupo: "pressagios",
    peso: 6,
    nome: "Gale Akmenos",
    epiteto: "O herói dos livros de história",
    status: "unknown",
    statusLabel: "Desconhecido",
    imagem: null,
    resumo: "Nome creditado pela historiografia oficial pela morte de Gauss — feito que o Mascarado atribui, na verdade, a Viktor Vanshee.",
    campos: {
      "Biografia": "Nome creditado pela **historiografia oficial** pela morte de [[gauss|Gauss]] — um feito que o [[o-mascarado|Mascarado]] atribui, na verdade, a [[viktor-vanshee|Viktor Vanshee]], chamando os livros de história de obra de \"covardes que não sabem da verdade\". Nunca aparece em cena.",
      "O fio solto": "Compartilha o sobrenome de [[amnon-akmenos|Amnon Akmenos]], cuja família o expulsou por uma acusação de roubo que ele nega. O livro **nunca conecta explicitamente os dois** — mas a coincidência é um dos fios mais promissores deixados em aberto no Volume 1.",
      "Vínculos": [
        { slug: "amnon-akmenos", nome: "Amnon Akmenos", relacao: "Mesmo sobrenome (ligação não confirmada)" },
        { slug: "gauss", nome: "Gauss", relacao: "Creditado por sua morte" }
      ]
    }
  },

  "velha-mira": {
    type: "personagem",
    grupo: "aliados",
    peso: 5,
    nome: "Velha Mira",
    epiteto: "Anciã de Vardun",
    status: "alive",
    statusLabel: "Viva",
    imagem: null,
    resumo: "Anciã de Vardun cujo olho bom \"enxerga mais do que qualquer pessoa inteira\". Planta a primeira semente do mistério de Kiana.",
    campos: {
      "Biografia": "Baixinha, torta pelo tempo, rosto sulcado de cicatrizes, um tapa-olho desgastado — mas \"o seu olho bom parecia enxergar mais do que qualquer pessoa inteira\". Cheira a ervas antigas e fumaça. No funeral de [[lili|Lili]], oferece a [[kiana|Kiana]] o consolo mais lúcido do livro — e planta, ainda no início do volume, a **primeira semente do mistério central**: a suspeita de que há em Kiana algo que não pertence a este mundo.",
      "Vínculos": [
        { slug: "kiana", nome: "Kiana", relacao: "Avó de coração" }
      ]
    },
    quotes: [
      { text: "A gente segue lembrando, Kiana. Não da morte... mas do que veio antes dela. E você, minha menina, tem algo dentro de si que ainda não compreendeu. Um fogo que não pertence a este mundo.", source: "Velha Mira, no funeral de Lili", context: "O primeiro indício de que o poder de Kiana é o eixo oculto de toda a história." }
    ]
  },

  "helena": {
    type: "personagem",
    grupo: "aliados",
    peso: 3,
    nome: "Helena",
    epiteto: "Dona da estalagem onde Kiana mora",
    status: "alive",
    statusLabel: "Viva",
    imagem: null,
    resumo: "Voz rouca e divertida. É ela quem guarda e entrega a adaga de Kael — e sabe mais do que diz.",
    campos: {
      "Biografia": "Dona da estalagem de [[vardun|Vardun]] onde [[kiana|Kiana]] mora. Voz rouca e divertida; chama Kiana de \"desleixada como só você consegue ser\". É ela quem guarda e entrega a caixa preta com a [[adaga-de-kael|adaga de Kael]] — e, ao mencionar o nome dele, seu humor desaparece e \"algo pesado, difícil de nomear\" cruza seus olhos. **Sabe mais do que diz.**",
      "Vínculos": [
        { slug: "kiana", nome: "Kiana", relacao: "Hospedeira" },
        { slug: "viktor-vanshee", nome: "Viktor Vanshee", relacao: "Guardou o presente póstumo de Kael" }
      ]
    }
  },

  "lili": {
    type: "personagem",
    grupo: "passado",
    peso: 5,
    nome: "Lili",
    epiteto: "A criança tiefling assassinada",
    status: "dead",
    statusLabel: "Morta",
    imagem: null,
    resumo: "O estopim de toda a trama. Menina tiefling encontrada mutilada num beco de Vardun, segurando a fotografia do pai.",
    campos: {
      "Biografia": "**O estopim de toda a trama.** Menina tiefling de chifres recém-formados e cabelo branco, encontrada mutilada num beco de [[vardun|Vardun]] — o corpo \"reorganizado com uma precisão doentia\", segurando na mão arrancada a fotografia destruída do pai. O pai dela, vendedor de legumes na feira, fora morto dias antes exatamente da mesma forma. [[kiana|Kiana]] a descreve com uma ternura devastadora: \"uma menina simples, de coração manso, que gostava de morder frutas azedas demais só pelo prazer de rir do próprio susto\".",
      "Consequências": "É o assassinato de Lili que faz [[viktor-vanshee|Viktor]] sair sozinho noite adentro dizendo \"vou acabar com isso\" — e desaparecer. Todo o resto do livro decorre disso. Os assassinatos seguiam o mesmo padrão ritualístico encontrado depois na caverna de [[hikari|Hikari]].",
      "Vínculos": [
        { slug: "darius", nome: "Darius", relacao: "Executor dos ataques" }
      ]
    }
  },

  "darius": {
    type: "personagem",
    grupo: "antagonistas",
    peso: 4,
    nome: "Darius",
    epiteto: "O maior criminoso de Vardun",
    status: "dead",
    statusLabel: "Morto",
    imagem: null,
    resumo: "Orc coberto de tatuagens que narram crimes. Não era o cérebro por trás dos assassinatos — foi obrigado por um mascarado.",
    campos: {
      "Biografia": "Orc de estatura mediana, coberto de tatuagens \"que narravam crimes, algumas antigas, outras ainda vermelhas e recentes\". Dentes manchados. O maior criminoso de [[vardun|Vardun]] — mas **não era o cérebro por trás dos assassinatos**: foi *obrigado* pelo [[o-mascarado|Mascarado]], que apareceu do nada e coagiu sua gangue a fazer o trabalho sujo. E o mestre do Mascarado queria [[viktor-vanshee|Viktor]] **vivo**.",
      "Morte": "Ao confrontá-lo sozinha, [[kiana|Kiana]] ouve sua confissão e então o vê se virar de costas, mandando seus homens fazerem o que quisessem com ela. Algo dentro dela estala. Ele morre com a [[adaga-de-kael|adaga de Kael]] no peito, sem entender como morreu tão rápido — e os mais de vinte homens de sua taverna morrem em seguida, no primeiro **apagão** de Kiana. Sob seu cadáver, ela encontra a [[carta-ensanguentada|carta ensanguentada]] que aponta para [[hikari|Hikari]].",
      "Vínculos": [
        { slug: "o-mascarado", nome: "O Mascarado", relacao: "Coagido por ele" },
        { slug: "kiana", nome: "Kiana", relacao: "Matadora" }
      ]
    }
  },

  "tyler": {
    type: "personagem",
    grupo: "passado",
    peso: 3,
    nome: "Tyler",
    epiteto: "O valentão do orfanato",
    status: "dead",
    statusLabel: "Morto",
    imagem: null,
    resumo: "Espancou Kiana e destruiu seu primeiro ukulele contra o rosto dela. Ela mentiu para Tia Lanis para protegê-lo.",
    campos: {
      "Biografia": "Mais velho, mais alto, com \"ódio nos olhos claros\". No [[o-orfanato|orfanato]], espancava [[kiana|Kiana]] e chegou a destruir seu primeiro [[ukulele-de-kiana|ukulele]] batendo-o contra o rosto dela — quebrando-lhe o nariz. Sua justificativa era que ali era \"um lugar para gente normal\", não para \"monstros ou aberrações\".",
      "O detalhe que revela Kiana": "Mesmo assim, **Kiana mentiu para [[tia-lanis|Tia Lanis]] para protegê-lo**, dizendo que havia tropeçado e caído sobre o instrumento. Lanis sabia que era mentira — e escolheu não a confrontar. Presumivelmente morreu no ataque de [[gyotto|Gyotto]] ao orfanato, junto com todas as outras crianças."
    }
  },

  "flyn": {
    type: "personagem",
    grupo: "passado",
    peso: 6,
    nome: "Flyn",
    epiteto: "Marido falecido de Matilde",
    status: "dead",
    statusLabel: "Morto",
    imagem: null,
    resumo: "Nunca aparece — mas o livro passa uma tarde inteira fazendo compras por ele.",
    campos: {
      "Biografia": "Marido falecido de [[matilde|Matilde]], morto há exatos cinco anos no dia em que o grupo a conhece. Um retrato de \"olhos gentis e mãos calejadas\" reina sobre um altar improvisado na sala dela. **Nunca aparece em cena** — mas o livro passa uma tarde inteira fazendo compras por ele: a lista absurda de Matilde não era comida, eram **âncoras**, um ritual para iluminar o caminho de volta do marido morto até os sonhos dela.",
      "Vínculos": [
        { slug: "matilde", nome: "Matilde", relacao: "Esposa" }
      ]
    }
  },

  /* ==================== LUGARES ==================== */

  "vardun": {
    type: "lugar",
    grupo: "principais",
    peso: 1,
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
    grupo: "principais",
    peso: 2,
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
    grupo: "principais",
    peso: 4,
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
    grupo: "principais",
    peso: 3,
    nome: "Vale das Flores Sangrentas",
    epiteto: "A floresta amaldiçoada",
    status: null,
    statusLabel: null,
    imagem: "Imagens/Lugares/ValeDasFloresSangrentas.jpeg",
    resumo: "Floresta amaldiçoada entre Vardun e Hikari que prende viajantes num loop espacial. Domínio de uma criatura multi-elemental.",
    campos: {
      "Descrição": "Entre [[vardun|Vardun]] e [[hikari|Hikari]] estende-se o Vale das Flores Sangrentas — uma floresta amaldiçoada que não aparece em nenhum mapa confiável e que poucos viajantes atravessam sem se perder. O solo é coberto por flores vermelhas e carnudas, de pétalas espessas como carne, exalando um cheiro adocicado e ferroso que Kiana reconhece com horror: é o mesmo odor que sentiu ao despertar do massacre na Taverna de Darius, em Vardun — uma primeira pista, ainda não explicada, de que o vale guarda alguma ligação com a natureza do seu próprio poder.",
      "O loop espacial": "O vale prende quem nele entra num loop espacial: bússolas quebram, param de apontar para qualquer norte real, e os viajantes andam em círculos por dias sem perceber. O grupo de [[kiana|Kiana]] passa oito dias preso ali, registrando a fome e o desespero crescentes num diário improvisado, até que [[darin-leafheart|Darin]] identifica o padrão do loop e, no sétimo dia, runas ocultas são reveladas ao toque na casca de uma árvore.",
      "O domínio interior": "Essas runas funcionam como uma porta — uma \"barreira do infinito\" — para o domínio de uma criatura mutável que habita o vale há cerca de vinte anos: um ser multi-elemental capaz de se transformar sucessivamente em essências de água, vento e fogo. É nesse domínio interior, cercado por um gramado circular e uma rocha vermelha rachada, que o grupo trava a batalha que quase os custa a vida — e de onde só escapam graças à intervenção de [[calista-vanshee|Calista Vanshee]], que os encontra, decifra as runas de proteção e luta ao lado deles."
    }
  },

  "o-limbo": {
    type: "lugar",
    grupo: "principais",
    peso: 5,
    nome: "O Limbo",
    epiteto: "A dimensão viva e faminta",
    status: null,
    statusLabel: null,
    imagem: null,
    resumo: "Dimensão viva onde a esperança ia para morrer. Domínio da Presença — e destino final de todo o grupo ao fim do Volume 1.",
    campos: {
      "Descrição": "Cenário do prólogo e destino final do volume. Ali \"a escuridão não era o fim do dia. Era uma entidade viva, pulsante, como as paredes de um estômago faminto\" — o coração do Limbo, onde a esperança ia para morrer. É o domínio da [[a-presenca|Presença]], um lugar onde o chão \"não existe\" e onde a gravidade da Entidade esmaga fisicamente quem se aproxima do centro.",
      "As regras da dimensão": "Os [[termo-pressagio|Presságios]] chamam-no também de \"a dimensão\", e sua estabilidade depende do **número de Presságios vivos**: com dois a menos, as saídas tornam-se limitadas. Isso faz do Limbo menos uma prisão passiva e mais um organismo cuja porta depende de quantos servos a Presença ainda tem em pé.",
      "O destino do grupo": "Ao final do Volume 1, o ritual [[oblitus-limbo|Oblitus Limbo]] de [[lorde-krauser|Krauser]] arrasta [[kiana|Kiana]], [[viktor-vanshee|Viktor]], [[near-shade|Near]], [[amnon-akmenos|Amnon]] e [[darin-leafheart|Darin]] para dentro dele — fechando exatamente o ciclo aberto no prólogo. A Presença decide não caçá-los: prefere deixá-los se consumir por dentro, \"domesticando\" a caçada."
    }
  },

  "o-orfanato": {
    type: "lugar",
    grupo: "secundarios",
    peso: 1,
    nome: "O Orfanato",
    epiteto: "O passado de Kiana",
    status: null,
    statusLabel: null,
    imagem: null,
    resumo: "Erguido na orla de uma floresta proibida, é onde Kiana foi deixada com poucos dias de vida — e onde tudo terminou numa noite de tinta negra e fogo.",
    campos: {
      "Descrição": "Erguido na orla de uma **floresta proibida**, é o lugar onde [[kiana|Kiana]] foi deixada — ou abandonada — com poucos dias de vida, e onde cresceu como a única criança não-humana entre humanos. Paredes cinzas, janelas altas, um sino de jantar metálico e impessoal.",
      "O que aconteceu ali": "Foi lá que [[tia-lanis|Tia Lanis]] lhe ensinou a ler e a tocar [[ukulele-de-kiana|ukulele]]; foi lá que [[tyler|Tyler]] a espancava; foi lá que [[emma|Emma]] foi sua única amiga. E foi lá que tudo terminou, numa noite de tinta negra e fogo, quando [[gyotto|Gyotto]] atacou e matou todos — menos ela. [[viktor-vanshee|Viktor Vanshee]] chegou tarde demais para salvar qualquer outra pessoa, mas a tempo de matar o atacante e resgatar a única sobrevivente.",
      "A memória apagada": "Nas memórias fragmentadas de Kiana adulta, restam apenas \"paredes cinzas e janelas altas\" — sem rostos, sem nomes. Um grande borrão. Só o [[colar-de-cristal-vermelho|cristal de tortura]] de [[lorde-krauser|Krauser]], no clímax do volume, devolve a ela tudo o que o trauma havia enterrado."
    }
  },

  /* ==================== LORE ==================== */

  "sigilos-da-alma": {
    type: "lore",
    grupo: "magia",
    peso: 1,
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
    grupo: "misterios",
    peso: 1,
    nome: "Estudo de Caso: o Sigilo da Alma em Kiana",
    epiteto: "Um mistério propositalmente aberto",
    status: null,
    statusLabel: null,
    imagem: "Imagens/Personagens/Kiana.jpeg",
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
    grupo: "misterios",
    peso: 3,
    nome: "O Sigilo do Caos",
    epiteto: "Natureza desconhecida",
    status: null,
    statusLabel: null,
    imagem: null,
    resumo: "Nenhuma menção a este sigilo aparece no livro Volume 1. Sua existência, portador e natureza são inteiramente desconhecidos.",
    campos: {
      "Natureza desconhecida": "Nenhuma menção ao \"Sigilo do Caos\" aparece em qualquer ponto do livro Volume 1. Diferentemente dos sigilos de [[viktor-vanshee|Viktor]], [[calista-vanshee|Calista]], [[darin-leafheart|Darin]] e [[lorde-krauser|Krauser]] — todos nomeados e ao menos parcialmente demonstrados em combate — este sigilo permanece um mistério completo. Não há indícios de quem o possuiria, de sua origem, ou de sua função dentro do [[sigilos-da-alma|sistema de magia]] estabelecido pelo livro. Sua existência, seu portador e sua verdadeira natureza são, por ora, inteiramente desconhecidos."
    }
  },

  "ankiquilarke": {
    type: "lore",
    grupo: "misterios",
    peso: 2,
    nome: "O Ankiquilarke",
    epiteto: "O maior mistério em aberto sobre o passado de Viktor",
    status: null,
    statusLabel: null,
    imagem: "Imagens/Lore/Ankiquilarke.jpeg",
    imagemWide: true,
    resumo: "Um evento (ou marco temporal) associado à Herança Celestial de Viktor, cercado de ecos e apelidos, mas nunca definido diretamente.",
    campos: {
      "O que o livro diz": "\"Ankiquilarke\" aparece apenas duas vezes no livro Volume 1, e nunca é definido diretamente — apenas cercado. A primeira menção surge na aula de [[kiana|Kiana]] sobre a Herança Celestial: ela cita o Ankiquilarke como o evento associado a esse tipo raríssimo de sigilo, e confirma que [[viktor-vanshee|Viktor]] nasceu com o seu já desperto. A segunda menção surge muito mais tarde, dentro da própria mente de [[lorde-krauser|Krauser]], num conselho secreto de Presságios: ao debaterem a morte de [[gyotto|Gyotto]], \"[[o-mascarado|o Mascarado]]\" observa que, \"desde o dia do Ankiquilarke, o picolé não dava as caras\" — apelido de deboche para Viktor — e conclui que sua reaparição perto do local onde Gyotto morreu \"não é coincidência\". Isso situa o Ankiquilarke como um acontecimento passado, conhecido pelos Presságios, depois do qual Viktor desapareceu de sua vigilância por um longo período.",
      "A pista da imagem — Gauss": "Nas páginas ilustradas em que os sigilos de Viktor e Calista são apresentados como fichas de personagem, uma figura chamada Gauss parece estar associada ao Ankiquilarke — possivelmente como seu portador original ou como a figura central do próprio evento. O livro nunca chega a apresentar Gauss diretamente: seu único outro rastro é uma fala do Mascarado afirmando que Viktor foi quem \"tirou a vida de Gauss\" — uma afirmação que os registros históricos oficiais do mundo contradizem, atribuindo essa morte a um tal \"Gale Akmenos\". Se Gauss e o Ankiquilarke estão de fato ligados, isso reforça um padrão que já aparece com Gyotto: a história oficial parece ter sido reescrita para apagar o rastro de Viktor."
    },
    calloutTitle: "Suposições",
    callout: "O Ankiquilarke pode ser o nome de uma batalha, cataclisma ou incidente específico — um \"dia\" reconhecível o suficiente para os Presságios o usarem como marco temporal. Pode também ser o nome de um poder, de uma linhagem de Sigilo, ou de um título ligado à Herança Celestial. Se Gauss for de fato o portador original, é possível que o evento seja o confronto em que Viktor teria matado Gauss — a mesma morte que a história oficial atribui, falsamente, a Gale Akmenos. Isso faria do Ankiquilarke tanto uma pessoa/poder quanto o acontecimento que selou seu fim. Fora da ficção: o próximo livro planejado por ByGuizo é um spin-off centrado no passado de Viktor, e levará justamente o título Ankiquilarke."
  },

  "resumo-narrativo": {
    type: "lore",
    grupo: "historia",
    peso: 1,
    nome: "Resumo Narrativo — Volume 1",
    epiteto: "Do prólogo ao desfecho",
    status: null,
    statusLabel: null,
    imagem: null,
    poster: "Imagens/Lore/PosterOficial_KianaXKrauser.jpeg",
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

  /* ==================== BESTIÁRIO / CRIATURAS ==================== */

  "essencia-mutavel": {
    type: "criatura",
    grupo: "criaturas",
    peso: 1,
    nome: "A Essência Mutável",
    epiteto: "A criatura do Vale das Flores Sangrentas",
    status: "dead",
    statusLabel: "Morta",
    imagem: "Imagens/Bestiario/EssenciaMutavel.jpg",
    resumo: "Ser multi-elemental que habita o Vale há vinte anos. Distorce a realidade e sustenta o loop espacial que aprisiona viajantes.",
    campos: {
      "Descrição": "Habita o [[vale-das-flores-sangrentas|Vale das Flores Sangrentas]] há cerca de vinte anos. É capaz de criar e distorcer a realidade, e é ela quem sustenta o **loop espacial** que aprisiona os viajantes que entram no vale. Seu domínio interior é acessado por runas ocultas na casca de uma árvore, que abrem uma \"barreira do infinito\" — dentro dela há um bosque com gramado circular e uma rocha vermelha rachada, cercada de runas azuis.",
      "As três essências": "Em combate, manifesta-se em **três essências sucessivas**, cada uma com um núcleo (ou \"coração\") a ser destruído. A **Essência da Água** é um humanoide líquido, sem olhos nem boca — derruba [[near-shade|Near]] em combate. A **Essência do Vento** é um furacão em forma humana, abatida por [[calista-vanshee|Calista]], que voa impulsionada pelo próprio vento da criatura. A **Essência do Fogo** são chamas em forma humana, e só é vencida porque [[amnon-akmenos|Amnon]] agarra seu núcleo flamejante com as mãos nuas, imobilizando-a ao custo de queimaduras graves.",
      "Status": "Derrotada pelo grupo de [[kiana|Kiana]] no interior de seu próprio domínio."
    }
  },

  "silhuetas-de-sombra": {
    type: "criatura",
    grupo: "criaturas",
    peso: 2,
    nome: "As Silhuetas de Sombra",
    epiteto: "O ataque a Hikari",
    status: "unknown",
    statusLabel: "Desconhecido",
    imagem: "Imagens/Bestiario/SilhuetasDeSombra.jpg",
    resumo: "Humanoides sem rosto que absorvem a luz. Emergem do chão durante o Festival de Honra e despedaçam cidadãos.",
    campos: {
      "Descrição": "Humanoides sem rosto que absorvem a luz ao seu redor. Emergem do chão, das sombras e das frestas de pedra durante o Festival de Honra em [[hikari|Hikari]], despedaçando cidadãos. Além das criaturas de tamanho comum, surgem **silhuetas gigantes** de quase quatro metros — pelo menos cinco delas espalhadas pela cidade.",
      "Origem": "Sua fonte é o próprio castelo: são a manifestação do poder de [[lorde-krauser|Krauser]]. Foi [[yuto|Yuto]] quem percebeu, antes de todos, de onde vinham — apontando o castelo como \"o coração desse pesadelo\".",
      "Quem as enfrentou": "[[near-shade|Near]], [[amnon-akmenos|Amnon]] e [[darin-leafheart|Darin]] defenderam os civis enquanto [[kiana|Kiana]] corria para o castelo. Darin e Yuto, juntos, derrubaram uma das criaturas gigantes com um combo de garras espirituais e katanas cruzadas em X no peito."
    }
  },

  /* ==================== ARTEFATOS / OBJETOS ==================== */

  "adaga-de-kael": {
    type: "artefato",
    grupo: "objeto",
    peso: 1,
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
    grupo: "objeto",
    peso: 2,
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
    grupo: "objeto",
    peso: 4,
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
    grupo: "objeto",
    peso: 3,
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
    grupo: "objeto",
    peso: 5,
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
    grupo: "objeto",
    peso: 8,
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

  "peca-perdida": {
    type: "artefato",
    grupo: "objeto",
    peso: 7,
    subtype: "objeto",
    nome: "A Peça Perdida / O Fragmento",
    epiteto: "O macguffin central da obra",
    status: null,
    statusLabel: null,
    imagem: null,
    resumo: "O objeto (ou pessoa?) que a Presença busca através de seus Fios. É o que Gyotto procurava ao morrer. Permanece oculto ao final do Volume 1.",
    campos: {
      "Descrição": "O objeto — ou pessoa — que \"[[a-presenca|a Presença]]\" busca através de seus [[termo-fio|Fios]]/[[termo-pressagio|Presságios]]. É o motor oculto de toda a trama: o Quinto Fio morreu sem capturá-la, e ela permanece oculta ao final do Volume 1. Mas a Presença agora tem em mãos algo que considera melhor: \"[[aquele-que-sabe|Aquele que Sabe]]\", o portador da verdade oculta, vagando dentro de seu próprio domínio.",
      "Os dois nomes": "O livro usa dois termos que apontam para a mesma busca. **A Peça Perdida** é como a Presença se refere ao que procura, no prólogo. **O Fragmento** é o nome que o Mascarado usa ao dizer que [[gyotto|Gyotto]] morria \"enquanto procurava pelo Fragmento\" — e que, por isso, sua proximidade com [[viktor-vanshee|Viktor]] no momento da morte \"não é coincidência\". O texto nunca confirma explicitamente que são a mesma coisa, mas o paralelo é difícil de ignorar: ambos são objetos únicos, ambos são procurados pelos Presságios a mando do Mestre, e ambos permanecem fora de alcance.",
      "Por que importa": "É a busca pela Peça Perdida que põe os Presságios em movimento pelo mundo — e, portanto, a causa remota de quase toda a tragédia do volume. Foi procurando o Fragmento que Gyotto cruzou o caminho de Viktor e morreu; foi a morte de Gyotto que levou o conselho a exilar [[lorde-krauser|Krauser]] para [[hikari|Hikari]]; e foi o exílio de Krauser que preparou o palco para o massacre final."
    }
  },

  "alianca-dos-lordes": {
    type: "artefato",
    grupo: "termo",
    peso: 1,
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

  "carta-ensanguentada": {
    type: "artefato",
    grupo: "objeto",
    peso: 6,
    subtype: "objeto",
    nome: "A Carta Ensanguentada",
    epiteto: "Objeto",
    status: null,
    statusLabel: null,
    imagem: null,
    resumo: "Encontrada sob o cadáver de Darius. É o documento que põe toda a jornada em movimento.",
    campos: {
      "Descrição": "Encontrada por [[kiana|Kiana]] sob o cadáver de [[darius|Darius]], ainda no meio da carnificina que ela não lembra de ter causado. Menciona [[calista-vanshee|Calista]], a cidade de [[hikari|Hikari]] e algo sobre \"algum dos presságios estar escondido\" — a primeira aparição do termo na narrativa, muito antes de o grupo entender o que ele significa. É o documento que põe toda a jornada em movimento."
    }
  },

  "selo-alianca-dos-lordes": {
    type: "artefato",
    grupo: "objeto",
    peso: 9,
    subtype: "objeto",
    nome: "O Selo de Cera Azul",
    epiteto: "Objeto",
    status: null,
    statusLabel: null,
    imagem: null,
    resumo: "Marca de autenticidade diplomática de EmberFall. É a ausência dele que entrega a farsa de Calista.",
    campos: {
      "Descrição": "Marca de autenticidade diplomática da [[alianca-dos-lordes|Aliança dos Lordes]], de [[emberfall|EmberFall]], usada em pergaminhos oficiais de convocação. É justamente a *ausência* dele — somada ao tipo errado de poeira nas botas de [[calista-vanshee|Calista]] — que entrega a farsa do grupo a [[lorde-krauser|Krauser]] em segundos, quando eles se apresentam como enviados oficiais. Ele não os pune: respeita a ousadia."
    }
  },

  "manifestacao-harmonica": {
    type: "lore",
    grupo: "magia",
    peso: 2,
    nome: "Manifestação Harmônica",
    epiteto: "A técnica de última instância de Kiana",
    status: null,
    statusLabel: null,
    imagem: null,
    resumo: "Técnica de Kiana: converte acordes do ukulele em lâminas de som, ondas de choque e projéteis de energia. Age como veneno estrutural.",
    campos: {
      "Descrição": "Técnica de última instância de [[kiana|Kiana]]: as cordas do [[ukulele-de-kiana|ukulele]] explodem em luz ciano e dourada, e cada acorde se transforma em arma — lâminas de som, ondas de choque, projéteis de energia concentrada. Consome cada gota da estamina e da magia de quem a invoca, a ponto de deixar os reflexos de Kiana \"lentos como se eu estivesse submersa em breu\" logo depois.",
      "O veneno estrutural": "É a Manifestação Harmônica — e não o golpe de [[viktor-vanshee|Viktor]] — que de fato derrota [[lorde-krauser|Krauser]]. As vibrações da música penetraram nas células do Presságio e agiram como um **veneno estrutural**, esperando apenas o impacto certo para colapsá-lo por dentro. Quando Krauser começa a derreter e pergunta, horrorizado, o que lhe fizeram, Viktor responde com uma frieza definitiva: \"Eu não fiz nada. Foi a Kiana quem te derrotou.\"",
      "Relação com o Sigilo": "Kiana invoca a técnica logo após declarar que **não** despertou seu sigilo — o que faz da Manifestação Harmônica algo distinto, ou ao menos não nomeado, dentro do sistema dos [[sigilos-da-alma|Sigilos da Alma]]. Sua natureza exata permanece em aberto. Ver [[estudo-de-caso-kiana|Estudo de Caso: o Sigilo da Alma em Kiana]]."
    },
    calloutTitle: "A ironia central de Kiana",
    callout: "[[tia-lanis|Tia Lanis]], ao lhe ensinar ukulele na infância, corrigiu sua postura dizendo: \"Não aperte tanto as cordas, Kiana. Trate o instrumento como um amigo, não como uma arma.\" Anos depois, é exatamente transformando o instrumento em arma que Kiana vence o homem responsável, ainda que indiretamente, pela morte da própria Lanis."
  },

  "termo-pressagio": {
    type: "lore",
    grupo: "conceitos",
    peso: 1,
    nome: "Os Presságios",
    epiteto: "Hierarquia e doutrina",
    status: null,
    statusLabel: null,
    imagem: "Imagens/Personagens/Mascarado.jpeg",
    resumo: "Almas que venderam o próprio livre-arbítrio por poder a serviço da Presença. São numerados, e servem a uma hierarquia rígida.",
    campos: {
      "O que é um Presságio": "Nas palavras de [[calista-vanshee|Calista]]: \"Não são apenas vilões de contos. São um grupo de almas devoradas pela própria ambição. Homens e mulheres que, na busca desenfreada por poder, entregaram a única coisa que realmente possuíam: o próprio livre arbítrio. Tornaram-se cascas vazias, preenchidas por vontades que não lhes pertencem.\" São **numerados** — o Quinto ([[lorde-krauser|Krauser]]), o Sexto ([[gyotto|Gyotto]]) —, o que sugere uma ordem ou hierarquia fixa. A [[a-presenca|Presença]], porém, refere-se a eles por outro nome: [[termo-fio|Fios]].",
      "A doutrina — a lenda de Kynare e o Corvo Celeste": "Calista conta a lenda ao grupo, na carroça a caminho de [[hikari|Hikari]], como forma de explicar o que os Presságios realmente são. Kynare era um homem consumido pela fome de poder. O Corvo Celeste lhe ofereceu força, domínio e glória eterna em troca de uma única coisa: seguir o caminho que o Corvo apontasse. Kynare aceitou — rápido demais. No instante em que o fez, correntes finas como fios de cabelo subiram por suas pernas, seu tronco, seu pescoço, e ele nem percebeu. Com o tempo, esqueceu que um dia teve vontade própria, e passou a acreditar que tudo o que fazia era escolha sua. E o Corvo deixou que ele acreditasse — *\"porque nada é mais fácil de controlar do que alguém que acha que está no comando\"*. A moral que as mães contavam às crianças: algumas promessas, mesmo as feitas por criaturas celestes, são só correntes disfarçadas.",
      "Hierarquia e desprezo": "Ser um Presságio não garante respeito entre pares — nem controle sobre o próprio poder. No conselho, [[lorde-krauser|Krauser]] é humilhado abertamente por \"mal conseguir manter seu próprio sigilo estável\", e a morte de [[gyotto|Gyotto]] é descartada com desdém pelos demais. Força e posição são tudo: quem cai, caiu porque \"não era digno\"."
    },
    table: {
      title: "A hierarquia",
      headers: ["Posição", "Quem é", "O que se sabe"],
      rows: [
        ["O Mestre", "[[a-presenca|A Presença]]", "A entidade no centro do [[o-limbo|Limbo]], acima de toda a hierarquia. Nunca descrita fisicamente. Sua voz \"ecoa não nos ouvidos, mas nos ossos\". Busca a [[peca-perdida|Peça Perdida]]."],
        ["A Segunda", "[[a-silhueta|A Silhueta]]", "Chamada de \"a Segunda em poder e soberania entre os seus\" — logo, a **Segunda Presságio**. Serva mais próxima do Mestre. Cabe a ela vigiar o grupo dentro do Limbo."],
        ["Entre o 1º e o 4º", "[[o-mascarado|O Mascarado]]", "Sua numeração **nunca é revelada**, mas está acima de Krauser (o Quinto): é ele quem pune, exila e fala em nome do Mestre diante do conselho."],
        ["Numeração não revelada", "[[o-conselho|Os demais Presságios]]", "A mulher, o velho e a criança do conselho. Nenhum é nomeado, nenhum recebe número — mas todos julgam e punem seus pares."],
        ["O Quinto", "[[lorde-krauser|Lorde Krauser]]", "Considerado **o mais fraco** do conselho. Humilhado e exilado a [[hikari|Hikari]] como castigo."],
        ["O Sexto", "[[gyotto|Gyotto]]", "Corrompido por Krauser ainda criança. Morto por [[viktor-vanshee|Viktor]] durante o massacre do orfanato."]
      ]
    },
    calloutTitle: "A dimensão fica instável",
    callout: "Ao final do conselho, o Mascarado avisa: \"Estaremos com dois Presságios a menos. A dimensão ficará instável. As saídas agora são limitadas, principalmente para a **Princesa** e o **moleque**...\" — duas figuras jamais identificadas neste volume, cuja capacidade de deixar o [[o-limbo|Limbo]] depende do número de Presságios ativos. A contagem de \"dois a menos\" é ambígua: a leitura mais direta é [[gyotto|Gyotto]] (morto) e o próprio [[lorde-krauser|Krauser]] (removido pelo exílio)."
  },

  "oblitus-limbo": {
    type: "lore",
    grupo: "conceitos",
    peso: 4,
    nome: "Oblitus Limbo",
    epiteto: "O ritual que dá nome ao livro",
    status: null,
    statusLabel: null,
    imagem: null,
    resumo: "Feitiço ritual em latim entoado por Krauser, pago com o próprio corpo como componente. Abre o portal que arrasta o grupo para o Limbo.",
    campos: {
      "Descrição": "O feitiço final de [[lorde-krauser|Lorde Krauser]], entoado em **latim** e pago com o **próprio corpo como componente ritual**. Recusando-se a morrer depois de ser derrotado, Krauser gasta o que resta de si para abrir um portal para o [[o-limbo|Limbo]] — arrastando [[kiana|Kiana]], [[viktor-vanshee|Viktor]], [[near-shade|Near]], [[amnon-akmenos|Amnon]] e [[darin-leafheart|Darin]] para dentro dele.",
      "O ciclo que se fecha": "É o evento que **dá nome ao livro** — e que fecha exatamente o ciclo aberto no prólogo: a [[a-presenca|Presença]], no início do volume, já comentava que o Quinto Fio havia morrido, mas não em vão, pois arrastara consigo \"[[aquele-que-sabe|Aquele que Sabe]]\" e seus companheiros. Só na última página o leitor entende que o prólogo era, na verdade, o epílogo."
    },
    quotes: [
      { text: "Sanguis pro limine, anima pro vana... In tenebris aeternis, mundus dissolvitur. Aperi portam limbi, ubi lux moritur... OBLITUS LIMBO!", source: "Lorde Krauser", context: "O ritual final, pago com o próprio corpo. Abre o portal que dá nome ao livro." }
    ]
  },

  "runas": {
    type: "lore",
    grupo: "magia",
    peso: 3,
    nome: "Runas",
    epiteto: "O sistema mágico escrito",
    status: null,
    statusLabel: null,
    imagem: null,
    resumo: "Sistema escrito, distinto dos Sigilos, capaz de selar, proteger e distorcer o espaço.",
    campos: {
      "Descrição": "Um sistema mágico **escrito**, distinto do sistema dos [[sigilos-da-alma|Sigilos da Alma]] — não é algo que desperta na alma, mas algo que se aprende a ler e a traçar. Capaz de selar, proteger e **distorcer o espaço**.",
      "A barreira do infinito": "As runas do [[vale-das-flores-sangrentas|Vale das Flores Sangrentas]] são o exemplo central do volume: criam o loop espacial que aprisiona viajantes e formam a \"**barreira do infinito**\" — o selo rúnico que separa o mundo real do domínio da [[essencia-mutavel|criatura]] que habita o vale. Foi [[darin-leafheart|Darin]] quem as revelou, passando a mão devagar pela casca de uma árvore, e [[calista-vanshee|Calista]] quem soube decifrá-las.",
      "Quem sabe lê-las": "Calista sabe ler runas — \"não tanto quanto o Viktor, claro\". Essa observação de passagem sugere que [[viktor-vanshee|Viktor Vanshee]] é um **erudito rúnico de alto nível**, um detalhe sobre seu passado que o volume nunca desenvolve."
    }
  },

  "termo-fio": {
    type: "lore",
    grupo: "conceitos",
    peso: 2,
    nome: "Fio",
    epiteto: "Como a Presença chama seus servos",
    status: null,
    statusLabel: null,
    imagem: null,
    resumo: "Termo usado pela própria Presença para se referir a seus servos mais próximos. Aparenta ser sinônimo de \"Presságio\".",
    campos: {
      "Descrição": "Termo usado pela própria [[a-presenca|Presença]], no prólogo, para se referir a seus servos mais próximos: \"o Quinto Fio foi cortado\", \"devo enviar os outros Fios?\". Aparenta ser sinônimo de \"[[termo-pressagio|Presságio]]\", ou talvez a forma como a Entidade especificamente os chama. A relação exata entre os dois termos nunca é explicada — mas a imagem é coerente com a lenda de Kynare: um fio, como uma corrente, é algo que prende e que pode ser cortado por quem o segura."
    }
  },

  "aquele-que-sabe": {
    type: "lore",
    grupo: "conceitos",
    peso: 3,
    nome: "Aquele que Sabe",
    epiteto: "O portador da verdade oculta",
    status: null,
    statusLabel: null,
    imagem: null,
    resumo: "Epíteto usado no prólogo para a pessoa arrastada ao Limbo junto de seus companheiros — quase certamente Viktor Vanshee.",
    campos: {
      "Descrição": "Epíteto usado no prólogo para \"o portador da verdade oculta\", arrastado ao [[o-limbo|Limbo]] junto de seus companheiros — quase certamente [[viktor-vanshee|Viktor Vanshee]], dado que é ele quem acaba lá ao final do volume, junto a [[kiana|Kiana]], [[near-shade|Near]], [[amnon-akmenos|Amnon]] e [[darin-leafheart|Darin]]. A [[a-presenca|Presença]] considera tê-lo em seu domínio um prêmio melhor do que a própria [[peca-perdida|Peça Perdida]] que ainda procura — e o [[o-mascarado|Mascarado]] declara ter \"planos para o que corre nas veias daquele homem\".",
      "Fora da ficção": "É também, num piscar de olho do autor, o nome da seção de agradecimentos do livro: \"AQUELES QUE SABEM\" — os amigos que jogaram a campanha de RPG original e que, literalmente, eram os únicos que já conheciam o segredo."
    }
  }

};

/*
 * ORDEM DE EXIBIÇÃO DAS CATEGORIAS
 *
 * Cada entidade tem um `grupo`. Dentro de uma categoria, os cards são exibidos
 * agrupados e na ordem definida abaixo — os importantes primeiro, os secundários
 * depois. Sem isto a listagem cai em ordem alfabética e os protagonistas acabam
 * espalhados no meio de figurantes.
 *
 * `renderCategory()` monta um subtítulo por grupo, na ordem desta lista. Uma
 * entidade sem `grupo` (ou com um grupo não listado aqui) cai no último bloco.
 * Dentro de cada grupo a ordem é alfabética, exceto onde `peso` for definido
 * (menor peso = aparece antes) — usado para pôr Kiana à frente do grupo dela.
 */
const GRUPOS = {
  personagem: [
    { id: "protagonistas", label: "O Grupo", icon: "fa-solid fa-users" },
    { id: "aliados",       label: "Aliados",  icon: "fa-solid fa-handshake-angle" },
    { id: "antagonistas",  label: "Antagonistas", icon: "fa-solid fa-skull" },
    { id: "pressagios",    label: "Os Presságios e o Limbo", icon: "fa-solid fa-eye" },
    { id: "passado",       label: "Vozes do Passado", icon: "fa-solid fa-hourglass-half" }
  ],
  lugar: [
    { id: "principais",   label: "Cidades e Regiões", icon: "fa-solid fa-map-location-dot" },
    { id: "secundarios",  label: "Outros Lugares",    icon: "fa-solid fa-location-dot" }
  ],
  lore: [
    { id: "magia",     label: "O Sistema de Magia", icon: "fa-solid fa-wand-sparkles" },
    { id: "misterios", label: "Mistérios em Aberto", icon: "fa-solid fa-circle-question" },
    { id: "conceitos", label: "Termos e Conceitos",  icon: "fa-solid fa-spell-check" },
    { id: "historia",  label: "A História",          icon: "fa-solid fa-scroll" }
  ],
  criatura: [
    { id: "criaturas", label: "Criaturas", icon: "fa-solid fa-dragon" }
  ],
  artefato: [
    { id: "objeto", label: "Objetos", icon: "fa-solid fa-box-archive" },
    { id: "termo",  label: "Termos & Conceitos", icon: "fa-solid fa-spell-check" }
  ]
};

/* Mapa auxiliar: type -> label plural / singular usados na UI.
   Adicionar uma entrada aqui cria a categoria inteira (rota, grid, breadcrumb). */
const TYPE_META = {
  personagem: { label: "Personagens", singular: "Personagem", icon: "fa-solid fa-user-ninja", route: "personagens",
                descricao: "Do grupo que atravessou o Vale às sombras que os esperavam do outro lado." },
  lugar:      { label: "Lugares",     singular: "Lugar",      icon: "fa-solid fa-map-location-dot", route: "lugares",
                descricao: "As cidades, as florestas e as dimensões que moldaram esta história." },
  lore:       { label: "Lore & Sistemas de Magia", singular: "Lore", icon: "fa-solid fa-book-skull", route: "lore",
                descricao: "O sistema de magia, os mistérios em aberto e os termos que dão nome às forças deste mundo." },
  criatura:   { label: "Bestiário",   singular: "Criatura",   icon: "fa-solid fa-dragon", route: "bestiario",
                descricao: "As criaturas que o grupo enfrentou ao longo do Volume 1." },
  artefato:   { label: "Artefatos & Termos", singular: "Artefato", icon: "fa-solid fa-gem", route: "artefatos",
                descricao: "Os objetos que os personagens carregam, e as marcas que eles deixam na trama." }
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
