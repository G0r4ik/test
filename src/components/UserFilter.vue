<script setup lang="ts">
const minAge = defineModel<number | string>('minAge')
const maxAge = defineModel<number | string>('maxAge')

const MIN_AGE = 0
const MAX_AGE = 150

function normalize(
  value: string | number | null | undefined,
  fallback: number
): number {
  if (value === '' || value == null) return fallback

  const n = typeof value === 'number' ? value : Number(value)
  if (Number.isNaN(n)) return fallback

  return Math.min(MAX_AGE, Math.max(MIN_AGE, n))
}

function validateInput() {
  let min = normalize(minAge.value, MIN_AGE)
  let max = normalize(maxAge.value, MAX_AGE)

  if (min > max) max = min

  minAge.value = min
  maxAge.value = max
}
</script>

<template>
  <div class="filter">
    <span class="filter__label">Возраст:</span>

    <div class="filter__group">
      <label class="filter__control">
        <span class="filter__hint">от</span>
        <input
          v-model.number="minAge"
          type="number"
          class="filter__input"
          :placeholder="String(MIN_AGE)"
          @change="validateInput"
          :min="MIN_AGE" />
      </label>

      <span class="filter__divider">–</span>

      <label class="filter__control">
        <span class="filter__hint">до</span>
        <input
          v-model.number="maxAge"
          type="number"
          class="filter__input"
          :placeholder="String(MAX_AGE)"
          @change="validateInput"
          :max="MAX_AGE" />
      </label>
    </div>
  </div>
</template>

<style scoped>
.filter {
  display: flex;
  align-items: center;
  gap: var(--space-md);
  padding: var(--space-sm) 0;
}

.filter__label {
  font-weight: 500;
  color: var(--text);
}

.filter__group {
  display: flex;
  align-items: center;
  gap: var(--space-xs);
  background: var(--surface);
  padding: var(--space-xs);
  border-radius: var(--radius);
}

.filter__divider {
  color: var(--muted);
}

.filter__control {
  display: flex;
  align-items: center;
  gap: var(--space-xs);
  cursor: text;
  border: 1px solid var(--muted);
  border-radius: var(--radius);
  padding: var(--space-xs) var(--space-sm);
  transition: border-color 0.2s ease, background 0.2s;
}

.filter__control:hover {
  border-color: rgba(255, 255, 255, 0.5);
}

.filter__control:focus-within {
  border-color: var(--accent);
  background: rgba(255, 255, 255, 0.03);
}

.filter__hint {
  font-size: 12px;
  color: var(--muted);
  user-select: none;
}

.filter__input {
  background: transparent;
  border: none;
  outline: none;
  color: var(--text);
  width: var(--input-width);
  font-size: 14px;
  font-family: inherit;
  text-align: center;
  padding: 0;
}

.filter__input::-webkit-outer-spin-button,
.filter__input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
