<script setup lang="ts">
import type { SortKey, User } from '../types/user'
import UserRow from './UserRow.vue'

const props = defineProps<{
  users: User[]
  sortKey: SortKey
  sortDirection: number
}>()

defineEmits<{ (e: 'sort', k: SortKey): void }>()

function getSortIcon(columnKey: SortKey) {
  if (columnKey !== props.sortKey) return ''
  return props.sortDirection === 1 ? '▲' : '▼'
}
</script>

<template>
  <div class="users__table-wrap">
    <table class="users__table">
      <thead class="users__thead">
        <tr>
          <th class="users__th" @click="$emit('sort', 'id')">
            ID {{ getSortIcon('id') }}
          </th>
          <th class="users__th" @click="$emit('sort', 'firstname')">
            Имя {{ getSortIcon('firstname') }}
          </th>
          <th class="users__th" @click="$emit('sort', 'lastname')">
            Фамилия {{ getSortIcon('lastname') }}
          </th>
          <th class="users__th" @click="$emit('sort', 'age')">
            Возраст {{ getSortIcon('age') }}
          </th>
          <th class="users__th" @click="$emit('sort', 'email')">
            Почта {{ getSortIcon('email') }}
          </th>
        </tr>
      </thead>
      <tbody>
        <UserRow v-for="user in users" :user :key="user.id" />
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.users__table-wrap {
  overflow-x: auto;
  background: var(--surface);
  border-radius: var(--radius);
  padding: var(--space-xs);
}

.users__table {
  width: 100%;
  border-collapse: collapse;
  min-width: var(--table-min-width);
}

.users__th {
  text-align: left;
  padding: var(--space-sm) var(--space-sm);
  background: var(--table-head);
  color: var(--muted);
  cursor: pointer;
  user-select: none;
}

.users__th:hover {
  color: var(--accent);
}

@media (max-width: 640px) {
  .users__thead {
    display: none;
  }

  .users__table {
    min-width: auto;
  }
}
</style>
