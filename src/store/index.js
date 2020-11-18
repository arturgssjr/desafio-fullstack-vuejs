import Vue from "vue";
import Vuex from "vuex";

import groups from "./modules/groups/index";
import users from "./modules/users/index";

Vue.use(Vuex);

const modules = {
  groups,
  users
};

export default new Vuex.Store({
  modules
});
