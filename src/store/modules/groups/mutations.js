const SET_LIST_GROUPS = (state, obj) => {
  state.listGroups = obj.listGroups;
};

const SET_SHOW_GROUP = (state, obj) => {
  state.group = obj.group;
};

export default {
  SET_LIST_GROUPS,
  SET_SHOW_GROUP
};
