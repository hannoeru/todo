<template>
  <main class="bg-main">
    <div class="wrap">
      <h1>TODO LIST</h1>
      <TodoInput />
      <div class="todo-list">
        <TodoTab v-model="tabItem" />
        <TodoList v-if="filterList.length > 0" :list="filterList" />
        <div v-else class="empty">
          目前沒有任何東西
        </div>
        <footer class="">
          <span>{{ list.filter(i => !i.isDone).length }} 個待完成項目</span>
          <button @click="clearDone">
            清除已完成項目
          </button>
        </footer>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import TodoInput from './components/TodoInput.vue'
import TodoTab from './components/TodoTab.vue'
import TodoList from './components/TodoList.vue'
import { list, clearDone } from './store'

const tabItem = ref('all')
const filterList = computed(() => {
  switch (tabItem.value) {
    case 'await':
      return list.value.filter(i => !i.isDone)
    case 'done':
      return list.value.filter(i => i.isDone)

    default:
      return list.value
  }
})
</script>

<style lang="scss">
@import './vars.scss';

html,
body,
#app {
  padding: 0;
  margin: 0;
  font-size: 16px;
}

button {
  border: none;
  padding: 0;
}

main {
  width: 100vw;
  height: 100vh;
  font-family: 'Noto Sans TC', sans-serif;
}

.wrap {
  padding: 20px;
  max-width: 540px;
  margin: 0 auto;
  text-align: center;
  & h1 {
    font-size: 48px;
    letter-spacing: 8.75px;
    font-family: 'Baloo 2', cursive;
    margin-bottom: 48px;
  }
  & .todo-list {
    background: white;
    border-radius: 10px;
    box-shadow: 0 0 15px 0 rgba(0,0,0,0.15);
    overflow: hidden;
    > .empty {
      padding: 40px 20px;
      color: $gray;
    }
    > footer {
      display: flex;
      justify-content: space-between;
      padding: 24px 20px;
      font-size: 14px;
      border-top: 1px solid #EFEFEF;
      > button {
        color: $gray;
        background: transparent;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
}

.bg-main {
  background-image: linear-gradient(-10deg, #FFFFFF 50%, #FFD370 50%);
}
</style>
