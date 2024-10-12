export interface Question {
  id: number;
  question: string;
  options: Record<string, string>;
  answer: string;
}

export const DUMMY_QUESTIONS: Question[] = [
  {
    id: 1,
    question: `<p>"Şair, şiirlerinde hava alacak boşluk bırakmıyor, her şeyi söylüyor. Okuyucunun adına da kendisi konuşuyor. Bunun için dizleri hayalinizi perdeliyor, soluğunuzu kesiyor, sizi boğuyor."</p>
    <br/> <p><strong>Bu parçada geçen “hava alacak boşluk bırakmamak” sözüyle anlatılmak istenen aşağıdakilerden hangisidir?</strong></p>`,
    options: {
      A: `<p><b>Görgüsüzce</b> davranmasaydın, seni böyle dışlamazdık.</p>`,
      B: `<p>Ekip arkadaşlarıyla ters düşmeyen, <b>uyumlu</b> bir teknisyendi</p>`,
      C: `<p>Her şeyin kendisinin olmasını isteyen <b>açgözlü</b> biriydi.</p>`,
      D: `<p>Bir dediği bir dediğini tutmayan <b>tutarsız</b> bir gazeteciydi.</p>`,
      E: `<p>Ağzında bakla ıslanmayan <b>boşboğaz</b> adamın tekiydi o.</p>`,
    },
    answer: 'C',
  },
  {
    id: 2,
    question:
      "'Bu kitabı o kadar çok sevdim ki elimden bırakamadım.' cümlesindeki altı çizili sözcük, aşağıdakilerden hangisiyle aynı anlamdadır?",
    options: {
      A: 'Beğendim',
      B: 'Duygulandım',
      C: 'İlgimi çekti',
      D: 'Okuyamadım',
      E: 'Sevemedim',
    },
    answer: 'A',
  },
  {
    id: 3,
    question: "'Ağır ağır çıkacaksın bu merdivenlerden' cümlesinde hangi edebi sanat vardır?",
    options: {
      A: 'Teşbih',
      B: 'İstiare',
      C: 'Kişileştirme',
      D: 'Mübalağa',
      E: 'Tenasüp',
    },
    answer: 'D',
  },
  {
    id: 4,
    question: 'Aşağıdaki cümlelerin hangisinde bir anlatım bozukluğu vardır?',
    options: {
      A: 'Sabahları erkenden kalkıyorum.',
      B: 'Kitabı okuduğum için çok mutlu oldum.',
      C: 'Yarın sinemaya gidip film izlemek istiyorum.',
      D: 'Gelecek hafta sınavları çalışmak için zamanım olmayacak.',
      E: 'O konuyu konuşarak çözdük.',
    },
    answer: 'D',
  },
  {
    id: 5,
    question: "Aşağıdakilerden hangisi 'öznel' bir yargıdır?",
    options: {
      A: 'Bu bina 1975 yılında inşa edilmiştir.',
      B: 'Türkçe, sondan eklemeli bir dildir.',
      C: 'Bu şiir çok duygusal ve anlamlıdır.',
      D: 'Dün gece çok yağmur yağdı.',
      E: 'Dünyanın en yüksek dağı Everest’tir.',
    },
    answer: 'C',
  },
  {
    id: 6,
    question: 'Aşağıdaki cümlelerin hangisinde bir deyim kullanılmıştır?',
    options: {
      A: 'Onunla her zaman iyi anlaşıyoruz.',
      B: 'Sınavı kazanmak için çok çalıştı.',
      C: 'Bu işin sonu hiç iyi görünmüyor.',
      D: 'Zamanı geldiğinde her şey hallolur.',
      E: 'Bu qınu çözmek için çok uğraştım.',
    },
    answer: 'A',
  },
  {
    id: 7,
    question: "'Gözüm kapalı bu işi hallederim.' cümlesinde hangi anlam vardır?",
    options: {
      A: 'Kendine güven',
      B: 'Korku',
      C: 'Tecrübesizlik',
      D: 'Endişe',
      E: 'Tereddüt',
    },
    answer: 'A',
  },
  {
    id: 8,
    question: "'İçeri girdiğinde herkes ona baktı.' cümlesinde hangi öğe eksiktir?",
    options: {
      A: 'Nesne',
      B: 'Zarf tümleci',
      C: 'Yüklem',
      D: 'Özne',
      E: 'Dolaylı tümleç',
    },
    answer: 'D',
  },
  {
    id: 9,
    question: "'Güzel bir gün geçirdik.' cümlesindeki 'güzel' kelimesinin cümledeki işlevi nedir?",
    options: {
      A: 'Zamir',
      B: 'Sıfat',
      C: 'Zarf',
      D: 'Bağlaç',
      E: 'Fiil',
    },
    answer: 'B',
  },
  {
    id: 10,
    question: "'Kalemi elinden bırakır bırakmaz kapıya yöneldi.' cümlesinde altı çizili ifade hangi anlamı taşır?",
    options: {
      A: 'Önce',
      B: 'Sonra',
      C: 'Eş zamanlı',
      D: 'Koşul',
      E: 'Amaç',
    },
    answer: 'C',
  },
  {
    id: 11,
    question: "'Bu sabah hava çok serindi, üşüdüm.' cümlesinde hangi bağlaç kullanılmıştır?",
    options: {
      A: 'Fakat',
      B: 'Ancak',
      C: 'Çünkü',
      D: 'Ve',
      E: 'Ki',
    },
    answer: 'D',
  },
  {
    id: 12,
    question: 'Aşağıdaki cümlelerin hangisinde neden-sonuç ilişkisi vardır?',
    options: {
      A: 'Yağmur yağdığı için pikniğe gidemedik.',
      B: 'Kitabı çok beğendim, tekrar okuyacağım.',
      C: 'Her sabah spor yapıyorum.',
      D: 'Sınav sonuçları açıklandı.',
      E: 'Arkadaşıyla uzun zamandır görüşmüyor.',
    },
    answer: 'A',
  },
  {
    id: 13,
    question: "'Bu yaz çok sıcak geçti.' cümlesinde 'çok' sözcüğü hangi görevdedir?",
    options: {
      A: 'Zarf',
      B: 'Sıfat',
      C: 'Zamir',
      D: 'Bağlaç',
      E: 'Fiil',
    },
    answer: 'A',
  },
  {
    id: 14,
    question: "'Her zaman elinden geleni yapar.' cümlesindeki 'her zaman' ifadesi aşağıdakilerden hangisidir?",
    options: {
      A: 'Zamir',
      B: 'Zarf',
      C: 'Sıfat',
      D: 'Fiil',
      E: 'Bağlaç',
    },
    answer: 'B',
  },
  {
    id: 15,
    question: 'Aşağıdaki cümlelerin hangisinde bir abartma söz konusudur?',
    options: {
      A: 'Derslerimi düzenli olarak çalışıyorum.',
      B: 'O kadar açtım ki bir orduyu doyurabilirdim.',
      C: 'Bu kitabı iki günde bitirdim.',
      D: 'Her hafta sonu sinemaya gidiyoruz.',
      E: 'Onunla konuşmak çok zor.',
    },
    answer: 'B',
  },
];

export interface ExamDetail {
  lesson: string;
  exam_name: string;
}

export const DUMMY_EXAM_DETAIL: ExamDetail = {
  lesson: 'Türkçe',
  exam_name: 'Konu Tarama Testi #1',
};
