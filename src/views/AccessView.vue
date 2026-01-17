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
          目的：観光客がスムーズに到着し、行程を準備できるよう支援します
        </p>
      </div>
    </section>

    <!-- Main Content -->
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Access Information -->
        <div class="mb-16">
          <h2 class="text-3xl font-bold text-gray-900 mb-8">アクセス方法</h2>

          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <!-- From Osaka -->
            <div class="bg-white rounded-2xl shadow-lg p-8">
              <h3 class="text-2xl font-bold text-gray-900 mb-6">大阪→倉敷</h3>
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
                  <div>
                    <h4 class="font-semibold text-gray-900 mb-2">
                      新幹線ルート
                    </h4>
                    <p class="text-gray-700 mb-2">
                      新大阪駅発「のぞみ」で岡山駅へ（約1時間）
                    </p>
                    <p class="text-gray-700">
                      岡山駅からJR倉敷線で倉敷駅へ（約15分）
                    </p>
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
                  <div>
                    <h4 class="font-semibold text-gray-900 mb-2">巴士ルート</h4>
                    <p class="text-gray-700">
                      大阪梅田駅発高速バスで倉敷駅前へ（約3時間30分）
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <!-- From Tokyo -->
            <div class="bg-white rounded-2xl shadow-lg p-8">
              <h3 class="text-2xl font-bold text-gray-900 mb-6">東京→倉敷</h3>
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
                  <div>
                    <h4 class="font-semibold text-gray-900 mb-2">
                      新幹線ルート
                    </h4>
                    <p class="text-gray-700 mb-2">
                      東京駅発「のぞみ」で岡山駅へ（約3時間30分）
                    </p>
                    <p class="text-gray-700">
                      岡山駅からJR倉敷線で倉敷駅へ（約15分）
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- From Hiroshima -->
          <div class="bg-white rounded-2xl shadow-lg p-8">
            <h3 class="text-2xl font-bold text-gray-900 mb-6">広島→倉敷</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                <div>
                  <h4 class="font-semibold text-gray-900 mb-2">新幹線ルート</h4>
                  <p class="text-gray-700 mb-2">
                    広島駅発「のぞみ」で岡山駅へ（約40分）
                  </p>
                  <p class="text-gray-700">
                    岡山駅からJR倉敷線で倉敷駅へ（約15分）
                  </p>
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
                <div>
                  <h4 class="font-semibold text-gray-900 mb-2">巴士ルート</h4>
                  <p class="text-gray-700">
                    広島バスセンター発高速バスで倉敷駅前へ（約1時間30分）
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Local Transportation -->
        <div class="mb-16">
          <h2 class="text-3xl font-bold text-gray-900 mb-8">倉敷市内交通</h2>

          <div class="bg-white rounded-2xl shadow-lg p-8">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 class="text-xl font-bold text-gray-900 mb-4">
                  倉敷循環バス
                </h3>
                <p class="text-gray-700 mb-4">
                  倉敷市内は「倉敷循環バス」が運行中、美観地区は徒歩で周遊可能です。
                </p>
                <div class="space-y-2">
                  <div class="flex items-center space-x-2">
                    <div
                      class="w-2 h-2 bg-kurarishu-blue-500 rounded-full"
                    ></div>
                    <span class="text-gray-700">運行時間: 8:00 - 18:00</span>
                  </div>
                  <div class="flex items-center space-x-2">
                    <div
                      class="w-2 h-2 bg-kurarishu-blue-500 rounded-full"
                    ></div>
                    <span class="text-gray-700"
                      >料金: 大人 100円 / 子供 50円</span
                    >
                  </div>
                  <div class="flex items-center space-x-2">
                    <div
                      class="w-2 h-2 bg-kurarishu-blue-500 rounded-full"
                    ></div>
                    <span class="text-gray-700">運行間隔: 15分置き</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 class="text-xl font-bold text-gray-900 mb-4">
                  徒歩での周遊
                </h3>
                <p class="text-gray-700 mb-4">
                  美観地区內は徒歩で完全に周遊できます。美しい風景を楽ししながら、ゆっくりと探索をお楽しみください。
                </p>
                <div class="bg-gray-50 p-4 rounded-lg">
                  <h4 class="font-semibold text-gray-900 mb-2">
                    おすすめ徒步ルート
                  </h4>
                  <p class="text-gray-700 text-sm">
                    倉敷駅 → 倉敷川畔 → 美観地区中心 → 大原美術館 → 倉敷民藝館 →
                    倉敷駅
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Map Integration -->
        <div class="mb-16">
          <h2 class="text-3xl font-bold text-gray-900 mb-8">
            交通ルートマップ
          </h2>

          <div class="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div class="aspect-w-16 aspect-h-9">
              <div
                class="w-full h-96 bg-gray-200 flex items-center justify-center"
              >
                <div class="text-center">
                  <svg
                    class="w-24 h-24 text-gray-400 mx-auto mb-4"
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
                  <p class="text-gray-600 text-lg font-medium">
                    倉敷交通ルートマップ
                  </p>
                  <p class="text-gray-500">
                    大阪・東京・広島からのアクセスルートを表示します
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- FAQ Section -->
        <div class="mb-16">
          <h2 class="text-3xl font-bold text-gray-900 mb-8">よくある質問</h2>

          <div class="space-y-6">
            <!-- FAQ 1 -->
            <div class="bg-white rounded-2xl shadow-lg overflow-hidden">
              <button
                @click="faq1Open = !faq1Open"
                class="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <h3 class="text-lg font-semibold text-gray-900">
                  着物レンタルはありますか？
                </h3>
                <svg
                  class="w-5 h-5 text-gray-500 transition-transform"
                  :class="{ 'rotate-180': faq1Open }"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>
              <div v-if="faq1Open" class="px-8 pb-6">
                <p class="text-gray-700">
                  はい、美観地区內に複数の着物レンタル店があります。伝統的な着物を
                  着て倉敷の美しい風景をお楽しみください。価格は着物の種類やレンタル時間によって異なり、2,000円～5,000円的程度です。
                </p>
              </div>
            </div>

            <!-- FAQ 2 -->
            <div class="bg-white rounded-2xl shadow-lg overflow-hidden">
              <button
                @click="faq2Open = !faq2Open"
                class="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <h3 class="text-lg font-semibold text-gray-900">
                  荷物預かりはできますか？
                </h3>
                <svg
                  class="w-5 h-5 text-gray-500 transition-transform"
                  :class="{ 'rotate-180': faq2Open }"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>
              <div v-if="faq2Open" class="px-8 pb-6">
                <p class="text-gray-700">
                  倉敷駅と美観地区入口に荷物預かり所が設置されています。料金は300円～500円で、預ける時間は8:00～19:00です。また、主要なホテルでも荷物預りを承っております。
                </p>
              </div>
            </div>

            <!-- FAQ 3 -->
            <div class="bg-white rounded-2xl shadow-lg overflow-hidden">
              <button
                @click="faq3Open = !faq3Open"
                class="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <h3 class="text-lg font-semibold text-gray-900">
                  ベストシーズンはいつですか？
                </h3>
                <svg
                  class="w-5 h-5 text-gray-500 transition-transform"
                  :class="{ 'rotate-180': faq3Open }"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>
              <div v-if="faq3Open" class="px-8 pb-6">
                <p class="text-gray-700">
                  3～5月の春（桜の季節）と9～11月の秋（紅葉）が特ににおすすめです。6～8月は夏祭りがあり、12～2月は靜かで美しい冬景色が見られます。
                </p>
              </div>
            </div>

            <!-- FAQ 4 -->
            <div class="bg-white rounded-2xl shadow-lg overflow-hidden">
              <button
                @click="faq4Open = !faq4Open"
                class="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <h3 class="text-lg font-semibold text-gray-900">
                  駐車場はありますか？
                </h3>
                <svg
                  class="w-5 h-5 text-gray-500 transition-transform"
                  :class="{ 'rotate-180': faq4Open }"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>
              <div v-if="faq4Open" class="px-8 pb-6">
                <p class="text-gray-700">
                  美観地区內には停车场があります。料金は1時間300円、1日最大1,500状態です。ただし、主要なspots附近には停车可能な場所不多ため、電車でのアクセス
                  Recommendいたします。
                </p>
              </div>
            </div>

            <!-- FAQ 5 -->
            <div class="bg-white rounded-2xl shadow-lg overflow-hidden">
              <button
                @click="faq5Open = !faq5Open"
                class="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <h3 class="text-lg font-semibold text-gray-900">
                  anguage対応はありますか？
                </h3>
                <svg
                  class="w-5 h-5 text-gray-500 transition-transform"
                  :class="{ 'rotate-180': faq5Open }"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>
              <div v-if="faq5Open" class="px-8 pb-6">
                <p class="text-gray-700">
                  美観地區内の主要な施設やレストランでは、英语・中文・韓国語の案内板やメニューを提供している場所もあります。倉敷市観光課でも多言語対応のサポートしております。
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Contact Information -->
        <div class="bg-kurarishu-blue-50 rounded-2xl p-8">
          <div class="text-center mb-8">
            <h3 class="text-2xl font-bold text-gray-900 mb-4">お問い合わせ</h3>
            <p class="text-gray-700 max-w-2xl mx-auto">
              倉敷へのご旅行についてご質問やご相談がございましたら、お気軽にお問い合わせください。
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div class="text-center">
              <div
                class="w-16 h-16 bg-kurarishu-blue-100 rounded-full flex items-center justify-center mx-auto mb-4"
              >
                <svg
                  class="w-8 h-8 text-kurarishu-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  ></path>
                </svg>
              </div>
              <h4 class="font-bold text-lg mb-2">電話</h4>
              <p class="text-gray-700">086-426-3411</p>
              <p class="text-gray-600 text-sm">平日 9:00-17:00</p>
            </div>

            <div class="text-center">
              <div
                class="w-16 h-16 bg-kurarishu-blue-100 rounded-full flex items-center justify-center mx-auto mb-4"
              >
                <svg
                  class="w-8 h-8 text-kurarishu-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  ></path>
                </svg>
              </div>
              <h4 class="font-bold text-lg mb-2">メール</h4>
              <p class="text-gray-700">tourism@kurashiki.city</p>
              <p class="text-gray-600 text-sm">24時間受付</p>
            </div>

            <div class="text-center">
              <div
                class="w-16 h-16 bg-kurarishu-blue-100 rounded-full flex items-center justify-center mx-auto mb-4"
              >
                <svg
                  class="w-8 h-8 text-kurarishu-blue-600"
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
              <h4 class="font-bold text-lg mb-2">住所</h4>
              <p class="text-gray-700">〒710-8565</p>
              <p class="text-gray-700">岡山県倉敷市西中新田6-1</p>
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
