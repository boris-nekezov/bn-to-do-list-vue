<template>
  <div class="jumbotron mb-2 py-3 px-3">
    <div class="row">
      <div class="col-1 align-items-center">
        <input
          @change="updateChecked(task, !task.completed)"
          :id="task.id"
          type="checkbox"
          :checked="task.completed"
        />
        <label :for="task.id"></label>
      </div>

      <div class="col-9 align-items-center">
        <div class="container">
          <div class="row">
            <div class="col">
              <div class="form-group">
                <label
                  :for="'input' + task.id"
                  class="input-label"
                  v-if="!isExpanded"
                  @click="isExpanded = !isExpanded"
                >
                  {{ task.title }}</label
                >
                <input
                  :id="'input' + task.id"
                  v-if="isExpanded"
                  v-model="newTitle"
                  class="form-control form-control-lg mb-2"
                  type="text"
                  :placeholder="task.title"
                />
              </div>
            </div>
          </div>

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
import AppIcon from "./ui/AppIcon.vue";
import AppButton from "./ui/AppButton";
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
    AppButton
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
