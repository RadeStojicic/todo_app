<template>
  <div class="container">
    <div class="heroContainer">
      <h1 class="heroTitle">
        Take
        <span style="text-decoration: underline #335af3">Control</span>
        of Your Schedule using simple to do List
      </h1>
      <h2 class="heroSubtitle">
        30+ million people organize their tasks, lists and manage their team’s
        projects with Quick Task
      </h2>
      <button class="getStarted">
        Get Started
        <font-awesome-icon class="arrowRight" icon="fa-solid fa-arrow-right" />
      </button>
    </div>
  </div>
</template>

<script setup>
</script>

<style  scoped>
.container {
  width: 100vw;
}
.heroContainer {
  max-width: 1300px;
  width: 80%;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 60px;
}
.heroTitle {
  width: 80%;
  text-align: center;
  font-size: 3.2em;
  font-weight: 800;
  color: rgb(18, 22, 29);
}

.heroSubtitle {
  margin-top: 20px;
  width: 55%;
  text-align: center;
  font-size: 1.1em;
  font-weight: 400;
  color: rgb(148, 148, 148);
}

.getStarted {
  background-color: #335af3;
  padding: 15px 22px 15px 22px;
  width: 170px;
  border: none;
  color: white;
  margin-top: 40px;
  border-radius: 5px;
  font-size: 1em;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
}
.arrowRight {
  font-size: 1em;
}
</style>