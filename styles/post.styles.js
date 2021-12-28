import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  post: {
    marginBottom: 20,
  },
  heading: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  miniPicture: {
    width: 32,
    height: 32,
    borderRadius: 30,
  },
  username: {
    marginHorizontal: 8,
    fontSize: 14,
    fontWeight: '500',
  },

  content: {
    marginTop: 15,
    paddingHorizontal: 10,
  },

  interactions: {
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  leftInteractions: {
    flexDirection: 'row',
  },

  items: {
    marginHorizontal: 8,
  },

  like: {
    marginLeft: 0,
  },
  bookmark: {
    marginRight: 0,
  },

  postUsername: {
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 19,
  },

  postDescription: {
    fontSize: 14,
    fontWeight: '400',
  },

  likes: {
    marginBottom: 6,
  },

  likesCount: {
    fontWeight: '600',
  },

  description: {
    flexDirection: 'row',
  },

  time: {
    fontSize: 12.25,
    opacity: 0.5,
  },

  comments: {
    opacity: 0.55,
  },

  translate: {
    fontSize: 12.25,
    fontWeight: '600',
    paddingLeft: 5,
  },
});
