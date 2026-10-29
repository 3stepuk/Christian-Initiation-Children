import { Lesson, SummaryQuestion, JourneyStage, BaptismStep, MassPart, PrayerItem, ReadinessCriterion } from '../types';

export const INTRO_NOTE = {
  title: "A note for parents, catechists and priests",
  body: "This catechism is for unbaptised children, ordinarily aged seven to ten, who have reached the use of reason and are asking to become Catholics. It is family-based and adaptable: each lesson contains the teaching, questions, prayer and home action needed by the child and accompanying adult.\n\nThe child is not treated as an infant. He or she is gradually introduced to faith in Jesus Christ, conversion, prayer, Sunday Mass and the life of the parish through the catechumenate. Readiness is discerned personally; it is not produced merely by completing a fixed number of meetings.",
  importantNotice: "The Church ordinarily celebrates Baptism, Confirmation and Eucharist together for an unbaptised child of catechetical age. In this parish pathway Confirmation is prepared for and celebrated later. This arrangement must follow the directions of the parish priest and any permission or policy required by the Diocese of Nottingham.",
  pastoralPrinciples: [
    {
      title: "Conversion before completion",
      description: "The aim is living faith in Christ, not finishing worksheets or reaching a date."
    },
    {
      title: "Family and parish together",
      description: "Parents/carers or mentors accompany the child, while the parish welcomes, prays for and forms the catechumen."
    },
    {
      title: "Truth with tenderness",
      description: "Sin, judgement and salvation are taught clearly, always within the greater truth of God’s merciful love."
    },
    {
      title: "Sacraments are Christ’s work",
      description: "Baptism truly gives new birth; the Eucharist is truly the Body and Blood of Christ, not merely a symbol."
    },
    {
      title: "Individual discernment",
      description: "Age, understanding, prayer, Sunday worship, desire and way of life are considered together."
    }
  ],
  confessionNote: "An unbaptised child cannot receive sacramental Confession before Baptism. Baptism itself forgives original sin and every personal sin committed before Baptism, together with all punishment due to sin. The child is nevertheless taught sorrow, repentance and examination of conscience. After Baptism, the Sacrament of Penance becomes the ordinary means of forgiveness for serious sins committed afterwards."
};

export const LESSONS: Lesson[] = [
  {
    id: 1,
    title: "God Calls Me",
    remember: "God made me out of love and calls me freely to follow Jesus in his Church.",
    explanation: [
      "God made the whole world. He made the sea, the sky, the animals and every human person. He made you, and he loves you.",
      "You are not an accident. You have a special dignity because you are made in God's image and likeness. God made you to know him, love him and serve him in this life, and to be happy with him for ever in heaven.",
      "God knows everything about us. He knows our joys, our worries and even the things that we find difficult to say.",
      "He wants us to live in friendship with him.",
      "Sometimes God invites us through a person who loves us, a story from the Bible, a visit to church or a quiet wish to know Jesus better. We call this invitation God's grace. Grace is God's free gift of his own life and help.",
      "Becoming Catholic is not merely signing a form or finishing lessons. It means beginning a life of faith in Jesus and belonging to his Church. We learn about him, pray, come to Sunday Mass and try to live as he teaches.",
      "Your parents and the parish will help you. But your own response matters too. Jesus wants you to come to him willingly, not because you are frightened or being forced.",
      "Jesus welcomed children and blessed them. He welcomes you now. You can ask him for help, tell him what you are thinking and take your next step with confidence.",
    ],
    talkAboutIt: {
      question: "",
      note: ""
    },
    answers: [
      {
        questionNumber: 1,
        question: "Why did God make us?",
        answer: "To know him, love him and serve him, and to be happy with him for ever in heaven."
      },
      {
        questionNumber: 2,
        question: "What is grace?",
        answer: "God's free gift of his life and help."
      },
      {
        questionNumber: 3,
        question: "Does Jesus call children as well as adults?",
        answer: "Yes. Jesus loves children and calls them to follow him."
      },
      {
        questionNumber: 4,
        question: "Must a person answer God freely?",
        answer: "Yes. God invites us to believe and follow him freely."
      },
      {
        questionNumber: 5,
        question: "Why do I want to become Catholic?",
        answer: "I want to know and follow Jesus Christ and live in his Church."
      },
    ],
    prayer: "Lord Jesus, thank you for knowing me and loving me. Help me to hear your call and follow you freely. Amen.",
    thisWeek: "Make the Sign of the Cross each morning and say, \"Jesus, help me to follow you today.\" For the adult: Welcome questions and uncertainty. Do not treat the child's wish for Baptism as a decision the adult has already made on the child's behalf."
  },
  {
    id: 2,
    title: "The One God: Father, Son and Holy Spirit",
    remember: "There is one God in three divine Persons: Father, Son and Holy Spirit.",
    explanation: [
      "There is only one God. He has always existed. He created everything and keeps everything in existence. God is holy, all-powerful, all-knowing and perfectly good.",
      "God has told us something wonderful about himself: he is the Most Holy Trinity.",
      "There is one God in three divine Persons: the Father, the Son and the Holy Spirit. We do not believe in three gods.",
      "The three divine Persons share the one divine nature. Each is truly and wholly God.",
      "The Father is God. The Son is God. The Holy Spirit is God. Yet there is only one God.",
      "The Father has no beginning. The Son is eternally begotten of the Father, not created. The Holy Spirit proceeds from the Father and the Son. The three Persons are distinct, but they are never separated.",
      "The Father sent his Son, Jesus Christ, into the world to save us. The Son became man without ceasing to be God.",
      "The Holy Spirit helps us believe, love and become holy.",
      "The Trinity is a mystery. This does not mean it is untrue. It means God is greater than our minds can fully understand. God has lovingly revealed this truth to us.",
      "When we make the Sign of the Cross, we say: \"In the name of the Father, and of the Son, and of the Holy Spirit.\"",
      "We say \"name\", not \"names\", because there is only one God.",
      "We worship and adore the Father, the Son and the Holy Spirit: the one God who made us and loves us.",
    ],
    talkAboutIt: {
      question: "",
      note: ""
    },
    answers: [
      {
        questionNumber: 6,
        question: "How many gods are there?",
        answer: "There is only one God."
      },
      {
        questionNumber: 7,
        question: "Who are the three divine Persons?",
        answer: "The Father, the Son and the Holy Spirit."
      },
      {
        questionNumber: 8,
        question: "Is Jesus truly God?",
        answer: "Yes. The Son is truly God, equal to the Father."
      },
      {
        questionNumber: 9,
        question: "Is the Holy Spirit a person or just a force?",
        answer: "The Holy Spirit is the third divine Person, not merely a force."
      },
      {
        questionNumber: 10,
        question: "What is the Most Holy Trinity?",
        answer: "The Father, the Son and the Holy Spirit: three divine Persons in one God."
      },
    ],
    prayer: "Glory be to the Father, and to the Son, and to the Holy Spirit, as it was in the beginning, is now, and ever shall be, world without end. Amen.",
    thisWeek: "Make the Sign of the Cross slowly today and remember that you are praying to the one God."
  },
  {
    id: 3,
    title: "Creation, Sin and the Promise of Salvation",
    remember: "God made creation good. Sin wounded humanity, but God promised a Saviour.",
    explanation: [
      "God created everything from nothing. The world, its beauty and its life are gifts from him. He created angels and human beings and made us to share his friendship.",
      "Our first parents, Adam and Eve, were created in holiness. They could choose to obey God, but they turned away from him through sin. Their first disobedience is called the Fall.",
      "Because of the Fall, human nature was wounded. We are born without the original holiness which God intended.",
      "We call this condition original sin. Original sin is not a naughty thing that a baby has chosen to do.",
      "The Blessed Virgin Mary was preserved from original sin by a special grace of Jesus Christ. We call this the Immaculate Conception.",
      "We also commit personal sins when we knowingly and freely choose something against God's law. Sin damages us and hurts our friendship with God and other people.",
      "But God did not abandon the human family. He promised a Saviour. He prepared his people through covenants, prophets and the history of Israel. The promises of the Old Testament lead us towards Jesus.",
      "Jesus Christ is the Saviour God promised. He came to overcome sin and death and bring us home to the Father.",
      "Baptism will give you a wonderful new beginning. It washes away original sin and every personal sin committed before Baptism. God gives you sanctifying grace, so that you can share his life.",
      "Our story does not end with the Fall. It moves towards Christ, mercy and new life.",
    ],
    talkAboutIt: {
      question: "",
      note: ""
    },
    answers: [
      {
        questionNumber: 11,
        question: "Who made the world?",
        answer: "God made everything from nothing, and his creation is good."
      },
      {
        questionNumber: 12,
        question: "What is original sin?",
        answer: "The fallen condition in which we are born without original holiness."
      },
      {
        questionNumber: 13,
        question: "Is original sin a bad choice made by a baby?",
        answer: "No. It is a condition we inherit, not a personal choice by a baby."
      },
      {
        questionNumber: 14,
        question: "Did God abandon us after the Fall?",
        answer: "No. God promised and sent Jesus Christ our Saviour."
      },
      {
        questionNumber: 15,
        question: "Who saves us from sin?",
        answer: "Jesus Christ saves us from sin and brings us back to the Father."
      },
    ],
    prayer: "Merciful Father, thank you for making the world good. Thank you for sending Jesus to rescue us from sin. Help me to choose what is right. Amen.",
    thisWeek: "With an adult, read or listen to Genesis 3:14-15, and thank God for his promise of a Saviour. For the adult: Keep original sin distinct from personal blame. Never suggest that a child is guilty of wrongdoing done to them."
  },
  {
    id: 4,
    title: "Jesus Christ Our Saviour",
    remember: "Jesus is the eternal Son of God made man, truly God and truly human.",
    explanation: [
      "Long ago, God promised that he would send a Saviour. That Saviour is Jesus Christ.",
      "Jesus is the eternal Son of God. He has always existed with the Father and the Holy Spirit. When the time came, the Son of God became man in the womb of the Blessed Virgin Mary, by the power of the Holy Spirit.",
      "Mary is truly the Mother of God because the child she bore is Jesus, who is a divine Person. This does not mean Mary made God or existed before him.",
      "Jesus is one divine Person with two complete natures. He is truly God and truly human. He is not half of each. His divinity did not turn into humanity; he took a real human nature without ceasing to be God.",
      "Jesus was born in Bethlehem. He grew up in a family and lived a real human life. He knew hunger, tiredness and sadness, but he never sinned.",
      "When Jesus grew older, he taught the truth about God. He welcomed children, forgave sinners, healed the sick and performed miracles. These signs showed his divine power and his mercy.",
      "Jesus said that he is the Way, the Truth and the Life. He came not merely to show us how to behave, but to save us and lead us to the Father.",
      "When we pray to Jesus, we are speaking to someone who knows and loves us. We can ask for help, thank him, tell him our worries and follow his teaching.",
      "The One who calls you into the Church is the same Jesus who gave himself for you.",
    ],
    talkAboutIt: {
      question: "",
      note: ""
    },
    answers: [
      {
        questionNumber: 16,
        question: "Is Jesus only a good teacher?",
        answer: "No. He is the eternal Son of God made man."
      },
      {
        questionNumber: 17,
        question: "Is Jesus truly human?",
        answer: "Yes. He has a real human body and soul."
      },
      {
        questionNumber: 18,
        question: "Why is Mary called Mother of God?",
        answer: "Because her Son, Jesus Christ, is truly God."
      },
      {
        questionNumber: 19,
        question: "Why did Jesus come into the world?",
        answer: "To save us from sin and bring us into friendship with God."
      },
      {
        questionNumber: 20,
        question: "Who is Jesus Christ?",
        answer: "Jesus Christ is the eternal Son of God made man, true God and true man."
      },
    ],
    prayer: "Lord Jesus Christ, Son of the living God, thank you for becoming man and loving us. Help me to know you and follow you. Amen.",
    thisWeek: "Choose one Gospel story about Jesus. Tell an adult what it shows about his love and power."
  },
  {
    id: 5,
    title: "The Paschal Mystery",
    remember: "Jesus saved us through his suffering, death, Resurrection and Ascension.",
    explanation: [
      "Jesus came to save us, and he loved us all the way to the Cross.",
      "On the night before he died, he celebrated the Last Supper with his Apostles. He gave them the Eucharist and prepared them for his sacrifice.",
      "On Good Friday, Jesus freely offered himself to the Father in perfect love and obedience. He really suffered. He really died. His body was laid in a tomb.",
      "His death was not a defeat. He gave his life to save us from sin. No one else could do what Jesus, our divine Saviour, has done for us.",
      "On the third day, Easter Sunday, Jesus rose bodily from the dead. His tomb was empty. His Apostles met him alive. He showed them his wounds, spoke with them and ate with them.",
      "The Resurrection is not just a picture of hope. It really happened. Jesus did not simply return to ordinary life like someone recovering from an illness. He rose in a glorified body and will never die again.",
      "Forty days later, Jesus ascended into heaven. He lives and reigns with the Father and the Holy Spirit. He has not abandoned his Church.",
      "One day Jesus will come again in glory to judge the living and the dead. He calls us to remain close to him and look forward to eternal life.",
      "We call Jesus' suffering, death, Resurrection and Ascension the Paschal Mystery. 'Paschal' reminds us of the Passover: God saving his people.",
      "When you see the Cross, remember both Jesus' sacrifice and his victory. The risen Jesus is alive, and he calls you to share his life.",
    ],
    talkAboutIt: {
      question: "",
      note: ""
    },
    answers: [
      {
        questionNumber: 21,
        question: "Why did Jesus die on the Cross?",
        answer: "He freely gave his life to save us from sin."
      },
      {
        questionNumber: 22,
        question: "Did Jesus really rise bodily?",
        answer: "Yes. He rose from the dead on the third day in glory."
      },
      {
        questionNumber: 23,
        question: "Will Jesus die again?",
        answer: "No. The risen Lord lives for ever."
      },
      {
        questionNumber: 24,
        question: "What happened at the Ascension?",
        answer: "Jesus ascended into heaven and reigns in glory."
      },
      {
        questionNumber: 25,
        question: "What is the Paschal Mystery?",
        answer: "The saving suffering, death, Resurrection and Ascension of Jesus Christ."
      },
    ],
    prayer: "We adore you, O Christ, and we bless you, because by your holy Cross you have redeemed the world. Amen.",
    thisWeek: "Look at a crucifix, then make a short prayer: \"Jesus, thank you for dying and rising for us.\""
  },
  {
    id: 6,
    title: "The Holy Spirit and the Catholic Church",
    remember: "Jesus founded the Catholic Church, and the Holy Spirit gives her life.",
    explanation: [
      "After his Resurrection, Jesus promised the Apostles that the Holy Spirit would come to them.",
      "At Pentecost, the Holy Spirit filled the Apostles with courage. They began proclaiming that Jesus had risen and that everyone was called to believe in him.",
      "The Holy Spirit is not just a good feeling. He is the third Person of the Most Holy Trinity, truly God. He helps us pray, believe, recognise the truth and grow in holiness.",
      "Jesus founded the Catholic Church. She is the People of God, the Body of Christ and the Temple of the Holy Spirit. She includes real people, with their joys and struggles, and she belongs to Jesus.",
      "We profess that the Church is one, holy, catholic and apostolic. She is one in the faith and sacraments given by Christ. She is holy because Christ is holy and gives grace, even though her members can sin. 'Catholic' means universal, sent to every nation. She is apostolic because she is founded upon the Apostles and continues their teaching and ministry.",
      "The Pope is the Bishop of Rome and successor of Saint Peter. The bishops are successors of the Apostles. With priests and deacons, they serve the Church in different ways.",
      "Before your Baptism, the parish already welcomes and prays for you. When you are formally accepted as a catechumen, you have a special relationship with the Church. At Baptism, you become a member of Christ and his Church through the sacrament.",
      "The Church is not just somewhere to visit on a special day. She is the family in which we worship, learn, serve and grow close to Jesus.",
    ],
    talkAboutIt: {
      question: "",
      note: ""
    },
    answers: [
      {
        questionNumber: 26,
        question: "Who is the Holy Spirit?",
        answer: "The third divine Person of the Most Holy Trinity."
      },
      {
        questionNumber: 27,
        question: "Who founded the Catholic Church?",
        answer: "Jesus Christ founded the Catholic Church."
      },
      {
        questionNumber: 28,
        question: "What are the four marks of the Church?",
        answer: "One, holy, catholic and apostolic."
      },
      {
        questionNumber: 29,
        question: "Who is the Pope?",
        answer: "The Bishop of Rome, successor of Saint Peter."
      },
      {
        questionNumber: 30,
        question: "Who gives life to the Church?",
        answer: "The Holy Spirit, whom Jesus sends to guide and sanctify his Church."
      },
    ],
    prayer: "Come, Holy Spirit, fill my heart with your love. Help me to believe in Jesus and grow in his Church. Amen.",
    thisWeek: "At Sunday Mass, pray for the Pope, the Bishop of Nottingham, your parish priest and everyone preparing for Baptism."
  },
  {
    id: 7,
    title: "Faith, the Creed and Sacred Tradition",
    remember: "Catholic faith receives what God has revealed in Scripture and Sacred Tradition.",
    explanation: [
      "Faith is a gift from God. Through faith we believe him and receive the truth he has revealed. Faith is not making up what we wish were true. It is trusting God because he is Truth itself.",
      "God has spoken to his people and shown us his saving plan. The fullest revelation of God is Jesus Christ, his Son.",
      "The Holy Bible is Sacred Scripture. Its books were written by human authors under the inspiration of the Holy Spirit. Through them God truly speaks to us.",
      "The Apostles also handed on Christ's teaching by their preaching, worship and way of life. This living handing-on is called Sacred Tradition.",
      "Scripture and Sacred Tradition belong together. They form one sacred deposit of faith entrusted to the Church.",
      "The Pope and the bishops in communion with him serve this deposit through the Church's teaching office, called the Magisterium.",
      "When we become Catholics, we do not invent our own version of Jesus' teaching. We learn what he has given the Church and seek to follow it.",
      "The Creed is a short profession of the truths we believe. 'Creed' comes from a word meaning 'I believe'. It speaks about the Father, the Son, the Holy Spirit, the Church, forgiveness, resurrection and eternal life.",
      "At Baptism, you will be invited to reject sin and profess the Church's faith. An adult will help you understand the questions and answer freely.",
      "Faith also changes the way we live. If we truly trust Jesus, we learn to obey his commandments and love other people. Faith and charity belong together.",
    ],
    talkAboutIt: {
      question: "",
      note: ""
    },
    answers: [
      {
        questionNumber: 31,
        question: "What is faith?",
        answer: "The gift by which we believe God and what he has revealed."
      },
      {
        questionNumber: 32,
        question: "What is Sacred Scripture?",
        answer: "The inspired books of the Holy Bible."
      },
      {
        questionNumber: 33,
        question: "What is Sacred Tradition?",
        answer: "The living handing-on of the Apostles' teaching in the Church."
      },
      {
        questionNumber: 34,
        question: "What is the Creed?",
        answer: "A short profession of the Catholic faith."
      },
      {
        questionNumber: 35,
        question: "Where does the Church receive God's revealed teaching?",
        answer: "From Sacred Scripture and Sacred Tradition, one deposit of faith."
      },
    ],
    prayer: "Lord Jesus, I believe in you. Help me to trust your truth, listen to your Church and live with faith and love. Amen.",
    thisWeek: "Begin learning the Apostles' Creed with an adult. Ask about one word you do not understand. For the adult: Do not turn profession of faith into an oral exam. The child should receive the meaning, not merely repeat a formula."
  },
  {
    id: 8,
    title: "Prayer and the Christian Life",
    remember: "Prayer keeps us close to God, and the Christian life grows through worship and love.",
    explanation: [
      "Prayer is raising our minds and hearts to God. We speak to him because he loves us, hears us and wants us to know him.",
      "We can pray at any time. We can adore God, thank him, say sorry and ask for help. We can also listen quietly, read the Bible and think about what God is teaching us.",
      "Jesus gave us a very special prayer: the Our Father. He teaches us to call God our Father, to seek his will, to ask for what we need, and to forgive others.",
      "Catholics worship and adore God alone: the Father, the Son and the Holy Spirit. We honour Our Lady and the saints because they belong to God. We can ask them to pray for us, just as we ask other Christians to pray for us.",
      "We do not worship them.",
      "Sunday is the Lord's Day, the day Jesus rose from the dead. Catholics gather at Mass to worship the Father through Christ, hear the Scriptures, share in Christ's sacrifice and receive the Eucharist when they are properly prepared.",
      "You can come to Sunday Mass with your family while you are preparing for Baptism. You can pray and listen with the parish. You do not receive Holy Communion until you have been baptised and are properly prepared.",
      "The Christian life also happens outside church. We follow Jesus at home, at school and with friends. We tell the truth, keep our promises, forgive, help others and ask God's grace when a good choice is difficult.",
      "A virtue is a good habit which grows through repeated good choices with God's help. Holiness often grows through small faithful acts every day.",
    ],
    talkAboutIt: {
      question: "",
      note: ""
    },
    answers: [
      {
        questionNumber: 36,
        question: "What is prayer?",
        answer: "Raising our minds and hearts to God."
      },
      {
        questionNumber: 37,
        question: "Which prayer did Jesus teach us?",
        answer: "The Our Father."
      },
      {
        questionNumber: 38,
        question: "Do Catholics worship Mary and the saints?",
        answer: "No. We worship God alone and ask the saints to pray for us."
      },
      {
        questionNumber: 39,
        question: "May an unbaptised child come to Sunday Mass?",
        answer: "Yes. The child joins in prayer but waits until Baptism to receive Holy Communion."
      },
      {
        questionNumber: 40,
        question: "How can I grow in friendship with Jesus?",
        answer: "Through prayer, Sunday Mass, good choices and love of others."
      },
    ],
    prayer: "Our Father, who art in heaven, hallowed be thy name; thy kingdom come; thy will be done on earth as it is in heaven. Give us this day our daily bread; and forgive us our trespasses, as we forgive those who trespass against us; and lead us not into temptation, but deliver us from evil. Amen.",
    thisWeek: "Pray the full Our Father with an adult each day and come to Sunday Mass together."
  },
  {
    id: 9,
    title: "The Commandments, Sin and Conversion",
    remember: "God teaches us to love, and his grace helps us turn away from sin.",
    explanation: [
      "God created us for love. His commandments show us how to love him and other people.",
      "The Ten Commandments teach us to worship God, respect our families, protect life, tell the truth, respect what belongs to others and be faithful and pure. Jesus gathered the commandments into two great commands: love God with all your heart, and love your neighbour as yourself.",
      "Jesus also taught the Beatitudes. They show us the happiness of the Kingdom of God: the way of humility, mercy, purity of heart and peace.",
      "Sometimes we choose what is wrong. A personal sin can be something we think, say, do or deliberately fail to do when we know a good action is our duty.",
      "An accident is not the same as a freely chosen sin. A temptation or unwanted thought is not already a sin. A person sins when they knowingly and freely consent to something wrong.",
      "Some sins are venial. They wound our friendship with God. Mortal sin destroys charity and sanctifying grace. For a sin to be mortal, all three things must be present: grave matter, full knowledge and deliberate consent. We should take sin seriously without becoming frightened or scrupulous.",
      "Conversion means turning away from sin and returning to God. It begins with God's grace. We recognise the truth, feel sincere sorrow, ask for mercy and try to repair harm where we can.",
      "Because you are not yet baptised, you do not go to sacramental Confession. You can pray, repent and learn to make good choices. At Baptism, Christ will forgive original sin and every personal sin committed before Baptism.",
      "Nothing that someone does to hurt or frighten you without your free choice is your sin. You may always tell a trusted safe adult outside a sacrament when you need protection or help.",
    ],
    talkAboutIt: {
      question: "",
      note: ""
    },
    answers: [
      {
        questionNumber: 41,
        question: "Why did God give the commandments?",
        answer: "To teach us to love God and our neighbour."
      },
      {
        questionNumber: 42,
        question: "Is being tempted the same as sinning?",
        answer: "No. Temptation is not a sin unless we freely choose what is wrong."
      },
      {
        questionNumber: 43,
        question: "What is required for mortal sin?",
        answer: "Grave matter, full knowledge and deliberate consent together."
      },
      {
        questionNumber: 44,
        question: "How are sins committed before Baptism forgiven?",
        answer: "Baptism forgives original sin and every earlier personal sin."
      },
      {
        questionNumber: 45,
        question: "What is conversion?",
        answer: "Turning away from sin and turning towards God with his grace."
      },
    ],
    prayer: "O my God, because you are so good, I am very sorry that I have sinned against you, and by the help of your grace I will not sin again. Amen.",
    thisWeek: "Using an invented example, talk about one way a person can tell the truth, say sorry and put things right. For the adult: Use invented examples only. Never ask a child to list personal sins to a parent, mentor or group. If a child reports harm, follow safeguarding procedures."
  },
  {
    id: 10,
    title: "The Journey of a Catechumen",
    remember: "Becoming Catholic is a journey of faith, prayer, conversion and welcome into the Church.",
    explanation: [
      "When someone who is not baptised begins preparing to become Catholic, the Church welcomes that person on a journey of faith.",
      "The journey often begins with questions. You may want to know more about Jesus, the Mass, Baptism or the saints. Your family and parish can listen and help.",
      "When the Church formally accepts you for preparation, you become a catechumen. In the Rite of Acceptance, you are welcomed, and the Sign of the Cross is made as a sign that you belong to Christ's care and are learning to follow him.",
      "The catechumenate is not simply a course. It is an apprenticeship in Christian life. An apprentice learns by listening, practising and growing. You learn Catholic teaching, begin daily prayer, take part in Sunday worship, make good choices, practise charity and come to know the parish.",
      "Parents, godparents, mentors and parishioners help. But you are more than someone being prepared by adults.",
      "You have your own growing faith and your own freely expressed desire for Baptism.",
      "When the child and the Church are ready, the final preparation becomes more focused on prayer, repentance and trust. There may be special prayers and rites according to the approved liturgical book.",
      "The sacraments of Christian initiation are Baptism, Confirmation and the Eucharist. For an unbaptised child of catechetical age, the Church ordinarily celebrates all three together. Your parish priest will explain what is arranged for you and will follow the Church's law and diocesan directions.",
      "After receiving the sacraments, formation continues. We call this mystagogy: discovering more deeply how to live from the mysteries we have received.",
      "You are not working towards a certificate. You are growing in friendship with Jesus.",
    ],
    talkAboutIt: {
      question: "",
      note: ""
    },
    answers: [
      {
        questionNumber: 46,
        question: "What is a catechumen?",
        answer: "An unbaptised person formally welcomed by the Church for preparation for Baptism."
      },
      {
        questionNumber: 47,
        question: "Is the catechumenate only a course?",
        answer: "No. It is a journey of learning, praying and living as a disciple."
      },
      {
        questionNumber: 48,
        question: "Who helps me on this journey?",
        answer: "My family, godparent, parish community and priest."
      },
      {
        questionNumber: 49,
        question: "Does preparation finish with the sacraments?",
        answer: "No. We keep growing in faith afterwards."
      },
      {
        questionNumber: 50,
        question: "What is the journey of a catechumen?",
        answer: "Learning to follow Jesus in faith and preparing to receive the sacraments."
      },
    ],
    prayer: "Lord Jesus, walk with me on this journey. Help me to learn your truth, pray with your Church and grow in love. Amen.",
    thisWeek: "Ask an adult to show you the baptismal font, and pray for everyone preparing to become Catholic. For the adult: Discernment is personal, not the automatic result of sixteen completed conversations. Confirm liturgical arrangements, especially Confirmation, with the parish priest."
  },
  {
    id: 11,
    title: "Holy Baptism",
    remember: "Baptism forgives every earlier sin, gives new life in Christ and makes us his children.",
    explanation: [
      "Before Jesus ascended into heaven, he told the Apostles to make disciples of all nations and baptise them in the name of the Father, and of the Son, and of the Holy Spirit.",
      "Baptism is a sacrament instituted by Jesus Christ. A sacrament is an effective sign of grace, given by Christ and entrusted to his Church. God really acts through it.",
      "In Baptism, the priest or deacon ordinarily pours water over the person or immerses them in water while saying the words Jesus gave his Church: \"I baptise you in the name of the Father, and of the Son, and of the Holy Spirit.\"",
      "We can see and feel the water. We can hear the words. What God gives is even more wonderful than what our eyes can see.",
      "Baptism forgives original sin and every personal sin committed before it, together with all punishment due to those sins. It makes us newly born through water and the Holy Spirit.",
      "God gives sanctifying grace: a real sharing in his divine life. We become adopted children of the Father, members of Jesus Christ and members of the Church. Baptism opens the life of the other sacraments.",
      "Baptism also leaves a permanent spiritual mark, called a sacramental character. It cannot be removed. That is why Baptism is never repeated.",
      "Before you are baptised, you can pray, believe and repent, but you do not receive the Sacrament of Confession.",
      "You need not confess earlier sins to a priest in preparation for Baptism, because Baptism itself forgives them.",
      "After Baptism you will still need to pray, grow and make good choices. God will be with you through his grace.",
      "Baptism is the beginning of a lifelong friendship.",
    ],
    talkAboutIt: {
      question: "",
      note: ""
    },
    answers: [
      {
        questionNumber: 51,
        question: "Who gave us the sacrament of Baptism?",
        answer: "Jesus Christ."
      },
      {
        questionNumber: 52,
        question: "What is used in Baptism?",
        answer: "Real water and the words naming the Father, Son and Holy Spirit."
      },
      {
        questionNumber: 53,
        question: "What sins does Baptism forgive?",
        answer: "Original sin and every personal sin committed before Baptism."
      },
      {
        questionNumber: 54,
        question: "Can someone be baptised again?",
        answer: "No. Baptism leaves a permanent spiritual character."
      },
      {
        questionNumber: 55,
        question: "What does Baptism give me?",
        answer: "Forgiveness of sins, new life in Christ and membership in his Church."
      },
    ],
    prayer: "Heavenly Father, thank you for calling me to the waters of Baptism. Prepare my heart to receive the new life of your grace. Amen.",
    thisWeek: "At church, stand quietly near the font with an adult and thank Jesus for the new life of Baptism. For the adult: Never ask an unbaptised child to make First Confession before Baptism. Also confirm whether any previous Baptism may have taken place; the parish must investigate uncertainty."
  },
  {
    id: 12,
    title: "The Signs and Celebration of Baptism",
    remember: "The signs of Baptism show that Christ cleanses us, claims us and gives us his light.",
    explanation: [
      "The day of your Baptism is a day of great joy. The Church welcomes you, prays for you and celebrates what Jesus is doing.",
      "The approved rite includes several signs and prayers. The exact order will be guided by the priest and depends upon the celebration authorised for you.",
      "You may be called by name and welcomed with the Sign of the Cross. The Cross reminds us that Jesus has saved us and calls us to follow him.",
      "We hear the Word of God in Scripture. We pray with the Church and ask for the help of the saints. There are prayers asking God to protect us from evil.",
      "The water is blessed. Before Baptism, you reject Satan and sin and profess the faith of the Catholic Church. The priest will help you understand and answer these questions.",
      "Then comes Baptism itself. Water is poured or the person is immersed, and the minister uses the words of the Most Holy Trinity. At that moment Jesus truly gives the grace of Baptism.",
      "A white garment is a sign of the new dignity of a person who has put on Christ. A candle, lit from the Paschal candle, reminds us that Jesus is the Light of the world and that we must keep faith alive.",
      "Sacred chrism is a holy oil used in the Church's sacramental celebrations. The rites involving chrism depend upon whether Confirmation follows Baptism immediately or, for a lawful reason, is deferred. Your priest will explain the difference. Confirmation itself is a distinct sacrament.",
      "No one needs to act a part perfectly. The Church's prayers and signs are there to help us receive what Christ gives.",
      "Your adult companions and priest will guide you.",
    ],
    talkAboutIt: {
      question: "",
      note: ""
    },
    answers: [
      {
        questionNumber: 56,
        question: "What does the Sign of the Cross show?",
        answer: "That we belong to Jesus and are called to follow him."
      },
      {
        questionNumber: 57,
        question: "What happens when the baptismal water and words are used?",
        answer: "Christ gives the grace of Baptism."
      },
      {
        questionNumber: 58,
        question: "What does the white garment mean?",
        answer: "That the newly baptised has put on Christ."
      },
      {
        questionNumber: 59,
        question: "What does the candle remind us of?",
        answer: "Jesus, the Light of the world, and the faith we must keep alive."
      },
      {
        questionNumber: 60,
        question: "What happens at the heart of Baptism?",
        answer: "Jesus gives new life through water and the words of the Trinity."
      },
    ],
    prayer: "Jesus, Light of the world, shine in my heart. Help me to reject sin, believe in you and keep your light alive. Amen.",
    thisWeek: "With an adult, practise answering a simple question: \"Do you believe in God?\" - \"I do.\" Do not imitate an actual Baptism. For the adult: The child may practise responses but should never rehearse sacramental Baptism using water and the baptismal formula. The priest decides the lawful rites."
  },
  {
    id: 13,
    title: "The Holy Eucharist and the Real Presence",
    remember: "In the Holy Eucharist, Jesus is truly present: Body, Blood, Soul and Divinity.",
    explanation: [
      "On the night before he died, Jesus gathered with his Apostles for the Last Supper.",
      "He took bread, blessed it and gave it to them as his Body. He gave them the chalice of his Blood and told them to do this in remembrance of him. Jesus entrusted the Holy Eucharist to his Church.",
      "At Mass, the priest acts in the person of Christ. Through Christ's words and the power of the Holy Spirit, the bread and wine become the Body and Blood of Jesus.",
      "This change is called transubstantiation. That is a long word, but its meaning is clear. What the bread and wine really are changes completely. The appearances - what we see, feel and taste - remain the same.",
      "Jesus does not hide inside ordinary bread. After the consecration, the substance of bread is no longer there. It has truly become the Body of Christ. The same is true of the wine becoming his Blood.",
      "Jesus is present whole and entire: Body, Blood, Soul and Divinity. The whole risen Christ is present under either appearance and in every part of the Sacred Host. He is not divided or hurt when the Host is broken.",
      "We call this the Real Presence. It does not depend on how strongly we feel or whether we see something unusual.",
      "Jesus is faithful to his word.",
      "The consecrated Hosts are kept in the tabernacle, so that the sick may receive Communion and the faithful may adore Jesus. We bow or genuflect reverently before the Blessed Sacrament as we are able.",
      "You may pray at Mass and before the tabernacle while preparing for Baptism. You will receive Holy Communion once you have been baptised and are properly prepared.",
    ],
    talkAboutIt: {
      question: "",
      note: ""
    },
    answers: [
      {
        questionNumber: 61,
        question: "When did Jesus institute the Eucharist?",
        answer: "At the Last Supper."
      },
      {
        questionNumber: 62,
        question: "Is the Eucharist only a reminder of Jesus?",
        answer: "No. It is truly Jesus himself."
      },
      {
        questionNumber: 63,
        question: "What does transubstantiation mean?",
        answer: "The bread and wine become Christ's Body and Blood while their appearances remain."
      },
      {
        questionNumber: 64,
        question: "Who is present in the Sacred Host?",
        answer: "The whole Jesus: Body, Blood, Soul and Divinity."
      },
      {
        questionNumber: 65,
        question: "Who is present in the Holy Eucharist?",
        answer: "Jesus Christ is truly present: Body, Blood, Soul and Divinity."
      },
    ],
    prayer: "Lord Jesus, I believe that you are truly present in the Blessed Sacrament. Help me to adore you, trust your word and love you more. Amen.",
    thisWeek: "When you come to church, ask an adult to show you the tabernacle and sanctuary lamp. Pray quietly: \"My Lord and my God.\" For the adult: Avoid demonstrations with hidden objects or disguised food; they can give the wrong idea about transubstantiation."
  },
  {
    id: 14,
    title: "The Holy Sacrifice of the Mass",
    remember: "At Mass, Jesus makes present his one sacrifice on the Cross and gives himself to us.",
    explanation: [
      "On Good Friday, Jesus freely offered his life to the Father to save us. His offering was perfect because he is the sinless Son of God made man.",
      "Jesus died once. He rose from the dead and lives for ever. He never needs to die again.",
      "At every Mass, the one sacrifice Jesus made on the Cross is made present sacramentally. He does not suffer or die again. Through the priest, Christ himself offers his one saving sacrifice to the Father.",
      "That is why the Mass is more than a gathering and more than a meal remembering Jesus. It is the Holy Sacrifice of the Mass. It is also the sacred banquet in which Christ feeds his people with his own Body and Blood.",
      "There are two main parts of Mass: the Liturgy of the Word and the Liturgy of the Eucharist. They belong together in one celebration.",
      "In the Liturgy of the Word, we hear the Bible, listen to the Gospel and homily, profess our faith and pray for others.",
      "In the Liturgy of the Eucharist, bread and wine are brought to the altar. The priest leads the Eucharistic Prayer.",
      "The Church gives thanks; the one sacrifice of Christ is made present; and the gifts become his Body and Blood.",
      "We prepare for Holy Communion and receive when properly disposed.",
      "The Church offers the Mass in adoration, thanksgiving, reparation for sin and petition for our needs. We can bring our joys, difficulties and good intentions, and join them to Jesus' offering.",
      "Even before Baptism, you can participate by listening, praying, singing and being still. After Baptism and proper preparation, you will be able to receive Holy Communion.",
    ],
    talkAboutIt: {
      question: "",
      note: ""
    },
    answers: [
      {
        questionNumber: 66,
        question: "Does Jesus die again at Mass?",
        answer: "No. His one sacrifice is made present sacramentally."
      },
      {
        questionNumber: 67,
        question: "What are the two main parts of Mass?",
        answer: "The Liturgy of the Word and the Liturgy of the Eucharist."
      },
      {
        questionNumber: 68,
        question: "Who offers the sacrifice at Mass?",
        answer: "Jesus Christ, through the ministry of the priest."
      },
      {
        questionNumber: 69,
        question: "How can we take part?",
        answer: "By listening, praying, answering, singing and offering ourselves with Jesus."
      },
      {
        questionNumber: 70,
        question: "What is the Mass?",
        answer: "The Holy Sacrifice in which Jesus makes present his one offering on the Cross."
      },
    ],
    prayer: "Heavenly Father, thank you for Jesus. Help me to pray at Mass and offer you my whole life with your Son. Amen.",
    thisWeek: "At the next Sunday Mass, notice when the Gospel is read and when the Eucharistic Prayer begins."
  },
  {
    id: 15,
    title: "Receiving First Holy Communion",
    remember: "We receive Jesus with faith, reverence, thanksgiving and a heart prepared by grace.",
    explanation: [
      "First Holy Communion is a wonderful gift. You will receive the living Jesus Christ under the appearance of bread.",
      "Because you are preparing as an unbaptised child, your situation is different from that of a child who was baptised as a baby.",
      "Baptism itself forgives every sin committed before it. You do not make First Confession before Baptism. When Baptism and Holy Communion are celebrated in the same initiation, you come to Communion newly cleansed by Christ.",
      "If there is a substantial interval after Baptism, and you knowingly commit a mortal sin, you must receive sacramental absolution before receiving Holy Communion. If you are uncertain, speak privately with the priest.",
      "He will help.",
      "We also prepare through prayer, Sunday Mass and the Eucharistic fast. Normally we have no food or drink for at least one hour before receiving Communion; water and medicine are allowed. An adult will help with the time and any medical needs.",
      "When the time comes, walk forward calmly. The minister raises the Sacred Host and says, \"The Body of Christ.\"",
      "You answer, \"Amen.\" Your Amen means you believe that this is truly Jesus.",
      "In England and Wales we normally receive standing, although kneeling is also permitted. If standing, make a reverent bow. You may receive on the tongue or in the hand according to the Church's discipline and the guidance given at the parish.",
      "If receiving in the hand, make a steady place with one hand resting on the other, then place the Host in your mouth immediately before moving away. Never put the Host in a pocket or take it back to your seat uneaten.",
      "Return quietly and thank Jesus. You do not need complicated words. He loves you and gives himself to you.",
    ],
    talkAboutIt: {
      question: "",
      note: ""
    },
    answers: [
      {
        questionNumber: 71,
        question: "Who do I receive in Holy Communion?",
        answer: "Jesus Christ, Body, Blood, Soul and Divinity."
      },
      {
        questionNumber: 72,
        question: "Must I go to Confession before my Baptism?",
        answer: "No. Baptism forgives all sins committed before it."
      },
      {
        questionNumber: 73,
        question: "What do I answer when the minister says \"The Body of Christ\"?",
        answer: "Amen."
      },
      {
        questionNumber: 74,
        question: "What may I have during the one-hour fast?",
        answer: "Water and medicine."
      },
      {
        questionNumber: 75,
        question: "How should I receive Holy Communion?",
        answer: "With faith, a heart in God's grace, reverence and thanksgiving."
      },
    ],
    prayer: "Come, Lord Jesus. Make my heart ready to receive you with love. Help me to welcome you and remain close to you. Amen.",
    thisWeek: "Practise walking forward, bowing if standing, answering \"Amen\" and returning quietly. Use no food and do not pretend to consecrate anything. For the adult: Discuss sensory, swallowing, allergy or medical concerns with the priest before the celebration. If Confirmation is to be conferred at initiation, the approved sequence of rites will be explained."
  },
  {
    id: 16,
    title: "Living as a New Catholic",
    remember: "Baptism begins a lifelong Catholic life of prayer, worship, repentance and charity.",
    explanation: [
      "After Baptism you will be a newly baptised Catholic, sometimes called a neophyte. That is a special word for a person beginning new life in Christ.",
      "You will belong to Jesus and his Church. The grace of Baptism is a wonderful beginning, but your friendship with God is meant to grow.",
      "You will keep coming to Sunday Mass, praying each day, learning from the Bible and receiving Holy Communion when properly prepared. You can help other people, be kind at home and school, tell the truth and forgive.",
      "You will still be able to make wrong choices. When you sin after Baptism, do not give up. Ask God's forgiveness and try to begin again. The Sacrament of Penance is Christ's gift for forgiveness of sins committed after Baptism.",
      "Mortal sin must be confessed in the sacrament before Holy Communion; regular confession of venial sins also helps us grow in holiness.",
      "The Holy Spirit will help you. The saints can pray for you. Your family, godparent and parish will be there as companions.",
      "Baptism, Confirmation and Eucharist are the three sacraments of Christian initiation. Unbaptised children of catechetical age ordinarily receive all three in their initiation. If Confirmation has been lawfully deferred in your particular circumstances, you will continue preparing for it with the priest and parish. This is a matter for the Church's authorised pastoral and liturgical decisions.",
      "After the initiation celebration comes a time of discovering how to live what you have received. The Church calls this mystagogy.",
      "Do not imagine that you must become perfect overnight. Grow a little each day: prayer, Sunday worship, Confession when needed, charity and trust in Jesus.",
      "Your whole life is an invitation to become a saint through God's grace. Jesus will remain faithful as you follow him.",
    ],
    talkAboutIt: {
      question: "",
      note: ""
    },
    answers: [
      {
        questionNumber: 76,
        question: "Does Christian life end when I receive the sacraments?",
        answer: "No. They begin and nourish a lifelong friendship with Jesus."
      },
      {
        questionNumber: 77,
        question: "What helps a Catholic grow?",
        answer: "Sunday Mass, prayer, Scripture, Confession and charity."
      },
      {
        questionNumber: 78,
        question: "Which sacrament forgives sins committed after Baptism?",
        answer: "The Sacrament of Penance and Reconciliation."
      },
      {
        questionNumber: 79,
        question: "Which three sacraments belong to Christian initiation?",
        answer: "Baptism, Confirmation and the Eucharist."
      },
      {
        questionNumber: 80,
        question: "How will I live as a new Catholic?",
        answer: "I will follow Jesus through prayer, the sacraments and love of others."
      },
    ],
    prayer: "Lord Jesus, thank you for giving me new life. Keep me faithful in your Church. Help me to pray, forgive and love others each day. Lead me to heaven. Amen.",
    thisWeek: "Choose one simple habit to begin or continue: morning prayer, Sunday Mass, a Gospel reading or an act of kindness. For the adult: Prepare a realistic plan for continued Sunday worship, mystagogy, future Confession and (if lawfully deferred) Confirmation. Avoid a one-day-only celebration mindset. Appendix A | The Journey Step by Step This is a guide to the journey, not a rigid sixteen-week programme. The rites and periods belong to the Church and are adapted to the child's understanding, freedom, family life and developing faith. The priest guides the timing and the approved liturgical celebrations. 01 Enquiry and welcome The child and family ask questions, begin to know the parish, pray and attend Sunday Mass. There is no pressure to promise more than they understand. 02 Acceptance into the catechumenate The Church welcomes the child as a catechumen in the appropriate rite. The Sign of the Cross marks the child as someone preparing to follow Jesus. 03 Catechumenate The child learns the faith through the Bible, prayer, worship, acts of charity, conversations and real parish belonging. 04 Discernment The child expresses a free desire for Baptism. The priest, family, godparent and parish consider the child's faith, understanding, prayer and Christian life together. 05 Purification and immediate preparation The Church prepares the child with more focused prayer, repentance, the Creed, the Our Father and the authorised preparatory rites. 06 Christian initiation Baptism, Confirmation and the Eucharist are the three sacraments of Christian initiation. The Church ordinarily celebrates them together for an unbaptised child of catechetical age; any lawful variation requires appropriate authority. 07 Mystagogy and continuing formation After the sacraments, the newly baptised continues in Sunday Mass, prayer, charity, Confession when needed, learning and parish life. REMEMBER Becoming Catholic is not finishing pages. It is growing into a life of friendship with Jesus and his Church. Appendix B | The Rite of Baptism Step by Step The exact celebration follows the Church's approved liturgical book and the directions of the priest. These explanations help the child understand what is happening; they are not a script to perform at home. 01 Being called by name The child is welcomed as a real person whom Christ calls in love. 02 The Sign of the Cross The Cross marks the beginning of discipleship and recalls Jesus, our Saviour. 03 Hearing the Word of God The Scriptures teach us about Christ and the promises of God. 04 The prayers of the Church The Church prays for the child and asks God to free the child from evil. 05 The blessing of water The Church praises God for his saving work and prays over the baptismal water. 06 Rejecting sin and professing faith The child rejects Satan and sin and professes faith in the Father, Son and Holy Spirit. 07 Baptism with water The minister pours water or immerses the person and says the baptismal words naming the Father, Son and Holy Spirit. Christ gives new birth. 08 White garment The white garment shows that the newly baptised has put on Christ and received a new dignity. 09 Lighted candle A candle lit from the Paschal candle recalls Christ the Light of the world and a faith to be kept alive. 10 Confirmation as directed by the approved rite For an unbaptised child of catechetical age, Confirmation ordinarily follows Baptism. Where it is lawfully deferred, the priest will explain any post-baptismal anointing and the later celebration. These anointings are not interchangeable. 11 The Holy Eucharist The newly baptised joins the faithful at the altar and receives Holy Communion according to the authorised celebration. What if I am nervous? You can say: \"Father, please help me. I am not sure what to say next.\" The priest and the adults helping you will guide you. For adults: Do not stage a mock sacrament using water and the baptismal formula. Only the actual authorised liturgical celebration is Baptism. Confirm the approved initiation sequence with the priest. Appendix C | A Child's Guide to Mass and Communion You can look at this before Sunday Mass. You do not need to follow it as a worksheet during the celebration. Remember: before Baptism you join the Church in prayer but do not yet receive Holy Communion. What is happening? How can I take part? We arrive Become quiet, greet Jesus and prepare to pray. Mass begins Stand with the congregation, join the singing and make the Sign of the Cross. We ask for mercy Ask the Lord to forgive and help us choose what is good. We hear the Scriptures Listen to God's word; stand for the Gospel. We hear the homily Listen to the priest or deacon explain God's word. We profess faith and pray Join the Creed and prayers for the Church and the world. The gifts are prepared Offer your life, your joys and your difficulties to God with Jesus. The Eucharistic Prayer Thank the Father and adore the Lord when the Sacred Host and chalice are shown. We prepare for Communion Pray the Our Father and ask Jesus to make your heart ready. We receive when initiated and prepared Answer \"Amen\", receive reverently and consume the Sacred Host immediately. We give thanks Thank Jesus quietly and ask for his help. We are sent out Go to love and serve God and our neighbours. Before receiving Holy Communion I am baptised, properly disposed and prepared by faith. Normally I have fasted for at least one hour before receiving Holy Communion, except for water and medicine. If I am worried or unsure, I can speak privately with the priest. Practical Communion reminder The minister says: \"The Body of Christ.\" I answer: \"Amen.\" I receive on the tongue or in the hand, as permitted by the Church, and consume the Sacred Host immediately. If anything goes wrong, I remain calm and ask for help. Appendix D | Prayers to Learn and Pray Learn these gently over time. A child who cannot remember every word can still pray sincerely. The parish will help the child with prayers and liturgical responses. The Sign of the Cross In the name of the Father, and of the Son, and of the Holy Spirit. Amen. Our Father Our Father, who art in heaven, hallowed be thy name; thy kingdom come; thy will be done on earth as it is in heaven. Give us this day our daily bread; and forgive us our trespasses, as we forgive those who trespass against us; and lead us not into temptation, but deliver us from evil. Amen. Hail Mary Hail Mary, full of grace, the Lord is with thee; blessed art thou among women, and blessed is the fruit of thy womb, Jesus. Holy Mary, Mother of God, pray for us sinners, now and at the hour of our death. Amen. Glory Be Glory be to the Father, and to the Son, and to the Holy Spirit, as it was in the beginning, is now, and ever shall be, world without end. Amen. Act of Contrition O my God, because you are so good, I am very sorry that I have sinned against you, and by the help of your grace I will not sin again. Amen. Before Holy Communion Lord, I am not worthy that you should enter under my roof, but only say the word and my soul shall be healed. After Holy Communion Lord Jesus, I adore you and thank you for giving yourself to me. Keep me close to you and make my life pleasing to you. Amen. The Apostles' Creed I believe in God, the Father almighty, Creator of heaven and earth, and in Jesus Christ, his only Son, our Lord, who was conceived by the Holy Spirit, born of the Virgin Mary, suffered under Pontius Pilate, was crucified, died and was buried; he descended into hell; on the third day he rose again from the dead; he ascended into heaven, and is seated at the right hand of God the Father almighty; from there he will come to judge the living and the dead. I believe in the Holy Spirit, the holy catholic Church, the communion of saints, the forgiveness of sins, the resurrection of the body, and life everlasting. Amen. For the adult: The short Act of Contrition is the same prayer used in the parish First Confession catechism. Before Baptism, the child prays it as an expression of repentance; it is not a substitute for, or a rehearsal of, sacramental Confession. Appendix E | Summary Catechism These questions collect important truths from the sixteen conversations. They are offered for conversation and revision, not as a pass-or-fail examination. A child may express the meaning in other words. 1. Why did God make us? To know, love and serve him and be happy with him in heaven. 2. What is grace? God's free gift of his own life and help. 3. How many gods are there? There is only one God. 4. Who is the Most Holy Trinity? Father, Son and Holy Spirit: three divine Persons in one God. 5. Who created the world? God made everything from nothing, and it was good. 6. What is original sin? The fallen condition of being born without original holiness. 7. Who was preserved from original sin? The Blessed Virgin Mary, through the grace of Jesus Christ. 8. Who is Jesus Christ? The eternal Son of God made man, true God and true man. 9. Why did Jesus become man? To save us from sin and bring us to the Father. 10. What is the Paschal Mystery? Jesus' suffering, death, Resurrection and Ascension. 11. Did Jesus truly rise? Yes, he rose bodily on the third day. 12. Who is the Holy Spirit? The third Person of the Most Holy Trinity. 13. Who founded the Catholic Church? Jesus Christ founded the Catholic Church. 14. What are the four marks of the Church? One, holy, catholic and apostolic. 15. What is faith? Believing God and everything he has revealed. 16. Where is God's revelation handed on? In Sacred Scripture and Sacred Tradition. 17. What is the Creed? A profession of the Catholic faith. 18. What is prayer? Raising our minds and hearts to God. 19. Which prayer did Jesus teach us? The Our Father. 20. Why do we go to Mass on Sundays? To worship God and join the Church in the saving mysteries of Christ. 21. What do the commandments teach? How to love God and our neighbour. 22. What is conversion? Turning away from sin and returning to God. 23. Is an accident the same as sin? No. Sin involves a knowing and free wrong choice. 24. What three things must be present for mortal sin? Grave matter, full knowledge and deliberate consent. 25. What is a catechumen? An unbaptised person formally received for preparation for Baptism. 26. Is the catechumenate only a course? No. It is a growing way of Christian life. 27. What is Baptism? The sacrament of new birth through water and the Holy Spirit. 28. What sins does Baptism forgive? Original sin and all personal sins committed before Baptism. 29. Can Baptism be repeated? No. It leaves a permanent spiritual character. 30. What are the three sacraments of Christian initiation? Baptism, Confirmation and the Eucharist. 31. Does an unbaptised child receive Confession before Baptism? No. Baptism forgives every earlier sin. 32. When did Jesus institute the Eucharist? At the Last Supper. 33. Who is present in the Eucharist? Jesus Christ, Body, Blood, Soul and Divinity. 34. What is transubstantiation? The change of bread and wine into Christ's Body and Blood while their appearances remain. 35. Does Jesus die again at Mass? No. His one sacrifice is made present sacramentally. 36. Who can consecrate the Eucharist? A validly ordained bishop or priest. 37. What do we answer to \"The Body of Christ\"? Amen. 38. What does a Catholic do after Baptism? Pray, attend Sunday Mass, receive the sacraments properly and love others. 39. Which sacrament forgives sins committed after Baptism? The Sacrament of Penance and Reconciliation. 40. What happens after Christian initiation? We keep growing in faith, prayer, holiness and parish life. Appendix F | Readiness and Parish Guide This section is for parents, godparents, mentors and the parish priest. It is not a checklist for the child to complete, and it is never a public test. The parish priest makes the final pastoral judgement, taking account of the child's age, understanding, free desire, developing Christian life and personal circumstances. A gentle conversation about readiness Free desire The child wants Baptism and can express a simple personal reason for following Jesus. Jesus and salvation The child knows that Jesus is the Son of God, that he died and rose, and that he saves us. Catholic faith The child has a developing understanding of the Trinity, Church, prayer, moral life and Creed. Conversion The child can often distinguish accidents and temptation from deliberate wrongdoing, and can show sincere repentance and a wish to change. Baptism The child understands that Jesus truly forgives sins and gives new life through the sacrament. Eucharist The child knows that the Sacred Host is not ordinary food but Jesus himself, and can receive reverently with suitable support. Sunday and parish life The child and family are beginning a real pattern of Sunday worship, prayer and parish belonging. Continuing formation The child and family understand that the sacraments begin, rather than end, a lifelong Catholic life. Practical parish considerations - Confirm that the child has not already been validly baptised. Any doubt must be investigated according to canon law; do not simply repeat Baptism. - Ensure any necessary consent and questions of parental responsibility have been dealt with, while respecting the child's own free desire. - Identify a suitable godparent who meets canonical requirements and can help the child live the faith. - Use the approved rites for catechumens of this age; do not replace the journey with lessons alone. - Arrange reasonable adaptations for learning, disability, anxiety and family circumstances. No child should be shamed or pressured. - Confirm how Baptism, Confirmation and Eucharist will be celebrated. The ordinary rule is immediate Confirmation and Eucharist with Baptism for a child of catechetical age; any lawful exception must be handled under competent authority and diocesan direction. - Explain how the sacraments will be recorded and how the child will be supported afterwards through mystagogy, Sunday worship and future Confession. - Follow safeguarding policies. Never ask the child publicly to disclose personal sins or experiences of harm. A note about First Confession An unbaptised child does not receive sacramental Confession before Baptism. Baptism itself removes original sin and all personal sins committed before it. After Baptism, the Sacrament of Penance is available; a person conscious of mortal sin must receive sacramental absolution before Holy Communion. The goal A child who can say, in simple words: \"I believe in Jesus. I want to be baptised and live in his Church. I know he forgives sins, gives us new life and comes to us in Holy Communion. I want to follow him.\" Sources and Doctrinal References Sacred Scripture: especially Genesis 1-3; the Gospels; Acts 2; Romans 6; 1 Corinthians 11 and 15; and the teaching about Baptism and the Eucharist. Catechism of the Catholic Church: principally the profession of faith (nos. 1-1065); the sacraments of initiation (nos. 1210-1419); Penance and Reconciliation (nos. 1422-1498); and Christian life and prayer (nos. 1691-2557). Compendium of the Catechism of the Catholic Church: especially the questions on the Creed, prayer, Baptism, Confirmation and Holy Eucharist. Code of Canon Law: especially canons 206, 788, 852, 865-866, 872-874, 879-896 and 912-923. The liturgical rites approved for the Christian initiation of children who have reached catechetical age, using the edition authorised in England and Wales. Current safeguarding guidance of the Diocese of Nottingham, together with the directions of the parish priest. Prepared for children and families in St Mary's, St John Bosco and St Edward's Parish. The teaching is to be used alongside Sunday worship, prayer and the personal guidance of the parish priest. Important liturgical and canonical note For an unbaptised child who has reached the use of reason, Baptism, Confirmation and the Eucharist ordinarily belong together in one initiation. Some local arrangements envisage later Confirmation. Such an arrangement must not be assumed from this book alone: it is subject to the applicable law, any grave reason and the competent diocesan direction. Approved rites and current parish instructions take precedence over the descriptions here. St Mary's | St John Bosco | St Edward's Parish"
  },
];

export const JOURNEY_STAGES: JourneyStage[] = [
  {
    stage: 1,
    name: "Enquiry",
    whatItMeans: "The child and family ask questions, meet the parish and begin attending Sunday Mass."
  },
  {
    stage: 2,
    name: "Acceptance",
    whatItMeans: "The Church welcomes the child among the catechumens and signs the senses with the Cross."
  },
  {
    stage: 3,
    name: "Catechumenate",
    whatItMeans: "The child learns Catholic faith, practises prayer and conversion, joins worship and serves others."
  },
  {
    stage: 4,
    name: "Discernment",
    whatItMeans: "The priest, family, godparent and catechists consider readiness; the child freely expresses the desire for Baptism."
  },
  {
    stage: 5,
    name: "Purification",
    whatItMeans: "Immediate preparation includes prayer, repentance, the Creed, the Our Father and the preparatory rites."
  },
  {
    stage: 6,
    name: "Initiation",
    whatItMeans: "Baptism and First Holy Communion are celebrated according to the authorised parish arrangement."
  },
  {
    stage: 7,
    name: "Mystagogy",
    whatItMeans: "The newly baptised reflects upon the sacraments, becomes rooted in parish life and continues towards later Confirmation."
  }
];

export const BAPTISM_STEPS: BaptismStep[] = [
  {
    step: 1,
    name: "Calling by name",
    description: "The child is presented and freely asks for faith and Baptism."
  },
  {
    step: 2,
    name: "Sign of the Cross",
    description: "Christ claims the child; the Cross marks the beginning of discipleship."
  },
  {
    step: 3,
    name: "Word of God",
    description: "God calls, teaches and awakens faith through Scripture."
  },
  {
    step: 4,
    name: "Litany and prayer",
    description: "The Church asks the saints’ intercession and prays for deliverance from evil."
  },
  {
    step: 5,
    name: "Blessing of water",
    description: "God is praised for his saving work through water and the Holy Spirit."
  },
  {
    step: 6,
    name: "Renunciation and faith",
    description: "The child rejects sin and professes the faith of the Church."
  },
  {
    step: 7,
    name: "Baptism",
    description: "Water is poured or the child is immersed while the Trinitarian form is spoken."
  },
  {
    step: 8,
    name: "Anointing",
    description: "Sacred chrism signifies union with Christ and consecration to God."
  },
  {
    step: 9,
    name: "White garment",
    description: "The newly baptised has put on Christ and must preserve baptismal dignity."
  },
  {
    step: 10,
    name: "Lighted candle",
    description: "Christ gives light; faith must be kept burning."
  },
  {
    step: 11,
    name: "Eucharist",
    description: "The newly baptised joins the faithful at the altar and receives the Lord’s Body and Blood."
  }
];

export const BAPTISM_LITURGICAL_NOTE = "Where Confirmation is lawfully deferred, the post-baptismal anointing with chrism is not the Sacrament of Confirmation. The later Confirmation catechism should make this distinction clear.";

export const MASS_PARTS: MassPart[] = [
  {
    part: "Introductory Rites",
    whatIDoAndUnderstand: "We gather, make the Sign of the Cross, ask mercy, praise God and pray."
  },
  {
    part: "Liturgy of the Word",
    whatIDoAndUnderstand: "We listen to Scripture and the homily, profess faith and offer intercessions."
  },
  {
    part: "Preparation of Gifts",
    whatIDoAndUnderstand: "Bread and wine are brought; we offer ourselves with them."
  },
  {
    part: "Eucharistic Prayer",
    whatIDoAndUnderstand: "The Church gives thanks; by the Holy Spirit and Christ’s words, the gifts become his Body and Blood."
  },
  {
    part: "Communion Rite",
    whatIDoAndUnderstand: "We pray the Our Father, ask peace and prepare to receive the Lamb of God."
  },
  {
    part: "Holy Communion",
    whatIDoAndUnderstand: "The minister says “The Body of Christ”; I answer “Amen”, receive reverently and consume at once."
  },
  {
    part: "Thanksgiving",
    whatIDoAndUnderstand: "I adore Jesus, thank him, offer myself and pray for others."
  },
  {
    part: "Dismissal",
    whatIDoAndUnderstand: "Christ sends us to live the Gospel and serve our neighbour."
  }
];

export const BEFORE_COMMUNION_NOTE = "I am baptised, properly disposed and have fasted for one hour from food and drink, except water and medicine. I approach because I believe and desire to receive Jesus.";

export const PRAYERS: PrayerItem[] = [
  {
    id: "sign-of-cross",
    title: "Sign of the Cross",
    latinTitle: "Signum Crucis",
    text: "In the name of the Father, and of the Son, and of the Holy Spirit. Amen.",
    category: "core"
  },
  {
    id: "our-father",
    title: "Our Father",
    latinTitle: "Pater Noster",
    text: "Our Father, who art in heaven, hallowed be thy name; thy kingdom come; thy will be done on earth as it is in heaven. Give us this day our daily bread; and forgive us our trespasses, as we forgive those who trespass against us; and lead us not into temptation, but deliver us from evil. Amen.",
    category: "core"
  },
  {
    id: "hail-mary",
    title: "Hail Mary",
    latinTitle: "Ave Maria",
    text: "Hail Mary, full of grace, the Lord is with thee; blessed art thou among women, and blessed is the fruit of thy womb, Jesus. Holy Mary, Mother of God, pray for us sinners, now and at the hour of our death. Amen.",
    category: "core"
  },
  {
    id: "glory-be",
    title: "Glory Be",
    latinTitle: "Gloria Patri",
    text: "Glory be to the Father, and to the Son, and to the Holy Spirit, as it was in the beginning, is now, and ever shall be, world without end. Amen.",
    category: "core"
  },
  {
    id: "act-of-contrition",
    title: "Act of Contrition",
    text: "O my God, because you are so good, I am very sorry that I have sinned against you, and by the help of your grace I will not sin again. Amen.",
    category: "core"
  },
  {
    id: "before-communion",
    title: "Before Communion",
    text: "Lord, I am not worthy that you should enter under my roof, but only say the word and my soul shall be healed.",
    category: "communion"
  },
  {
    id: "after-communion",
    title: "After Communion",
    text: "Lord Jesus, I adore you and thank you for giving yourself to me. Keep me close to you and make my life pleasing to you. Amen.",
    category: "communion"
  }
];

export const EXAMINATION_OF_CONSCIENCE = {
  title: "A short examination of conscience",
  questions: [
    "Have I prayed and worshipped God faithfully?",
    "Have I used God’s name with reverence?",
    "Have I obeyed and respected my parents, carers and teachers?",
    "Have I been truthful, kind, fair and ready to forgive?",
    "Have I taken what was not mine or damaged another person’s property?",
    "Have I misused the internet, excluded someone or joined in cruelty?",
    "What good have I failed to do?"
  ],
  remember: "Before Baptism, bring every sin to God in repentance; Baptism will wash every previous sin away. After Baptism, learn to use the Sacrament of Penance faithfully."
};

export const SUMMARY_CATECHISM: SummaryQuestion[] = [
  {
    number: 1,
    question: "Why did God make you?",
    answer: "God made me to know him, love him and serve him in this life, and to be happy with him for ever in heaven.",
    lessonReference: 1
  },
  {
    number: 2,
    question: "What is grace?",
    answer: "Grace is God’s free gift of his own life and help.",
    lessonReference: 1
  },
  {
    number: 3,
    question: "How many gods are there?",
    answer: "There is one God.",
    lessonReference: 2
  },
  {
    number: 4,
    question: "Who is the Most Holy Trinity?",
    answer: "The Father, the Son and the Holy Spirit: three divine Persons in one God.",
    lessonReference: 2
  },
  {
    number: 5,
    question: "Who created the world?",
    answer: "God created the world from nothing and made it good.",
    lessonReference: 3
  },
  {
    number: 6,
    question: "What is original sin?",
    answer: "Original sin is the fallen condition in which we are born without original holiness and justice.",
    lessonReference: 3
  },
  {
    number: 7,
    question: "Who is Jesus Christ?",
    answer: "Jesus Christ is the eternal Son of God made man.",
    lessonReference: 4
  },
  {
    number: 8,
    question: "Is Jesus true God?",
    answer: "Yes. Jesus is true God, equal to the Father.",
    lessonReference: 4
  },
  {
    number: 9,
    question: "How did Jesus redeem us?",
    answer: "By his suffering, death and Resurrection.",
    lessonReference: 5
  },
  {
    number: 10,
    question: "What is the Cross?",
    answer: "The Cross is the altar upon which Jesus offered himself for our salvation.",
    lessonReference: 5
  },
  {
    number: 11,
    question: "Who is the Holy Spirit?",
    answer: "The Holy Spirit is the third Person of the Most Holy Trinity.",
    lessonReference: 6
  },
  {
    number: 12,
    question: "Who founded the Catholic Church?",
    answer: "Jesus Christ founded the Catholic Church.",
    lessonReference: 6
  },
  {
    number: 13,
    question: "What is faith?",
    answer: "Faith is the gift by which we believe God and all that he has revealed.",
    lessonReference: 7
  },
  {
    number: 14,
    question: "Where is God’s revelation handed on?",
    answer: "In Sacred Scripture and Sacred Tradition.",
    lessonReference: 7
  },
  {
    number: 15,
    question: "What is prayer?",
    answer: "Prayer is raising the mind and heart to God.",
    lessonReference: 8
  },
  {
    number: 16,
    question: "What is the perfect prayer?",
    answer: "The Our Father is the perfect prayer taught by Jesus.",
    lessonReference: 8
  },
  {
    number: 17,
    question: "What do the commandments teach?",
    answer: "They teach us how to love God and our neighbour.",
    lessonReference: 9
  },
  {
    number: 18,
    question: "What three things are required for mortal sin?",
    answer: "Grave matter, full knowledge and deliberate consent.",
    lessonReference: 9
  },
  {
    number: 19,
    question: "What is a catechumen?",
    answer: "An unbaptised person whom the Church has formally accepted for preparation for Baptism.",
    lessonReference: 10
  },
  {
    number: 20,
    question: "Is the catechumenate only a course?",
    answer: "No. It is an apprenticeship in the whole Christian life.",
    lessonReference: 10
  },
  {
    number: 21,
    question: "What is Baptism?",
    answer: "The sacrament of rebirth by water and the Holy Spirit.",
    lessonReference: 11
  },
  {
    number: 22,
    question: "What is the matter of Baptism?",
    answer: "True natural water used by immersion or pouring.",
    lessonReference: 11
  },
  {
    number: 23,
    question: "What must the child reject before Baptism?",
    answer: "The child must reject sin, Satan and all that leads away from God.",
    lessonReference: 12
  },
  {
    number: 24,
    question: "What faith does the child profess?",
    answer: "The Catholic faith in the Father, the Son, the Holy Spirit and the holy Catholic Church.",
    lessonReference: 12
  },
  {
    number: 25,
    question: "When did Jesus institute the Eucharist?",
    answer: "At the Last Supper, on the night before he died.",
    lessonReference: 13
  },
  {
    number: 26,
    question: "Who is present in the Eucharist?",
    answer: "Jesus Christ is truly, really and substantially present.",
    lessonReference: 13
  },
  {
    number: 27,
    question: "What is the Mass?",
    answer: "The sacrifice in which Christ makes present and offers sacramentally his one Sacrifice of the Cross.",
    lessonReference: 14
  },
  {
    number: 28,
    question: "Does Jesus die again at Mass?",
    answer: "No. His one perfect sacrifice is made present sacramentally.",
    lessonReference: 14
  },
  {
    number: 29,
    question: "Whom do you receive in Holy Communion?",
    answer: "I receive Jesus Christ, Body, Blood, Soul and Divinity.",
    lessonReference: 15
  },
  {
    number: 30,
    question: "Does an unbaptised child make Confession before Baptism?",
    answer: "No. Baptism itself forgives every previous sin.",
    lessonReference: 15
  },
  {
    number: 31,
    question: "What duties follow Baptism?",
    answer: "To remain faithful to Christ, worship at Sunday Mass, pray, obey God and love our neighbour.",
    lessonReference: 16
  },
  {
    number: 32,
    question: "What sacrament forgives sins committed after Baptism?",
    answer: "The Sacrament of Penance forgives sins committed after Baptism.",
    lessonReference: 16
  },
  {
    number: 33,
    question: "What are the three sacraments of Christian initiation?",
    answer: "Baptism, Confirmation and the Holy Eucharist.",
    lessonReference: 16
  },
  {
    number: 34,
    question: "What remains to be received later in this parish pathway?",
    answer: "Confirmation remains to be received after its own preparation.",
    lessonReference: 16
  },
  {
    number: 35,
    question: "What is the effect of Baptism on earlier sins?",
    answer: "Baptism forgives original sin and every personal sin committed before it.",
    lessonReference: 11
  },
  {
    number: 36,
    question: "Whom do we receive in Holy Communion?",
    answer: "Jesus Christ, Body, Blood, Soul and Divinity.",
    lessonReference: 15
  }
];

export const READINESS_CRITERIA: ReadinessCriterion[] = [
  {
    id: "free-desire",
    area: "Free desire",
    whatItLooksLike: "The child personally asks for Baptism and can express why."
  },
  {
    id: "faith-in-christ",
    area: "Faith in Christ",
    whatItLooksLike: "The child knows the central Gospel: creation, sin, Christ’s saving death and Resurrection, and the call to faith."
  },
  {
    id: "catholic-faith",
    area: "Catholic faith",
    whatItLooksLike: "The child accepts the Trinity, the Church, the Creed, prayer and the moral life according to capacity."
  },
  {
    id: "conversion",
    area: "Conversion",
    whatItLooksLike: "The child can recognise wrongdoing, show sorrow, seek forgiveness and make amends."
  },
  {
    id: "baptism",
    area: "Baptism",
    whatItLooksLike: "The child understands that Baptism truly forgives sin, gives grace and incorporates into Christ and the Church."
  },
  {
    id: "eucharist",
    area: "Eucharist",
    whatItLooksLike: "The child distinguishes the Body of Christ from ordinary food and believes the Real Presence."
  },
  {
    id: "sunday-life",
    area: "Sunday life",
    whatItLooksLike: "The child and family have begun a stable pattern of Sunday Mass and parish belonging."
  },
  {
    id: "practical-readiness",
    area: "Practical readiness",
    whatItLooksLike: "The child can participate in the baptismal promises and receive Communion reverently with suitable adaptations."
  },
  {
    id: "continuing-formation",
    area: "Continuing formation",
    whatItLooksLike: "The family understands that mystagogy, Confession and later Confirmation remain part of the journey."
  }
];

export const PARISH_CHECKLIST = [
  "Confirm that no prior valid Baptism exists; obtain records or investigate doubt before any conditional Baptism.",
  "Record parental consent and the child’s free request; identify any questions of parental responsibility.",
  "Appoint a suitable godparent who meets canonical requirements.",
  "Celebrate the proper stages and rites; do not reduce the journey to classroom instruction.",
  "Agree reasonable adjustments and comply with diocesan safeguarding requirements.",
  "Confirm with the parish priest and, where needed, the Diocese of Nottingham, the lawful basis and rite for deferring Confirmation.",
  "Enter Baptism, First Holy Communion and later Confirmation accurately in the sacramental registers.",
  "Arrange mystagogy, future First Confession and continuing preparation for Confirmation."
];

export const SAFEGUARDING_STATEMENT = "Preparation must respect the child’s dignity, capacity, privacy and safety. No child should be shamed, frightened, publicly tested or pressured to receive a sacrament. Follow the current Diocese of Nottingham safeguarding policy and parish procedures.";

export const SOURCES_AND_REFERENCES = {
  sources: [
    {
      source: "Sacred Scripture",
      details: "References and short phrases follow the English Standard Version - Catholic Edition."
    },
    {
      source: "Catechism of the Catholic Church",
      details: "Nos. 1-1065 on the profession of faith; 1210-1419 on Baptism, Confirmation and Eucharist; 1691-2557 on Christian life and prayer."
    },
    {
      source: "Compendium of the Catechism of the Catholic Church",
      details: "Especially questions 1-294 on revelation, the Creed and the sacraments of initiation."
    },
    {
      source: "Code of Canon Law",
      details: "Canons 206, 788, 852, 865-866, 872-874, 879-896 and 912-923."
    },
    {
      source: "Rite of Christian Initiation of Adults",
      details: "Part II, chapter 1: Christian initiation of children who have reached catechetical age; use the edition approved for England and Wales."
    },
    {
      source: "Liturgy Office of England and Wales",
      details: "Guidance on the sacraments of initiation at the Easter Vigil, recognising Baptism, Confirmation and Eucharist together as the norm for children of catechetical age."
    },
    {
      source: "Diocese of Nottingham",
      details: "Current safeguarding resources and the diocesan listing of Societas Doctrinae Christianae materials for RCIC."
    },
    {
      source: "Joseph Deharbe, S.J.",
      details: "A Full Catechism of the Catholic Religion, adapted rather than reproduced, with present terminology and discipline."
    }
  ],
  doctrinalStandard: "Baptism, Confirmation and Eucharist form one sacramental initiation. Canon law ordinarily requires a person who has reached the use of reason and is baptised to be confirmed immediately afterwards and to receive the Eucharist, unless a grave reason prevents it. Therefore, any parish practice of later Confirmation must be applied only under competent ecclesiastical direction; this catechism does not itself supply that authorisation. Where terminology, dates or practical instructions change, the approved liturgical books, current Diocese of Nottingham policy and the directions of the parish priest govern."
};
