<template>
  <div class="jumbotron mb-2 py-2 px-3">
    <div class="row">

      <div class="col-1 align-items-center">
        <input :id="task.id" type="checkbox" :checked="task.completed">
        <label :for="task.id"></label>
      </div>  

      <div class="col-9 align-items-center">
        <h3>{{ task.title }}</h3>
        {{ isExpanded }}
        {{ test }}
      </div>

      <div class="col-2 align-items-center">
        <button 
          v-if="!isExpanded"
          class="btn btn-primary btn-lg" 
          @click="isExpanded = !isExpanded" 
          >Edit</button>  
        <button 
          v-if="isExpanded"
          class="btn btn-danger btn-lg">
          Delete  
        </button>
      </div> 

    </div>
    <!-- /.row -->
  </div>
  <!-- /.jumbotron -->
</template>

<script>
export default {
  name: "TodoListItem",
  data() {
    return {
      test: 'test',
      isExpanded: false
    };
  },
  props: ["task"],
  methods: {
    logTask() {
      console.log(this.task);
    }
  }
};
</script>

<style lang="scss">
  .jumbotron {
    padding: 1rem;
    padding: 0;
  }
  
  label { 
    font-size: 54px; 
    cursor: pointer; 
  }

  input[type=checkbox] { display:none; } /* to hide the checkbox itself */
  input[type=checkbox] + label:before {
    font-family: FontAwesome;
    display: inline-block;
  }

  input[type=checkbox] + label:before { content: "\f096"; } /* unchecked icon */
  input[type=checkbox] + label:before { letter-spacing: 10px; } /* space between checkbox and label */

  input[type=checkbox]:checked + label:before { content: "\f046"; } /* checked icon */
  input[type=checkbox]:checked + label:before { letter-spacing: 5px; } /* allow space for check mark */
</style>
