<script setup>
import SPCard from "../components/Card/SPCard.vue";
import SPModal from "../components/Modal/SPModal.vue";
import { useCounterStore } from "../stores/modal.store";

const store = useCounterStore();
</script>

<template>
  <section class="w-full bg-white">
    <div class="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:items-start">
        <div class="lg:sticky lg:top-4">
          <details open class="overflow-hidden rounded border border-gray-200">
            <summary
              class="flex items-center justify-between bg-gray-100 px-5 py-3 lg:hidden"
            >
              <span class="text-sm font-medium"> Toggle Filters </span>

              <svg
                class="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </summary>

            <form class="border-t border-gray-200 bg-green-600 lg:border-t-0">
              <fieldset>
                <legend
                  class="block w-full bg-green-800 text-white px-5 py-3 text-xs font-bold"
                >
                  Riego
                </legend>

                <div class="space-y-2 px-5 py-6">
                  <div class="flex items-center">
                    <input
                      id="toy"
                      type="checkbox"
                      name="type[toy]"
                      class="h-5 w-5 rounded border-gray-300"
                    />

                    <label
                      for="toy"
                      class="ml-3 text-sm font-medium text-white"
                    >
                      Poco
                    </label>
                  </div>

                  <div class="flex items-center">
                    <input
                      id="game"
                      type="checkbox"
                      name="type[game]"
                      class="h-5 w-5 rounded border-gray-300"
                    />

                    <label
                      for="game"
                      class="ml-3 text-sm font-medium text-white"
                    >
                      Regular
                    </label>
                  </div>

                  <div class="flex items-center">
                    <input
                      id="outdoor"
                      type="checkbox"
                      name="type[outdoor]"
                      class="h-5 w-5 rounded border-gray-300"
                    />

                    <label
                      for="outdoor"
                      class="ml-3 text-sm font-medium text-white"
                    >
                      Alto
                    </label>
                  </div>

                  <div class="pt-2">
                    <button type="button" class="text-xs text-white underline">
                      Reset Type
                    </button>
                  </div>
                </div>
              </fieldset>

              <div>
                <fieldset>
                  <legend
                    class="block w-full bg-green-800 text-white px-5 py-3 text-xs font-bold"
                  >
                    Crecimiento
                  </legend>

                  <div class="space-y-2 px-5 py-6">
                    <div class="flex items-center">
                      <input
                        type="checkbox"
                        name="Despacio"
                        class="h-5 w-5 rounded border-gray-300"
                      />

                      <label
                        for="Despacio"
                        class="ml-3 text-sm font-medium text-white"
                      >
                        Despacio
                      </label>
                    </div>

                    <div class="flex items-center">
                      <input
                        type="checkbox"
                        name="Moderado"
                        class="h-5 w-5 rounded border-gray-300"
                      />

                      <label
                        for="Moderado"
                        class="ml-3 text-sm font-medium text-white"
                      >
                        Moderado
                      </label>
                    </div>

                    <div class="flex items-center">
                      <input
                        type="checkbox"
                        name="Rápido"
                        class="h-5 w-5 rounded border-gray-300"
                      />

                      <label
                        for="Rápido"
                        class="ml-3 text-sm font-medium text-white"
                      >
                        Rápido
                      </label>
                    </div>

                    <div class="pt-2">
                      <button
                        type="button"
                        class="text-xs text-white underline"
                      >
                        Reset Crecimiento
                      </button>
                    </div>
                  </div>
                </fieldset>
              </div>

              <div
                class="flex justify-between border-t border-gray-200 px-5 py-3"
              >
                <button
                  name="reset"
                  type="button"
                  class="rounded text-xs font-medium text-white underline"
                >
                  Reset All
                </button>

                <button
                  name="commit"
                  type="button"
                  class="rounded bg-green-600 px-5 py-3 text-xs font-medium text-white"
                >
                  Apply Filters
                </button>
              </div>
            </form>
          </details>
        </div>

        <div class="lg:col-span-3 mb-16">
          <div class="flex items-center justify-between">
            <p class="text-sm text-gray-500">
              <span class="hidden sm:inline"> Showing </span>
              6 of 24 Products
            </p>

            <div class="ml-4">
              <label for="SortBy" class="sr-only"> Sort </label>

              <select
                id="SortBy"
                name="sort_by"
                class="rounded border border-black-100 text-sm"
              >
                <option readonly>Sort</option>
                <option value="title-asc">Title, A-Z</option>
                <option value="title-desc">Title, Z-A</option>
                <option value="price-asc">Price, Low-High</option>
                <option value="price-desc">Price, High-Low</option>
              </select>
            </div>
          </div>

          <div
            class="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-4"
          >
            <SPCard />
          </div>
        </div>
      </div>
    </div>
  </section>
  <Teleport to="body" v-if="store.show">
    <SPModal />
  </Teleport>
</template>

<style></style>
