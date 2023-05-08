<script setup>
import { reactive, defineEmits } from "vue";

const emit = defineEmits(["create-todo"]);
const taskState = reactive({
  todo: "",
  invalid: null,
  errorMessage: "",
});

const createTask = () => {
  taskState.invalid = null;
  if (taskState.todo !== "") {
    emit("create-todo", taskState.todo);
    taskState.todo = "";
    return;
  }
  taskState.invalid = true;
  taskState.errorMessage = "Todo value cannot be empty.";
};


</script>
<template>
  <div class="container">
    <div class="todoContainer">
      <div class="addTask">
        <input
          :class="{ showError: taskState.invalid }"
          v-model="taskState.todo"
          placeholder="Type something..."
          type="text"
          maxlength="60"
          @keyup.enter="createTask()"
        />
        <button class="createTask" @click="createTask()">
          <font-awesome-icon icon="fa-solid fa-plus" />
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.date {
  color: white;
}

.container {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.todoContainer {
  width: 40%;
  margin: 50px auto;
  display: flex;
  justify-content: center;
}

.addTask {
  width: 100%;
  display: flex;
  gap: 10px;
}

.addTask input {
  width: 100%;
  padding: 15px;
  border-radius: 10px;
  border: none;
  outline: none;
  background-color: whitesmoke;
  font-size: 1em;
}

.addTask button {
  padding: 0px 20px 0px 20px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  background-color: whitesmoke;
}

.fa-plus {
  font-size: 1.5em;
  color: rgb(67, 67, 67);
}
.showError {
  box-shadow: 0px 1px 0px 0px #ff0066;
  transition: 0.3s;
}
</style>
