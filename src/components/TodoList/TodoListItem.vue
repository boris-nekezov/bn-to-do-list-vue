<template>
  <div class="jumbotron mb-2 py-3 px-3">
    <div class="row">
      <app-checkbox
        :task="task"
        :updateChecked="updateChecked"/>

      <div class="col-9 align-items-center">
        <div class="container">

          <todo-list-item-title
            :task="task"
            :isExpanded="isExpanded"
            @expandedWasChanged="isExpanded = $event"
            @titleWasChanged="newTitle = $event" />

          <div class="row">
            <div class="col">
              <div
                v-if="isExpanded"
                class="btn-group btn-group-lg"
                role="group"
                aria-label="Basic example"
              >
                <app-button
                  @click.native="
                    updateTitle(task, newTitle);
                    isExpanded = !isExpanded;
                  "
                  modifier="success"
                >
                  Save
                </app-button>

                <app-button
                  @click.native="
                    isExpanded = !isExpanded;
                    newTitle = task.title;
                  "
                  modifier="warning"
                  size="lg"
                >
                  Cancel
                </app-button>

              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-2 align-items-center">
        <app-button
          v-if="!isExpanded"
          @click.native="isExpanded = !isExpanded"
          modifier="warning"
          size="lg"
        >
          <app-icon icon="pencil" />
          Edit
        </app-button>

        <app-button
          v-if="isExpanded"
          @click.native="remove(task)"
          modifier="danger"
          size="lg"
        >
          <app-icon icon="trash-o" />
          Delete
        </app-button>
      </div>
    </div>
    <!-- /.row -->
  </div>
  <!-- /.jumbotron -->
</template>

<script>
import AppIcon from "../UI/AppIcon.vue";
import AppButton from "../UI/AppButton";
import AppCheckbox from "../UI/AppCheckbox";
import TodoListItemTitle from "./TodoListItemTitle";


export default {
  name: "TodoListItem",
  data() {
    return {
      isExpanded: false,
      newTitle: this.task.title
    };
  },
  props: ["task", "remove", "updateChecked", "updateTitle"],
  components: {
    AppIcon,
    AppButton,
    AppCheckbox,
    TodoListItemTitle
  }
};
</script>

<style lang="scss">
.jumbotron {
  padding: 1rem;
  padding: 0;
}

</style>
