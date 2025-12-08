<script setup lang="ts">
import type { User } from '../types/user'

const props = defineProps<{ user: User }>()
</script>

<template>
  <tr class="users__row">
    <td class="users__cell" data-label="ID">{{ user.id }}</td>
    <td class="users__cell" data-label="Имя">{{ user.firstname }}</td>
    <td class="users__cell" data-label="Фамилия">{{ user.lastname }}</td>
    <td class="users__cell" data-label="Возраст">{{ user.age }}</td>
    <td class="users__cell" data-label="Почта">{{ user.email }}</td>
  </tr>
</template>

<style scoped>
.users__row:nth-child(even) {
  background: var(--zebra);
}

.users__cell {
  padding: var(--space-sm) var(--space-md);
  color: var(--text);
  font-size: 16px;
}

@media (max-width: 640px) {
  .users__row {
    display: block;
    margin-bottom: var(--space-sm);
    border: 1px solid var(--table-head);
    border-radius: var(--radius);
  }

  .users__cell {
    display: flex;
    justify-content: space-between;
  }

  .users__cell::before {
    content: attr(data-label);
    font-weight: bold;
    color: var(--muted);
  }
}
</style>
