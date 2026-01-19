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
                <div class="relative">
                  <img
                    :src="springImages[springCurrentImage]"
                    alt="春の倉敷"
                    class="w-full h-80 object-cover transition-all duration-500 ease-in-out hover:scale-105"
                  />
                  <!-- Spring Image Indicators -->
                  <div
                    class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2"
                  >
                    <button
                      v-for="(image, index) in springImages"
                      :key="index"
                      @click="springCurrentImage = index"
                      class="w-3 h-3 rounded-full bg-white transition-opacity"
                      :class="
                        springCurrentImage === index
                          ? 'opacity-100'
                          : 'opacity-50'
                      "
                    ></button>
                  </div>
                </div>
              </div>
              <div class="md:w-1/2 p-8">
                <h3 class="text-3xl font-bold text-gray-900 mb-4">
                  「四季の倉敷」特集：春桜編
                </h3>
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
                <div class="relative">
                  <img
                    :src="summerImages[summerCurrentImage]"
                    alt="夏の倉敷"
                    class="w-full h-80 object-cover transition-all duration-500 ease-in-out hover:scale-105"
                  />
                  <!-- Summer Image Indicators -->
                  <div
                    class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2"
                  >
                    <button
                      v-for="(image, index) in summerImages"
                      :key="index"
                      @click="summerCurrentImage = index"
                      class="w-3 h-3 rounded-full bg-white transition-opacity"
                      :class="
                        summerCurrentImage === index
                          ? 'opacity-100'
                          : 'opacity-50'
                      "
                    ></button>
                  </div>
                </div>
              </div>
              <div class="md:w-1/2 p-8">
                <h3 class="text-3xl font-bold text-gray-900 mb-4">
                  「四季の倉敷」特集：夏提灯祭り編
                </h3>
                <p class="text-gray-700 leading-relaxed">
                  7月に開催される「倉敷提灯祭り」では、古街が光の海に変わる。2000以上の和紙提灯が夕暮れから深夜まで灯り、町屋の黒い木梁と白壁の肌理を柔らかく照らす。浴衣を着た地元の人々が提灯を提げて巡行し、太鼓の音が街中に響き渡る。屋台ではタコ焼きの熱気とかき氷の冷気が混ざり、江戸時代の街並みを残す「美観地区」では、祭りの喧騒と百年の倉庫の静けさがぶつかり合い、倉敷独自の夏のにぎわいが生まれる。
                </p>
              </div>
            </div>
          </div>

          <!-- Autumn Article -->
          <!-- <div class="bg-white rounded-2xl shadow-xl overflow-hidden mb-12">
            <div class="md:flex">
              <div class="md:w-1/2">
                <div class="relative">
                  <img
                    :src="autumnImages[autumnCurrentImage]"
                    alt="秋の倉敷"
                    class="w-full h-80 object-cover transition-all duration-500 ease-in-out hover:scale-105"
                  />
                  <div
                    class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2"
                  >
                    <button
                      v-for="(image, index) in autumnImages"
                      :key="index"
                      @click="autumnCurrentImage = index"
                      class="w-3 h-3 rounded-full bg-white transition-opacity"
                      :class="
                        autumnCurrentImage === index
                          ? 'opacity-100'
                          : 'opacity-50'
                      "
                    ></button>
                  </div>
                </div>
              </div>
              <div class="md:w-1/2 p-8">
                <h3 class="text-3xl font-bold text-gray-900 mb-4">
                  「四季の倉敷」特集：秋紅葉編
                </h3>
                <p class="text-gray-700 leading-relaxed mb-6">
                  秋になると、倉敷の美しい風景が一変する。川沿いの木々が見事に紅葉し、赤や黄色の錦が水面に映り込む。舊倉庫的石壁と紅葉のコントラストは
                  Photosynthetic art のように美しい。
                </p>
                <p class="text-gray-700 leading-relaxed">
                  特に大原美術館の紅葉苑では、散紅葉が地面を美しい色のじゅうたんに変え、歩くとさらさらと音をたてる。秋晴れの空の下で、倉敷の静寂と情熱の両方を同時に感じられる特別な季節。芸術と自然が織りなす倉敷秋の物語を是非体験してほしい。
                </p>
              </div>
            </div>
          </div> -->

          <!-- Winter Article -->
          <!-- <div class="bg-white rounded-2xl shadow-xl overflow-hidden mb-12">
            <div class="md:flex md:flex-row-reverse">
              <div class="md:w-1/2">
                <div class="relative">
                  <img
                    :src="winterImages[winterCurrentImage]"
                    alt="冬の倉敷"
                    class="w-full h-80 object-cover transition-all duration-500 ease-in-out hover:scale-105"
                  />
                  <div
                    class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2"
                  >
                    <button
                      v-for="(image, index) in winterImages"
                      :key="index"
                      @click="winterCurrentImage = index"
                      class="w-3 h-3 rounded-full bg-white transition-opacity"
                      :class="
                        winterCurrentImage === index
                          ? 'opacity-100'
                          : 'opacity-50'
                      "
                    ></button>
                  </div>
                </div>
              </div>
              <div class="md:w-1/2 p-8">
                <h3 class="text-3xl font-bold text-gray-900 mb-4">
                  「四季の倉敷」特集：冬静寂編
                </h3>
                <p class="text-gray-700 leading-relaxed">
                  冬の倉敷は、一年で最も静かで美しい時期。白壁の街並みに雪不住舞えば、歷史的建造物は更加に重厚感和韵味を増す。川面に朝霧立ち昇る姿は、古代中国水墨画のようです。雪解け後に現れる青空と白い雪のコントラストは、倉敷四季的美しさの集大成。
                  Especially recommended for photographers and those seeking
                  tranquility.
                </p>
              </div>
            </div>
          </div> -->
        </div>

        <!-- Cultural Heritage -->
        <div class="mb-16">
          <h2 class="text-3xl font-bold text-gray-900 mb-8">芸術の街倉敷</h2>

          <div class="bg-white rounded-2xl shadow-xl p-8">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              <div class="lg:col-span-1">
                <p class="text-gray-700 leading-relaxed text-lg mb-6">
                  「芸術の街・倉敷」は白壁の街並みがあり，工芸品の雰囲気が漂う町です。倉敷の布地，木製品、陶器はすべて地元の職人技の結晶です。
                </p>
                <p class="text-gray-700 leading-relaxed mb-6">
                  工房では、様々な工芸品の制作体験ができます。伝統工芸に触れ、創作の喜びを感じる旅を始めましょう。
                </p>
                <p class="text-gray-700 leading-relaxed">
                  古い町並みを散策しながら、職人たちの手仕事をご覧ください。
                  Every piece tells a story of local craftsmanship.
                </p>
              </div>
              <div class="lg:col-span-1">
                <div class="grid grid-cols-4 gap-4">
                  <!-- 左侧大图片 -->
                  <img
                    src="/images/special/house-1.jpg"
                    alt="倉敷の工芸品 - 春"
                    class="col-span-2 w-full h-64 object-cover rounded-lg transition-all duration-500 ease-in-out hover:scale-105"
                  />
                  <!-- 右侧上下两张小图片 -->
                  <div class="col-span-2 grid grid-rows-2 gap-4">
                    <img
                      src="/images/special/house-2.jpg"
                      alt="倉敷の工芸品 - 夏"
                      class="w-full h-32 object-cover rounded-lg transition-all duration-500 ease-in-out hover:scale-105"
                    />
                    <img
                      src="/images/special/house-3.jpg"
                      alt="倉敷の工芸品 - 秋"
                      class="w-full h-32 object-cover rounded-lg transition-all duration-500 ease-in-out hover:scale-105"
                    />
                  </div>
                </div>
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
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              <div class="lg:col-span-1 order-2 lg:order-1">
                <p class="text-gray-700 leading-relaxed mb-4">
                  「くらしきローカルマルシェ」は、倉敷美観地区で開催される人気のローカル市（いち）です。「倉敷の暮らしと魅力を発見する」をテーマに、地元のでん家さん、ハンドメッド作家、ベーカリー、小さなアトリエのお店などが集まります。落ち着いた雰囲気で、散策の途中にふらっと立ち寄りたくなる温かい市です。
                </p>
                <p class="text-gray-700 leading-relaxed mb-4">
                  会場には、採れたて野菜，手づくりジャム、焼き菓子、ナルラールアロマ、アクセサリー，木工・布小物など、地域の人たちが心を込めて作った品々が並び、倉敷ならではの"暮らしのぬくもり"を感じられます。
                </p>
                <p class="text-gray-700 leading-relaxed">
                  場所は美観地区の散策ルートに近く、古い町並みを楽しみながらゆったり巡れるのも魅力。倉敷のゆるやかな時間とローカルの魅力を一度に感じられる、市民にも観光客にも愛される市です。
                </p>
              </div>
              <div class="lg:col-span-1 order-1 lg:order-2">
                <div class="grid grid-cols-4 gap-4">
                  <!-- 左侧大图片 -->
                  <img
                    src="/images/special/art-1.jpg"
                    alt="くらしきローカルマルシェ - 夏"
                    class="col-span-2 w-full h-64 object-cover rounded-lg transition-all duration-500 ease-in-out hover:scale-105"
                  />
                  <!-- 右侧上下两张小图片 -->
                  <div class="col-span-2 grid grid-rows-2 gap-4">
                    <img
                      src="/images/special/art-2.jpg"
                      alt="くらしきローカルマルシェ - 秋"
                      class="w-full h-32 object-cover rounded-lg transition-all duration-500 ease-in-out hover:scale-105"
                    />
                    <img
                      src="/images/special/art-3.jpg"
                      alt="くらしきローカルマルシェ - 冬"
                      class="w-full h-32 object-cover rounded-lg transition-all duration-500 ease-in-out hover:scale-105"
                    />
                  </div>
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
import { ref, onMounted, onUnmounted } from "vue";

// Image carousel data
const springImages = ["/trailmate/images/special/kurashiki-spring-2.png"];

const summerImages = [
  // "/trailmate/images/special/kurashiki-summer-1.png",
  // "/trailmate/images/special/kurashiki-summer-2.png",
  // "/trailmate/images/special/kurashiki-summer-3.png",
  "/trailmate/images/special/kurashiki-summer.png",
];

const autumnImages = [
  "/trailmate/images/special/kurashiki-autumn-3.png",
  "/trailmate/images/special/kurashiki-autumn-1.png",
  "/trailmate/images/special/kurashiki-autumn-2.png",
];

const winterImages = [
  "/trailmate/images/special/kurashiki-winter-3.png",
  "/trailmate/images/special/kurashiki-winter-1.png",
  "/trailmate/images/special/kurashiki-winter-2.png",
];

// Current image indices
const springCurrentImage = ref(0);
const summerCurrentImage = ref(0);
const autumnCurrentImage = ref(0);
const winterCurrentImage = ref(0);

// Auto-play intervals
let springInterval: NodeJS.Timeout;
let summerInterval: NodeJS.Timeout;
let autumnInterval: NodeJS.Timeout;
let winterInterval: NodeJS.Timeout;

// Auto-play function
const startAutoPlay = () => {
  springInterval = setInterval(() => {
    springCurrentImage.value =
      (springCurrentImage.value + 1) % springImages.length;
  }, 4000);

  summerInterval = setInterval(() => {
    summerCurrentImage.value =
      (summerCurrentImage.value + 1) % summerImages.length;
  }, 4500);

  autumnInterval = setInterval(() => {
    autumnCurrentImage.value =
      (autumnCurrentImage.value + 1) % autumnImages.length;
  }, 5000);

  winterInterval = setInterval(() => {
    winterCurrentImage.value =
      (winterCurrentImage.value + 1) % winterImages.length;
  }, 5500);
};

// Stop auto-play function
const stopAutoPlay = () => {
  clearInterval(springInterval);
  clearInterval(summerInterval);
  clearInterval(autumnInterval);
  clearInterval(winterInterval);
};

// Lifecycle hooks
onMounted(() => {
  startAutoPlay();
});

onUnmounted(() => {
  stopAutoPlay();
});
</script>

<style scoped>
/* Carousel indicators animation */
.transition-opacity {
  transition: opacity 0.3s ease-in-out;
}

/* Image hover effects */
.relative:hover .absolute {
  opacity: 0.8;
}

/* Image optimization */
img {
  image-rendering: -webkit-optimize-contrast;
  image-rendering: crisp-edges;
}

/* Smooth image loading */
img[src] {
  opacity: 0;
  animation: fadeIn 0.6s ease-in-out forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: scale(1.02);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

/* Responsive image height adjustment */
@media (max-width: 768px) {
  .w-full.h-80 {
    height: 16rem; /* 256px on mobile */
  }
}
</style>
