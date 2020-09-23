import React, { useState } from "react";
import verifiedIcon from "../assets/img/verified-logo.svg";
import arrowIcon from "../assets/img/arrow-logo.svg";
import commentIcon from "../assets/img/comment_icon.svg";
import repostIcon from "../assets/img/repost_icon.svg";
import likeIcon from "../assets/img/like_icon.svg";
import shareIcon from "../assets/img/share_icon.svg";

function Post({
  author,
  post,
  postID,
  changeCommentsCount,
  changeRepostsCount,
  changeLikesCount,
}) {
  const [isCommentClicked, setIsCommentClicked] = useState(false);
  const [isRepostClicked, setIsRepostClicked] = useState(false);
  const [isLikeClicked, setIsLikeClicked] = useState(false);
  const changeCommentsCountFunc = () => {
    changeCommentsCount(postID, isCommentClicked);
    setIsCommentClicked(!isCommentClicked);
  };
  const changeRepostsCountFunc = () => {
    changeRepostsCount(postID, isRepostClicked);
    setIsRepostClicked(!isRepostClicked);
  };
  const changeLikesCountFunc = () => {
    changeLikesCount(postID, isLikeClicked);
    setIsLikeClicked(!isLikeClicked);
  };
  return (
    <div className="post">
      <div className="user-logo-block">
        <img src={author.photo} alt="user_logo" />
      </div>
      <div className="post-info-block">
        <div className="text-block">
          <div className="post-info">
            <h4>{author.name}</h4>
            <img src={verifiedIcon} alt="verified_icon" />
            <span>{`${author.nickname} · ${post.date}`}</span>
            <img src={arrowIcon} alt="arrow_icon" className="arrow-icon" />
          </div>
          <div className="post-content">
            <p>{post.text}</p>
          </div>
        </div>
        <div className="content-img-block">
          <img src={post.img} alt="post_img" />
        </div>
        <div className="actions-block">
          <div className="action" onClick={changeCommentsCountFunc}>
            <img src={commentIcon} alt="action_icon" />
            <span>{post.commentsCount}</span>
          </div>
          <div className="action" onClick={changeRepostsCountFunc}>
            <img src={repostIcon} alt="action_icon" />
            <span>{post.repostsCount}</span>
          </div>
          <div className="action" onClick={changeLikesCountFunc}>
            <img src={likeIcon} alt="action_icon" />
            <span>{post.likesCount}</span>
          </div>
          <div className="action">
            <img src={shareIcon} alt="action_icon" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
