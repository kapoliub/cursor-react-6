import initialState from "../initialState";

export default (store = initialState, action) => {
  switch (action.type) {
    case "ADD_NEW_POST": {
      let currentUser = store.find((el) => el.author.name === action.user.name);
      return [
        ...store,
        {
          author: {
            name: action.user.name,
            photo: currentUser.author.photo,
            nickname: currentUser.author.nickname,
          },
          post: {
            date: new Date().toLocaleDateString(),
            text: action.user.text,
            img: action.user.img,
            commentsCount: 0,
            repostsCount: 0,
            likesCount: 0,
          },
        },
      ];
    }
    case "CHANGE_COMMENTS_COUNT": {
      action.isClicked
        ? --store[action.userID].post.commentsCount
        : ++store[action.userID].post.commentsCount;
      return [...store];
    }
    case "CHANGE_REPOSTS_COUNT": {
      action.isClicked
        ? --store[action.userID].post.repostsCount
        : ++store[action.userID].post.repostsCount;
      return [...store];
    }
    case "CHANGE_LIKES_COUNT": {
      action.isClicked
        ? --store[action.userID].post.likesCount
        : ++store[action.userID].post.likesCount;
      return [...store];
    }
    default:
      return initialState;
  }
};
