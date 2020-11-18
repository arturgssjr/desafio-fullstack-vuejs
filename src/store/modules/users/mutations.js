const SET_LIST_USERS = (state, obj) => {
  state.listUsers = obj.listUsers;
};

const SET_SHOW_USER = (state, obj) => {
  state.user = obj.user;
};

export default {
  SET_LIST_USERS,
  SET_SHOW_USER
};
