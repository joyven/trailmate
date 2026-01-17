<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Hero Section -->
    <section
      class="relative h-96 flex items-center justify-center overflow-hidden"
    >
      <div class="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1545569341-9eb8b30979d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          alt="倉敷体験"
          class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      <div class="relative z-10 text-center text-white px-4">
        <h1 class="text-5xl md:text-6xl font-bold mb-4">
          地元の声·体験レポート
        </h1>
        <p class="text-xl md:text-2xl">
          倉敷を体験した方の生の声とレポートをお届けします。
        </p>
      </div>
    </section>

    <!-- Main Content -->
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Featured Experience -->
        <div class="mb-16">
          <h2 class="text-3xl font-bold text-gray-900 mb-8">体験レポート</h2>

          <div class="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div class="md:flex">
              <div class="md:w-1/2">
                <img
                  src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="倉敷美観地区"
                  class="w-full h-96 md:h-full object-cover"
                />
              </div>
              <div class="md:w-1/2 p-8">
                <div class="flex items-center space-x-4 mb-6">
                  <div
                    class="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center"
                  >
                    <span class="text-gray-600 font-semibold">ユーザー</span>
                  </div>
                  <div>
                    <h3 class="text-2xl font-bold text-gray-900">
                      倉敷美観地区
                    </h3>
                    <div class="flex items-center space-x-2">
                      <div class="flex text-yellow-400">
                        <svg
                          v-for="i in 5"
                          :key="i"
                          class="w-5 h-5 fill-current"
                          viewBox="0 0 20 20"
                        >
                          <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                          />
                        </svg>
                      </div>
                      <span class="text-gray-600"
                        >(256件のコメントがありました)</span
                      >
                    </div>
                  </div>
                </div>

                <!-- Action Buttons -->
                <div class="flex items-center space-x-4 mb-6">
                  <button
                    class="flex items-center space-x-2 text-gray-600 hover:text-red-500 transition-colors"
                  >
                    <svg
                      class="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      ></path>
                    </svg>
                    <span>好きです</span>
                  </button>
                  <button
                    class="flex items-center space-x-2 text-gray-600 hover:text-blue-500 transition-colors"
                  >
                    <svg
                      class="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"
                      ></path>
                    </svg>
                    <span>シェア</span>
                  </button>
                  <button
                    class="flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors"
                  >
                    <svg
                      class="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                      ></path>
                    </svg>
                    <span>詳細</span>
                  </button>
                </div>

                <!-- Rating Input -->
                <div class="bg-gray-50 rounded-lg p-4 mb-6">
                  <h4 class="font-semibold text-gray-900 mb-2">
                    あなたの考えを共有します
                  </h4>
                  <div class="flex items-center space-x-4">
                    <div class="flex space-x-1">
                      <button
                        v-for="i in 5"
                        :key="i"
                        @click="userRating = i"
                        class="text-gray-300 hover:text-yellow-400 transition-colors"
                      >
                        <svg class="w-8 h-8 fill-current" viewBox="0 0 20 20">
                          <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                          />
                        </svg>
                      </button>
                    </div>
                    <span class="text-gray-600">評価を選択してください</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Detailed Reviews -->
        <div class="mb-16">
          <h2 class="text-3xl font-bold text-gray-900 mb-8">
            お客様の詳細な体験レポート
          </h2>

          <div class="space-y-6">
            <!-- Review 1 -->
            <div class="bg-white rounded-2xl shadow-lg p-6">
              <div class="flex items-start space-x-4">
                <div
                  class="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center"
                >
                  <span class="text-gray-600 font-semibold">ユーザー</span>
                </div>
                <div class="flex-1">
                  <div class="flex items-center justify-between mb-2">
                    <div class="flex items-center space-x-2">
                      <span class="font-semibold text-gray-900"
                        >ユーザーです</span
                      >
                      <div class="flex text-yellow-400">
                        <svg
                          v-for="i in 5"
                          :key="i"
                          class="w-4 h-4 fill-current"
                          viewBox="0 0 20 20"
                        >
                          <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                          />
                        </svg>
                      </div>
                    </div>
                    <span class="text-sm text-gray-500">1時間ほど前です</span>
                  </div>

                  <div class="space-y-4 text-gray-700">
                    <p>
                      1.今まで、私は4回行きましたが、毎回とてもいい気分になりました。路地をゆっくり歩いていると、周りがとても静かに感じられます。川に座ってぼーっとしているのも観光地の中の店を楽しむ特色があります。
                    </p>
                    <p>
                      専売招き猫はガラスで作られた様々な小物を売っています。また、売りもあります
                      地元のカウボーイ生地はとても有名です！観光地に美術館があるので、興味のある友達は行ってみてください！
                    </p>
                    <p>
                      2.ほとんどすべての観光地のように、写真を撮るのに適しています。通りが長くいろいろな店舗で記念品や地元の特産品などを販売しています。美術館、お寺、ジーンズ街などもあります。
                    </p>
                    <p>
                      3.フィールドはとても美しい！週末の観光散歩は旅行の気持ちを作り出す！遊覧船と車夫サービスがあります！岡山地区に行ったらぜひ歩きに来てください！私は前夜夜景を撮り、翌日の昼にもう一度訪れました！京都や高山の人より人を押しつぶすことはなく、素晴らしい！
                    </p>
                    <p>
                      4.環境は写真のように美しく、典雅な建物と西洋式が揃っており、河川と柳の並木が備えられており、雨に覆われていても、新しい風貌が作られています。星4つしかあげられていませんが、私自身の気持ちです。自然が少しも意図しない風貌が好きですが、ここはやはり訪れやすくて美しいところです
                    </p>
                  </div>

                  <div class="flex space-x-4 text-sm text-gray-500 mt-4">
                    <button
                      class="flex items-center space-x-1 hover:text-red-500"
                    >
                      <svg
                        class="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        ></path>
                      </svg>
                      <span>好きです</span>
                    </button>
                    <button class="hover:text-blue-500">お返事します</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Experience Categories -->
        <div class="mb-16">
          <h2 class="text-3xl font-bold text-gray-900 mb-8">体験カテゴリ</h2>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div
              class="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div
                class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4"
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
                    d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                  ></path>
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                </svg>
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-2">写真撮影</h3>
              <p class="text-gray-600 mb-4">
                倉敷の美しい風景と建物を記念に撮影する体験
              </p>
              <div class="text-sm text-gray-500">256件のレビュー</div>
            </div>

            <div
              class="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div
                class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4"
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
                    d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"
                  ></path>
                </svg>
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-2">
                культурные活動
              </h3>
              <p class="text-gray-600 mb-4">美術館や民芸品を見る文化的な体験</p>
              <div class="text-sm text-gray-500">128件のレビュー</div>
            </div>

            <div
              class="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div
                class="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4"
              >
                <svg
                  class="w-6 h-6 text-yellow-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-2">のんびり散步</h3>
              <p class="text-gray-600 mb-4">川沿いをゆっくりと歩く静かな時間</p>
              <div class="text-sm text-gray-500">89件のレビュー</div>
            </div>

            <div
              class="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div
                class="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4"
              >
                <svg
                  class="w-6 h-6 text-red-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2M7 4h10M7 4l-2 16h14l-2-16M11 9v8m4-8v8"
                  ></path>
                </svg>
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-2">食べ物体験</h3>
              <p class="text-gray-600 mb-4">
                倉敷の美味しい食べ物と特産品を试す
              </p>
              <div class="text-sm text-gray-500">167件のレビュー</div>
            </div>

            <div
              class="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div
                class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4"
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
              <h3 class="text-xl font-bold text-gray-900 mb-2">スポット巡礼</h3>
              <p class="text-gray-600 mb-4">倉敷の主要な観光地を巡る体験</p>
              <div class="text-sm text-gray-500">203件のレビュー</div>
            </div>

            <div
              class="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div
                class="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4"
              >
                <svg
                  class="w-6 h-6 text-indigo-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"
                  ></path>
                </svg>
              </div>
              <h3 class="text-xl font-bold text-gray-900 mb-2">宿泊体験</h3>
              <p class="text-gray-600 mb-4">倉敷での宿泊体験とサービス</p>
              <div class="text-sm text-gray-500">45件のレビュー</div>
            </div>
          </div>
        </div>

        <!-- Add Your Review -->
        <div class="bg-kurarishu-blue-50 rounded-2xl p-8 text-center">
          <h3 class="text-2xl font-bold text-gray-900 mb-4">
            あなたの体験を分享してください
          </h3>
          <p class="text-gray-700 mb-6 max-w-2xl mx-auto">
            倉敷での体験を皆 вместе分享し、他の 여행者たちの参考にしましょう。
          </p>
          <button
            class="bg-kurarishu-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-kurarishu-blue-700 transition-colors"
          >
            レビューを書く
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const userRating = ref(0);
</script>
