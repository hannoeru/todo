import { ref } from 'vue'
import type { ListItem } from './types'

export const list = ref<ListItem[]>([
  {
    isDone: false,
    title: '把冰箱發霉的檸檬拿去丟',
  },
])

export function deleteItem(item: ListItem) {
  list.value = list.value.filter(i => i.title !== item.title)
}

export function updateIsDone(v: boolean, item: ListItem) {
  const target = list.value.find(i => i.title === item.title)
  if (!target) return
  target.isDone = v
}

export function addItem(item: ListItem) {
  list.value.push(item)
}

export function clearDone() {
  list.value = list.value.filter(i => !i.isDone)
}
