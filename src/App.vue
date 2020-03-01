<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col">
          <h1 class="text-center">BN To Do List</h1>

          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <button
                @click="addTask"
                class="btn btn-success"
                type="button"
                id="button-addon1"
              >
                <i class="fa fa-plus icon" aria-hidden="true"></i>
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
          <hr />

          <TodoList :tasks="data" />

          <i class="fa fa-square-o icon icon--size-xl" aria-hidden="true"></i>
          <i
            class="fa fa-check-square-o icon icon--size-xl"
            aria-hidden="true"
          ></i>
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
import TodoList from "./components/TodoList.vue";

// RecentDocuments.vue
import { DATABASE } from "./DATABASE";

export default {
  name: "App",
  data() {
    return {
      data: [],
      title: ""
    };
  },
  firebase: {
    data: DATABASE.ref("data")
  },
  methods: {
    addTask() {
      DATABASE.ref("data").push({
        id: this.data.length + 1,
        title: this.title,
        completed: false
      });
    }
  },
  mounted() {
    console.table(this.data);
    console.table(this.data.length);
  },
  components: {
    // HelloWorld
    TodoList
  }
};
</script>

<style lang="scss">
$iconFontRegular: 20px;
$iconFontSizeXL: 40px;
.icon {
  font-size: $iconFontRegular;
}
.icon--size-xl {
  font-size: $iconFontSizeXL;
}
</style>
