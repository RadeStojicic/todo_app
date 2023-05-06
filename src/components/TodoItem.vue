<script setup>
import { defineProps } from "vue";
import { ref } from "vue";
import "primevue/resources/themes/bootstrap4-light-blue/theme.css";
import "primevue/resources/primevue.min.css";
import Dialog from "primevue/dialog";
import ConfirmDialog from "primevue/confirmdialog";
import { useToast } from "primevue/usetoast";
import { useConfirm } from "primevue/useconfirm";

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

// open settings

const customSettings = ref(false);
const openSettings = () => {
  customSettings.value = !customSettings.value;
};

const visible = ref(false);

// delete
const confirm = useConfirm();
const toast = useToast();

const deleteTodo = () => {
  confirm.require({
    message: "Do you want to delete this record?",
    header: "Delete Confirmation",
    icon: "pi pi-info-circle",
    acceptClass: "p-button-danger",
    accept: () => {
      deleteCurrentTodo();
    },
    reject: () => {
      toast.add({
        severity: "error",
        summary: "Rejected",
        detail: "You have rejected",
        life: 3000,
      });
    },
  });
};

// edit
const editValue = ref("");
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

            <p :class="{ checked: todo.isCompleted }">{{ todo.todo }}</p>
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
            <font-awesome-icon v-if="todo.isEditing" icon="fa-solid fa-check" />
            <font-awesome-icon
              class="seeMoreTodo"
              icon="fa-solid fa-ellipsis-vertical"
              @click="openSettings()"
            />
            <div v-if="customSettings == true" class="settings">
              <section @click="visible = true">
                <div class="settingsContainer">
                  <div class="settingsSubContainer">
                    <font-awesome-icon icon="fa-solid fa-file-pen" />
                    <div>Edit</div>
                  </div>
                </div>
              </section>
              <section>
                <div class="settingsContainer">
                  <div class="settingsSubContainer">
                    <font-awesome-icon icon="fa-solid fa-circle-info" />
                    <div>Info</div>
                  </div>
                </div>
              </section>
              <section>
                <div @click="deleteTodo()" class="settingsContainer">
                  <div class="settingsSubContainer">
                    <font-awesome-icon icon="fa-solid fa-box-archive" />
                    <div>Archive</div>
                  </div>
                </div>
              </section>
            </div>
            <Dialog
              v-model:visible="visible"
              modal
              header="Edit"
              :style="{ width: '50vw' }"
            >
              <div class="dialogContent">
                <input
                  v-model="editValue"
                  @keyup.enter="(todo.todo = editValue) && (visible = false)"
                  class="editInput"
                  type="text"
                  placeholder="Type something..."
                />
                <button
                  @click="(todo.todo = editValue) && (visible = false)"
                  type="submit"
                >
                  Confirm
                </button>
              </div>
            </Dialog>
            <Toast></Toast>
            <ConfirmDialog></ConfirmDialog>
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
  background-color: rgb(237, 237, 237);
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

.settings section div {
  text-decoration: none;
  color: rgb(31, 31, 31);
  padding: 6px 6px 6px 10px;
  width: 100%;
  margin: auto;
}

.settings section {
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

.fa-check {
  color: rgb(21, 24, 21);
}
.dialogContent {
  display: flex;
  gap: 10px;
}
.dialogContent button {
  padding: 10px;
  border: none;
  background-color: #335af3;
  color: white;
  border-radius: 10px;
  cursor: pointer;
  width: 15%;
}

.dialogContent button:hover {
  background-color: #375beb;
}
.editInput {
  padding: 15px;
  width: 100%;
  border-radius: 10px;
  background-color: whitesmoke;
  border: none;
  outline: none;
  font-size: 0.95em;
}
</style>
