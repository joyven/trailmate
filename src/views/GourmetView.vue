<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Hero Section -->
    <section
      class="relative h-96 flex items-center justify-center overflow-hidden"
    >
      <div class="absolute inset-0 z-0">
        <img
          src="/images/gourmet/kurashiki-gourmet.avif"
          alt="倉敷のグルメ"
          class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      <div class="relative z-10 text-center text-white px-4">
        <h1 class="text-5xl md:text-6xl font-bold mb-4">グルメ·特産</h1>
        <p class="text-xl md:text-2xl">
          倉敷の伝統と味覚をお楽しみください。美味しい食べ物と特産品です。
        </p>
      </div>
    </section>

    <!-- Main Content -->
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Featured Restaurants -->
        <div class="mb-16">
          <h2 class="text-3xl font-bold text-gray-900 mb-8">おすすめグルメ</h2>

          <!-- Restaurant Cards -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <!-- 大判焼き -->
            <div
              class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <img
                src="/images/gourmet/obanyaki-1.png"
                alt="大判焼きのお店"
                class="w-full h-48 object-cover"
              />
              <div class="p-6">
                <div class="flex items-center justify-between mb-2">
                  <h3 class="text-xl font-bold text-gray-900">
                    大判焼きのお店
                  </h3>
                  <div class="flex items-center">
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
                    <span class="text-sm text-gray-600 ml-1">4.5</span>
                  </div>
                </div>
                <p class="text-gray-600 text-sm mb-4">
                  大判焼きのお店。倉敷の名物饅頭です。つぶあんのみのシンプルながら、食べ応えのある飽きない味。寒い時期に、焼きたてのあつあつを頂くのはたまりません。
                </p>
                <div class="flex flex-wrap gap-2">
                  <span
                    class="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs"
                    >#名物</span
                  >
                  <span
                    class="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs"
                    >#安食</span
                  >
                  <span
                    class="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs"
                    >#温まり</span
                  >
                </div>
              </div>
            </div>

            <!-- くらしき桃子 -->
            <div
              class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <img
                src="/images/gourmet/kurashiki-momoko-1.jpg"
                alt="くらしき桃子"
                class="w-full h-48 object-cover"
              />
              <div class="p-6">
                <div class="flex items-center justify-between mb-2">
                  <h3 class="text-xl font-bold text-gray-900">くらしき桃子</h3>
                  <div class="flex items-center">
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
                    <span class="text-sm text-gray-600 ml-1">4.8</span>
                  </div>
                </div>
                <p class="text-gray-600 text-sm mb-4">
                  くらしき桃子の店舗は、倉敷美観地区にある町屋をリノベートしたカフェです。季節のパフェや岡山県特産のフルーツを使ったお土産など多数取り揃えています。人気のカウンター席からは美観地区の町並みが見渡せる絶景スポットです。
                </p>
                <div class="flex flex-wrap gap-2">
                  <span
                    class="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs"
                    >#カフェ</span
                  >
                  <span
                    class="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs"
                    >#パフェ</span
                  >
                  <span
                    class="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs"
                    >#景勝</span
                  >
                </div>
              </div>
            </div>

            <!-- ふる里 -->
            <div
              class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <img
                src="/images/gourmet/furusato-1.jpg"
                alt="ふる里"
                class="w-full h-48 object-cover"
              />
              <div class="p-6">
                <div class="flex items-center justify-between mb-2">
                  <h3 class="text-xl font-bold text-gray-900">ふる里</h3>
                  <div class="flex items-center">
                    <div class="flex text-yellow-400">
                      <svg
                        v-for="i in 4"
                        :key="i"
                        class="w-4 h-4 fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path
                          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                        />
                      </svg>
                    </div>
                    <span class="text-sm text-gray-600 ml-1">4.2</span>
                  </div>
                </div>
                <p class="text-gray-600 text-sm mb-4">
                  倉敷美観地区近くのえびす商店街の中にあります。お客様に支えられて、あっという間に35年余りが経ちました。オリジナルと手作りにこだわった料理をお出ししています。料理や気になったものをいろいろUPしていきます。
                </p>
                <div class="flex flex-wrap gap-2">
                  <span
                    class="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs"
                    >#和食</span
                  >
                  <span
                    class="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs"
                    >#老舗</span
                  >
                  <span
                    class="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs"
                    >#手作り</span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Customer Reviews -->
        <div class="mb-16">
          <h2 class="text-3xl font-bold text-gray-900 mb-8">お客様の声</h2>

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
                  <p class="text-gray-700 mb-4">
                    甘さ控えめで幾つでも食べられる饅頭とは違います！存在感vidersの１個食べたら大満足！2個食べれる人は相当の甘い物好き？っていうくらい、ガツンときます。クセになる美味しさです。絶対また食べたくなります
                  </p>
                  <div class="flex space-x-4 text-sm text-gray-500">
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

            <!-- Review 2 -->
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
                  <p class="text-gray-700 mb-4">
                    焼きたてを一個から( 130円 )
                    購入できて、名古屋にある大判焼きとは違った美味しかったです。外の皮はカリッとしていて中のあんこがたくさん入ってました
                  </p>
                  <div class="flex space-x-4 text-sm text-gray-500">
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

            <!-- Review 3 -->
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
                  <p class="text-gray-700 mb-4">
                    桃パフェが食べたくて伺いました。行った時は白麗という種類で、甘さも柔らかさも期待を飛び越えていく美味しさ！古民家を利用したカフェで、雰囲気もいいし店員さんの説明も分かりやすく、桃パフェを満喫できました。桃以外にも美味しそうなフルーツのパフェやケーキもあって、どれも美味しそう！また食べにいきたい～
                  </p>
                  <div class="flex space-x-4 text-sm text-gray-500">
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

        <!-- Local Specialties -->
        <div class="mb-16">
          <h2 class="text-3xl font-bold text-gray-900 mb-8">特産品の紹介</h2>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div class="bg-white rounded-xl shadow-lg p-6 text-center">
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
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  ></path>
                </svg>
              </div>
              <h3 class="font-bold text-lg mb-2">倉敷民芸品</h3>
              <p class="text-gray-600 text-sm">伝統的な手工芸品</p>
            </div>

            <div class="bg-white rounded-xl shadow-lg p-6 text-center">
              <div
                class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"
              >
                <svg
                  class="w-8 h-8 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  ></path>
                </svg>
              </div>
              <h3 class="font-bold text-lg mb-2">カウボーイ生地</h3>
              <p class="text-gray-600 text-sm">倉敷限定の牛仔布</p>
            </div>

            <div class="bg-white rounded-xl shadow-lg p-6 text-center">
              <div
                class="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4"
              >
                <svg
                  class="w-8 h-8 text-yellow-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                  ></path>
                </svg>
              </div>
              <h3 class="font-bold text-lg mb-2">大判焼き</h3>
              <p class="text-gray-600 text-sm">倉敷の名物小吃</p>
            </div>

            <div class="bg-white rounded-xl shadow-lg p-6 text-center">
              <div
                class="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4"
              >
                <svg
                  class="w-8 h-8 text-red-600"
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
              </div>
              <h3 class="font-bold text-lg mb-2">桃花糖</h3>
              <p class="text-gray-600 text-sm">季節限定デザート</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// Component logic here
</script>
