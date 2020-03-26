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
        <input
          :id="'input' + task.id"
          v-if="isExpanded"
          v-model="task.title"
          @input="getTitle(task.title)"
          class="form-control form-control-lg mb-2"
          type="text"
          :placeholder="task.title"
        />
      </div>
    </div>
  </div>
</template>

<script>
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
    }
  }
</script>