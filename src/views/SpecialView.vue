<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Hero Section -->
    <section
      class="relative h-96 flex items-center justify-center overflow-hidden"
    >
      <div class="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1545569341-9eb8b30979d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          alt="倉敷の魅力を伝える特集"
          class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      <div class="relative z-10 text-center text-white px-4">
        <h1 class="text-5xl md:text-6xl font-bold mb-4">
          倉敷の魅力を伝える特集
        </h1>
        <p class="text-xl md:text-2xl">
          倉敷の四季の美しさと文化の魅力を紹介します。
        </p>
      </div>
    </section>

    <!-- Main Content -->
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Featured Article -->
        <div class="mb-16">
          <h2 class="text-3xl font-bold text-gray-900 mb-8">
            「四季の倉敷」特集
          </h2>

          <!-- Spring Article -->
          <div class="bg-white rounded-2xl shadow-xl overflow-hidden mb-12">
            <div class="md:flex">
              <div class="md:w-1/2">
                <img
                  src="/images/special/kurashiki-spring-2.png"
                  alt="春の倉敷"
                  class="w-full h-96 md:h-full object-cover"
                />
              </div>
              <div class="md:w-1/2 p-8">
                <h3 class="text-3xl font-bold text-gray-900 mb-4">
                  「四季の倉敷」特集：春桜編
                </h3>
                <div class="flex items-center space-x-4 mb-6">
                  <div class="flex items-center space-x-2">
                    <div
                      class="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center"
                    >
                      <span class="text-gray-600 font-semibold text-sm"
                        >ユーザー</span
                      >
                    </div>
                    <div>
                      <h4 class="font-semibold text-gray-900">ユーザーです</h4>
                      <div class="flex items-center space-x-2">
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
                        <span class="text-gray-600"
                          >(256件のコメントがありました)</span
                        >
                      </div>
                    </div>
                  </div>
                </div>
                <p class="text-gray-700 leading-relaxed mb-6">
                  毎年3～4月、倉敷川沿いに咲き誇る千本桜が、粉白の花びらを川面にそっと舞い落とす。河畔に佇む白壁の町屋群（歴史的建造物）と相まって、どれか浮世絵が動くような景観になる。
                </p>
                <p class="text-gray-700 leading-relaxed">
                  烏篷船に乗って川から花雨を仰ぐか、花びらで敷き詰められた石板路を散歩すれば、「一歩一景、角を曲がれば春」の雅趣を味わえる。古い倉庫を改装したカフェからは焙茶の香りが立ち昇り、桜の甘い香りと混ざり合って、春の倉敷特有の癒しの味覚記憶になる。
                </p>
              </div>
            </div>
          </div>

          <!-- Summer Article -->
          <div class="bg-white rounded-2xl shadow-xl overflow-hidden mb-12">
            <div class="md:flex md:flex-row-reverse">
              <div class="md:w-1/2">
                <img
                  src="/images/special/kurashiki-summer.png"
                  alt="夏の倉敷"
                  class="w-full h-96 md:h-full object-cover"
                />
              </div>
              <div class="md:w-1/2 p-8">
                <h3 class="text-3xl font-bold text-gray-900 mb-4">
                  「四季の倉敷」特集：夏提灯祭り編
                </h3>
                <div class="flex items-center space-x-4 mb-6">
                  <div class="flex items-center space-x-2">
                    <div
                      class="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center"
                    >
                      <span class="text-gray-600 font-semibold text-sm"
                        >ユーザー</span
                      >
                    </div>
                    <div>
                      <h4 class="font-semibold text-gray-900">ユーザーです</h4>
                      <div class="flex items-center space-x-2">
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
                        <span class="text-gray-600"
                          >(256件のコメントがありました)</span
                        >
                      </div>
                    </div>
                  </div>
                </div>
                <p class="text-gray-700 leading-relaxed">
                  7月に開催される「倉敷提灯祭り」では、古街が光の海に変わる。2000以上の和紙提灯が夕暮れから深夜まで灯り、町屋の黒い木梁と白壁の肌理を柔らかく照らす。浴衣を着た地元の人々が提灯を提げて巡行し、太鼓の音が街中に響き渡る。屋台ではタコ焼きの熱気とかき氷の冷気が混ざり、江戸時代の街並みを残す「美観地区」では、祭りの喧騒と百年の倉庫の静けさがぶつかり合い、倉敷独自の夏のにぎわいが生まれる。
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Cultural Heritage -->
        <div class="mb-16">
          <h2 class="text-3xl font-bold text-gray-900 mb-8">芸術の街倉敷</h2>

          <div class="bg-white rounded-2xl shadow-xl p-8">
            <div class="md:flex items-center space-x-8">
              <div class="md:w-2/3">
                <p class="text-gray-700 leading-relaxed text-lg">
                  「芸術の街・倉敷」は白壁の街並みがあり、工芸品の雰囲気が漂う町です。倉敷の布地、木製品、陶器はすべて地元の職人技の結晶です。工房では、様々な工芸品の制作体験ができます。伝統工芸に触れ、創作の喜びを感じる旅を始めましょう。
                </p>
              </div>
              <div class="md:w-1/3">
                <img
                  src="/images/special/kurashiki-crafts.png"
                  alt="倉敷の工芸品"
                  class="w-full h-64 object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>

        <!-- Local Market -->
        <div class="mb-16">
          <h2 class="text-3xl font-bold text-gray-900 mb-8">
            くらしきローカルマルシェ
          </h2>

          <div class="bg-white rounded-2xl shadow-xl p-8">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <p class="text-gray-700 leading-relaxed mb-4">
                  「くらしきローカルマルシェ」は、倉敷美観地区で開催される人気のローカル市（いち）です。「倉敷の暮らしと魅力を発見する」をテーマに、地元の農家さん、ハンドメイド作家、ベーカリー、小さなアトリエのお店などが集まります。落ち着いた雰囲気で、散策の途中にふらっと立ち寄りたくなる温かい市です。
                </p>
                <p class="text-gray-700 leading-relaxed">
                  会場には、採れたて野菜、手づくりジャム、焼き菓子、ナチュラルアロマ、アクセサリー、木工・布小物など、地域の人たちが心を込めて作った品々が並び、倉敷ならではの“暮らしのぬくもり”を感じられます。
                </p>
              </div>
              <div>
                <p class="text-gray-700 leading-relaxed">
                  場所は美観地区の散策ルートに近く、古い町並みを楽しみながらゆったり巡れるのも魅力。倉敷のゆるやかな時間とローカルの魅力を一度に味わえる、市民にも観光客にも愛される市です。
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Seasonal Highlights Grid -->
        <div class="mb-16">
          <h2 class="text-3xl font-bold text-gray-900 mb-8">季節別魅力</h2>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <!-- Spring -->
            <div
              class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <img
                src="/images/special/kurashiki-spring-1.png"
                alt="春の倉敷"
                class="w-full h-48 object-cover"
              />
              <div class="p-6">
                <h3 class="text-xl font-bold text-gray-900 mb-2">
                  春（3-5月）
                </h3>
                <p class="text-gray-600 text-sm mb-4">
                  千本桜と川面の美しい風景
                </p>
                <div class="flex flex-wrap gap-2">
                  <span
                    class="bg-pink-100 text-pink-800 px-2 py-1 rounded-full text-xs"
                    >#桜</span
                  >
                  <span
                    class="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs"
                    >#花見</span
                  >
                </div>
              </div>
            </div>

            <!-- Summer -->
            <div
              class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <img
                src="https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="夏の倉敷"
                class="w-full h-48 object-cover"
              />
              <div class="p-6">
                <h3 class="text-xl font-bold text-gray-900 mb-2">
                  夏（6-8月）
                </h3>
                <p class="text-gray-600 text-sm mb-4">提灯祭りと伝統文化</p>
                <div class="flex flex-wrap gap-2">
                  <span
                    class="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs"
                    >#祭り</span
                  >
                  <span
                    class="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs"
                    >#提灯</span
                  >
                </div>
              </div>
            </div>

            <!-- Autumn -->
            <div
              class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="秋の倉敷"
                class="w-full h-48 object-cover"
              />
              <div class="p-6">
                <h3 class="text-xl font-bold text-gray-900 mb-2">
                  秋（9-11月）
                </h3>
                <p class="text-gray-600 text-sm mb-4">紅葉と芸術的季节</p>
                <div class="flex flex-wrap gap-2">
                  <span
                    class="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-xs"
                    >#紅葉</span
                  >
                  <span
                    class="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs"
                    >#芸術</span
                  >
                </div>
              </div>
            </div>

            <!-- Winter -->
            <div
              class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <img
                src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="冬の倉敷"
                class="w-full h-48 object-cover"
              />
              <div class="p-6">
                <h3 class="text-xl font-bold text-gray-900 mb-2">
                  冬（12-2月）
                </h3>
                <p class="text-gray-600 text-sm mb-4">静かな美しさと文化</p>
                <div class="flex flex-wrap gap-2">
                  <span
                    class="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs"
                    >#静寂</span
                  >
                  <span
                    class="bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-xs"
                    >#文化</span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Call to Action -->
        <div class="bg-kurarishu-blue-50 rounded-2xl p-8 text-center">
          <h3 class="text-2xl font-bold text-gray-900 mb-4">
            倉敷の魅力をもっと知りたい
          </h3>
          <p class="text-gray-700 mb-6 max-w-2xl mx-auto">
            倉敷の四季の美しさと文化の魅力を体験したい方は、コース案内をご覧ください。
          </p>
          <div class="space-x-4">
            <router-link
              to="/courses"
              class="inline-block bg-kurarishu-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-kurarishu-blue-700 transition-colors"
            >
              おすすめコースを見る
            </router-link>
            <router-link
              to="/spots"
              class="inline-block border-2 border-kurarishu-blue-600 text-kurarishu-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-kurarishu-blue-600 hover:text-white transition-colors"
            >
              スポットを紹介する
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// Component logic here
</script>
