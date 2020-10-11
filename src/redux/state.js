let rerenderEntireThree = () => {
  console.log('State changed');
}

let state = {
  profilePage: {
    posts: [
      {
        id: 1,
        message: 'Hi, how are you?',
        like: 10
      },
      {
        id: 1,
        message: 'It\'s my first post',
        like: 17
      }
    ],
    newPostText: 'it-kamasutra'
  },
  dialogsPage: {
    dialogs: [
      {
        id: 1,
        name: 'Alex'
      },
      {
        id: 2,
        name: 'Petr'
      },
      {
        id: 3,
        name: 'Igor'
      },
      {
        id: 4,
        name: 'Lera'
      },
      {
        id: 5,
        name: 'Nina'
      }
    ],
    messages: [
      {
        id: 1,
        message: 'Hi'
      },
      {
        id: 2,
        message: 'How are you?'
      },
      {
        id: 3,
        message: 'Yo'
      },
    ]
  }
}

export const addPost = () => {
  let newPost = {
    id: 6,
    message: state.profilePage.newPostText,
    like: 0
  }
  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = '';
  rerenderEntireThree(state);
}

export const updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireThree(state);
}

export const subscribe = (observer) => {
  rerenderEntireThree = observer;
}

export default state;