<script setup>
import { ref } from "vue";
import { v4 as uuidv4 } from "uuid";
import TodoApp from "../components/TodoApp.vue";
import TodoItem from "../components/TodoItem.vue";

const todoList = ref([]);

const createTodo = (todo) => {
  const current = new Date();
  const time =
    current.getHours() +
    ":" +
    current.getMinutes() +
    ":" +
    +current.getSeconds();

  todoList.value.push({
    id: uuidv4(),
    todo,
    time,
    isCompleted: false,
    category: "Uncompleted",
    isEditing: false,
  });
};

let category = ref("");

const completeState = (index) => {
  todoList.value[index].isCompleted = !todoList.value[index].isCompleted;
  if (todoList.value[index].category == "Uncompleted") {
    todoList.value[index].category = "Completed";
  } else {
    todoList.value[index].category = "Uncompleted";
  }
};
</script>

<template>
  <main>
    <TodoApp @create-todo="createTodo" />
    <ul>
      <li>
        <TodoItem
          v-for="(todo, index) in todoList"
          :key="index"
          :index="index"
          :todo="todo"
          :category="category"
          @complete-state="completeState"
        />
      </li>
    </ul>
  </main>
</template>

<style lang="sass" scoped></style>
