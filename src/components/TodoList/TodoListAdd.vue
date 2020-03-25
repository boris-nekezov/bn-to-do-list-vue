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
    <app-input
      type="text"
      @valueWasEdited="title = $event"
      @keydown.enter.native="added(title)"
    />
  </div>
  <!-- /.input-group -->
</template>

<script>
  import AppButton from "../UI/AppButton";
  import AppIcon from "../UI/AppIcon";
  import AppInput from "../UI/AppInput";

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
      AppIcon,
      AppInput
    }
  }
</script>