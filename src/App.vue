<template>
  <div id="app">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-10">
          <div class="alert alert-success my-2">
            <h1 class="text-center">BN To Do List</h1>
          </div>
          <div class="input-group mb-2">
            <div class="input-group-prepend">
              <button
                @click="addTask"
                class="btn btn-success"
                type="button"
                id="button-addon1"
              >
                <AppIcon icon="plus" />
                Add new task
              </button>
            </div>
            <input
              type="text"
              v-model="title"
              @keydown.enter="addTask"
              class="form-control"
              placeholder=""
              aria-label="Add new task button"
              aria-describedby="button-add-task"
            />
          </div>
          <!-- /.input-group -->
          <TodoList
            :tasks="data"
            :updateCheckedState="updateCheckedState"
            :updateTitleState="updateTitleState"
            :remove="removeTask"
          />
        </div>
        <!-- /.col -->
      </div>
      <!-- /.row -->
    </div>
    <!-- /.container -->

    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import AppIcon from './components/ui/AppIcon.vue';
import TodoList from "./components/TodoList.vue";

// RecentDocuments.vue
import { db } from "./db";

export default {
  name: "App",
  data() {
    return {
      data: [],
      title: ""
    };
  },
  firebase: {
    data: db.ref("data")
  },
  methods: {
    addTask() {
      db.ref("data").push({
        id: this.data.length + 1,
        title: this.title,
        completed: false
      });
    },
    updateCheckedState(task, newCheckedState) {
      this.$firebaseRefs.data
        .child(task[".key"])
        .child("completed")
        .set(newCheckedState);
    },
    updateTitleState(task, newTitle) {
      this.$firebaseRefs.data
        .child(task[".key"])
        .child("title")
        .set(newTitle);
    },
    removeTask(task) {
      this.$firebaseRefs.data.child(task[".key"]).remove();
    }
  },
  mounted() {
    // console.table(this.data);
    // console.table(this.data.length);
  },
  components: {
    // HelloWorld
    AppIcon,
    TodoList
  }
};
</script>

<style lang="scss">
.align-items-center {
  display: flex;
  align-items: center;
}
</style>
