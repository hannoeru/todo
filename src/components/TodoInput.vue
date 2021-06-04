<script setup lang="ts">
import { defineProps, ref } from 'vue'
import { addItem } from '../store'

defineProps({})

const inputValue = ref('')

function handleClick() {
  if (!inputValue.value) return
  addItem({
    isDone: false,
    title: inputValue.value,
  })
  inputValue.value = ''
}

</script>

<template>
  <div class="todo-input">
    <input v-model="inputValue" placeholder="新增待辦事項" type="text" @keyup.enter="handleClick">
    <button @click="handleClick">
      +
    </button>
  </div>
</template>

<style scoped lang="scss">
@import '../vars.scss';

.todo-input {
  background: #fff;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  height: 48px;
  box-shadow: 0 0 15px 0 rgba(0,0,0,0.15);
  margin-bottom: 10px;
  & input {
    flex: 1;
    padding: 1rem 1.5rem;
    border: none;
    &::placeholder {
      padding: 5px 0;
      color: $gray;
      font-size: 16px;
    }
    &:focus {
      border: none;
      outline: none;
    }
  }
  & button {
    margin: 4px;
    width: 40px;
    height: 40px;
    color: white;
    font-size: 32px;
    background: $black;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    &:focus {
      box-shadow: 0 0 0 2pt $primary;
    }
  }
}
</style>
