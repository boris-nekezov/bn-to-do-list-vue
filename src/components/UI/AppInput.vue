<template>
  <input
    :type="type"
    v-model="val"
    @input="getVal"
    class="form-control" />
</template>

<script>
  export default {
    name: 'AppInput',
    data() {
      return {
        val: ''
      }
    },
    props: ['type'],
    methods: {
      getVal(){
        this.$emit('valueWasEdited', this.val);
      }
    }
  }
</script>