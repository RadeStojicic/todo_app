<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <header>
    <nav class="navContainer">
      <div class="linksContainer">
        <div class="navLeft">
          <font-awesome-icon class="listIcon" :icon="['fas', 'fa-list']" />
          <a class="siteName" href="#">To Do List</a>
        </div>
        <ul class="navLinks">
          <RouterLink to="/">All</RouterLink>
          <RouterLink to="/done">Done</RouterLink>
          <RouterLink to="/undone">Undone</RouterLink>
        </ul>
      </div>
    </nav>
    <hr class="line" />
  </header>
</template>

<style scoped>
header {
  width: 100%;
  background-color: #ffffff;
}

.siteName {
  text-decoration: none;
  font-size: 1.3em;
  font-weight: 600;
  width: 100%;
  color: rgb(93, 93, 93);
  text-decoration: line-through 2px #335af3;
}

.listIcon {
  color: #262628;
  font-size: 1.8em;
}
.navLeft {
  display: flex;
  justify-content: center;
  align-content: center;
  gap: 10px;
}

.navContainer {
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.navLinks {
  display: flex;
  gap: 10px;
}
.navLinks div {
  display: flex;
}
.navLinks a {
  text-decoration: none;
  display: flex;
  justify-content: center;
  width: 80px;
  border-radius: 30px;
  padding: 7px 15px 7px 15px;
  font-size: 0.95em;
  font-weight: 300;
}
.linksContainer {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 40%;
  margin: auto;
}

.router-link-active {
  color: white;
  background-color: #335af3;
  border-radius: 20px;
}

.navLinks a:hover {
  background-color: #335af3;
  color: white;
  transition: 0.2s;
}

.line {
  border: 1px rgba(239, 239, 239, 0.388) solid;
}
</style>
