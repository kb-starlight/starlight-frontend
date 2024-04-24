<template>
  <div class="slide-wrapper" style="margin-top: 30px;">
    <div class="slide-container" ref="slide">
      <div v-for="{ id, background, src } in slideData" :key="id" class="slide-item">
        <div class="image-container">
          <img :src="src" class="slide-image" style="margin-top: 50px;"/>
          <div class="background-layer" :style="{ background: background }"></div>
        </div>
      </div>
    </div>
    <button class="prev" @click="clickLeft" />
    <button class="next" @click="clickRight" />
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import main1 from "../assets/main1.png";
import main2 from "../assets/main2.png";
import main3 from "../assets/main3.png";
import main4 from "../assets/main4.png";

export default {
  name: "SlideView",
  setup() {
    const slide = ref(null);
    const slideData = [
      { id: "event_0", background: "#34568B", src: main1 },
      { id: "event_1", background: "#FF6F61", src: main2 },
      { id: "event_2", background: "#6B5B95", src: main3 },
      { id: "event_3", background: "#88B04B", src: main4 },
    ];
    const slideSize = slideData.length;
    let currentSlideIndex = 0;

    const clickLeft = () => {
      const { width = 0 } = slide.value?.getBoundingClientRect() || {};
      const targetX1 = slide.value.scrollLeft - width;
      const targetX2 = targetX1 < 0 ? width * slideSize + targetX1 : targetX1;
      slide.value.scrollLeft = targetX2 % (width * slideSize);
    };

    const clickRight = () => {
      const { width = 0 } = slide.value?.getBoundingClientRect() || {};
      const targetX = slide.value.scrollLeft + width;
      slide.value.scrollLeft = targetX % (width * slideSize);
    };

    const infiniteScroll = () => {
      setTimeout(() => {
        if (!slide.value) return;
        currentSlideIndex++;
        if (currentSlideIndex >= slideSize) {
          slide.value.scrollLeft = 0;
          currentSlideIndex = 0;
        } else {
          clickRight();
        }
        infiniteScroll();
      }, 3 * 1000);
    };

    onMounted(() => {
      infiniteScroll();
    });

    return {
      slide,
      slideData,
      clickLeft,
      clickRight,
    };
  },
};
</script>

<style scoped>
.slide-wrapper {
  position: relative;
}

.slide-container {
  display: flex;
  flex-flow: row nowrap;
  height: 400px;
  width: 100%;
  scroll-snap-type: x proximity;
  overflow-x: scroll;
  overflow-y: hidden;
  scroll-behavior: smooth;
}


.slide-container::-webkit-scrollbar {
  display: none;
}

.slide-item {
  width: 100%;
  height: 100%;
  text-align: center;
  scroll-snap-align: center;
  flex: none;
}

.image-container {
  position: relative;
}

.slide-image {
  width: auto; /* 이미지 크기를 조정함 */
  max-height: 100%; /* 이미지가 컨테이너를 넘지 않도록 함 */
}

.background-layer {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 380px;
  background-size: cover;
  background-position: center;
  z-index: -1;
}

button.prev {
  position: absolute;
  left: 0;
  top: calc(50% - 32px);
  background-color: rgba(0, 0, 0, 0.15);
  width: 40px;
  height: 64px;
  outline: none;
  border: none;
  cursor: pointer;
}

button.next {
  position: absolute;
  right: 0;
  top: calc(50% - 32px);
  background-color: rgba(0, 0, 0, 0.15);
  width: 40px;
  height: 64px;
  outline: none;
  border: none;
  cursor: pointer;
}

button.prev::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 29px;
  height: 29px;
  transform: translate(-50%, -50%) rotate(45deg);
  margin-left: 10px;
  border-left: 1px solid #fff;
  border-bottom: 1px solid #fff;
}

button.next::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 29px;
  height: 29px;
  transform: translate(-100%, -50%) rotate(225deg);
  margin-left: 10px;
  border-left: 1px solid #fff;
  border-bottom: 1px solid #fff;
}
</style>