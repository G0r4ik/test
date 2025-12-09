<script setup lang="ts">
import { useBase64, useFileDialog } from '@vueuse/core'
import type { User } from '../types/user'

const props = defineProps<{ user: User }>()
const emit = defineEmits<{
  (e: 'update-photo', id: number, photo: string): void
}>()

const { open, onChange } = useFileDialog({ accept: 'image/*', multiple: false })

onChange(async files => {
  const file = files?.[0]
  if (!file) return

  const { base64, execute } = useBase64(file)
  await execute()
  if (base64.value) {
    emit('update-photo', props.user.id, base64.value)
  }
})
</script>

<template>
  <tr class="users__row">
    <td class="users__cell" data-label="ID">{{ user.id }}</td>

    <td class="users__cell" data-label="Фото">
      <div class="avatar">
        <button type="button" class="avatar__change" @click="open()">⚙️</button>
        <img
          :src="user.avatar || '/default.jpg'"
          alt="Avatar"
          class="avatar__img" />
      </div>
    </td>

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

.avatar {
  display: inline-flex;
  align-items: center;
  gap: var(--space-xs);
}

.avatar__img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
}

.avatar__change {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 14px;
  padding: 0;
  color: var(--muted);
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
    align-items: center;
  }

  .users__cell::before {
    content: attr(data-label);
    font-weight: bold;
    color: var(--muted);
  }
}
</style>
