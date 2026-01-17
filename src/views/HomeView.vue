<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section
      class="relative h-screen flex items-center justify-center overflow-hidden"
    >
      <!-- Background Image -->
      <div class="absolute inset-0 z-0">
        <img
          src="/images/home/kurashiki-hero.avif"
          class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      <!-- Hero Content -->
      <div class="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 class="text-5xl md:text-7xl font-bold mb-6 font-urbanist">
          倉敷へようこそ
        </h1>
        <h2 class="text-2xl md:text-4xl font-light mb-8 text-gradient">
          水の町
        </h2>
        <p class="text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
          倉敷は、江戸時代の街並みが残る美しい水の町です。白壁の町家と川の流れが織りなす美しい風景为您带来前所未有的旅游体验。
        </p>
        <div class="space-x-4">
          <router-link
            to="/spots"
            class="inline-block bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            スポット紹介
          </router-link>
          <router-link
            to="/courses"
            class="inline-block border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors"
          >
            おすすめコース
          </router-link>
        </div>
      </div>
    </section>

    <!-- Featured Spots Section -->
    <section class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-900 mb-4">主要スポット</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            倉敷の魅力を理解し、効率的に回りたいお客様に、必見スポットの情報と旅のヒントを提供します。
          </p>
        </div>

        <!-- 倉敷川畔 -->
        <div class="mb-20">
          <div class="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div class="md:flex">
              <div class="md:w-1/2">
                <img
                  src="/images/home/kurashiki-4.jpeg"
                  alt="倉敷川畔"
                  class="w-full h-96 md:h-full object-cover"
                />
              </div>
              <div class="md:w-1/2 p-8">
                <h3 class="text-3xl font-bold text-gray-900 mb-4">倉敷川畔</h3>
                <p class="text-gray-600 mb-6 leading-relaxed">
                  川沿いに立ち並ぶ白壁の町家と、ゆらゆらと揺れる柳が織りなす景色は、どこかタイムスリップしたような感覚を味わわせてくれます。昼の清々しさもさることながら、夕暮れ時に灯る灯りに照らされた風景はまた格別。
                </p>
                <div class="space-y-3 mb-6">
                  <div class="flex items-center text-gray-600">
                    <svg
                      class="w-5 h-5 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    住所 岡山県倉敷市中央1丁目
                  </div>
                  <div class="flex items-center text-gray-600">
                    <svg
                      class="w-5 h-5 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    営業時間 散策自由 観光船: 9:30～17:00
                  </div>
                </div>
                <div class="flex flex-wrap gap-2 mb-6">
                  <span
                    class="bg-black text-white px-3 py-1 rounded-full text-sm"
                    >#歴史</span
                  >
                  <span
                    class="bg-black text-white px-3 py-1 rounded-full text-sm"
                    >#写真映え</span
                  >
                  <span
                    class="bg-black text-white px-3 py-1 rounded-full text-sm"
                    >#定番</span
                  >
                </div>
                <div class="bg-gray-50 p-4 rounded-lg">
                  <p class="text-sm text-gray-600">
                    <strong>小贴士:</strong> ベストショット:
                    観光船を前景に、町並みを背景にした構図が人気。また、夕景のライトアップは幻想的です。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 大原美術館 -->
        <div class="mb-20">
          <div class="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div class="md:flex md:flex-row-reverse">
              <div class="md:w-1/2">
                <img
                  src="/images/home/ohara-museum.jpeg"
                  alt="大原美術館"
                  class="w-full h-96 md:h-full object-cover"
                />
              </div>
              <div class="md:w-1/2 p-8">
                <h3 class="text-3xl font-bold text-gray-900 mb-4">
                  大原美術館
                </h3>
                <p class="text-gray-600 mb-6 leading-relaxed">
                  日本初の私立西洋美術館として1930年に開館。「美観地区の心臓」とも言うべき存在です。エル・グレコ、モネ、ルノワールなど、西洋近代絵画のコレクションは質、量ともに圧巻。
                </p>
                <div class="space-y-3 mb-6">
                  <div class="flex items-center text-gray-600">
                    <svg
                      class="w-5 h-5 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    住所 岡山県倉敷市中央1-1-15
                  </div>
                  <div class="flex items-center text-gray-600">
                    <svg
                      class="w-5 h-5 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    営業時間 9:00～17:00（最終入館16:30）
                  </div>
                </div>
                <div class="flex flex-wrap gap-2 mb-6">
                  <span
                    class="bg-black text-white px-3 py-1 rounded-full text-sm"
                    >#アート</span
                  >
                  <span
                    class="bg-black text-white px-3 py-1 rounded-full text-sm"
                    >#歴史</span
                  >
                  <span
                    class="bg-black text-white px-3 py-1 rounded-full text-sm"
                    >#室内</span
                  >
                </div>
                <div class="bg-gray-50 p-4 rounded-lg">
                  <p class="text-sm text-gray-600">
                    <strong>小贴士:</strong>
                    ゆっくり見学すると2时间是みておきましょう。公式サイトで事前に企画展をチェックするのがおすすめ。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Call to Action -->
        <div class="text-center">
          <router-link
            to="/spots"
            class="inline-block bg-kurarishu-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-kurarishu-blue-700 transition-colors"
          >
            更多スポットを見る
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// Component logic here
</script>
