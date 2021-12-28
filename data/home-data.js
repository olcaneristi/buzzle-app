import { v4 as uuid } from 'uuid';

export const data = [
  {
    user_id: 1,
    user_image:
      'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
    user_name: 'nina_ashley',
    stories: [
      {
        story_id: 1,
        story_image: 'https://image.freepik.com/free-vector/universe-mobile-wallpaper-with-planets_79603-600.jpg',
        onPress: () => console.log('story 1 swiped'),
      },
      {
        story_id: 2,
        story_image: 'https://image.freepik.com/free-vector/mobile-wallpaper-with-fluid-shapes_79603-601.jpg',
      },
    ],
  },
  {
    user_id: 2,
    user_image:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
    user_name: 'mia_walker',
    stories: [
      {
        story_id: 1,
        story_image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjORKvjcbMRGYPR3QIs3MofoWkD4wHzRd_eg&usqp=CAU',
        onPress: () => console.log('story 1 swiped'),
      },
      {
        story_id: 2,
        story_image:
          'https://files.oyebesmartest.com/uploads/preview/vivo-u20-mobile-wallpaper-full-hd-(1)qm6qyz9v60.jpg',
        onPress: () => console.log('story 2 swiped'),
      },
    ],
  },
  {
    user_id: 3,
    user_image:
      'https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1085&q=80',
    user_name: 'johnkane1',
    stories: [
      {
        story_id: 1,
        story_image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjORKvjcbMRGYPR3QIs3MofoWkD4wHzRd_eg&usqp=CAU',
        onPress: () => console.log('story 1 swiped'),
      },
      {
        story_id: 2,
        story_image:
          'https://files.oyebesmartest.com/uploads/preview/vivo-u20-mobile-wallpaper-full-hd-(1)qm6qyz9v60.jpg',
        onPress: () => console.log('story 2 swiped'),
      },
    ],
  },
  {
    user_id: 4,
    user_image:
      'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
    user_name: 'nina_ashley',
    stories: [
      {
        story_id: 1,
        story_image: 'https://image.freepik.com/free-vector/universe-mobile-wallpaper-with-planets_79603-600.jpg',
        onPress: () => console.log('story 1 swiped'),
      },
      {
        story_id: 2,
        story_image: 'https://image.freepik.com/free-vector/mobile-wallpaper-with-fluid-shapes_79603-601.jpg',
      },
    ],
  },
  {
    user_id: 5,
    user_image:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
    user_name: 'mia_walker',
    stories: [
      {
        story_id: 1,
        story_image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjORKvjcbMRGYPR3QIs3MofoWkD4wHzRd_eg&usqp=CAU',
        onPress: () => console.log('story 1 swiped'),
      },
      {
        story_id: 2,
        story_image:
          'https://files.oyebesmartest.com/uploads/preview/vivo-u20-mobile-wallpaper-full-hd-(1)qm6qyz9v60.jpg',
        onPress: () => console.log('story 2 swiped'),
      },
    ],
  },
  {
    user_id: 6,
    user_image:
      'https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1085&q=80',
    user_name: 'johnkane1',
    stories: [
      {
        story_id: 1,
        story_image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjORKvjcbMRGYPR3QIs3MofoWkD4wHzRd_eg&usqp=CAU',
        onPress: () => console.log('story 1 swiped'),
      },
      {
        story_id: 2,
        story_image:
          'https://files.oyebesmartest.com/uploads/preview/vivo-u20-mobile-wallpaper-full-hd-(1)qm6qyz9v60.jpg',
        onPress: () => console.log('story 2 swiped'),
      },
    ],
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
