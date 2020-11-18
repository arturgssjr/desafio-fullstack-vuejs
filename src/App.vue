<template>
  <div id="app">
    <nav-bar url="/">
      <li class="nav-item">
        <router-link class="nav-link" to="/users">Usuários</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/groups">Grupos</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/files">Arquivos</router-link>
      </li>
    </nav-bar>
    <content-bar />
    <footer-bar />
  </div>
</template>

<script>
import NavBar from "@/components/layouts/NavBar";
import FooterBar from "@/components/layouts/FooterBar";
import ContentBar from "@/components/layouts/ContentBar";

export default {
  name: "App",
  components: {
    NavBar,
    FooterBar,
    ContentBar
  }
};
</script>

<style></style>
