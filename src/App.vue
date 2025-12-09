<script setup lang="ts">
import { onMounted } from 'vue'
import { useUsers } from './composables/useUsers'
import UserFilter from './components/UserFilter.vue'
import UserTable from './components/UserTable.vue'

const {
  isLoading,
  minAge,
  maxAge,
  sortKey,
  sortDirection,
  sortUser,
  users,
  updatePhoto,
  init,
} = useUsers()

onMounted(() => init())
</script>

<template>
  <section class="users">
    <UserFilter v-model:minAge="minAge" v-model:maxAge="maxAge" />
    <UserTable
      v-if="!isLoading"
      :users
      :sortKey
      :sortDirection
      @sort="sortUser"
      @update-photo="updatePhoto" />
    <div v-else class="users__loading">Загрузка данных...</div>
  </section>
</template>

<style scoped>
.users {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: var(--space-md);
  color: var(--text);
}

.users__loading {
  padding: var(--space-md);
  color: var(--muted);
  text-align: center;
}
</style>
