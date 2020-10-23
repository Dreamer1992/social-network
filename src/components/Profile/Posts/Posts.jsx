import React from 'react';
import styles from './Posts.module.css';
import Post from "./Post/Post";
import AddNewPostForm from "./AddNewPostForm/AddNewPostForm";

const Posts = React.memo(
  (props) => {

    let postsElements = props.posts.map(post => <Post key={post.id} id={post.id} message={post.message}
                                                      like={post.like}/>);

    let onAddPost = (values) => {
      props.addPost(values.newPostText);
    }

    return (
      <div>
        <h3>My posts</h3>

        <div className={styles.postTextarea}>
          <div>
            <AddNewPostForm onSubmit={onAddPost}/>
          </div>
        </div>

        {postsElements}
      </div>
    )
  }
)

export default Posts;