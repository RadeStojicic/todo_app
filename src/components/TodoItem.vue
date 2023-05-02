<script setup>
import { defineProps } from "vue";
import { ref } from "vue";
import "primevue/resources/themes/bootstrap4-light-blue/theme.css";
import "primevue/resources/primevue.min.css";

const props = defineProps({
  todo: {
    type: Object,
    required: true,
  },
  index: {
    type: Number,
    required: true,
  },
});

const customSettings = ref(false);
const openSettings = () => {
  customSettings.value = !customSettings.value;
};
</script>

<template>
  <div>
    <div>
      <div class="tasksContainer">
        <div class="newTask">
          <div class="taskLeft">
            <input
              type="checkbox"
              class="myCheckbox"
              :value="todo.isCompleted"
              @input="$emit('complete-state', index)"
            />
            <input v-if="todo.isEditing" type="text" :value="todo.todo" />
            <p v-else :class="{ checked: todo.isCompleted }">{{ todo.todo }}</p>
          </div>
          <div class="taskRight">
            <!-- <p
              :class="{
                categoryDone: todo.category == 'Completed',
                categoryUndone: todo.category == 'Uncompleted',
              }"
            >
              {{ todo.category }}
            </p> -->

            <font-awesome-icon
              class="seeMoreTodo"
              icon="fa-solid fa-ellipsis-vertical"
              @click="openSettings()"
            />
            <div v-if="customSettings == true" class="settings">
              <a href="">
                <div class="settingsContainer">
                  <div class="settingsSubContainer">
                    <font-awesome-icon icon="fa-solid fa-file-pen" />
                    <div>Edit</div>
                  </div>
                </div>
              </a>
              <a href="">
                <div class="settingsContainer">
                  <div class="settingsSubContainer">
                    <font-awesome-icon icon="fa-solid fa-circle-info" />
                    <div>Info</div>
                  </div>
                </div>
              </a>
              <a href="">
                <div class="settingsContainer">
                  <div class="settingsSubContainer">
                    <font-awesome-icon icon="fa-solid fa-box-archive" />
                    <div>Archive</div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- <font-awesome-icon icon="fa-solid fa-square-check" /> -->
</template>

<style scoped>
.tasksContainer {
  width: 40%;
  margin: 12px auto;
  display: flex;
  justify-content: center;
}
.newTask {
  background-color: whitesmoke;
  width: 100%;
  padding: 15px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
}

.newTask:hover {
  cursor: pointer;
}

.taskLeft {
  display: flex;
  align-items: center;
  gap: 15px;
  user-select: none;
}

.fa-ellipsis {
  font-size: 1.5em;
  color: rgb(41, 41, 41);
}

.taskRight {
  display: flex;
  align-items: center;
  gap: 30px;
  margin-right: 30px;
}

.taskRight p {
  color: gray;
}

.checked {
  text-decoration: line-through;
}

.categoryUndone {
  background-color: rgba(255, 171, 203, 0.524);
  padding: 5px 10px 5px 10px;
  border-radius: 50px;
  font-size: 0.8em;
  font-weight: 500;
  user-select: none;
}

.categoryDone {
  background-color: rgba(155, 197, 255, 0.524);
  padding: 5px 10px 5px 10px;
  border-radius: 50px;
  font-size: 0.8em;
  font-weight: 500;
  user-select: none;
}

.myCheckbox {
  transform: scale(1.3);
}

.seeMoreTodo {
  color: rgb(131, 131, 131);
  padding: 10px;
  display: block;
  position: absolute;
  right: 20px;
}

.settings {
  position: absolute;
  right: -110px;
  top: 40px;
  width: 160px;
  z-index: 1;
  background-color: white;
  box-shadow: 0px 0px 10px 5px #f1f1f13e;
  border: 1px rgb(220, 220, 220) solid;
  border-radius: 10px;
}

.settings a div {
  text-decoration: none;
  color: rgb(31, 31, 31);
  padding: 6px 6px 6px 10px;
  width: 100%;
  margin: auto;
}

.settings a {
  text-decoration: none;
  font-size: 0.95em;
}
.fa-box-archive {
  color: rgb(59, 59, 59);
  font-size: 0.95em;
}
.fa-file-pen {
  color: rgb(59, 59, 59);
  font-size: 0.95em;
}
.fa-circle-info {
  color: rgb(59, 59, 59);
  font-size: 0.95em;
}
.settingsContainer {
  width: 100%;
}
.settingsContainer:hover {
  width: 100%;
  background-color: rgb(237, 237, 237);
}

.settingsSubContainer {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 80%;
  margin: auto;
}
</style>
