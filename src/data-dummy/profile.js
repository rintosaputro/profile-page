import background from './images/background.png';
import photoProfile from './images/profile.jpg';
import imagePost from './images/image-post.png';

const profile = {
  fullName: 'Ryudan Sesa',
  followings: 5,
  followers: 5,
  about: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the',
  background,
  photoProfile,
  points: 17.4,
  profileCompleteness: 5,
  post: {
    totalPost: 12,
    posts: [
      {
        id: 1,
        category: 'Opini',
        title: 'Belajar Menjadi Manusia',
        image: imagePost,
        contents: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        likes: 32,
        emotes: 23,
        comments: 15,
        views: 2,
        reposts: 12,
        createdAt: new Date('2022-06-08T12:00:00Z'),
      },
      {
        id: 2,
        category: 'Opini',
        title: 'Belajar Menjadi Manusia',
        image: imagePost,
        contents: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        likes: 32,
        emotes: 23,
        comments: 15,
        views: 2,
        reposts: 12,
        createdAt: new Date('2022-06-08T12:00:00Z'),
      },
    ],
  },
};

export default profile;
