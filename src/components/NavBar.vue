<template>
  <nav class="bg-white shadow-lg sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex items-center">
          <router-link to="/" class="flex items-center space-x-2">
            <div
              class="w-8 h-8 bg-kurarishu-blue-500 rounded-lg flex items-center justify-center"
            >
              <span class="text-white font-bold text-sm">倉</span>
            </div>
            <span class="text-xl font-bold text-gray-900">倉敷へようこそ</span>
          </router-link>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-8">
          <router-link
            v-for="item in navigation"
            :key="item.name"
            :to="item.href"
            class="text-gray-700 hover:text-kurarishu-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
            :class="{
              'text-kurarishu-blue-600 border-b-2 border-kurarishu-blue-600':
                $route.name === item.name,
            }"
          >
            {{ item.name }}
          </router-link>
        </div>

        <!-- Mobile menu button -->
        <div class="md:hidden flex items-center">
          <button
            @click="mobileMenuOpen = !mobileMenuOpen"
            class="text-gray-700 hover:text-kurarishu-blue-600 focus:outline-none focus:text-kurarishu-blue-600"
          >
            <svg
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                v-if="!mobileMenuOpen"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
              <path
                v-else
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Navigation -->
    <div v-if="mobileMenuOpen" class="md:hidden">
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
        <router-link
          v-for="item in navigation"
          :key="item.name"
          :to="item.href"
          class="block px-3 py-2 text-base font-medium text-gray-700 hover:text-kurarishu-blue-600 hover:bg-gray-50 rounded-md"
          @click="mobileMenuOpen = false"
        >
          {{ item.name }}
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from "vue";

const mobileMenuOpen = ref(false);

const navigation = [
  { name: "スポット紹介", href: "/spots" },
  { name: "グルメ·特産", href: "/gourmet" },
  { name: "体験打卡", href: "/experience" },
  { name: "倉敷の魅力", href: "/special" },
  { name: "おすすめコース", href: "/courses" },
  { name: "アクセス・FAQ", href: "/access" },
];
</script>
