<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Hero Section -->
    <section
      class="relative h-96 flex items-center justify-center overflow-hidden"
    >
      <div class="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1545569341-9eb8b30979d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          alt="アクセス・FAQ"
          class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      <div class="relative z-10 text-center text-white px-4">
        <h1 class="text-5xl md:text-6xl font-bold mb-4">アクセス・FAQ</h1>
        <p class="text-xl md:text-2xl">
          倉敷へのスムーズなアクセスとよくある質問をお届けします
        </p>
      </div>
    </section>

    <!-- Main Content -->
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Access Information -->
        <div class="mb-16">
          <h2 class="text-3xl font-bold text-gray-900 mb-8 text-center">
            大阪、東京、広島から倉敷へのアクセス方法
          </h2>

          <!-- Transportation Image -->
          <div class="mb-12">
            <div
              class="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-xl"
            >
              <img
                src="/images/access/bus.avif"
                alt="倉敷への交通アクセス"
                class="w-full h-full object-cover"
              />
              <!-- Overlay Image Layer -->
              <div
                class="absolute top-1.5 right-1.5 h-[calc(100%-0.75rem)] z-10"
              >
                <img
                  src="/images/access/2fbff1de8f38436f19da8a1ffa8bb1bf97cc5eaf.png"
                  alt="倉敷交通ルート図"
                  class="h-full object-contain drop-shadow-lg rounded-tr-2xl rounded-br-2xl"
                />
              </div>
              <div
                class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center z-0"
              >
                <div class="text-center text-white">
                  <h3 class="text-3xl md:text-4xl font-bold mb-4">
                    倉敷への便利アクセス
                  </h3>
                  <p class="text-lg md:text-xl opacity-90">
                    新幹线和巴士で簡単アクセス
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <!-- From Osaka -->
            <div
              class="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              <div class="bg-gradient-to-r from-blue-500 to-blue-600 p-6">
                <h3 class="text-2xl font-bold text-white">大阪 → 倉敷</h3>
                <p class="text-blue-100 mt-2">約3時間30分で到着</p>
              </div>
              <div class="p-8">
                <div class="space-y-6">
                  <div class="flex items-start space-x-4">
                    <div
                      class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0"
                    >
                      <svg
                        class="w-6 h-6 text-blue-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                        ></path>
                      </svg>
                    </div>
                    <div class="flex-1">
                      <h4 class="font-semibold text-gray-900 mb-2">
                        新幹線ルート
                      </h4>
                      <div class="text-gray-700 space-y-1">
                        <p>新大阪駅 → 岡山駅（约1時間）</p>
                        <p class="text-sm text-gray-500">「のぞみ」利用推奨</p>
                      </div>
                      <div class="text-gray-700 space-y-1 mt-2">
                        <p>岡山駅 → 倉敷駅（约15分）</p>
                        <p class="text-sm text-gray-500">JR倉敷線利用</p>
                      </div>
                    </div>
                  </div>

                  <div class="border-t pt-6">
                    <div class="flex items-start space-x-4">
                      <div
                        class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0"
                      >
                        <svg
                          class="w-6 h-6 text-green-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2v0a2 2 0 01-2-2v-5H8z"
                          ></path>
                        </svg>
                      </div>
                      <div class="flex-1">
                        <h4 class="font-semibold text-gray-900 mb-2">
                          巴士ルート
                        </h4>
                        <p class="text-gray-700">
                          大阪梅田駅 → 倉敷駅前（约3時間30分）
                        </p>
                        <p class="text-sm text-gray-500 mt-1">
                          Direct高速巴士運行中
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- From Tokyo -->
            <div
              class="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              <div class="bg-gradient-to-r from-purple-500 to-purple-600 p-6">
                <h3 class="text-2xl font-bold text-white">東京 → 倉敷</h3>
                <p class="text-purple-100 mt-2">約3時間30分で到着</p>
              </div>
              <div class="p-8">
                <div class="space-y-6">
                  <div class="flex items-start space-x-4">
                    <div
                      class="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0"
                    >
                      <svg
                        class="w-6 h-6 text-purple-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                        ></path>
                      </svg>
                    </div>
                    <div class="flex-1">
                      <h4 class="font-semibold text-gray-900 mb-2">
                        新幹線ルート
                      </h4>
                      <div class="text-gray-700 space-y-1">
                        <p>東京駅 → 岡山駅（约3時間30分）</p>
                        <p class="text-sm text-gray-500">「のぞみ」利用推奨</p>
                      </div>
                      <div class="text-gray-700 space-y-1 mt-2">
                        <p>岡山駅 → 倉敷駅（约15分）</p>
                        <p class="text-sm text-gray-500">JR倉敷線利用</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- From Hiroshima -->
          <div
            class="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
          >
            <div class="bg-gradient-to-r from-orange-500 to-orange-600 p-6">
              <h3 class="text-2xl font-bold text-white">広島 → 倉敷</h3>
              <p class="text-orange-100 mt-2">約2時間で到着</p>
            </div>
            <div class="p-8">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="flex items-start space-x-4">
                  <div
                    class="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0"
                  >
                    <svg
                      class="w-6 h-6 text-orange-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                      ></path>
                    </svg>
                  </div>
                  <div class="flex-1">
                    <h4 class="font-semibold text-gray-900 mb-2">
                      新幹線ルート
                    </h4>
                    <div class="text-gray-700 space-y-1">
                      <p>広島駅 → 岡山駅（约40分）</p>
                      <p class="text-sm text-gray-500">「のぞみ」利用推奨</p>
                    </div>
                    <div class="text-gray-700 space-y-1 mt-2">
                      <p>岡山駅 → 倉敷駅（約15分）</p>
                      <p class="text-sm text-gray-500">JR倉敷線利用</p>
                    </div>
                  </div>
                </div>

                <div class="flex items-start space-x-4">
                  <div
                    class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0"
                  >
                    <svg
                      class="w-6 h-6 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2v0a2 2 0 01-2-2v-5H8z"
                      ></path>
                    </svg>
                  </div>
                  <div class="flex-1">
                    <h4 class="font-semibold text-gray-900 mb-2">巴士ルート</h4>
                    <div class="text-gray-700 space-y-1">
                      <p>広島バスセンター → 倉敷駅前（約1時間30分）</p>
                      <p class="text-sm text-gray-500">Direct高速巴士運行中</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Local Transportation -->
        <div class="mb-16">
          <h2 class="text-3xl font-bold text-gray-900 mb-8 text-center">
            倉敷市内交通
          </h2>

          <!-- Map Section -->
          <div class="mb-8">
            <div
              class="relative h-80 md:h-96 rounded-2xl overflow-hidden shadow-xl"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6563.5!2d133.7667!3d34.5734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x355097d8d4f4f4f%3A0x1234567890abcdef!2z5paw5bqX5bqE5ZCN6YeF!5e0!3m2!1sja!2sjp!4v1234567890123!5m2!1sja!2sjp"
                width="100%"
                height="100%"
                style="border: 0"
                allowfullscreen
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                class="w-full h-full"
                title="倉敷市内マップ"
              ></iframe>
              <div
                class="absolute bottom-4 left-4 bg-white bg-opacity-90 backdrop-blur-sm rounded-lg px-3 py-2"
              >
                <p class="text-sm font-medium text-gray-800">
                  倉敷市内交通マップ
                </p>
              </div>
            </div>
          </div>

          <div
            class="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
          >
            <div class="p-8">
              <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div class="bg-blue-50 rounded-xl p-6">
                  <div class="flex items-center mb-4">
                    <div
                      class="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mr-4"
                    >
                      <svg
                        class="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2v0a2 2 0 01-2-2v-5H8z"
                        ></path>
                      </svg>
                    </div>
                    <h3 class="text-xl font-bold text-gray-900">
                      倉敷循環巴士
                    </h3>
                  </div>
                  <p class="text-gray-700 mb-4">
                    倉敷市内を循環する巴士で、美観地区へのアクセスに便利です。
                  </p>
                  <div class="space-y-3">
                    <div class="flex items-center space-x-3">
                      <div class="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <span class="text-gray-700">
                        運行時間: 8:00 - 18:00
                      </span>
                    </div>
                    <div class="flex items-center space-x-3">
                      <div class="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <span class="text-gray-700">
                        料金: 大人 100円 / 子供 50円
                      </span>
                    </div>
                    <div class="flex items-center space-x-3">
                      <div class="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <span class="text-gray-700"> 運行間隔: 15分置き </span>
                    </div>
                  </div>
                </div>

                <div class="bg-green-50 rounded-xl p-6">
                  <div class="flex items-center mb-4">
                    <div
                      class="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mr-4"
                    >
                      <svg
                        class="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        ></path>
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        ></path>
                      </svg>
                    </div>
                    <h3 class="text-xl font-bold text-gray-900">
                      徒歩での周遊
                    </h3>
                  </div>
                  <p class="text-gray-700 mb-4">
                    美観地区內は徒歩で完全に周遊できます。美しい風景を楽しみながら、ゆっくりと探索をお楽しみください。
                  </p>
                  <div class="bg-white rounded-lg p-4">
                    <h4 class="font-semibold text-gray-900 mb-2">
                      おすすめ徒步ルート
                    </h4>
                    <p class="text-gray-700 text-sm leading-relaxed">
                      倉敷駅 → 倉敷川畔 → 美観地区中心 → 大原美術館 → 倉敷民藝館
                      → 倉敷駅
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const faq1Open = ref(false);
const faq2Open = ref(false);
const faq3Open = ref(false);
const faq4Open = ref(false);
const faq5Open = ref(false);
</script>

<style scoped>
/* FAQ transition animations */
.faq-content {
  transition: all 0.3s ease-in-out;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f5f9;
}

::-webkit-scrollbar-thumb {
  background: #cbd5e1;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #94a3b8;
}

/* Hover effects for cards */
.hover\:shadow-2xl:hover {
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}

/* Gradient text effect */
.gradient-text {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Animation for contact cards */
.contact-card {
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.contact-card:hover {
  transform: translateY(-4px);
}

/* Loading animation for map placeholder */
@keyframes pulse {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

/* Responsive text adjustments */
@media (max-width: 768px) {
  .text-5xl {
    font-size: 2.5rem;
  }

  .text-6xl {
    font-size: 3rem;
  }
}
</style>
