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
    remember: "God created me out of love and calls me to know, love and serve him in his Catholic Church.",
    explanation: [
      "God made every person in his image. Our deepest happiness is to live in friendship with him and one day see him face to face in heaven.",
      "God calls us through his word, through people who love us and through the Church. Becoming Catholic is our response to his grace; it must be free and sincere.",
      "Jesus welcomes children. He asks us to listen, trust him, turn away from sin and learn the life of a disciple."
    ],
    talkAboutIt: {
      question: "God already knows and loves you. What do you think it means when we say that he is calling you by name?",
      note: "God’s call is personal. He invites the child freely into friendship with Christ and life in the Church; Baptism is a response to grace, not simply something adults arrange."
    },
    answers: [
      {
        questionNumber: 1,
        question: "Why did God make you?",
        answer: "God made me to know him, love him and serve him in this life, and to be happy with him for ever in heaven."
      },
      {
        questionNumber: 2,
        question: "What is grace?",
        answer: "Grace is God’s free gift of his own life and help."
      },
      {
        questionNumber: 3,
        question: "Why do you wish to become Catholic?",
        answer: "I wish to know and follow Jesus Christ and live in his Church."
      },
      {
        questionNumber: 4,
        question: "Does God force anyone to believe?",
        answer: "No. God gives grace and calls us to answer freely."
      },
      {
        questionNumber: 5,
        question: "Whom does Jesus welcome?",
        answer: "Jesus welcomes everyone who comes to him in faith."
      }
    ],
    prayer: "Lord Jesus, thank you for calling me by name. Help me to know you, love you and follow you faithfully. Amen.",
    thisWeek: "Make the Sign of the Cross each morning and ask Jesus to guide you."
  },
  {
    id: 2,
    title: "The One God: Father, Son and Holy Spirit",
    remember: "There is one God in three divine Persons: the Father, the Son and the Holy Spirit.",
    explanation: [
      "There is only one God. He is eternal, all-holy, all-knowing, almighty and perfectly good. God is our Creator and Lord.",
      "The one God is the Most Holy Trinity: Father, Son and Holy Spirit. The three Persons are not three gods. Each is truly God, equal in majesty, sharing the one divine nature.",
      "The Father sent the Son for our salvation. The Father and the Son give us the Holy Spirit, who sanctifies us and dwells in souls living in grace."
    ],
    talkAboutIt: {
      question: "When you make the Sign of the Cross, whose name do you say? What does this tell us about the one God?",
      note: "We name the Father, the Son and the Holy Spirit: three divine Persons, yet one God. The Sign of the Cross is both a prayer and a short profession of Trinitarian faith."
    },
    answers: [
      {
        questionNumber: 1,
        question: "How many gods are there?",
        answer: "There is one God."
      },
      {
        questionNumber: 2,
        question: "Who is the Most Holy Trinity?",
        answer: "The Father, the Son and the Holy Spirit: three divine Persons in one God."
      },
      {
        questionNumber: 3,
        question: "Is each Person truly God?",
        answer: "Yes. The Father, Son and Holy Spirit are each truly and wholly God."
      },
      {
        questionNumber: 4,
        question: "Are there three gods?",
        answer: "No. There is only one God and one divine nature."
      },
      {
        questionNumber: 5,
        question: "How do we honour the Trinity?",
        answer: "We adore the one God and pray in the name of the Father, and of the Son, and of the Holy Spirit."
      }
    ],
    prayer: "Glory be to the Father, and to the Son, and to the Holy Spirit, as it was in the beginning, is now, and ever shall be, world without end. Amen.",
    thisWeek: "Make the Sign of the Cross slowly and say the name of each divine Person."
  },
  {
    id: 3,
    title: "Creation, Sin and the Promise of Salvation",
    remember: "God made all things good, but sin entered the world through disobedience; God promised a Saviour.",
    explanation: [
      "God created the visible and invisible world from nothing. Human beings were created in holiness and friendship with God.",
      "Our first parents disobeyed God. Original sin is the fallen condition inherited by every human person, except the Blessed Virgin Mary, who was preserved from it by Christ’s grace.",
      "Personal sin is a deliberate thought, word, deed or omission against God’s law. God did not abandon sinners: he promised salvation and prepared a people for the coming of Christ."
    ],
    talkAboutIt: {
      question: "Think of something beautiful and good in creation. What does it tell us about God? Why, then, do we still need a Saviour?",
      note: "Creation reveals God’s goodness, wisdom and power. Sin wounded humanity and the world, so we need Christ to free us from sin and restore friendship with God."
    },
    answers: [
      {
        questionNumber: 1,
        question: "Who created the world?",
        answer: "God created the world from nothing and made it good."
      },
      {
        questionNumber: 2,
        question: "What is original sin?",
        answer: "Original sin is the fallen condition in which we are born without original holiness and justice."
      },
      {
        questionNumber: 3,
        question: "What is personal sin?",
        answer: "A deliberate thought, word, deed or omission against God’s law."
      },
      {
        questionNumber: 4,
        question: "Did God abandon humanity after the fall?",
        answer: "No. God promised a Saviour."
      },
      {
        questionNumber: 5,
        question: "Who was preserved from original sin?",
        answer: "The Blessed Virgin Mary was preserved from original sin by the grace of Christ."
      }
    ],
    prayer: "Merciful Father, you made me for goodness. Save me from sin and teach me to choose what is true and right. Amen.",
    thisWeek: "With an adult, name one good choice and one wrong choice; explain what makes them different."
  },
  {
    id: 4,
    title: "Jesus Christ Our Saviour",
    remember: "Jesus Christ is true God and true man, sent to save us from sin and bring us to the Father.",
    explanation: [
      "The eternal Son of God took a true human nature from the Virgin Mary. He is one divine Person with two natures, divine and human.",
      "Jesus taught the truth, healed the sick, forgave sins and announced the Kingdom of God. His miracles show his divine authority and compassion.",
      "Only Christ can reconcile fallen humanity to God. He is the Way, the Truth and the Life, and there is no other name by which we are saved."
    ],
    talkAboutIt: {
      question: "If someone asked you, “Who is Jesus?”, what would you say so that they knew he is more than a good teacher?",
      note: "Jesus is the eternal Son of God made man, true God and true man. He teaches with divine authority and alone can save us from sin and bring us to the Father."
    },
    answers: [
      {
        questionNumber: 1,
        question: "Who is Jesus Christ?",
        answer: "Jesus Christ is the eternal Son of God made man."
      },
      {
        questionNumber: 2,
        question: "Is Jesus true God?",
        answer: "Yes. Jesus is true God, equal to the Father."
      },
      {
        questionNumber: 3,
        question: "Is Jesus truly human?",
        answer: "Yes. He has a true human body and soul."
      },
      {
        questionNumber: 4,
        question: "Why did the Son of God become man?",
        answer: "To save us from sin and bring us into friendship with God."
      },
      {
        questionNumber: 5,
        question: "Who is the mother of Jesus?",
        answer: "The Blessed Virgin Mary is the Mother of God because her Son is truly God."
      }
    ],
    prayer: "Lord Jesus Christ, Son of the living God, have mercy on me and lead me to the Father. Amen.",
    thisWeek: "Read one Gospel story about Jesus and tell someone what it reveals about him."
  },
  {
    id: 5,
    title: "The Paschal Mystery",
    remember: "Jesus saved us by his suffering, death, Resurrection and Ascension.",
    explanation: [
      "Jesus freely offered himself upon the Cross as the perfect sacrifice for our sins. He truly died and was buried.",
      "On the third day, Jesus rose bodily from the dead. The Resurrection is a real event and the victory of life over death, grace over sin and hope over despair.",
      "Jesus ascended into heaven and reigns in glory. He will come again to judge the living and the dead. Those who die in God’s friendship are called to everlasting life."
    ],
    talkAboutIt: {
      question: "Look at a crucifix and then remember the empty tomb. What do the Cross and Resurrection tell us together?",
      note: "The Cross shows Christ’s loving sacrifice for sin; the empty tomb shows his real victory over death. Christianity holds both together: sacrifice and triumph, sorrow and hope."
    },
    answers: [
      {
        questionNumber: 1,
        question: "How did Jesus redeem us?",
        answer: "By his suffering, death and Resurrection."
      },
      {
        questionNumber: 2,
        question: "What is the Cross?",
        answer: "The Cross is the altar upon which Jesus offered himself for our salvation."
      },
      {
        questionNumber: 3,
        question: "Did Jesus truly rise?",
        answer: "Yes. Jesus rose bodily from the dead on the third day."
      },
      {
        questionNumber: 4,
        question: "Where is Jesus now?",
        answer: "He is in heaven and is also present to his Church in the ways he promised."
      },
      {
        questionNumber: 5,
        question: "Will Jesus come again?",
        answer: "Yes. He will come in glory to judge the living and the dead."
      }
    ],
    prayer: "We adore you, O Christ, and we bless you, because by your holy Cross you have redeemed the world. Amen.",
    thisWeek: "Place a crucifix where you pray and thank Jesus for his sacrifice."
  },
  {
    id: 6,
    title: "The Holy Spirit and the Catholic Church",
    remember: "The Holy Spirit gives life to the Church, which Christ founded to teach, sanctify and govern in his name.",
    explanation: [
      "At Pentecost the Holy Spirit came upon the Apostles and strengthened them to preach Christ. The Spirit continues to guide and sanctify the Church.",
      "The Catholic Church is the one, holy, catholic and apostolic Church founded by Christ. The Pope, successor of Saint Peter, and the bishops, successors of the Apostles, serve her unity and truth.",
      "The Church is both visible and spiritual: the People of God, the Body of Christ and the Temple of the Holy Spirit. We enter her sacramentally through Baptism."
    ],
    talkAboutIt: {
      question: "A church is a building, but the Church is more than a building. Who makes up the Church, and who gives her life?",
      note: "The Church is the People of God and Body of Christ, visibly united under the Pope and bishops. The Holy Spirit dwells in her, sanctifies her and preserves her in Christ’s truth."
    },
    answers: [
      {
        questionNumber: 1,
        question: "Who is the Holy Spirit?",
        answer: "The Holy Spirit is the third Person of the Most Holy Trinity."
      },
      {
        questionNumber: 2,
        question: "Who founded the Catholic Church?",
        answer: "Jesus Christ founded the Catholic Church."
      },
      {
        questionNumber: 3,
        question: "What are the four marks of the Church?",
        answer: "The Church is one, holy, catholic and apostolic."
      },
      {
        questionNumber: 4,
        question: "Who is the Pope?",
        answer: "The Pope is the Bishop of Rome and successor of Saint Peter."
      },
      {
        questionNumber: 5,
        question: "How do we become members of the Church?",
        answer: "We become members of Christ and his Church through Baptism."
      }
    ],
    prayer: "Come, Holy Spirit, fill the hearts of your faithful and kindle in them the fire of your love. Amen.",
    thisWeek: "Learn the names of the Pope, the Bishop of Nottingham and your parish priest."
  },
  {
    id: 7,
    title: "Faith, the Creed and Sacred Tradition",
    remember: "Catholic faith receives everything God has revealed in Scripture and Sacred Tradition and taught by the Church.",
    explanation: [
      "Faith is God’s gift by which we believe him and freely entrust ourselves to him. Faith seeks understanding and must bear fruit in charity.",
      "God’s revelation comes to us through Sacred Scripture and Sacred Tradition. Together they form one sacred deposit of faith entrusted to the Church.",
      "The Apostles’ Creed gives a short summary of the chief truths Catholics believe. At Baptism, the child rejects sin and professes this faith."
    ],
    talkAboutIt: {
      question: "Why is Catholic faith more than choosing only the teachings we happen to like?",
      note: "Faith receives God’s revelation rather than inventing it. Scripture and Sacred Tradition form one deposit entrusted to the Church, whose teaching office serves the truth Christ gave."
    },
    answers: [
      {
        questionNumber: 1,
        question: "What is faith?",
        answer: "Faith is the gift by which we believe God and all that he has revealed."
      },
      {
        questionNumber: 2,
        question: "Where is God’s revelation handed on?",
        answer: "In Sacred Scripture and Sacred Tradition."
      },
      {
        questionNumber: 3,
        question: "Who authentically interprets God’s word?",
        answer: "The teaching office of the Church: the Pope and the bishops in communion with him."
      },
      {
        questionNumber: 4,
        question: "What is the Creed?",
        answer: "The Creed is a summary and profession of the Catholic faith."
      },
      {
        questionNumber: 5,
        question: "Must faith affect our life?",
        answer: "Yes. Living faith works through charity and obedience to God."
      }
    ],
    prayer: "Lord, I believe; help my unbelief. Keep me faithful to all that you have revealed through your Church. Amen.",
    thisWeek: "Begin learning the Apostles’ Creed and ask about any words you do not understand."
  },
  {
    id: 8,
    title: "Prayer and the Christian Life",
    remember: "Prayer is raising the mind and heart to God; a Christian lives by worship, thanksgiving, repentance and petition.",
    explanation: [
      "Jesus teaches us to pray to the Father with confidence. The Our Father is the perfect prayer because it comes from the Lord himself.",
      "We adore God, thank him, ask forgiveness and present our needs. We also honour Our Lady and the saints and ask them to pray with us and for us.",
      "A Catholic prays daily, attends Mass every Sunday and holy day of obligation, reads Scripture, practises charity and grows in virtue."
    ],
    talkAboutIt: {
      question: "If someone watched your family for a week, what signs might show that prayer and Sunday Mass really matter?",
      note: "The child and adult might name daily prayer, grace before meals, a crucifix, Scripture, forgiveness, Sunday Mass, reverent speech and practical charity. Faith becomes visible through habits."
    },
    answers: [
      {
        questionNumber: 1,
        question: "What is prayer?",
        answer: "Prayer is raising the mind and heart to God."
      },
      {
        questionNumber: 2,
        question: "What is the perfect prayer?",
        answer: "The Our Father is the perfect prayer taught by Jesus."
      },
      {
        questionNumber: 3,
        question: "Do Catholics worship Mary and the saints?",
        answer: "No. We worship God alone; we honour the saints and ask their intercession."
      },
      {
        questionNumber: 4,
        question: "Why do we attend Sunday Mass?",
        answer: "To worship God, hear his word, share Christ’s sacrifice and keep the Lord’s Day holy."
      },
      {
        questionNumber: 5,
        question: "What is virtue?",
        answer: "A virtue is a firm habit of doing good."
      }
    ],
    prayer: "Our Father, who art in heaven, hallowed be thy name; thy kingdom come; thy will be done on earth as it is in heaven. Amen.",
    thisWeek: "Pray the Our Father each day and attend Sunday Mass with your family."
  },
  {
    id: 9,
    title: "The Commandments, Sin and Conversion",
    remember: "God’s commandments show the way of love; conversion turns the heart away from sin and towards God.",
    explanation: [
      "The Ten Commandments teach love of God and neighbour. Jesus brings them to fulfilment and gives the Beatitudes as the pattern of life in his Kingdom.",
      "Mortal sin is a grave offence committed with full knowledge and deliberate consent. Venial sin wounds friendship with God without destroying sanctifying grace.",
      "Before Baptism, the catechumen learns to examine conscience, be sorry, make amends and ask God’s mercy. Baptism will forgive every previous sin."
    ],
    talkAboutIt: {
      question: "Imagine three children: one breaks something accidentally, one is tempted but says no, and one deliberately breaks it in anger. Are these the same? Why not?",
      note: "An accident is not a sin, temptation is not itself a sin, and a deliberate wrong choice involves knowledge and consent. This helps form conscience without encouraging fear or scrupulosity."
    },
    answers: [
      {
        questionNumber: 1,
        question: "What do the commandments teach?",
        answer: "They teach us how to love God and our neighbour."
      },
      {
        questionNumber: 2,
        question: "What three things are required for mortal sin?",
        answer: "Grave matter, full knowledge and deliberate consent."
      },
      {
        questionNumber: 3,
        question: "What does venial sin do?",
        answer: "It wounds our friendship with God and weakens charity."
      },
      {
        questionNumber: 4,
        question: "What is conversion?",
        answer: "Turning away from sin and turning towards God in faith and obedience."
      },
      {
        questionNumber: 5,
        question: "How are sins committed before Baptism forgiven?",
        answer: "Every sin committed before Baptism is forgiven in Baptism."
      }
    ],
    prayer: "O my God, because you are so good, I am very sorry that I have sinned against you, and by the help of your grace I will not sin again. Amen.",
    thisWeek: "Use the short examination of conscience in Appendix D and make one act of repair."
  },
  {
    id: 10,
    title: "The Journey of a Catechumen",
    remember: "The Church accompanies the child through welcome, catechumenate, purification, initiation and continuing formation.",
    explanation: [
      "The journey begins with enquiry and welcome. In the Rite of Acceptance, the Church marks the child with the Cross and receives him or her among the catechumens.",
      "The catechumenate is a real apprenticeship in Christian life: learning the faith, praying, turning away from sin, joining Sunday worship and serving others.",
      "When the Church judges the child ready, the final preparation becomes more prayerful and immediate. After Baptism and First Communion comes mystagogy: learning to live from the mysteries received."
    ],
    talkAboutIt: {
      question: "Why is becoming Catholic more like learning a new way of life than merely finishing a course?",
      note: "The catechumenate forms the whole person through doctrine, prayer, conversion, Sunday worship, service and parish belonging. Readiness is spiritual and personal, not merely the completion of pages."
    },
    answers: [
      {
        questionNumber: 1,
        question: "What is a catechumen?",
        answer: "An unbaptised person whom the Church has formally accepted for preparation for Baptism."
      },
      {
        questionNumber: 2,
        question: "Is the catechumenate only a course?",
        answer: "No. It is an apprenticeship in the whole Christian life."
      },
      {
        questionNumber: 3,
        question: "Who accompanies a child?",
        answer: "The family, godparent, catechists, parish community and priest accompany the child."
      },
      {
        questionNumber: 4,
        question: "What determines readiness?",
        answer: "Sincere faith, conversion, sufficient understanding and a developing Christian life."
      },
      {
        questionNumber: 5,
        question: "What is mystagogy?",
        answer: "The formation after initiation that helps the newly baptised live the sacramental mysteries."
      }
    ],
    prayer: "Lord Jesus, guide me on the road to Baptism. Let your Cross mark my mind, my words and my whole life. Amen.",
    thisWeek: "At Mass, pray especially for everyone preparing for Baptism."
  },
  {
    id: 11,
    title: "Holy Baptism",
    remember: "Baptism gives new birth in water and the Holy Spirit, forgives every sin and makes us members of Christ and his Church.",
    explanation: [
      "Jesus instituted Baptism and commanded his Apostles to make disciples of all nations, baptising them in the name of the Father and of the Son and of the Holy Spirit.",
      "The essential sign is washing with true water while the minister uses the Trinitarian words. Baptism works by Christ’s power: it is not merely a public symbol.",
      "Baptism forgives original sin and all personal sins, gives sanctifying grace, makes us adopted children of God and leaves an indelible sacramental character. It can never be repeated."
    ],
    talkAboutIt: {
      question: "After Baptism, a person may look exactly the same. What has God really changed and given?",
      note: "Baptism is not merely outward. God forgives every sin, gives sanctifying grace, makes the person his adopted child, joins the person to Christ and the Church, and seals the soul permanently."
    },
    answers: [
      {
        questionNumber: 1,
        question: "What is Baptism?",
        answer: "The sacrament of rebirth by water and the Holy Spirit."
      },
      {
        questionNumber: 2,
        question: "What is the matter of Baptism?",
        answer: "True natural water used by immersion or pouring."
      },
      {
        questionNumber: 3,
        question: "What is the form of Baptism?",
        answer: "“I baptise you in the name of the Father, and of the Son, and of the Holy Spirit.”"
      },
      {
        questionNumber: 4,
        question: "What sins does Baptism forgive?",
        answer: "Baptism forgives original sin and every personal sin committed before it."
      },
      {
        questionNumber: 5,
        question: "Can Baptism be repeated?",
        answer: "No. Baptism gives an indelible character and can be received only once."
      }
    ],
    prayer: "Heavenly Father, prepare me for the saving waters of Baptism and make me a faithful child of your Church. Amen.",
    thisWeek: "Visit the baptismal font and make the Sign of the Cross with holy water if directed."
  },
  {
    id: 12,
    title: "The Signs and Celebration of Baptism",
    remember: "The Cross, water, anointing, white garment and light reveal the new life Christ gives in Baptism.",
    explanation: [
      "The child renounces sin and professes the Catholic faith. The water is blessed, and the priest or deacon baptises in the name of the Most Holy Trinity.",
      "Anointing with sacred chrism signifies sharing in Christ’s priestly, prophetic and royal dignity. The white garment shows that the newly baptised has put on Christ.",
      "The lighted candle, kindled from the Paschal candle, shows that Christ has enlightened the newly baptised, who must keep the flame of faith alive."
    ],
    talkAboutIt: {
      question: "Which sign of Baptism helps you most to understand what God is giving: water, anointing, the white garment or the candle? Why?",
      note: "Water signifies cleansing and new birth; anointing signifies consecration; the white garment signifies putting on Christ; and the candle signifies Christ’s light and living faith."
    },
    answers: [
      {
        questionNumber: 1,
        question: "What must the child reject before Baptism?",
        answer: "The child must reject sin, Satan and all that leads away from God."
      },
      {
        questionNumber: 2,
        question: "What faith does the child profess?",
        answer: "The Catholic faith in the Father, the Son, the Holy Spirit and the holy Catholic Church."
      },
      {
        questionNumber: 3,
        question: "What does the white garment mean?",
        answer: "It shows that the baptised person has put on Christ and received new dignity."
      },
      {
        questionNumber: 4,
        question: "What does the candle mean?",
        answer: "It signifies the light of Christ and the duty to keep faith alive."
      },
      {
        questionNumber: 5,
        question: "Who ordinarily baptises?",
        answer: "A bishop, priest or deacon ordinarily baptises; in necessity anyone may baptise with the right intention, water and form."
      }
    ],
    prayer: "Jesus, Light of the world, keep the flame of faith alive in me and make my life shine with good works. Amen.",
    thisWeek: "Practise answering the baptismal promises clearly and freely."
  },
  {
    id: 13,
    title: "The Holy Eucharist and the Real Presence",
    remember: "In the Holy Eucharist, Jesus Christ is truly, really and substantially present: Body, Blood, Soul and Divinity.",
    explanation: [
      "At the Last Supper Jesus took bread and wine and declared them to be his Body and Blood. He commanded the Apostles, “Do this in remembrance of me.”",
      "At the consecration, the whole substance of bread and wine becomes Christ’s Body and Blood while the appearances remain. This change is called transubstantiation.",
      "The Eucharist is not merely a symbol. The whole risen Christ is present under either species and remains present as long as the Eucharistic appearances remain."
    ],
    talkAboutIt: {
      question: "After the consecration, the Host still looks like bread. Why do Catholics believe that it truly is Jesus?",
      note: "We believe because Christ, who is Truth, declared the bread to be his Body and gave the Eucharist to his Church. Faith receives what his word reveals beyond what the senses can discover."
    },
    answers: [
      {
        questionNumber: 1,
        question: "When did Jesus institute the Eucharist?",
        answer: "At the Last Supper, on the night before he died."
      },
      {
        questionNumber: 2,
        question: "Who is present in the Eucharist?",
        answer: "Jesus Christ is truly, really and substantially present."
      },
      {
        questionNumber: 3,
        question: "What of Christ is present?",
        answer: "His Body, Blood, Soul and Divinity: the whole Christ."
      },
      {
        questionNumber: 4,
        question: "What is transubstantiation?",
        answer: "The change of the whole substance of bread and wine into Christ’s Body and Blood."
      },
      {
        questionNumber: 5,
        question: "Is the Eucharist merely a symbol?",
        answer: "No. It is a sacramental sign in which Jesus himself is truly present."
      }
    ],
    prayer: "Lord Jesus, I believe that you are truly present in the Blessed Sacrament. Increase my faith and love. Amen.",
    thisWeek: "Make a reverent visit to the tabernacle and say, “My Lord and my God.”"
  },
  {
    id: 14,
    title: "The Holy Sacrifice of the Mass",
    remember: "The Mass makes present sacramentally the one Sacrifice of Christ on Calvary and gives us his Body and Blood.",
    explanation: [
      "Jesus offered himself once for all upon the Cross. At Mass the same Christ offers himself through the ministry of the priest; his one sacrifice is made present in an unbloody manner.",
      "The Liturgy of the Word and Liturgy of the Eucharist form one act of worship. We hear God’s word, profess faith, join Christ’s offering and receive the Bread of Life.",
      "The Mass is offered for adoration, thanksgiving, reparation and petition. We participate by attentive prayer and by offering our whole life with Jesus."
    ],
    talkAboutIt: {
      question: "Jesus died once upon the Cross. Does he die again at Mass? What happens instead?",
      note: "Christ does not die again. His one perfect Sacrifice of Calvary is made sacramentally present in an unbloody manner; the same Christ offers himself through the ministry of the priest."
    },
    answers: [
      {
        questionNumber: 1,
        question: "What is the Mass?",
        answer: "The sacrifice in which Christ makes present and offers sacramentally his one Sacrifice of the Cross."
      },
      {
        questionNumber: 2,
        question: "Does Jesus die again at Mass?",
        answer: "No. His one perfect sacrifice is made present sacramentally."
      },
      {
        questionNumber: 3,
        question: "What are the two principal parts?",
        answer: "The Liturgy of the Word and the Liturgy of the Eucharist."
      },
      {
        questionNumber: 4,
        question: "Who can consecrate the Eucharist?",
        answer: "A validly ordained bishop or priest."
      },
      {
        questionNumber: 5,
        question: "How should we take part?",
        answer: "With faith, attention, prayer, responses, silence and self-offering."
      }
    ],
    prayer: "Eternal Father, I offer myself with Jesus in the Holy Sacrifice of the Mass. Accept my whole life through him. Amen.",
    thisWeek: "Use Appendix C during Sunday Mass and notice each principal part."
  },
  {
    id: 15,
    title: "Receiving First Holy Communion",
    remember: "We receive Jesus worthily with faith, the state of grace, the Eucharistic fast and reverent thanksgiving.",
    explanation: [
      "A newly baptised child comes from Baptism free from every sin. If First Holy Communion follows within the initiation celebration, no Confession precedes it.",
      "If there is a real interval after Baptism and the child commits a mortal sin, sacramental absolution is required before Communion. When uncertain, the child should speak privately with the priest.",
      "The communicant observes the one-hour fast, approaches reverently, answers “Amen”, receives according to approved practice, consumes the Sacred Host immediately and gives thanks."
    ],
    talkAboutIt: {
      question: "When the minister says “The Body of Christ” and you answer “Amen”, what are you saying yes to?",
      note: "“Amen” means “I believe”. The child professes that the consecrated Host is truly Jesus Christ and promises to receive him with faith, reverence and love."
    },
    answers: [
      {
        questionNumber: 1,
        question: "Whom do you receive in Holy Communion?",
        answer: "I receive Jesus Christ, Body, Blood, Soul and Divinity."
      },
      {
        questionNumber: 2,
        question: "Does an unbaptised child make Confession before Baptism?",
        answer: "No. Baptism itself forgives every previous sin."
      },
      {
        questionNumber: 3,
        question: "What if mortal sin is committed after Baptism?",
        answer: "The person must receive sacramental absolution before Holy Communion."
      },
      {
        questionNumber: 4,
        question: "What is the Eucharistic fast?",
        answer: "No food or drink for at least one hour before Communion, except water and medicine."
      },
      {
        questionNumber: 5,
        question: "What do you answer to “The Body of Christ”?",
        answer: "I answer “Amen”."
      }
    ],
    prayer: "Come, Lord Jesus. Make my heart ready to receive you with faith, reverence and love. Amen.",
    thisWeek: "Practise the Communion procession and approved manner of reception with your catechist."
  },
  {
    id: 16,
    title: "Living as a New Catholic",
    remember: "The newly baptised perseveres in Sunday Mass, prayer, virtue, charity and the sacraments, and later prepares for Confirmation.",
    explanation: [
      "Baptism begins a new life; it is not a graduation. The neophyte needs the support of family, godparent and parish to persevere in worship, doctrine and charity.",
      "After Baptism, ordinary sins are forgiven through sincere repentance; grave sins require sacramental Confession, and Catholics are encouraged to confess venial sins regularly.",
      "Baptism, Confirmation and Eucharist belong together as the sacraments of Christian initiation. Where Confirmation is celebrated later, the young Catholic continues towards it and should not regard initiation as complete."
    ],
    talkAboutIt: {
      question: "What could show, six months after Baptism and First Holy Communion, that these sacraments have become part of your life?",
      note: "Look for Mass, prayer, Confession, parish belonging, learning and a desire for Confirmation."
    },
    answers: [
      {
        questionNumber: 1,
        question: "What duties follow Baptism?",
        answer: "To remain faithful to Christ, worship at Sunday Mass, pray, obey God and love our neighbour."
      },
      {
        questionNumber: 2,
        question: "What sacrament forgives sins committed after Baptism?",
        answer: "The Sacrament of Penance forgives sins committed after Baptism."
      },
      {
        questionNumber: 3,
        question: "Why receive Holy Communion often?",
        answer: "To be united more closely to Christ and strengthened in grace and charity."
      },
      {
        questionNumber: 4,
        question: "Is Christian formation finished after First Communion?",
        answer: "No. Catholics continue learning and growing throughout life."
      },
      {
        questionNumber: 5,
        question: "What sacrament will strengthen baptismal grace later?",
        answer: "Confirmation will strengthen and complete baptismal grace with the special outpouring of the Holy Spirit."
      }
    ],
    prayer: "Lord Jesus, remain with me by your grace. Keep me faithful to your Church and prepare me to receive Confirmation fruitfully. Amen.",
    thisWeek: "Choose a simple Catholic rule of life: daily prayer, Sunday Mass, regular Confession and one act of charity each week."
  }
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
