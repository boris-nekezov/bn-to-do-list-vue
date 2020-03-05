<template>
  <div class="jumbotron mb-2 py-3 px-3">
    <div class="row">
      <div class="col-1 align-items-center">
        <input :id="task.id" type="checkbox" :checked="task.completed" />
        <label :for="task.id"></label>
      </div>

      <div class="col-9 align-items-center">
  
        <div class="container">
          <div class="row">
              <div class="col">
                <div class="form-group">
                  <label
                    :for="'input'+task.id"
                    class="input-label"
                    v-if="!isExpanded"
                    @click="isExpanded = !isExpanded">
                    {{ task.title }}</label>
                  <input 
                    :id="'input'+task.id"
                    v-if="isExpanded"
                    class="form-control form-control-lg mb-2" 
                    type="text" 
                    :placeholder="task.title">
                </div>
     
              </div>
            </div>

            <div class="row">
              <div class="col">
                <div 
                    v-if="isExpanded"
                    class="btn-group btn-group-lg" role="group" aria-label="Basic example">
                    <button type="button" class="btn btn-success">Save</button>
                    <button 
                      @click="isExpanded = !isExpanded"
                      type="button" class="btn btn-warning">Cancel</button>
                  </div>
              </div>
            </div>
        </div>
  
     
        {{ isExpanded }}
      </div>

      <div class="col-2 align-items-center">
        <button
          v-if="!isExpanded"
          class="btn btn-warning btn-lg"
          @click="isExpanded = !isExpanded"
        >
          <i class="fa fa-pencil" aria-hidden="true"></i>
          asd
          <i class="fa fa-pencil-square" aria-hidden="true"></i>
          Edit
        </button>
        <button 
          v-if="isExpanded" 
          class="btn btn-danger btn-lg"
          @click="remove(task)">
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
      isExpanded: false
    };
  },
  props: ["task", "remove"],
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

.input-label {
  font-size: 20px;
}

input[type="checkbox"] {
  display: none;
} /* to hide the checkbox itself */
input[type="checkbox"] + label:before {
  font-family: FontAwesome;
  display: inline-block;
}

input[type="checkbox"] + label:before {
  content: "\f096";
} /* unchecked icon */
input[type="checkbox"] + label:before {
  letter-spacing: 10px;
} /* space between checkbox and label */

input[type="checkbox"]:checked + label:before {
  content: "\f046";
} /* checked icon */
input[type="checkbox"]:checked + label:before {
  letter-spacing: 5px;
} /* allow space for check mark */
</style>
