import React from 'react';
import { FlatList, Image, View } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';

interface AnimalFact {
  id: string;
  day: string;
  title: string;
  image: string;
  description: string;
}

const animalFacts: AnimalFact[] = [
  {
    id: '1',
    day: 'День 1',
    title: 'Слон',
    image: 'https://cdn.culture.ru/images/441d2b29-18e5-56ac-bc5c-3d8f3b6f26bd',
    description: 'Слоны могут узнавать себя в зеркале, что свидетельствует о высоком уровне самосознания.'
  },
  {
    id: '2',
    day: 'День 2',
    title: 'Кошка',
    image: 'https://proza.ru/pics/2021/07/16/912.jpg',
    description: ' Кошки мурлычут не только от удовольствия, но и чтобы успокоиться или ускорить заживление ран'
  },
  {
    id: '3',
    day: 'День 3',
    title: 'Собака',
    image: 'https://avatars.mds.yandex.net/i?id=5bf4ec987bd137af9a5d112c87055be9b3ff1f8f-9107119-images-thumbs&n=13',
    description: 'Собаки понимают до 250 слов и жестов, а самые умные породы могут запоминать до 1000 команд.'
  },
  {
    id: '4',
    day: 'День 4',
    title: 'Дельфин',
    image: 'https://avatars.mds.yandex.net/i?id=7ba2dd4131653715bd997beafe608b8f_l-5546680-images-thumbs&n=13',
    description: 'Дельфины дают друг другу имена, используя уникальные свистки для общения.'
  },
  {
    id: '5',
    day: 'День 5',
    title: 'Ворона',
    image: 'https://avatars.mds.yandex.net/i?id=f9d4237bb9ac3c820a385008266fc266cd0bad98-4560311-images-thumbs&n=13',
    description: ' Вороны умеют использовать инструменты и даже планировать свои действия.'
  },
  {
    id: '6',
    day: 'День 6',
    title: 'Кенгуру',
    image: 'https://avatars.mds.yandex.net/i?id=53a5b337fdedf88e0159b96ab7f21dffb35ae9fc-9865355-images-thumbs&n=13',
    description: 'Кенгуру не могут двигаться назад из-за строения своих задних лап.'
  },
  {
    id: '7',
    day: 'День 7',
    title: 'Крот',
    image: 'https://avatars.mds.yandex.net/i?id=ee8f90a1409f89f716756c5e466c223785d78771-4809557-images-thumbs&n=13',
    description: 'Кроты могут копать туннели длиной до 100 метров за одну ночь.'
  },
  {
    id: '8',
    day: 'День 8',
    title: 'Осьминог',
    image: 'https://avatars.mds.yandex.net/i?id=4fc8eda4be6efbdfd45e982c90b51cf0a2ce9114-12528721-images-thumbs&n=13',
    description: 'У осьминогов три сердца, и их кровь синего цвета из-за содержания гемоцианина.'
  },
  {
    id: '9',
    day: 'День 9',
    title: 'Фламинго',
    image: 'https://avatars.mds.yandex.net/i?id=bc2f3022040c9dbf16a346c6c9c5d9112772f464-9709143-images-thumbs&n=13',
    description: ' Розовый цвет фламинго – результат питания ракообразными, богатыми каротиноидами.'
  },
  {
    id: '10',
    day: 'День 10',
    title: 'Черепаха',
    image: 'https://avatars.mds.yandex.net/i?id=44aa1ef7fd3cae10f2ce8a258c35f618fdd979a0-6824808-images-thumbs&n=13',
    description: 'Некоторые виды черепах могут дышать через кожу и даже задний проход.'
  },
  {
    id: '11',
    day: 'День 11',
    title: 'Жираф',
    image: 'https://avatars.mds.yandex.net/i?id=13a122fbf0a65d2400086ef44364c6ed1c6bda9e-9709143-images-thumbs&n=13',
    description: 'Сердце жирафа весит около 11 кг и перекачивает кровь к его длинной шее.'
  },
  {
    id: '12',
    day: 'День 12',
    title: 'Ёж',
    image: 'https://avatars.mds.yandex.net/i?id=74c2ce067a1d28e18e2c133d9c681b67cab430b8-9097903-images-thumbs&n=13',
    description: 'Когда ежи в стрессе, они начинают чесаться, как люди.'
  },
  {
    id: '13',
    day: 'День 13',
    title: 'Бобр',
    image: 'https://avatars.mds.yandex.net/i?id=beab63613ae231aab39bed94ad9d87a3d9067704-12480039-images-thumbs&n=13',
    description: 'Бобры могут задерживать дыхание под водой до 15 минут.'
  },
  {
    id: '14',
    day: 'День 14',
    title: 'Попугай',
    image: 'https://avatars.mds.yandex.net/i?id=314128498a10c2027c52af2f7094d953a99c6ecf-12421994-images-thumbs&n=13',
    description: ' Попугаи могут запоминать слова и даже осмысленно использовать их в разговоре.'
  },
  {
    id: '15',
    day: 'День 15',
    title: 'Хамелеон',
    image: 'https://avatars.mds.yandex.net/i?id=05faadeae3fa3efb95f338378aa419290fc74d38-10375548-images-thumbs&n=13',
    description: 'Хамелеоны меняют цвет не только для маскировки, но и для выражения эмоций.'
  },
  {
    id: '16',
    day: 'День 16',
    title: 'Летучая мышь',
    image: 'https://avatars.mds.yandex.net/i?id=e0bd285d04480012b13a383c5afe0496f15f9c18-10411335-images-thumbs&n=13',
    description: 'Летучие мыши – единственные млекопитающие, способные к активному полёту.'
  },
  {
    id: '17',
    day: 'День 17',
    title: 'Белка',
    image: 'https://avatars.mds.yandex.net/i?id=536351d63663dd9d6adb4788ec8d4c6f6cef3fbaf3ea27c9-12690968-images-thumbs&n=13',
    description: 'Белки запоминают места, где прячут еду, но иногда "воруют" тайники других белок.'
  },
  {
    id: '18',
    day: 'День 18',
    title: 'Пингвин',
    image: 'https://avatars.mds.yandex.net/i?id=062bfd13e1da873f9f43ef6e9c8ec5719eb70bb663022412-5485758-images-thumbs&n=13',
    description: 'Пингвины делают предложения своим партнёрам, даря камни в знак любви.'
  },
  {
    id: '19',
    day: 'День 19',
    title: 'Лев',
    image: 'https://avatars.mds.yandex.net/i?id=35565140cd54b99e18af55f137cdce75ec47457e-8907325-images-thumbs&n=13',
    description: 'Львы спят до 20 часов в сутки, что делает их одними из самых ленивых хищников.'
  },
  {
    id: '20',
    day: 'День 20',
    title: 'Панда',
    image: 'https://avatars.mds.yandex.net/i?id=3045742c382bcbdb8e0d68c0ef31ab3a3fdb1027-7757653-images-thumbs&n=13',
    description: 'Панды тратят до 16 часов в день на еду, съедая до 40 кг бамбука.'
  },
  {
    id: '21',
    day: 'День 21',
    title: 'Крокодил',
    image: 'https://avatars.mds.yandex.net/i?id=890c9e59a45c32ed38e189fd7ef97b066c5820db-4135367-images-thumbs&n=13',
    description: ' Крокодилы могут жить без еды до нескольких месяцев.'
  },
  {
    id: '22',
    day: 'День 22',
    title: 'Акула',
    image: 'https://avatars.mds.yandex.net/i?id=0416627f4b47268f6fe8485cc37338ac3a65a285-8223286-images-thumbs&n=13',
    description: 'У акул есть электрорецепторы, позволяющие обнаруживать добычу по её биотокам.'
  },
  {
    id: '23',
    day: 'День 23',
    title: 'Пчела',
    image: 'https://avatars.mds.yandex.net/i?id=1c10b7e03016370a1e01976df742761099920456-12728486-images-thumbs&n=13',
    description: 'Пчёлы танцуют, чтобы сообщить своим сородичам, где находится нектар.'
  },
  {
    id: '24',
    day: 'День 24',
    title: 'Муравей',
    image: 'https://avatars.mds.yandex.net/i?id=6184ed8276be83dcd3a81a6e8f33e15aa1614406-13083617-images-thumbs&n=13',
    description: 'Муравьи никогда не спят и могут "разговаривать" с помощью феромонов.'
  },
  {
    id: '25',
    day: 'День 25',
    title: 'Медведь',
    image: 'https://avatars.mds.yandex.net/i?id=5b2ec78a5d1363df490e43bd238da857a9a344c5-8310601-images-thumbs&n=13',
    description: ' Медведи способны узнавать друг друга даже спустя годы разлуки.'
  },
  {
    id: '26',
    day: 'День 26',
    title: 'Коала',
    image: 'https://avatars.mds.yandex.net/i?id=176b8265c6cee54d88405f4f6999982f36cc1952-13087339-images-thumbs&n=13',
    description: 'Коалы спят до 22 часов в сутки из-за низкокалорийного питания.'
  },
  {
    id: '27',
    day: 'День 27',
    title: 'Улитка',
    image: 'https://avatars.mds.yandex.net/i?id=68e208225ecb4adf43502ab7a7f275fdaabcfccb-9148232-images-thumbs&n=13',
    description: ' Улитки могут спать до 3 лет подряд в условиях засухи.'
  },
  {
    id: '28',
    day: 'День 28',
    title: 'Орёл',
    image: 'https://avatars.mds.yandex.net/i?id=58cb5c6f3f66923c2933a21ec196e76353bc28cf-4507907-images-thumbs&n=13',
    description: 'Орлы видят добычу на расстоянии более 3 километров.'
  },
  {
    id: '29',
    day: 'День 29',
    title: 'Змея',
    image: 'https://avatars.mds.yandex.net/i?id=01cfae77fcac511236d5a779f9faa70d9eb3af95-5348153-images-thumbs&n=13',
    description: 'Змеи могут ощущать тепло добычи с помощью специальных органов на морде.'
  },
  {
    id: '30',
    day: 'День 30',
    title: 'Божья коровка',
    image: 'https://avatars.mds.yandex.net/i?id=dfa72e9c4252134fa5989c9a6c4e8887da070aa8-5123535-images-thumbs&n=13',
    description: 'Божьи коровки выпускают неприятный запах, чтобы отпугивать хищников.'
  },

  
];

const AnimalFactCard: React.FC<{ fact: AnimalFact }> = ({ fact }) => (
  <Card style={{ margin: 10 }}>
    <Card.Content>
      <Title>{fact.day} - {fact.title}</Title>
    </Card.Content>
    <Image source={{ uri: fact.image }} style={{ height: 200, width: '100%' }} />
    <Card.Content>
      <Paragraph>{fact.description}</Paragraph>
    </Card.Content>
  </Card>
);

const App: React.FC = () => {
  return (
    <FlatList
      data={animalFacts}
      keyExtractor={item => item.id}
      renderItem={({ item }) => <AnimalFactCard fact={item} />}
    />
  );
};

export default App;
