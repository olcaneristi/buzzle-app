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
    description:
      "We need distributors to evangelize the new line to local markets let's not solutionize this right now parking lot it.",
    image: 'https://img-9gag-fun.9cache.com/photo/axzYVjY_700bwp.webp',
    likes: 452,
    comments: 28,
    date: '2021-12-28 11:51:16',
    isBookmarked: false,
    isLiked: true,
    user: {
      username: 'jack \b',
      profilePicture: require('../assets/avatar-jack.png'),
    },
  },
  {
    id: uuid(),
    description:
      "We are a big name to have in your portfolio will royalties in the company do instead of cash yet the website doesn't have the theme i was going for and try a more powerful colour can the black be darker and thats not what i saw in my head at all.",
    image: 'https://img-9gag-fun.9cache.com/photo/a8E22K6_460swp.webp',
    likes: 281,
    comments: 13,
    date: '2021-12-28 14:53:16',
    isBookmarked: true,
    isLiked: false,
    user: {
      username: 'mark_zuckerberg  \b',
      profilePicture: require('../assets/avatar.png'),
    },
  },
  {
    id: uuid(),
    description:
      "Time vampire downselect yet we've got to manage that low hanging fruit. Unlock meaningful moments of relaxation ultimate measure of success anti-pattern.",
    image: 'https://img-9gag-fun.9cache.com/photo/a27vwpO_460swp.webp',
    likes: 236,
    comments: 7,
    date: '2021-12-27 23:10:16',
    isBookmarked: false,
    isLiked: false,
    user: {
      username: 'lisa_su  \b',
      profilePicture: require('../assets/avatar-lisa.png'),
    },
  },
];
