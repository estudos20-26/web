// bb.js - Arquivo de dados para o Language Journey

// Situações (apenas situation e text, sem translation)
const situations = [
  

    {
      "situation": "Alguém te pergunta onde fica o banco e você responde: 'Siga em frente'.",
      "text": "Tout droit"
    },
    {
      "situation": "No restaurante, você quer pedir a conta e diz ao garçom: 'A conta, por favor'.",
      "text": "L'addition, s'il vous plaît"
    },
    {
      "situation": "Você não ouviu bem e pede para a pessoa repetir: 'Como disse?'.",
      "text": "Pardon ?"
    },
    {
      "situation": "Você concorda totalmente com uma ideia e responde: 'Isso faz todo sentido'.",
      "text": "C'est tout à fait logique"
    },
    {
      "situation": "Você precisa discordar educadamente e começa com: 'Na verdade...'.",
      "text": "En fait..."
    },
    {
      "situation": "Você quer saber o que alguém tem feito ultimamente e pergunta: 'O que anda fazendo?'.",
      "text": "Qu'est-ce que tu deviens ?"
    },
    {
      "situation": "Você está com dificuldade em uma tarefa e comenta: 'Estou tendo problemas com isso'.",
      "text": "J'ai du mal avec ça"
    },
    {
      "situation": "Alguém chega atrasado e você pergunta: 'O que aconteceu?'.",
      "text": "Qu'est-ce qui s'est passé ?"
    },
    {
      "situation": "Você não tem certeza sobre algo e diz: 'Deixa eu verificar isso'.",
      "text": "Laisse-moi vérifier ça"
    },
    {
      "situation": "Você quer saber se pode fazer algo e pergunta: 'Tudo bem se eu...?'.",
      "text": "Ça va si je... ?"
    },
    {
      "situation": "Você precisa sair de um lugar e diz: 'Preciso ir, foi ótimo te ver'.",
      "text": "Il faut que j'y aille, c'était super de te voir"
    },
    {
      "situation": "Alguém te conta uma novidade e você responde: 'Sério? Que incrível!'.",
      "text": "Vraiment ? C'est incroyable !"
    },
    {
      "situation": "Você quer um café e pede: 'Um café, por favor'.",
      "text": "Un café, s'il vous plaît"
    },
    {
      "situation": "No hotel, você pergunta na recepção: 'A que horas é o check-out?'.",
      "text": "À quelle heure est le check-out ?"
    },
    {
      "situation": "Você está perdido e pergunta a um policial: 'Onde fica a estação de metrô?'.",
      "text": "Où est la station de métro ?"
    },
    {
      "situation": "Seu celular descarregou e você pede: 'Posso usar seu carregador?'.",
      "text": "Je peux utiliser ton chargeur ?"
    },
    {
      "situation": "No mercado, você pergunta a um funcionário: 'Onde ficam os laticínios?'.",
      "text": "Où sont les produits laitiers ?"
    },
    {
      "situation": "Você quer saber o preço de algo e pergunta: 'Quanto custa isso?'.",
      "text": "C'est combien ?"
    },
    {
      "situation": "No cinema, você pede: 'Um ingresso para a sessão das 8 horas'.",
      "text": "Une place pour la séance de 20 heures"
    },
    {
      "situation": "Você está doente e diz ao médico: 'Estou me sentindo muito mal'.",
      "text": "Je me sens vraiment mal"
    },
    {
      "situation": "No táxi, você dá a direção: 'Vire na próxima à direita'.",
      "text": "Tournez à droite au prochain coin"
    },
    {
      "situation": "Você recebe um presente e agradece: 'Muito obrigado(a), é perfeito!'.",
      "text": "Merci beaucoup, c'est parfait !"
    },
    {
      "situation": "Na entrevista de emprego, você pergunta: 'Quando terei uma resposta?'.",
      "text": "Quand aurai-je une réponse ?"
    },
    {
      "situation": "No aeroporto, você pergunta: 'Qual é o portão de embarque para o voo 202?'.",
      "text": "Quelle est la porte d'embarquement pour le vol 202 ?"
    },
    {
      "situation": "Você quer fazer uma reserva e diz: 'Gostaria de reservar uma mesa para duas pessoas'.",
      "text": "Je voudrais réserver une table pour deux personnes"
    },
    {
      "situation": "No shopping, você pergunta: 'Onde posso encontrar uma farmácia aqui?'.",
      "text": "Où puis-je trouver une pharmacie ici ?"
    },
    {
      "situation": "Você quebrou algo e admite: 'Foi sem querer, desculpe'.",
      "text": "C'était un accident, désolé(e)"
    },
    {
      "situation": "No banco, você pergunta: 'Posso trocar dólares aqui?'.",
      "text": "Est-ce que je peux changer des dollars ici ?"
    },
    {
      "situation": "Você vê um conhecido na rua e cumprimenta: 'Oi, há quanto tempo!'.",
      "text": "Salut, ça fait longtemps !"
    },
    {
      "situation": "Na loja, você pergunta: 'Posso experimentar esta camisa?'.",
      "text": "Je peux essayer cette chemise ?"
    },
    {
      "situation": "No telefone, você não entendeu e diz: 'A linha está ruim, pode repetir?'.",
      "text": "La ligne est mauvaise, vous pouvez répéter ?"
    },
    {
      "situation": "Você quer saber um endereço e pergunta: 'Como chego ao museu?'.",
      "text": "Comment aller au musée ?"
    },
    {
      "situation": "Na festa, você se apresenta: 'Acho que não nos conhecemos, eu sou...'.",
      "text": "Je ne pense pas qu'on se connaisse, je suis..."
    },
    {
      "situation": "Você está com fome e sugere: 'Que tal pedirmos uma pizza?'.",
      "text": "Et si on commandait une pizza ?"
    },
    {
      "situation": "No trabalho, você propõe: 'Podemos discutir isso amanhã?'.",
      "text": "On peut en discuter demain ?"
    },
    {
      "situation": "Você está com pressa e diz: 'Preciso ir rápido, estou atrasado'.",
      "text": "Je dois me dépêcher, je suis en retard"
    },
    {
      "situation": "Na livraria, você pergunta: 'Tem este livro em inglês?'.",
      "text": "Vous avez ce livre en anglais ?"
    },
    {
      "situation": "Você vê alguém caído e pergunta: 'Você está bem? Precisa de ajuda?'.",
      "text": "Ça va ? Vous avez besoin d'aide ?"
    },
    {
      "situation": "No ônibus, você pergunta: 'Este ônibus vai para o centro?'.",
      "text": "Ce bus va au centre-ville ?"
    },
    {
      "situation": "Você recebe uma notícia triste e diz: 'Sinto muito em ouvir isso'.",
      "text": "Je suis désolé(e) d'entendre ça"
    },
    {
      "situation": "Na barbearia, você explica: 'Só um pouco nas laterais, por favor'.",
      "text": "Juste un peu sur les côtés, s'il vous plaît"
    },
    {
      "situation": "Você não concorda e diz: 'Vou ter que discordar nesse ponto'.",
      "text": "Je ne suis pas d'accord sur ce point"
    },
    {
      "situation": "No café, você pede: 'Um café com leite para viagem, por favor'.",
      "text": "Un café au lait à emporter, s'il vous plaît"
    },
    {
      "situation": "Você encontrou algo perdido e pergunta: 'Isto é seu?'.",
      "text": "C'est à vous ?"
    },
    {
      "situation": "No hotel, você reclama: 'O ar condicionado do meu quarto não funciona'.",
      "text": "La climatisation de ma chambre ne fonctionne pas"
    },
    {
      "situation": "Você está aprendendo e diz: 'Ainda estou pegando o jeito disso'.",
      "text": "Je commence à m'habituer"
    },
    {
      "situation": "Na reunião, você pede: 'Pode falar um pouco mais alto?'.",
      "text": "Vous pouvez parler un peu plus fort ?"
    },
    {
      "situation": "Você fez algo errado e admite: 'Foi minha culpa, me desculpe'.",
      "text": "C'était de ma faute, je m'excuse"
    },
    {
      "situation": "Você encontra alguém pela manhã e diz: 'Bom dia, como você está?'.",
      "text": "Bonjour, comment allez-vous ?"
    },
    {
      "situation": "Alguém pergunta como você está e você responde: 'Estou bem, e você?'.",
      "text": "Ça va bien, et toi/vous ?"
    },
    {
      "situation": "Você se despede de alguém e diz: 'Até mais tarde!'.",
      "text": "À plus tard !"
    },
    {
      "situation": "Você vai dormir e diz para a família: 'Boa noite'.",
      "text": "Bonne nuit"
    },
    {
      "situation": "Você precisa de um favor e pergunta: 'Você pode me ajudar com isso?'.",
      "text": "Tu peux m'aider avec ça ?"
    },
    {
      "situation": "Você vê alguém com muitas sacolas e oferece: 'Deixa eu te ajudar'.",
      "text": "Laisse-moi t'aider"
    },
    {
      "situation": "Alguém te pede algo que você não pode fazer e você responde: 'Desculpe, não posso agora'.",
      "text": "Désolé(e), je ne peux pas pour le moment"
    },
    {
      "situation": "Você aceita ajuda e diz: 'Isso seria ótimo, obrigado!'.",
      "text": "Ce serait super, merci !"
    },
    {
      "situation": "Você concorda completamente e diz: 'Exatamente! É isso mesmo'.",
      "text": "Exactement ! C'est ça"
    },
    {
      "situation": "Você concorda em parte e diz: 'Eu entendo seu ponto, mas...'.",
      "text": "Je vois ton point de vue, mais..."
    },
    {
      "situation": "Você discorda educadamente: 'Respeito sua opinião, mas não concordo'.",
      "text": "Je respecte ton opinion, mais je ne suis pas d'accord"
    },
    {
      "situation": "Você quer mudar de assunto e diz: 'Falando nisso...'.",
      "text": "En parlant de ça..."
    },
    {
      "situation": "Você está com sede e diz: 'Eu quero um copo d'água'.",
      "text": "Je voudrais un verre d'eau"
    },
    {
      "situation": "Você precisa ir ao banheiro e pergunta: 'Onde fica o banheiro?'.",
      "text": "Où sont les toilettes ?"
    },
    {
      "situation": "Você está cansado e comenta: 'Preciso descansar um pouco'.",
      "text": "J'ai besoin de me reposer un peu"
    },
    {
      "situation": "Você está com fome e sugere: 'Vamos comer alguma coisa?'.",
      "text": "On mange quelque chose ?"
    },
    {
      "situation": "Você não entendeu e pede: 'Pode falar mais devagar, por favor?'.",
      "text": "Vous pouvez parler plus lentement, s'il vous plaît ?"
    },
    {
      "situation": "Você quer confirmar se entendeu: 'Deixe-me ver se entendi...'.",
      "text": "Laisse-moi voir si j'ai bien compris..."
    },
    {
      "situation": "Você precisa que soletrem uma palavra: 'Como se soletra isso?'.",
      "text": "Comment ça s'écrit ?"
    },
    {
      "situation": "Você não conhece uma palavra e pergunta: 'Como se diz isso em inglês?'.",
      "text": "Comment on dit ça en anglais ?"
    },
    {
      "situation": "Você sugere um programa: 'Que tal irmos ao cinema?'.",
      "text": "Et si on allait au cinéma ?"
    },
    {
      "situation": "Você pergunta sobre disponibilidade: 'Você está livre amanhã?'.",
      "text": "Tu es libre demain ?"
    },
    {
      "situation": "Você aceita um convite: 'Claro, que horas?'.",
      "text": "Bien sûr, à quelle heure ?"
    },
    {
      "situation": "Você recusa um convite gentilmente: 'Gostaria, mas já tenho compromisso'.",
      "text": "J'aimerais bien, mais j'ai déjà quelque chose de prévu"
    },
    {
      "situation": "Você precisa de ajuda urgente e grita: 'Socorro!'.",
      "text": "Au secours !"
    },
    {
      "situation": "Alguém parece passando mal e você pergunta: 'Você está bem?'.",
      "text": "Ça va ?"
    },
    {
      "situation": "Você precisa de um médico e diz: 'Preciso ver um médico'.",
      "text": "J'ai besoin de voir un médecin"
    },
    {
      "situation": "Algo deu errado e você explica: 'Algo aconteceu'.",
      "text": "Quelque chose s'est passé"
    },
    {
      "situation": "Você atende o telefone e diz: 'Alô?'.",
      "text": "Allô ?"
    },
    {
      "situation": "Você pergunta quem está ligando: 'Quem está falando?'.",
      "text": "Qui est à l'appareil ?"
    },
    {
      "situation": "Você pede para esperar: 'Pode segurar um momento?'.",
      "text": "Vous pouvez patienter un moment ?"
    },
    {
      "situation": "A ligação caiu e você liga de volta: 'Estávamos falando e a ligação caiu'.",
      "text": "On était en train de parler et on a été coupés"
    },
    {
      "situation": "Você não entendeu uma tarefa e pergunta: 'Pode explicar de novo?'.",
      "text": "Vous pouvez expliquer encore une fois ?"
    },
    {
      "situation": "Você precisa de mais tempo: 'Preciso de mais um dia para terminar'.",
      "text": "J'ai besoin d'un jour de plus pour finir"
    },
    {
      "situation": "Você faz uma pergunta em aula: 'Tenho uma dúvida'.",
      "text": "J'ai une question"
    },
    {
      "situation": "Você apresenta alguém: 'Deixe-me apresentar meu colega'.",
      "text": "Permettez-moi de vous présenter mon collègue"
    },
    {
      "situation": "Você pergunta sobre formas de pagamento: 'Aceita cartão de crédito?'.",
      "text": "Est-ce que vous acceptez les cartes de crédit ?"
    },
    {
      "situation": "Você quer saber sobre garantia: 'Tem garantia este produto?'.",
      "text": "Est-ce que ce produit a une garantie ?"
    },
    {
      "situation": "Você negocia o preço: 'Faz desconto para pagamento à vista?'.",
      "text": "Vous faites un remise pour paiement en espèces ?"
    },
    {
      "situation": "Você devolve um produto: 'Gostaria de devolver isto'.",
      "text": "Je voudrais retourner ceci"
    },
    {
      "situation": "Você pede para descer no próximo ponto: 'Próxima parada, por favor'.",
      "text": "Prochain arrêt, s'il vous plaît"
    },
    {
      "situation": "Você pergunta sobre a tarifa: 'Quanto custa a passagem?'.",
      "text": "C'est combien le billet ?"
    },
    {
      "situation": "Você dá direções: 'Vire à esquerda no semáforo'.",
      "text": "Tournez à gauche au feu"
    },
    {
      "situation": "Você está perdido e diz: 'Não sei onde estou'.",
      "text": "Je ne sais pas où je suis"
    },
    {
      "situation": "Você responde a um elogio: 'Obrigado, muito gentil da sua parte'.",
      "text": "Merci, c'est très gentil de votre part"
    },
    {
      "situation": "Você pede desculpas por um atraso: 'Desculpe o atraso, o trânsito estava ruim'.",
      "text": "Désolé(e) pour le retard, il y avait beaucoup de circulation"
    },
    {
      "situation": "Você faz um brinde: 'À nossa saúde!'.",
      "text": "À notre santé !"
    },
    {
      "situation": "Você não quer falar sobre algo: 'Prefiro não comentar sobre isso'.",
      "text": "Je préfère ne pas commenter ça"
    },
    {
      "situation": "Você está feliz e diz: 'Estou muito contente com isso!'.",
      "text": "Je suis très content(e) de ça !"
    },
    {
      "situation": "Você está frustrado: 'Isso está me deixando frustrado'.",
      "text": "Ça commence à être frustrant"
    },
    {
      "situation": "Você está com dúvida: 'Não tenho certeza se é uma boa ideia'.",
      "text": "Je ne suis pas sûr(e) que ce soit une bonne idée"
    },
    {
      "situation": "Você está surpreso: 'Nossa, sério?!'.",
      "text": "Wow, vraiment ?!"
    }
  ];

    const vocabulary = [
    {
      "text": "En fait",
      "translation": "Na verdade"
    },
    {
      "text": "Cependant",
      "translation": "No entanto"
    },
    {
      "text": "Donc",
      "translation": "Portanto"
    },
    {
      "text": "Bien que",
      "translation": "Embora"
    },
    {
      "text": "Fournir",
      "translation": "Fornecer"
    },
    {
      "text": "Exiger",
      "translation": "Exigir"
    },
    {
      "text": "Considérer",
      "translation": "Considerar"
    },
    {
      "text": "Supposer",
      "translation": "Supor"
    },
    {
      "text": "Développer",
      "translation": "Desenvolver"
    },
    {
      "text": "Atteindre",
      "translation": "Alcançar"
    },
    {
      "text": "Éviter",
      "translation": "Evitar"
    },
    {
      "text": "Arriver",
      "translation": "Acontecer"
    },
    {
      "text": "Problème",
      "translation": "Problema"
    },
    {
      "text": "Occasion",
      "translation": "Oportunidade"
    },
    {
      "text": "Connaissance",
      "translation": "Conhecimento"
    },
    {
      "text": "Comportement",
      "translation": "Comportamento"
    },
    {
      "text": "Environnement",
      "translation": "Meio ambiente"
    },
    {
      "text": "Horaire",
      "translation": "Cronograma"
    },
    {
      "text": "Équipement",
      "translation": "Equipamento"
    },
    {
      "text": "Quantité",
      "translation": "Quantidade"
    },
    {
      "text": "Augmenter",
      "translation": "Aumentar"
    },
    {
      "text": "Diminuer",
      "translation": "Diminuir"
    },
    {
      "text": "Disponible",
      "translation": "Disponível"
    },
    {
      "text": "Important",
      "translation": "Importante"
    },
    {
      "text": "Divers",
      "translation": "Vários"
    },
    {
      "text": "Selon",
      "translation": "De acordo com"
    },
    {
      "text": "À cause de",
      "translation": "Devido a"
    },
    {
      "text": "Malgré",
      "translation": "Apesar de"
    },
    {
      "text": "Ainsi que",
      "translation": "Assim como"
    },
    {
      "text": "Même si",
      "translation": "Mesmo que"
    },
    {
      "text": "À moins que",
      "translation": "A menos que"
    },
    {
      "text": "Sinon",
      "translation": "Caso contrário"
    },
    {
      "text": "De plus",
      "translation": "Além disso"
    },
    {
      "text": "En effet",
      "translation": "De fato"
    },
    {
      "text": "Au lieu",
      "translation": "Em vez"
    },
    {
      "text": "En outre",
      "translation": "Além disso"
    },
    {
      "text": "Ainsi",
      "translation": "Assim"
    },
    {
      "text": "Pendant ce temps",
      "translation": "Enquanto isso"
    },
    {
      "text": "Approprié",
      "translation": "Apropriado"
    },
    {
      "text": "Spécifique",
      "translation": "Específico"
    },
    {
      "text": "Précédent",
      "translation": "Anterior"
    },
    {
      "text": "Actuel",
      "translation": "Atual"
    },
    {
      "text": "Similaire",
      "translation": "Similar"
    },
    {
      "text": "Certain",
      "translation": "Certo"
    },
    {
      "text": "Plusieurs",
      "translation": "Vários"
    },
    {
      "text": "Entier",
      "translation": "Inteiro"
    },
    {
      "text": "Récent",
      "translation": "Recente"
    },
    {
      "text": "Impliqué",
      "translation": "Envolvido"
    },
    {
      "text": "Effort",
      "translation": "Esforço"
    },
    {
      "text": "But",
      "translation": "Propósito"
    },
    {
      "text": "Processus",
      "translation": "Processo"
    },
    {
      "text": "Preuve",
      "translation": "Prova"
    },
    {
      "text": "Capacité",
      "translation": "Capacidade"
    },
    {
      "text": "Décision",
      "translation": "Decisão"
    },
    {
      "text": "Situation",
      "translation": "Situação"
    },
    {
      "text": "Expérience",
      "translation": "Experiência"
    },
    {
      "text": "Gouvernement",
      "translation": "Governo"
    },
    {
      "text": "Important",
      "translation": "Importante"
    },
    {
      "text": "Différent",
      "translation": "Diferente"
    },
    {
      "text": "Nécessaire",
      "translation": "Necessário"
    },
    {
      "text": "Possible",
      "translation": "Possível"
    },
    {
      "text": "Probablement",
      "translation": "Provavelmente"
    },
    {
      "text": "Soudainement",
      "translation": "De repente"
    },
    {
      "text": "Fondamentalement",
      "translation": "Basicamente"
    },
    {
      "text": "Finalement",
      "translation": "Finalmente"
    },
    {
      "text": "Exactement",
      "translation": "Exatamente"
    },
    {
      "text": "Surtout",
      "translation": "Especialmente"
    },
    {
      "text": "Immédiatement",
      "translation": "Imediatamente"
    },
    {
      "text": "Presque",
      "translation": "Quase"
    },
    {
      "text": "Récemment",
      "translation": "Recentemente"
    },
    {
      "text": "Simplement",
      "translation": "Simplesmente"
    },
    {
      "text": "Habituellement",
      "translation": "Geralmente"
    },
    {
      "text": "Comprendre",
      "translation": "Entender"
    },
    {
      "text": "Effectuer",
      "translation": "Realizar"
    },
    {
      "text": "Découvrir",
      "translation": "Descobrir"
    },
    {
      "text": "Indiquer",
      "translation": "Indicar"
    },
    {
      "text": "S'occuper de",
      "translation": "Cuidar de"
    },
    {
      "text": "Examiner",
      "translation": "Examinar"
    },
    {
      "text": "S'entendre",
      "translation": "Dar-se bem"
    },
    {
      "text": "Soulever",
      "translation": "Levantar"
    },
    {
      "text": "Révéler",
      "translation": "Revelar"
    },
    {
      "text": "Finir",
      "translation": "Terminar"
    },
    {
      "text": "Analyser",
      "translation": "Analisar"
    },
    {
      "text": "Prendre le contrôle",
      "translation": "Tomar controle"
    },
    {
      "text": "Créer",
      "translation": "Criar"
    },
    {
      "text": "Rencontrer",
      "translation": "Encontrar"
    },
    {
      "text": "Passer par",
      "translation": "Passar por"
    },
    {
      "text": "Suivre",
      "translation": "Seguir"
    },
    {
      "text": "Inventer",
      "translation": "Inventar"
    },
    {
      "text": "Reporter",
      "translation": "Adiar"
    },
    {
      "text": "Configurer",
      "translation": "Configurar"
    },
    {
      "text": "Refuser",
      "translation": "Recusar"
    }
];



// Citações motivacionais
const travelQuotes = [
  "Viajar é a única coisa que você compra que o torna mais rico.",
  "A jornada de mil milhas começa com um único passo.",
  "O mundo é um livro, e quem não viaja lê apenas uma página.",
  "Aprender um novo idioma é como ganhar uma nova alma."
];