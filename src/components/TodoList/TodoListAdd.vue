<template>
  <div class="input-group mb-2">
    <div class="input-group-prepend">
      <app-button
              @click.native="added(title)"
              modifier="success"
      >
        <app-icon icon="plus" />
        Add new task
      </app-button>
    </div>
    <input
      type="text"
      v-model="title"
      @keydown.enter="added(title)"
      class="form-control"
      placeholder=""
      aria-label="Add new task button"
      aria-describedby="button-add-task"
    />
  </div>
  <!-- /.input-group -->
</template>

<script>
  import AppButton from "../UI/AppButton";
  import AppIcon from "../UI/AppIcon";

  export default {
    name: 'TodoListAdd',
    data() {
      return {
        title: ''
      }
    },
    props: {
      added: {
        type: Function,
        required: true
      },
    },
    components: {
      AppButton,
      AppIcon
    }
  }
</script>