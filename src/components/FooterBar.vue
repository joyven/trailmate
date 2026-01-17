<template>
  <footer class="bg-neutral-900 text-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <!-- Brand Section -->
        <div class="col-span-1 md:col-span-2">
          <div class="flex items-center space-x-2 mb-4">
            <div
              class="w-8 h-8 bg-kurarishu-blue-500 rounded-lg flex items-center justify-center"
            >
              <span class="text-white font-bold text-sm">倉</span>
            </div>
            <span class="text-xl font-bold">倉敷へようこそ</span>
          </div>
          <p class="text-gray-400 mb-4 max-w-md">
            水の町倉敷へようこそ。歴史とアートが織りなす美しい街、倉敷美観地區の魅力ををご紹介します。
          </p>
          <div class="flex space-x-4">
            <a
              href="#"
              class="text-gray-400 hover:text-white transition-colors"
            >
              <span class="sr-only">Facebook</span>
              <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                />
              </svg>
            </a>
            <a
              href="#"
              class="text-gray-400 hover:text-white transition-colors"
            >
              <span class="sr-only">Instagram</span>
              <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.621 5.367 11.988 11.988 11.988s11.987-5.367 11.987-11.988C24.014 5.367 18.647.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.326-1.297L3.24 17.574c.49.98 1.633 1.63 2.91 1.63h12.7c1.277 0 2.42-.65 2.91-1.63l-1.883-1.883c-.878.807-2.029 1.297-3.326 1.297H8.449z"
                />
              </svg>
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h3 class="text-lg font-semibold mb-4">クイックリンク</h3>
          <ul class="space-y-2">
            <li>
              <router-link
                to="/spots"
                class="text-gray-400 hover:text-white transition-colors"
                >スポット紹介</router-link
              >
            </li>
            <li>
              <router-link
                to="/gourmet"
                class="text-gray-400 hover:text-white transition-colors"
                >グルメ·特産</router-link
              >
            </li>
            <li>
              <router-link
                to="/courses"
                class="text-gray-400 hover:text-white transition-colors"
                >おすすめコース</router-link
              >
            </li>
            <li>
              <router-link
                to="/access"
                class="text-gray-400 hover:text-white transition-colors"
                >アクセス・FAQ</router-link
              >
            </li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div>
          <h3 class="text-lg font-semibold mb-4">お問い合わせ</h3>
          <ul class="space-y-2 text-gray-400">
            <li>倉敷市観光課</li>
            <li>〒710-8565</li>
            <li>岡山県倉敷市西中新田6-1</li>
            <li>TEL: 086-426-3411</li>
            <li>Email: tourism@kurashiki.city</li>
          </ul>
        </div>
      </div>

      <div class="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
        <p>&copy; 2024 倉敷市観光課. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
// Component logic here
</script>
