<template>
  <div id="app">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-10">

          <app-header />

          <todo-list-add :added="addTask" />

          <todo-list
            v-if="loaded"
            :tasks="data"
            :updateCheckedState="updateCheckedState"
            :updateTitleState="updateTitleState"
            :remove="removeTask"
          />
          <app-spinner v-else />
        </div>
        <!-- /.col -->
      </div>
      <!-- /.row -->
    </div>
    <!-- /.container -->
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader";
import TodoListAdd from "./components/TodoList/TodoListAdd";
import TodoList from "./components/TodoList/TodoList.vue";
import AppSpinner from "./components/UI/AppSpinner";

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
    addTask(title) {
      db.ref("data").push({
        id: (new Date()).getTime(),
        title: title,
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
    AppHeader,
    TodoListAdd,
    TodoList,
    AppSpinner
  }
};
</script>

<style lang="scss">
.align-items-center {
  display: flex;
  align-items: center;
}
</style>
