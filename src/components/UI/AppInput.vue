<template>
  <input
    :type="type"
    v-model="localVal"
    @input="getVal"
    :class="['form-control', modifiers]"
    :placeholder="val"/>
</template>

<script>
  export default {
    name: 'AppInput',
    data() {
      return {
        localVal: ''
      }
    },
    props: [
      'type',
      'modifiers',
      'placeholder',
      'val'
    ],
    mounted(){
      this.localVal = this.val;
    },
    methods: {
      getVal(){
        this.$emit('valueWasEdited', this.localVal);
      }
    }
  }
</script>