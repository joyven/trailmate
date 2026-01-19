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
        <h1 class="text-5xl md:text-6xl font-bold mb-4">体験打卡</h1>
        <p class="text-xl md:text-2xl">
          倉敷を体験した方の生の声とレポートをお届けします。
        </p>
      </div>
    </section>

    <!-- Experience Cards - 小红书风格流式布局 -->
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Write Review Button -->
        <div class="flex justify-center mb-12">
          <button
            @click="showWriteModal = true"
            class="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
          >
            <svg
              class="w-6 h-6 inline-block mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 4v16m8-8H4"
              ></path>
            </svg>
            レビューを書く
          </button>
        </div>

        <!-- Experience Cards Grid - 瀑布流布局 -->
        <div class="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6">
          <div
            v-for="card in experienceCards"
            :key="card.id"
            class="break-inside-avoid mb-6 bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <!-- Card Header -->
            <div class="p-4">
              <div class="flex items-center space-x-3 mb-3">
                <div class="w-10 h-10 rounded-full overflow-hidden">
                  <img
                    :src="card.user.avatar"
                    :alt="card.user.name"
                    class="w-full h-full object-cover"
                  />
                </div>
                <div class="flex-1">
                  <h3 class="font-semibold text-gray-900">
                    {{ card.user.name }}
                  </h3>
                  <p class="text-sm text-gray-500">{{ card.time }}</p>
                </div>
                <div class="flex text-yellow-400">
                  <svg
                    v-for="i in 5"
                    :key="i"
                    class="w-4 h-4 fill-current"
                    :class="{ 'opacity-30': i > card.rating }"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>
                </div>
              </div>

              <!-- Card Content -->
              <p class="text-gray-700 text-sm leading-relaxed mb-4">
                {{ card.content }}
              </p>

              <!-- Card Images - 智能布局 -->
              <div v-if="card.images && card.images.length > 0" class="mb-4">
                <!-- 智能计算布局 -->
                <div class="grid gap-1 rounded-lg overflow-hidden">
                  <template
                    v-for="(row, rowIndex) in getImageLayout(card.images)"
                    :key="rowIndex"
                  >
                    <div
                      :class="`grid gap-1`"
                      :style="{
                        gridTemplateColumns: `repeat(${row.length}, 1fr)`,
                      }"
                    >
                      <div
                        v-for="(image, imageIndex) in row"
                        :key="imageIndex"
                        class="relative group cursor-pointer aspect-square"
                        @click="
                          openImageModal(
                            card.images,
                            getFlattenedIndex(
                              card.images,
                              rowIndex,
                              imageIndex,
                            ),
                          )
                        "
                      >
                        <img
                          :src="image"
                          :alt="`画像 ${getFlattenedIndex(card.images, rowIndex, imageIndex) + 1}`"
                          class="w-full h-full object-cover group-hover:opacity-90 transition-opacity"
                        />
                        <!-- More images overlay for last visible image -->
                        <div
                          v-if="
                            rowIndex ===
                              getImageLayout(card.images).length - 1 &&
                            imageIndex === row.length - 1 &&
                            card.images.length >
                              getMaxDisplayImages(card.images)
                          "
                          class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center"
                        >
                          <span class="text-white font-semibold text-lg">
                            +{{
                              card.images.length -
                              getMaxDisplayImages(card.images)
                            }}
                          </span>
                        </div>
                      </div>
                    </div>
                  </template>
                </div>
              </div>

              <!-- Card Actions -->
              <div
                class="flex items-center justify-between pt-3 border-t border-gray-100"
              >
                <div class="flex items-center space-x-4 text-sm text-gray-500">
                  <button
                    @click="toggleLike(card.id)"
                    class="flex items-center space-x-1 hover:text-red-500 transition-colors"
                  >
                    <svg
                      class="w-5 h-5"
                      :class="{ 'fill-current text-red-500': card.liked }"
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
                    <span>{{ card.likes }}</span>
                  </button>
                  <button
                    class="flex items-center space-x-1 hover:text-blue-500 transition-colors"
                  >
                    <svg
                      class="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      ></path>
                    </svg>
                    <span>{{ card.comments }}</span>
                  </button>
                </div>
                <button class="text-sm text-gray-400 hover:text-gray-600">
                  <svg
                    class="w-5 h-5"
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
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Write Review Modal -->
    <div
      v-if="showWriteModal"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      @click="closeModal"
    >
      <div
        class="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden"
        @click.stop
      >
        <!-- Modal Header -->
        <div class="flex items-center justify-between p-6 border-b">
          <h2 class="text-xl font-bold text-gray-900">レビューを書く</h2>
          <button @click="closeModal" class="text-gray-400 hover:text-gray-600">
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
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>

        <!-- Modal Content -->
        <div class="p-6 overflow-y-auto max-h-[calc(90vh-140px)]">
          <!-- Rating -->
          <div class="mb-6">
            <label class="block text-sm font-medium text-gray-700 mb-2"
              >評価</label
            >
            <div class="flex items-center space-x-1">
              <button
                v-for="i in 5"
                :key="i"
                @click="newReview.rating = i"
                class="p-1"
              >
                <svg
                  class="w-8 h-8 transition-colors"
                  :class="
                    i <= newReview.rating ? 'text-yellow-400' : 'text-gray-300'
                  "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
                </svg>
              </button>
            </div>
          </div>

          <!-- Text Content -->
          <div class="mb-6">
            <label class="block text-sm font-medium text-gray-700 mb-2"
              >体験分享</label
            >
            <textarea
              v-model="newReview.content"
              rows="6"
              class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-pink-500 focus:border-transparent resize-none"
              placeholder="あなたの体験を詳しく分享してください..."
            ></textarea>
          </div>

          <!-- Image Upload -->
          <div class="mb-6">
            <label class="block text-sm font-medium text-gray-700 mb-2"
              >写真追加</label
            >
            <div class="grid grid-cols-4 gap-3">
              <!-- Upload Button -->
              <div
                @click="triggerFileInput"
                class="aspect-square border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center cursor-pointer hover:border-pink-400 transition-colors"
              >
                <div class="text-center">
                  <svg
                    class="w-8 h-8 text-gray-400 mx-auto mb-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 4v16m8-8H4"
                    ></path>
                  </svg>
                  <p class="text-xs text-gray-500">追加</p>
                </div>
              </div>

              <!-- Preview Images -->
              <div
                v-for="(image, index) in newReview.images"
                :key="index"
                class="relative aspect-square rounded-lg overflow-hidden"
              >
                <img
                  :src="image"
                  alt="プレビュー"
                  class="w-full h-full object-cover"
                />
                <button
                  @click="removeImage(index)"
                  class="absolute top-1 right-1 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs hover:bg-red-600"
                >
                  ×
                </button>
              </div>
            </div>
            <input
              ref="fileInput"
              type="file"
              multiple
              accept="image/*"
              @change="handleFileUpload"
              class="hidden"
            />
          </div>
        </div>

        <!-- Modal Footer -->
        <div
          class="flex items-center justify-end space-x-3 p-6 border-t bg-gray-50"
        >
          <button
            @click="closeModal"
            class="px-6 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            キャンセル
          </button>
          <button
            @click="submitReview"
            :disabled="!newReview.content.trim() || newReview.rating === 0"
            class="px-6 py-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-lg hover:from-pink-600 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          >
            投稿する
          </button>
        </div>
      </div>
    </div>

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
            class="max-w-full max-h-[80vh] object-contain rounded-lg"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from "vue";

// Mock data for experience cards
const experienceCards = reactive([
  {
    id: 1,
    user: {
      name: "田中美香",
      avatar: "/trailmate/images/avatar/avatar-1.png",
    },
    rating: 5,
    time: "2時間前",
    content:
      "倉敷美観地区を歩いて真的很有feel！古民家と川沿いの风景 составляют картину, как из фильма。 Particularly love the ivy-covered walls and traditional architecture. 推薦大家來這裡慢慢散步，感受歷史的氛圍。",
    images: [
      "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1565123409695-7b5ef63a2efb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    ],
    likes: 24,
    comments: 8,
    liked: false,
  },
  {
    id: 2,
    user: {
      name: "佐藤健太",
      avatar: "/trailmate/images/avatar/avatar-2.png",
    },
    rating: 4,
    time: "1日前",
    content:
      "倉敷の jean street でshoppingしました！オリジナル-jeans が本当にqualityが高いです。店員のserviceも良くて、many options がありました。價格もreasonableで、worth visiting!",
    images: [
      "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1566479179817-c4ad3e6a8b94?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1516257984-b1b4d707412e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    ],
    likes: 18,
    comments: 12,
    liked: true,
  },
  {
    id: 3,
    user: {
      name: "山田花子",
      avatar: "/trailmate/images/avatar/avatar-3.png",
    },
    rating: 5,
    time: "3日前",
    content:
      "大原美術館はreally impressive！、特にモネの睡蓮は震撼的で、many art lovers の楽しめるplaceです。館内のデザインもelegantで、coffee shop のviewも素晴らしい。Highly recommended!",
    images: [
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1578321272176-b7bbc0679853?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1580136579312-94651dfd596d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1544961436-1a8d8bb8c2d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    ],
    likes: 42,
    comments: 15,
    liked: false,
  },
  {
    id: 4,
    user: {
      name: "高橋大輔",
      avatar: "/trailmate/images/avator/avatar-4.png",
    },
    rating: 4,
    time: "4時間前",
    content:
      "倉敷の猫岛でtime was spent! 多くの猫とinteractiveして本当にfun experience。特にblack catのpersonalityが魅力的でした。おすすめスポットです！",
    images: [
      "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1574158622682-e40e69881006?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1555685812-4b943f1cb29b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    ],
    likes: 35,
    comments: 22,
    liked: true,
  },
  {
    id: 5,
    user: {
      name: "鈴木一郎",
      avatar: "/trailmate/images/avatar/avatar-1.png",
    },
    rating: 5,
    time: "5時間前",
    content:
      "倉敷の川遊船はreally relaxing experience！美しい景色とfreshな空氣で、日常のstressがすべて吹き飛びました。familyと行くに最適のスポットです。",
    images: [
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    ],
    likes: 28,
    comments: 18,
    liked: false,
  },
  {
    id: 6,
    user: {
      name: "中村美咲",
      avatar: "/trailmate/images/avatar/avatar-2.png",
    },
    rating: 5,
    time: "6時間前",
    content:
      "倉敷の古老な茶屋で日本のtraditional tea ceremonyを体験しました！masterの説明が詳しくて、茶の味道もreally exquisite。また必ず行きたいplaceです。",
    images: [
      "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1565123409695-7b5ef63a2efb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1565123409695-7b5ef63a2efb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1565123409695-7b5ef63a2efb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    ],
    likes: 51,
    comments: 33,
    liked: true,
  },
]);

// Modal state
const showWriteModal = ref(false);
const showImageModal = ref(false);
const currentImages = ref<string[]>([]);

// New review form
const newReview = reactive({
  rating: 0,
  content: "",
  images: [] as string[],
});

// File input ref
const fileInput = ref<HTMLInputElement>();

// Image layout calculation functions
const getImageLayout = (images: string[]) => {
  const layout: string[][] = [];

  if (images.length === 0) return layout;

  // 根据图片数量计算最优布局
  switch (images.length) {
    case 1:
      layout.push([images[0]]);
      break;
    case 2:
      layout.push([images[0], images[1]]);
      break;
    case 3:
      layout.push([images[0], images[1], images[2]]);
      break;
    case 4:
      layout.push([images[0], images[1]]);
      layout.push([images[2], images[3]]);
      break;
    case 5:
      layout.push([images[0], images[1], images[2]]);
      layout.push([images[3], images[4]]);
      break;
    case 6:
      layout.push([images[0], images[1], images[2]]);
      layout.push([images[3], images[4], images[5]]);
      break;
    case 7:
      layout.push([images[0], images[1], images[2]]);
      layout.push([images[3], images[4]]);
      layout.push([images[5], images[6]]);
      break;
    case 8:
      layout.push([images[0], images[1], images[2]]);
      layout.push([images[3], images[4], images[5]]);
      layout.push([images[6], images[7]]);
      break;
    case 9:
      layout.push([images[0], images[1], images[2]]);
      layout.push([images[3], images[4], images[5]]);
      layout.push([images[6], images[7], images[8]]);
      break;
    default:
      // 超过9张的情况
      const maxImages = Math.min(images.length, 8);
      if (maxImages <= 3) {
        layout.push(images.slice(0, maxImages));
      } else if (maxImages <= 6) {
        layout.push(images.slice(0, 3));
        layout.push(images.slice(3, maxImages));
      } else {
        layout.push(images.slice(0, 3));
        layout.push(images.slice(3, 6));
        layout.push(images.slice(6, maxImages));
      }
      break;
  }

  return layout;
};

const getFlattenedIndex = (
  images: string[],
  rowIndex: number,
  imageIndex: number,
) => {
  let index = 0;
  const layout = getImageLayout(images);

  for (let i = 0; i < rowIndex; i++) {
    index += layout[i].length;
  }

  return index + imageIndex;
};

const getMaxDisplayImages = (images: string[]) => {
  if (images.length <= 3) return images.length;
  if (images.length <= 6) return 6;
  return 8;
};

// Functions
const toggleLike = (cardId: number) => {
  const card = experienceCards.find((c) => c.id === cardId);
  if (card) {
    card.liked = !card.liked;
    card.likes += card.liked ? 1 : -1;
  }
};

const triggerFileInput = () => {
  fileInput.value?.click();
};

const handleFileUpload = (event: Event) => {
  const target = event.target as HTMLInputElement;
  const files = target.files;
  if (files) {
    Array.from(files).forEach((file) => {
      if (file.type.startsWith("image/")) {
        const reader = new FileReader();
        reader.onload = (e) => {
          if (e.target?.result) {
            newReview.images.push(e.target.result as string);
          }
        };
        reader.readAsDataURL(file);
      }
    });
  }
};

const removeImage = (index: number) => {
  newReview.images.splice(index, 1);
};

const closeModal = () => {
  showWriteModal.value = false;
  // Reset form
  newReview.rating = 0;
  newReview.content = "";
  newReview.images = [];
};

const submitReview = () => {
  if (!newReview.content.trim() || newReview.rating === 0) return;

  // Add new review to the top of the list
  experienceCards.unshift({
    id: Date.now(),
    user: {
      name: "Anonymous",
      avatar: "/images/avator/default-avatar.png",
    },
    rating: newReview.rating,
    time: "たった今",
    content: newReview.content,
    images: [...newReview.images],
    likes: 0,
    comments: 0,
    liked: false,
  });

  closeModal();
};

const openImageModal = (images: string[], startIndex: number) => {
  currentImages.value = images;
  showImageModal.value = true;
};

const closeImageModal = () => {
  showImageModal.value = false;
  currentImages.value = [];
};
</script>

<style scoped>
/* 瀑布流布局的CSS优化 */
.columns-1 {
  column-count: 1;
}
.columns-2 {
  column-count: 2;
}
.columns-3 {
  column-count: 3;
}
.columns-4 {
  column-count: 4;
}

@media (max-width: 640px) {
  .columns-2 {
    column-count: 1;
  }
  .columns-3 {
    column-count: 1;
  }
  .columns-4 {
    column-count: 2;
  }
}

@media (min-width: 641px) and (max-width: 1024px) {
  .columns-3 {
    column-count: 2;
  }
  .columns-4 {
    column-count: 3;
  }
}

.break-inside-avoid {
  break-inside: avoid;
}

/* 模态框动画 */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
</style>
