// bb.js - Arquivo de dados para o Language Journey

// Situações (apenas situation e text, sem translation)
const situations = [
  
    {
      "situation": "Alguém te pergunta onde fica o banco e você responde: 'Siga em frente'.",
      "text": "Go straight ahead"
    },
    {
      "situation": "No restaurante, você quer pedir a conta e diz ao garçom: 'A conta, por favor'.",
      "text": "Check, please"
    },
    {
      "situation": "Você não ouviu bem e pede para a pessoa repetir: 'Como disse?'.",
      "text": "Pardon?"
    },
    {
      "situation": "Você concorda totalmente com uma ideia e responde: 'Isso faz todo sentido'.",
      "text": "That makes perfect sense"
    },
    {
      "situation": "Você precisa discordar educadamente e começa com: 'Na verdade...'.",
      "text": "Actually..."
    },
    {
      "situation": "Você quer saber o que alguém tem feito ultimamente e pergunta: 'O que anda fazendo?'.",
      "text": "What have you been up to?"
    },
    {
      "situation": "Você está com dificuldade em uma tarefa e comenta: 'Estou tendo problemas com isso'.",
      "text": "I'm having trouble with this"
    },
    {
      "situation": "Alguém chega atrasado e você pergunta: 'O que aconteceu?'.",
      "text": "What happened?"
    },
    {
      "situation": "Você não tem certeza sobre algo e diz: 'Deixa eu verificar isso'.",
      "text": "Let me check on that"
    },
    {
      "situation": "Você quer saber se pode fazer algo e pergunta: 'Tudo bem se eu...?'.",
      "text": "Is it okay if I...?"
    },
    {
      "situation": "Você precisa sair de um lugar e diz: 'Preciso ir, foi ótimo te ver'.",
      "text": "I gotta run, it was great seeing you"
    },
    {
      "situation": "Alguém te conta uma novidade e você responde: 'Sério? Que incrível!'.",
      "text": "Really? That's amazing!"
    },
    {
      "situation": "Você quer um café e pede: 'Um café, por favor'.",
      "text": "A coffee, please"
    },
    {
      "situation": "No hotel, você pergunta na recepção: 'A que horas é o check-out?'.",
      "text": "What time is check-out?"
    },
    {
      "situation": "Você está perdido e pergunta a um policial: 'Onde fica a estação de metrô?'.",
      "text": "Where's the subway station?"
    },
    {
      "situation": "Seu celular descarregou e você pede: 'Posso usar seu carregador?'.",
      "text": "Can I use your charger?"
    },
    {
      "situation": "No mercado, você pergunta a um funcionário: 'Onde ficam os laticínios?'.",
      "text": "Where are the dairy products?"
    },
    {
      "situation": "Você quer saber o preço de algo e pergunta: 'Quanto custa isso?'.",
      "text": "How much is this?"
    },
    {
      "situation": "No cinema, você pede: 'Um ingresso para a sessão das 8 horas'.",
      "text": "One ticket for the 8 o'clock show"
    },
    {
      "situation": "Você está doente e diz ao médico: 'Estou me sentindo muito mal'.",
      "text": "I'm feeling really sick"
    },
    {
      "situation": "No táxi, você dá a direção: 'Vire na próxima à direita'.",
      "text": "Turn right at the next corner"
    },
    {
      "situation": "Você recebe um presente e agradece: 'Muito obrigado(a), é perfeito!'.",
      "text": "Thank you so much, it's perfect!"
    },
    {
      "situation": "Na entrevista de emprego, você pergunta: 'Quando terei uma resposta?'.",
      "text": "When will I hear back?"
    },
    {
      "situation": "No aeroporto, você pergunta: 'Qual é o portão de embarque para o voo 202?'.",
      "text": "What gate is for flight 202?"
    },
    {
      "situation": "Você quer fazer uma reserva e diz: 'Gostaria de reservar uma mesa para duas pessoas'.",
      "text": "I'd like to book a table for two"
    },
    {
      "situation": "No shopping, você pergunta: 'Onde posso encontrar uma farmácia aqui?'.",
      "text": "Where can I find a pharmacy here?"
    },
    {
      "situation": "Você quebrou algo e admite: 'Foi sem querer, desculpe'.",
      "text": "It was an accident, I'm sorry"
    },
    {
      "situation": "No banco, você pergunta: 'Posso trocar dólares aqui?'.",
      "text": "Can I exchange dollars here?"
    },
    {
      "situation": "Você vê um conhecido na rua e cumprimenta: 'Oi, há quanto tempo!'.",
      "text": "Hey, long time no see!"
    },
    {
      "situation": "Na loja, você pergunta: 'Posso experimentar esta camisa?'.",
      "text": "Can I try on this shirt?"
    },
    {
      "situation": "No telefone, você não entendeu e diz: 'A linha está ruim, pode repetir?'.",
      "text": "The connection is bad, could you repeat that?"
    },
    {
      "situation": "Você quer saber um endereço e pergunta: 'Como chego ao museu?'.",
      "text": "How do I get to the museum?"
    },
    {
      "situation": "Na festa, você se apresenta: 'Acho que não nos conhecemos, eu sou...'.",
      "text": "I don't think we've met, I'm..."
    },
    {
      "situation": "Você está com fome e sugere: 'Que tal pedirmos uma pizza?'.",
      "text": "How about we order a pizza?"
    },
    {
      "situation": "No trabalho, você propõe: 'Podemos discutir isso amanhã?'.",
      "text": "Can we discuss this tomorrow?"
    },
    {
      "situation": "Você está com pressa e diz: 'Preciso ir rápido, estou atrasado'.",
      "text": "I need to hurry, I'm running late"
    },
    {
      "situation": "Na livraria, você pergunta: 'Tem este livro em inglês?'.",
      "text": "Do you have this book in English?"
    },
    {
      "situation": "Você vê alguém caído e pergunta: 'Você está bem? Precisa de ajuda?'.",
      "text": "Are you okay? Do you need help?"
    },
    {
      "situation": "No ônibus, você pergunta: 'Este ônibus vai para o centro?'.",
      "text": "Does this bus go downtown?"
    },
    {
      "situation": "Você recebe uma notícia triste e diz: 'Sinto muito em ouvir isso'.",
      "text": "I'm sorry to hear that"
    },
    {
      "situation": "Na barbearia, você explica: 'Só um pouco nas laterais, por favor'.",
      "text": "Just a little on the sides, please"
    },
    {
      "situation": "Você não concorda e diz: 'Vou ter que discordar nesse ponto'.",
      "text": "I'll have to disagree on that point"
    },
    {
      "situation": "No café, você pede: 'Um café com leite para viagem, por favor'.",
      "text": "A latte to go, please"
    },
    {
      "situation": "Você encontrou algo perdido e pergunta: 'Isto é seu?'.",
      "text": "Is this yours?"
    },
    {
      "situation": "No hotel, você reclama: 'O ar condicionado do meu quarto não funciona'.",
      "text": "The air conditioning in my room isn't working"
    },
    {
      "situation": "Você está aprendendo e diz: 'Ainda estou pegando o jeito disso'.",
      "text": "I'm still getting the hang of this"
    },
    {
      "situation": "Na reunião, você pede: 'Pode falar um pouco mais alto?'.",
      "text": "Could you speak a bit louder?"
    },
    {
      "situation": "Você fez algo errado e admite: 'Foi minha culpa, me desculpe'.",
      "text": "That was my fault, I apologize"
    },
    {
      "situation": "Você encontra alguém pela manhã e diz: 'Bom dia, como você está?'.",
      "text": "Good morning, how are you?"
    },
    {
      "situation": "Alguém pergunta como você está e você responde: 'Estou bem, e você?'.",
      "text": "I'm good, and you?"
    },
    {
      "situation": "Você se despede de alguém e diz: 'Até mais tarde!'.",
      "text": "See you later!"
    },
    {
      "situation": "Você vai dormir e diz para a família: 'Boa noite'.",
      "text": "Good night"
    },
    {
      "situation": "Você precisa de um favor e pergunta: 'Você pode me ajudar com isso?'.",
      "text": "Can you help me with this?"
    },
    {
      "situation": "Você vê alguém com muitas sacolas e oferece: 'Deixa eu te ajudar'.",
      "text": "Let me help you"
    },
    {
      "situation": "Alguém te pede algo que você não pode fazer e você responde: 'Desculpe, não posso agora'.",
      "text": "Sorry, I can't right now"
    },
    {
      "situation": "Você aceita ajuda e diz: 'Isso seria ótimo, obrigado!'.",
      "text": "That would be great, thanks!"
    },
    {
      "situation": "Você concorda completamente e diz: 'Exatamente! É isso mesmo'.",
      "text": "Exactly! That's right"
    },
    {
      "situation": "Você concorda em parte e diz: 'Eu entendo seu ponto, mas...'.",
      "text": "I see your point, but..."
    },
    {
      "situation": "Você discorda educadamente: 'Respeito sua opinião, mas não concordo'.",
      "text": "I respect your opinion, but I disagree"
    },
    {
      "situation": "Você quer mudar de assunto e diz: 'Falando nisso...'.",
      "text": "Speaking of which..."
    },
    {
      "situation": "Você está com sede e diz: 'Eu quero um copo d'água'.",
      "text": "I'd like a glass of water"
    },
    {
      "situation": "Você precisa ir ao banheiro e pergunta: 'Onde fica o banheiro?'.",
      "text": "Where is the bathroom?"
    },
    {
      "situation": "Você está cansado e comenta: 'Preciso descansar um pouco'.",
      "text": "I need to rest for a bit"
    },
    {
      "situation": "Você está com fome e sugere: 'Vamos comer alguma coisa?'.",
      "text": "Shall we get something to eat?"
    },
    {
      "situation": "Você não entendeu e pede: 'Pode falar mais devagar, por favor?'.",
      "text": "Can you speak slower, please?"
    },
    {
      "situation": "Você quer confirmar se entendeu: 'Deixe-me ver se entendi...'.",
      "text": "Let me see if I got this..."
    },
    {
      "situation": "Você precisa que soletrem uma palavra: 'Como se soletra isso?'.",
      "text": "How do you spell that?"
    },
    {
      "situation": "Você não conhece uma palavra e pergunta: 'Como se diz isso em inglês?'.",
      "text": "How do you say this in English?"
    },
    {
      "situation": "Você sugere um programa: 'Que tal irmos ao cinema?'.",
      "text": "How about going to the movies?"
    },
    {
      "situation": "Você pergunta sobre disponibilidade: 'Você está livre amanhã?'.",
      "text": "Are you free tomorrow?"
    },
    {
      "situation": "Você aceita um convite: 'Claro, que horas?'.",
      "text": "Sure, what time?"
    },
    {
      "situation": "Você recusa um convite gentilmente: 'Gostaria, mas já tenho compromisso'.",
      "text": "I'd love to, but I already have plans"
    },
    {
      "situation": "Você precisa de ajuda urgente e grita: 'Socorro!'.",
      "text": "Help!"
    },
    {
      "situation": "Alguém parece passando mal e você pergunta: 'Você está bem?'.",
      "text": "Are you okay?"
    },
    {
      "situation": "Você precisa de um médico e diz: 'Preciso ver um médico'.",
      "text": "I need to see a doctor"
    },
    {
      "situation": "Algo deu errado e você explica: 'Algo aconteceu'.",
      "text": "Something happened"
    },
    {
      "situation": "Você atende o telefone e diz: 'Alô?'.",
      "text": "Hello?"
    },
    {
      "situation": "Você pergunta quem está ligando: 'Quem está falando?'.",
      "text": "Who's speaking?"
    },
    {
      "situation": "Você pede para esperar: 'Pode segurar um momento?'.",
      "text": "Can you hold on a moment?"
    },
    {
      "situation": "A ligação caiu e você liga de volta: 'Estávamos falando e a ligação caiu'.",
      "text": "We were talking and got disconnected"
    },
    {
      "situation": "Você não entendeu uma tarefa e pergunta: 'Pode explicar de novo?'.",
      "text": "Can you explain that again?"
    },
    {
      "situation": "Você precisa de mais tempo: 'Preciso de mais um dia para terminar'.",
      "text": "I need one more day to finish"
    },
    {
      "situation": "Você faz uma pergunta em aula: 'Tenho uma dúvida'.",
      "text": "I have a question"
    },
    {
      "situation": "Você apresenta alguém: 'Deixe-me apresentar meu colega'.",
      "text": "Let me introduce my colleague"
    },
    {
      "situation": "Você pergunta sobre formas de pagamento: 'Aceita cartão de crédito?'.",
      "text": "Do you accept credit cards?"
    },
    {
      "situation": "Você quer saber sobre garantia: 'Tem garantia este produto?'.",
      "text": "Does this product have a warranty?"
    },
    {
      "situation": "Você negocia o preço: 'Faz desconto para pagamento à vista?'.",
      "text": "Do you offer a discount for cash?"
    },
    {
      "situation": "Você devolve um produto: 'Gostaria de devolver isto'.",
      "text": "I'd like to return this"
    },
    {
      "situation": "Você pede para descer no próximo ponto: 'Próxima parada, por favor'.",
      "text": "Next stop, please"
    },
    {
      "situation": "Você pergunta sobre a tarifa: 'Quanto custa a passagem?'.",
      "text": "How much is the fare?"
    },
    {
      "situation": "Você dá direções: 'Vire à esquerda no semáforo'.",
      "text": "Turn left at the traffic light"
    },
    {
      "situation": "Você está perdido e diz: 'Não sei onde estou'.",
      "text": "I don't know where I am"
    },
    {
      "situation": "Você responde a um elogio: 'Obrigado, muito gentil da sua parte'.",
      "text": "Thank you, that's very kind of you"
    },
    {
      "situation": "Você pede desculpas por um atraso: 'Desculpe o atraso, o trânsito estava ruim'.",
      "text": "Sorry I'm late, traffic was bad"
    },
    {
      "situation": "Você faz um brinde: 'À nossa saúde!'.",
      "text": "Cheers! / To our health!"
    },
    {
      "situation": "Você não quer falar sobre algo: 'Prefiro não comentar sobre isso'.",
      "text": "I'd rather not talk about that"
    },
    {
      "situation": "Você está feliz e diz: 'Estou muito contente com isso!'.",
      "text": "I'm really happy about this!"
    },
    {
      "situation": "Você está frustrado: 'Isso está me deixando frustrado'.",
      "text": "This is getting frustrating"
    },
    {
      "situation": "Você está com dúvida: 'Não tenho certeza se é uma boa ideia'.",
      "text": "I'm not sure if it's a good idea"
    },
    {
      "situation": "Você está surpreso: 'Nossa, sério?!'.",
      "text": "Wow, really?!"
    }
  ]


// Vocabulário (com text e translation)
const vocabulary = [
  {
    text: "Actually",
    translation: "Na verdade / De fato"
  },
  {
    text: "However",
    translation: "No entanto / Contudo"
  },
  {
    text: "Therefore",
    translation: "Portanto / Logo"
  },
  {
    text: "Although",
    translation: "Embora / Ainda que"
  },
  {
    text: "Throughout",
    translation: "Por toda parte / Durante"
  },
  {
    text: "Provide",
    translation: "Fornecer / Prover"
  },
  {
    text: "Require",
    translation: "Exigir / Requerer"
  },
  {
    text: "Consider",
    translation: "Considerar"
  },
  {
    text: "Assume",
    translation: "Presumir / Supor"
  },
  {
    text: "Develop",
    translation: "Desenvolver"
  },
  {
    text: "Achieve",
    translation: "Conseguir / Alcançar"
  },
  {
    text: "Avoid",
    translation: "Evitar"
  },
  {
    text: "Occur",
    translation: "Ocorrer / Acontecer"
  },
  {
    text: "Issue",
    translation: "Problema / Questão"
  },
  {
    text: "Opportunity",
    translation: "Oportunidade"
  },
  {
    text: "Knowledge",
    translation: "Conhecimento"
  },
  {
    text: "Behavior",
    translation: "Comportamento"
  },
  {
    text: "Environment",
    translation: "Meio ambiente / Ambiente"
  },
  {
    text: "Schedule",
    translation: "Cronograma / Agenda"
  },
  {
    text: "Deadline",
    translation: "Prazo final"
  },
  {
    text: "Equipment",
    translation: "Equipamento"
  },
  {
    text: "Amount",
    translation: "Quantidade / Montante"
  },
  {
    text: "Increase",
    translation: "Aumentar"
  },
  {
    text: "Decrease",
    translation: "Diminuir / Reduzir"
  },
  {
    text: "Available",
    translation: "Disponível"
  },
  {
    text: "Significant",
    translation: "Significativo / Importante"
  },
  {
    text: "Various",
    translation: "Vários / Diversos"
  },
  {
    text: "According to",
    translation: "De acordo com"
  },
  {
    text: "Due to",
    translation: "Devido a"
  },
  {
    text: "In spite of",
    translation: "Apesar de"
  },
  {
    text: "As well as",
    translation: "Assim como / E também"
  },
  {
    text: "Even though",
    translation: "Mesmo que / Embora"
  },
  {
    text: "Unless",
    translation: "A menos que / A não ser que"
  },
  {
    text: "Whether",
    translation: "Se (condição) / Seja ou não"
  },
  {
    text: "Otherwise",
    translation: "Caso contrário / De outra forma"
  },
  {
    text: "Furthermore",
    translation: "Além disso"
  },
  {
    text: "Moreover",
    translation: "Além do mais"
  },
  {
    text: "Indeed",
    translation: "De fato / Realmente"
  },
  {
    text: "Instead",
    translation: "Em vez disso"
  },
  {
    text: "Besides",
    translation: "Além disso / Fora isso"
  },
  {
    text: "Thus",
    translation: "Assim / Dessa forma"
  },
  {
    text: "Hence",
    translation: "Portanto / Por isso"
  },
  {
    text: "Meanwhile",
    translation: "Enquanto isso"
  },
  {
    text: "Appropriate",
    translation: "Apropriado / Adequado"
  },
  {
    text: "Specific",
    translation: "Específico"
  },
  {
    text: "Previous",
    translation: "Anterior / Prévio"
  },
  {
    text: "Current",
    translation: "Atual / Corrente"
  },
  {
    text: "Similar",
    translation: "Similar / Parecido"
  },
  {
    text: "Certain",
    translation: "Certo / Determinado"
  },
  {
    text: "Several",
    translation: "Vários / Diversos"
  },
  {
    text: "Entire",
    translation: "Inteiro / Completo"
  },
  {
    text: "Recent",
    translation: "Recente"
  },
  {
    text: "According",
    translation: "De acordo"
  },
  {
    text: "Involved",
    translation: "Envolvido / Implicado"
  },
  {
    text: "Effort",
    translation: "Esforço"
  },
  {
    text: "Purpose",
    translation: "Propósito / Finalidade"
  },
  {
    text: "Process",
    translation: "Processo"
  },
  {
    text: "According",
    translation: "De acordo"
  },
  {
    text: "Involved",
    translation: "Envolvido"
  },
  {
    text: "Evidence",
    translation: "Evidência / Prova"
  },
  {
    text: "Ability",
    translation: "Habilidade / Capacidade"
  },
  {
    text: "Decision",
    translation: "Decisão"
  },
  {
    text: "Situation",
    translation: "Situação"
  },
  {
    text: "Experience",
    translation: "Experiência"
  },
  {
    text: "Government",
    translation: "Governo"
  },
  {
    text: "Important",
    translation: "Importante"
  },
  {
    text: "Different",
    translation: "Diferente"
  },
  {
    text: "Necessary",
    translation: "Necessário"
  },
  {
    text: "Possible",
    translation: "Possível"
  },
  {
    text: "Probably",
    translation: "Provavelmente"
  },
  {
    text: "Suddenly",
    translation: "De repente"
  },
  {
    text: "Basically",
    translation: "Basicamente"
  },
  {
    text: "Eventually",
    translation: "Eventualmente / Finalmente"
  },
  {
    text: "Exactly",
    translation: "Exatamente"
  },
  {
    text: "Especially",
    translation: "Especialmente"
  },
  {
    text: "Immediately",
    translation: "Imediatamente"
  },
  {
    text: "Nearly",
    translation: "Quase"
  },
  {
    text: "Recently",
    translation: "Recentemente"
  },
  {
    text: "Simply",
    translation: "Simplesmente"
  },
  {
    text: "Usually",
    translation: "Geralmente / Normalmente"
  },
  {
    text: "Figure out",
    translation: "Descobrir / Resolver"
  },
  {
    text: "Carry out",
    translation: "Realizar / Executar"
  },
  {
    text: "Find out",
    translation: "Descobrir / Saber"
  },
  {
    text: "Point out",
    translation: "Apontar / Indicar"
  },
  {
    text: "Deal with",
    translation: "Lidar com / Tratar de"
  },
  {
    text: "Look into",
    translation: "Investigar / Examinar"
  },
  {
    text: "Get along",
    translation: "Dar-se bem / Concordar"
  },
  {
    text: "Bring up",
    translation: "Levantar (assunto) / Criar"
  },
  {
    text: "Turn out",
    translation: "Acontecer / Revelar-se"
  },
  {
    text: "End up",
    translation: "Acabar por / Terminar"
  },
  {
    text: "Break down",
    translation: "Quebrar / Analisar detalhadamente"
  },
  {
    text: "Take over",
    translation: "Assumir o controle"
  },
  {
    text: "Come up with",
    translation: "Surgir com / Criar"
  },
  {
    text: "Run into",
    translation: "Encontrar por acaso"
  },
  {
    text: "Go through",
    translation: "Passar por / Examinar"
  },
  {
    text: "Keep up with",
    translation: "Manter-se atualizado / Acompanhar"
  },
  {
    text: "Make up",
    translation: "Inventar / Compensar"
  },
  {
    text: "Put off",
    translation: "Adiar / Procrastinar"
  },
  {
    text: "Set up",
    translation: "Configurar / Estabelecer"
  },
  {
    text: "Turn down",
    translation: "Recusar / Rejeitar"
  }
];



// Citações motivacionais
const travelQuotes = [
  "Viajar é a única coisa que você compra que o torna mais rico.",
  "A jornada de mil milhas começa com um único passo.",
  "O mundo é um livro, e quem não viaja lê apenas uma página.",
  "Aprender um novo idioma é como ganhar uma nova alma."
];