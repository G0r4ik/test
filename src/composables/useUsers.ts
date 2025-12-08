import { ref, computed } from 'vue'
import type { User, SortKey } from '../types/user'
import { calculateAge } from '../utils/date'
import { getUsers } from '../api/users'

export function useUsers() {
  const users = ref<User[]>([])
  const isLoading = ref(true)

  const minAge = ref(0)
  const maxAge = ref(100)

  const sortKey = ref<SortKey>('id')
  const sortDirection = ref<1 | -1>(1)

  function sortUser(key: SortKey) {
    if (sortKey.value === key) {
      sortDirection.value = sortDirection.value === 1 ? -1 : 1
    } else {
      sortKey.value = key
      sortDirection.value = 1
    }
  }

  const displayedUsers = computed<User[]>(() => {
    return users.value
      .filter(user => user.age >= minAge.value && user.age <= maxAge.value)
      .sort((a, b) => {
        const aVal = a[sortKey.value]
        const bVal = b[sortKey.value]

        let result: number
        if (typeof aVal === 'number' && typeof bVal === 'number') {
          result = aVal - bVal
        } else {
          result = String(aVal).localeCompare(String(bVal))
        }

        return result * sortDirection.value
      })
  })

  async function init() {
    isLoading.value = true
    try {
      const raw = await getUsers()
      users.value = raw.map(u => ({ ...u, age: calculateAge(u.birthDate) }))
    } finally {
      isLoading.value = false
    }
  }

  return {
    allUsers: users,
    users: displayedUsers,
    isLoading,
    minAge,
    maxAge,
    sortKey,
    sortDirection,
    sortUser,
    init,
  }
}
