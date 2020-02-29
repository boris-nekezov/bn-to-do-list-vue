<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col">
          <h1 class="text-center">BN To Do List</h1>

          <h2>Data:</h2>
          <p>{{ data }}</p>

          <button @click="someAlert" type="button" class="btn btn-success">
            <!-- <font-awesome-icon icon="plus" spin /> -->
            <i class="fa fa-plus icon" aria-hidden="true"></i>

            Add new task
          </button>
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
// RecentDocuments.vue
import { DATABASE } from './DATABASE'


console.log(DATABASE);


export default {
  name: "App",
  data() {
    return {
      data: []
    };
  },
  firebase: {
    data: DATABASE.ref('data')
  },
  methods: {
    someAlert() {
      alert("test");
    }
  },
  components: {
    // HelloWorld
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
