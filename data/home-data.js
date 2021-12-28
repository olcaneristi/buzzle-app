import { v4 as uuid } from 'uuid';

export const stories = [
  {
    id: uuid(),
    source: '',
    user: 'Ugur Erdal',
    avatar: '',
  },
  {
    id: uuid(),
    source: '',
    user: 'Mustafa',
    avatar: '',
  },
  {
    id: uuid(),
    source: '',
    user: 'Emre Yilmaz',
    avatar: '',
  },
  {
    id: uuid(),
    source: '',
    user: 'Cenk Gun',
    avatar: '',
  },
];

export const postList = [
  {
    id: uuid(),
    description: 'AHAHAHAHHAHAHAH',
    image:
      'https://instagram.fist7-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/260528903_556149392140448_5189236990601122998_n.jpg?_nc_ht=instagram.fist7-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=b4_foWXR-Z4AX-7deBn&edm=AABBvjUBAAAA&ccb=7-4&oh=00_AT8yKTy9Ahzr8cAjpXkwzoTKIuKBbjWng4QoUOfJCAlRCQ&oe=61D2227E&_nc_sid=83d603',
    likes: 452,
    comments: 28,
    date: '2021-12-28 11:51:16',
    isBookmarked: false,
    user: {
      username: 'jack \b',
      profilePicture: require('../assets/avatar-jack.png'),
    },
  },
  {
    id: uuid(),
    description: 'LOL',
    image:
      'https://instagram.fist7-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/269957938_351478859644054_1479611466188266925_n.jpg?_nc_ht=instagram.fist7-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=5DEK1RrGkTgAX9qlGGi&edm=AABBvjUBAAAA&ccb=7-4&oh=00_AT_KrfJB0mQWVNX2a8-YXrGDXsgxBl9aqC2_YMHHNdelWA&oe=61D24D77&_nc_sid=83d603',
    likes: 281,
    comments: 13,
    date: '2021-12-28 14:53:16',
    isBookmarked: false,
    user: {
      username: 'mark_zuckerberg  \b',
      profilePicture: require('../assets/avatar.png'),
    },
  },
  {
    id: uuid(),
    description: 'There is no more Mark Zuckerberg... AMD is won! Hahahahah kehkehkeh',
    image:
      'https://instagram.fist7-2.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/267985667_307042977970888_5405582047234793609_n.jpg?_nc_ht=instagram.fist7-2.fna.fbcdn.net&_nc_cat=104&_nc_ohc=6s8LOD4NLqQAX_U7Oh4&edm=AABBvjUBAAAA&ccb=7-4&oh=00_AT-BAoOr1v0EcXgAtApRf7eGlTh1jNlnliHfR8J4qF_Akg&oe=61D2B05B&_nc_sid=83d603',
    likes: 236,
    comments: 7,
    date: '2021-12-27 23:10:16',
    isBookmarked: false,
    user: {
      username: 'lisa_su  \b',
      profilePicture: require('../assets/avatar-lisa.png'),
    },
  },
];
