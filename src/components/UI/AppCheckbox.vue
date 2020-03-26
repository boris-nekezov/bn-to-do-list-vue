<template>
  <div class="col-1 align-items-center">
    <input
      @change="updateChecked(task, !task.completed)"
      :id="task.id"
      type="checkbox"
      :checked="task.completed"
    />
    <label :for="task.id"></label>
  </div>
</template>

<script>
  export default {
    name: 'AppCheckbox',
    props: {
      task: {
        type: Object,
        required: true
      },
      updateChecked: {
        type: Function,
        required: true
      }
    },

  }
</script>

<style>

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