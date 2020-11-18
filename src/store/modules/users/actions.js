import http from "@/http";

const setUserList = async ({ commit }) => {
  const listUsers = (await http.get("/users")).data._embedded.users;
  commit("SET_LIST_USERS", { listUsers });
};

const setUser = async ({ commit }, obj) => {
  const user = (await http.get("/users/" + obj)).data;
  commit("SET_SHOW_USER", { user });
};

export default {
  setUserList,
  setUser
};
