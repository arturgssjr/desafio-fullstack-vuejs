import http from "@/http";

const setGroupList = async ({ commit }) => {
  const listGroups = (await http.get("/groups")).data._embedded.groups;
  commit("SET_LIST_GROUPS", { listGroups });
};

const setGroup = async ({ commit }, obj) => {
  const group = (await http.get("/groups/" + obj)).data;
  commit("SET_SHOW_GROUP", { group });
};

export default {
  setGroupList,
  setGroup
};
