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
                class="w-full h-56 object-cover"
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
                class="w-full h-56 object-cover"
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
                  くらしき桃子の店舗は、倉敷美観地区にある町屋をリノベートしたカフェです。季節のパフェや岡山県特産フルーツを使ったお土産など多数取り揃えています。人気のカウンター席からは美観地区の町並みが見渡せる絶景スポットです。
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
                class="w-full h-56 object-cover"
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
            <!-- Review Card -->
            <div
              v-for="review in customerReviews"
              :key="review.id"
              class="bg-white rounded-2xl shadow-lg p-6"
            >
              <div class="flex items-start space-x-4">
                <!-- User Avatar -->
                <div
                  class="w-12 h-12 rounded-full overflow-hidden flex-shrink-0"
                >
                  <img
                    :src="review.avatar"
                    :alt="review.username"
                    class="w-full h-full object-cover"
                    @error="handleAvatarError($event)"
                  />
                </div>
                <div class="flex-1">
                  <div class="flex items-center justify-between mb-2">
                    <div class="flex items-center space-x-2">
                      <span class="font-semibold text-gray-900">{{
                        review.username
                      }}</span>
                      <div class="flex text-yellow-400">
                        <svg
                          v-for="i in 5"
                          :key="i"
                          class="w-4 h-4 fill-current"
                          :class="{ 'opacity-30': i > review.rating }"
                          viewBox="0 0 20 20"
                        >
                          <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                          />
                        </svg>
                      </div>
                    </div>
                    <span class="text-sm text-gray-500">{{ review.time }}</span>
                  </div>
                  <p class="text-gray-700 mb-4">{{ review.content }}</p>

                  <!-- Review Images - 微博风格九宫格 -->
                  <div
                    v-if="review.images && review.images.length > 0"
                    class="mb-4"
                  >
                    <div
                      class="grid grid-cols-3 gap-1 bg-gray-100 rounded-lg overflow-hidden"
                    >
                      <template
                        v-for="(image, index) in review.images.slice(0, 9)"
                        :key="index"
                      >
                        <div
                          class="relative group cursor-pointer bg-gray-100 aspect-square"
                          @click="openImageModal(review.images, index)"
                        >
                          <img
                            :src="image"
                            :alt="`レビュー画像 ${index + 1}`"
                            class="w-full h-full object-cover group-hover:opacity-90 transition-opacity"
                          />
                          <!-- 第9张图片的覆盖层 -->
                          <div
                            v-if="index === 8 && review.images.length > 9"
                            class="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center"
                          >
                            <span class="text-white font-bold text-xl">
                              +{{ review.images.length - 9 }}
                            </span>
                          </div>
                        </div>
                      </template>
                    </div>
                  </div>

                  <div class="flex space-x-4 text-sm text-gray-500">
                    <button
                      class="flex items-center space-x-1 hover:text-red-500 transition-colors"
                      @click="toggleLike(review.id)"
                    >
                      <svg
                        class="w-4 h-4"
                        :class="{ 'fill-current text-red-500': review.liked }"
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
                      <span>{{ review.likes }} 好きです</span>
                    </button>
                    <button class="hover:text-blue-500 transition-colors">
                      お返事します
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Image Modal -->
    <div
      v-if="showImageModal"
      class="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
      @click="closeImageModal"
    >
      <div class="relative max-w-4xl max-h-full">
        <button
          @click="closeImageModal"
          class="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
        >
          <svg
            class="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
        <div class="flex space-x-2 overflow-x-auto">
          <img
            v-for="(image, index) in currentImages"
            :key="index"
            :src="image"
            :alt="`画像 ${index + 1}`"
            class="max-w-full max-h-[80vh] object-contain bg-white rounded-lg"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";

// Customer reviews data
const customerReviews = reactive([
  {
    id: 1,
    username: "田中美香",
    avatar: "/trailmate/images/avatar/avatar-1.png",
    rating: 5,
    time: "2時間ほど前です",
    content:
      "甘さ控えめで幾つでも食べるれる饅頭とは違います！存在感vidersの１個食べたら大満足！2個食べれる人は相当の甘い物好き？っていうくらい、ガツンときます。クセになる美味しさです。絶対また食べたくなります",
    images: [
      "/trailmate/images/gourmet/obanyaki-1.png",
      "/trailmate/images/gourmet/obanyaki-2.png",
      "/trailmate/images/gourmet/obanyaki-3.png",
    ],
    likes: 12,
    liked: false,
  },
  {
    id: 2,
    username: "佐藤健太",
    avatar: "/trailmate/images/avatar/avatar-2.png",
    rating: 5,
    time: "4時間ほど前です",
    content:
      "焼きたてを一個から( 130円 ) 購入できて、名古屋にある大判焼きとは違った美味しかったです。外の皮はカリッとしていて中のあんこがたくさん入ってました",
    images: ["/trailmate/images/gourmet/obanyaki-4.png"],
    likes: 8,
    liked: true,
  },
  {
    id: 3,
    username: "山田花子",
    avatar: "/trailmate/images/avatar/avatar-3.png",
    rating: 5,
    time: "6時間ほど前です",
    content:
      "桃パフェが食べたくて伺いました。行った時は白麗という種類で、甘さも柔らかさも期待を飛び越えていく美味しさ！古民家を利用したカフェで、雰囲気もいいし店員さんの説明も分かりやすく、桃パフェを満喫できました。桃以外にも美味しそうなフルーツのパフェやケーキもあって、どれも美味しそう！また食べにいきたい～",
    images: [
      "/trailmate/images/gourmet/kurashiki-momoko-1.jpg",
      "/trailmate/images/gourmet/furusato-1.jpg",
      "/trailmate/images/gourmet/obanyaki-1.png",
    ],
    likes: 15,
    liked: false,
  },
  {
    id: 4,
    username: "高橋大輔",
    avatar: "/trailmate/images/avatar/avatar-4.png",
    rating: 4,
    time: "1日前です",
    content:
      "ふる里でのランチしました。古民家の雰囲気を楽しみながら、手作り料理をいただけて本当に満足でした。スタッフの方や料理長の優しいお人柄も素晴らしい店でまた行きたいです！",
    images: [
      "/trailmate/images/gourmet/furusato-1.jpg",
      "/trailmate/images/gourmet/kurashiki-gourmet.avif",
      "/trailmate/images/gourmet/obanyaki-1.png",
    ],
    likes: 6,
    liked: false,
  },
]);

// Modal state
const showImageModal = ref(false);
const currentImages = ref<string[]>([]);

// Functions
const toggleLike = (reviewId: number) => {
  const review = customerReviews.find((r) => r.id === reviewId);
  if (review) {
    review.liked = !review.liked;
    review.likes += review.liked ? 1 : -1;
  }
};

const openImageModal = (images: string[], startIndex: number) => {
  currentImages.value = images;
  showImageModal.value = true;
};

const closeImageModal = () => {
  showImageModal.value = false;
  currentImages.value = [];
};

const handleAvatarError = (event: Event) => {
  const img = event.target as HTMLImageElement;
  img.src = "/images/avator/default-avatar.png"; // fallback to default avatar
};
</script>

<style scoped>
/* Additional styles if needed */
</style>
