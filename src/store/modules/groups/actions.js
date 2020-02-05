import axios from "axios";

const setGroupList = async ({ commit }) => {
  const listGroups = (await axios.get("/groups")).data._embedded.groups;
  commit("SET_LIST_GROUPS", { listGroups });
};

const setGroup = async ({ commit }, obj) => {
  const group = (await axios.get("/groups/" + obj)).data;
  commit("SET_SHOW_GROUP", { group });
};

export default {
  setGroupList,
  setGroup
};
