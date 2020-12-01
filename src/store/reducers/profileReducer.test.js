import profileReducer, {addPostActionCreator, deletePost} from "./profileReducer";

let state = {
  posts: [
    {id: 1, message: 'Hi, how are you?', like: 10},
    {id: 2, message: 'It\'s my first post', like: 17}
  ]
}

it('length of post should be incremented', () => {
  // 1. test data
  let action = addPostActionCreator('Text test');

  // 2. action
  let newState = profileReducer(state, action);

  // 3. expectation
  expect(newState.posts.length).toBe(3);
});

it('message of new post should be correct', () => {
  // 1. test data
  let action = addPostActionCreator('Text test');

  // 2. action
  let newState = profileReducer(state, action);

  // 3. expectation
  expect(newState.posts[2].message).toBe('Text test');
});

it('after deleting length of messages should be decrement', () => {
  // 1. test data
  let action = deletePost(1);

  // 2. action
  let newState = profileReducer(state, action);

  // 3. expectation
  expect(newState.posts.length).toBe(1);
});

it('after deleting length shouldn\'t be decrement if id is  incorrect', () => {
  // 1. test data
  let action = deletePost(100);

  // 2. action
  let newState = profileReducer(state, action);

  // 3. expectation
  expect(newState.posts.length).toBe(2);
});