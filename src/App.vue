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
            v-if="loaded"
            :tasks="data"
            :updateCheckedState="updateCheckedState"
            :updateTitleState="updateTitleState"
            :remove="removeTask"
          />
          <AppSpinner v-else />
        </div>
        <!-- /.col -->
      </div>
      <!-- /.row -->
    </div>
    <!-- /.container -->
  </div>
</template>

<script>
import AppIcon from "./components/ui/AppIcon.vue";
import AppSpinner from "./components/ui/AppSpinner";
import TodoList from "./components/TodoList.vue";

// RecentDocuments.vue
import { db } from "./db";

export default {
  name: "App",
  data() {
    return {
      data: [],
      title: "",
      loaded: false
    };
  },
  firebase: {
      data: db.ref("data"),
  },
  mounted() {
    db.ref('loadedHook').once('value', snapshot => {
      const data = snapshot.val();
      this.loaded = data.loaded;
    })
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
  components: {
    AppIcon,
    AppSpinner,
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
