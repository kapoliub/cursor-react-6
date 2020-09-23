import React, { useState } from "react";

import { connect } from "react-redux";
import Post from "./Post";

const mapState = (state) => {
  let flags = [];
  let output = [];
  for (let i = 0; i < state.postsPage.length; i++) {
    if (flags[state.postsPage[i].author.name]) continue;
    flags[state.postsPage[i].author.name] = true;
    output.push(state.postsPage[i].author.name);
  }
  return {
    postsPage: state.postsPage,
    authorsList: output,
  };
};

const mapDispatch = (dispatch) => ({
  addNewPost(user) {
    dispatch({
      type: "ADD_NEW_POST",
      user,
    });
  },
  changeCommentsCount(userID, isClicked) {
    dispatch({
      type: "CHANGE_COMMENTS_COUNT",
      userID,
      isClicked,
    });
  },
  changeRepostsCount(userID, isClicked) {
    dispatch({
      type: "CHANGE_REPOSTS_COUNT",
      userID,
      isClicked,
    });
  },
  changeLikesCount(userID, isClicked) {
    dispatch({
      type: "CHANGE_LIKES_COUNT",
      userID,
      isClicked,
    });
  },
});

function Posts({
  postsPage,
  addNewPost,
  authorsList,
  changeCommentsCount,
  changeRepostsCount,
  changeLikesCount,
}) {
  const [postText, setPostText] = useState("");
  const [postImgUrl, setPostImgUrl] = useState("");
  const [authorName, setAuthorName] = useState(postsPage[0].author.name);

  const changeHandler = (e) => {
    if (e.target.name === "post-text") {
      setPostText(e.target.value);
    } else if (e.target.name === "post-img-url") {
      setPostImgUrl(e.target.value);
    } else if (e.target.name === "author-name") {
      setAuthorName(e.target.value);
    }
  };

  const user = {
    name: authorName,
    img: postImgUrl,
    text: postText,
  };

  const addNewPostFunc = () => {
    if (postText && postImgUrl && authorName) {
      addNewPost(user);
      setPostText("");
      setPostImgUrl("");
      setAuthorName(postsPage[0].author.name);
    } else {
      console.log("Check input data");
    }
  };

  return (
    <div className="posts-page">
      <div>
        <input
          type="text"
          onChange={changeHandler}
          name="post-text"
          value={postText}
          placeholder="Post text"
        />
        <input
          type="text"
          onChange={changeHandler}
          name="post-img-url"
          value={postImgUrl}
          placeholder="Post image URL"
        />
        <select onChange={changeHandler} name="author-name" value={authorName}>
          {authorsList.map((el, i) => (
            <option key={i}>{el}</option>
          ))}
        </select>
        <button onClick={addNewPostFunc}>Add new post</button>
      </div>
      <div>
        {postsPage.map((el, i) => (
          <Post
            author={el.author}
            post={el.post}
            key={`${el.author.name}${i}`}
            postID={i}
            changeCommentsCount={changeCommentsCount}
            changeRepostsCount={changeRepostsCount}
            changeLikesCount={changeLikesCount}
          />
        ))}
      </div>
    </div>
  );
}

export default connect(mapState, mapDispatch)(Posts);
