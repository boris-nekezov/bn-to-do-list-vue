<template>
  <div class="row">
    <div class="col">
      <div class="form-group">
        <label
          :for="'input' + task.id"
          class="input-label"
          v-if="!isExpanded"
          @click="getExpandedVal(isExpanded)">
          {{ task.title }}</label
        >
        <app-input
          :id="'input' + task.id"
          type="text"
          modifiers="form-control-lg mb-2"
          v-if="isExpanded"
          :val="task.title"
          @valueWasEdited="task.title = $event; getTitle(task.title)"
          :placeholder="task.title" />
      </div>
    </div>
  </div>
</template>

<script>
  import AppInput from "../UI/AppInput";

  export default {
    name: 'TodoListItemTitle',
    props: {
      task: {
        type: Object,
        required: true
      },
      isExpanded: {
        type: Boolean,
        required: true
      }
    },
    methods: {
      getExpandedVal (isExpanded) {
        isExpanded = !isExpanded;
        this.$emit('expandedWasChanged', isExpanded);
      },
      getTitle (newTitle) {
        this.$emit('titleWasChanged', newTitle);
      }
    },
    components: {
      AppInput
    }
  }
</script>