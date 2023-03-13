<script lang="ts" setup>
import { transitionHelper } from "@/utils";
import { ref } from "vue";
import { useRouter, useRoute } from "vue-router";

const current = ref("");
const list = [
  ["https://i.ytimg.com/vi/Qf5wdXOxW3E/mqdefault.jpg", "2022-10-25"],
  ["https://i.ytimg.com/vi/azoIMhKOucQ/mqdefault.jpg", "2022-10-11"],
  ["https://i.ytimg.com/vi/VdNzD4lhidw/mqdefault.jpg", "2022-09-27"],
  ["https://i.ytimg.com/vi/xl9R8aTOW_I/mqdefault.jpg", "2022-09-14"],
  ["https://i.ytimg.com/vi/LLRig4s1_yA/mqdefault.jpg", "2022-08-30"],
  ["https://i.ytimg.com/vi/_iq1fPjeqMQ/mqdefault.jpg", "2022-07-26"],
  ["https://i.ytimg.com/vi/9qen5CKjUe8/mqdefault.jpg", "2022-07-12"],
  ["https://i.ytimg.com/vi/8q_05PUYv1o/mqdefault.jpg", "2022-06-28"],
  ["https://i.ytimg.com/vi/cgKUMRPAliw/mqdefault.jpg", "2022-06-07"],
  ["https://i.ytimg.com/vi/F-rZOIBGIaQ/mqdefault.jpg", "2022-05-24"],
  ["https://i.ytimg.com/vi/3sMflOp5kiQ/mqdefault.jpg", "2022-05-03"],
  ["https://i.ytimg.com/vi/jLqTXkFtEH0/mqdefault.jpg", "2022-03-29"],
  ["https://i.ytimg.com/vi/XF29nLkkeLo/mqdefault.jpg", "2022-03-16"],
  ["https://i.ytimg.com/vi/PYSOnC2CrD8/mqdefault.jpg", "2022-01-05"],
  ["https://i.ytimg.com/vi/Uh95jZPTDfw/mqdefault.jpg", "2021-12-27"],
  ["https://i.ytimg.com/vi/doeOKTZSX6A/mqdefault.jpg", "2021-12-14"],
  ["https://i.ytimg.com/vi/8FuafvJLDpM/mqdefault.jpg", "2021-11-30"],
  ["https://i.ytimg.com/vi/pIIHJ-NIyes/mqdefault.jpg", "2021-11-10"],
  ["https://i.ytimg.com/vi/ivLhf3hq7eM/mqdefault.jpg", "2021-10-19"],
  ["https://i.ytimg.com/vi/7EKEav7Io5Y/mqdefault.jpg", "2021-09-28"],
  ["https://i.ytimg.com/vi/cGyLHxn16pE/mqdefault.jpg", "2021-09-14"],
  ["https://i.ytimg.com/vi/ALKqavp9Fg0/mqdefault.jpg", "2021-08-31"],
  ["https://i.ytimg.com/vi/SYkzk_j3yb0/mqdefault.jpg", "2021-08-17"],
  ["https://i.ytimg.com/vi/YDU_3WdfkxA/mqdefault.jpg", "2021-08-03"],
  ["https://i.ytimg.com/vi/-Ktb6mUkznI/mqdefault.jpg", "2021-07-27"],
  ["https://i.ytimg.com/vi/Lh9q3h2khlc/mqdefault.jpg", "2021-06-22"],
  ["https://i.ytimg.com/vi/PZryHH8roIY/mqdefault.jpg", "2021-06-08"],
  ["https://i.ytimg.com/vi/-7k3H2GxE5E/mqdefault.jpg", "2021-05-26"],
  ["https://i.ytimg.com/vi/hFyQn5F5pc0/mqdefault.jpg", "2021-04-21"],
  ["https://i.ytimg.com/vi/u0Jgz6QVJqg/mqdefault.jpg", "2021-04-06"],
  ["https://i.ytimg.com/vi/W6lvQvdeF8U/mqdefault.jpg", "2021-03-23"],
  ["https://i.ytimg.com/vi/flf2vS0IoRs/mqdefault.jpg", "2021-03-02"],
  ["https://i.ytimg.com/vi/8eHInw9_U8k/mqdefault.jpg", "2021-02-23"],
  ["https://i.ytimg.com/vi/MCi6AZMkxcU/mqdefault.jpg", "2021-02-10"],
  ["https://i.ytimg.com/vi/wS0Gck00nDw/mqdefault.jpg", "2021-01-27"],
  ["https://i.ytimg.com/vi/jG7VfbqqTGw/mqdefault.jpg", "2020-11-12"],
  ["https://i.ytimg.com/vi/9-6CKCz58A8/mqdefault.jpg", "2020-11-11"],
  ["https://i.ytimg.com/vi/x9RP-M6q2Mg/mqdefault.jpg", "2020-10-28"],
  ["https://i.ytimg.com/vi/FFA-v-CIxJQ/mqdefault.jpg", "2020-10-13"],
  ["https://i.ytimg.com/vi/9UNwHmagedE/mqdefault.jpg", "2020-09-16"],
  ["https://i.ytimg.com/vi/uygxJ8Wxotc/mqdefault.jpg", "2020-09-02"],
  ["https://i.ytimg.com/vi/G9PpImUEeUA/mqdefault.jpg", "2020-08-19"],
  ["https://i.ytimg.com/vi/BbVzkuifyl8/mqdefault.jpg", "2020-08-05"],
  ["https://i.ytimg.com/vi/vfAHa5GBLio/mqdefault.jpg", "2020-04-08"],
  ["https://i.ytimg.com/vi/n6hIa-fPx0M/mqdefault.jpg", "2020-03-25"],
  ["https://i.ytimg.com/vi/0-wB1VY3Nrc/mqdefault.jpg", "2020-01-28"],
  ["https://i.ytimg.com/vi/qaGjS7-qWzg/mqdefault.jpg", "2020-01-15"],
  ["https://i.ytimg.com/vi/nQrfbk5WHvY/mqdefault.jpg", "2019-12-20"],
  ["https://i.ytimg.com/vi/1q2ZlT3X36k/mqdefault.jpg", "2019-12-20"],
  ["https://i.ytimg.com/vi/eCGW0FKZ1gg/mqdefault.jpg", "2019-12-18"],
  ["https://i.ytimg.com/vi/Xtmp2HbSreQ/mqdefault.jpg", "2019-12-17"],
  ["https://i.ytimg.com/vi/B-ign0dW51o/mqdefault.jpg", "2019-10-24"],
  ["https://i.ytimg.com/vi/yOcgGSCrn-c/mqdefault.jpg", "2019-09-11"],
  ["https://i.ytimg.com/vi/0SWguMrIuTw/mqdefault.jpg", "2019-08-27"],
  ["https://i.ytimg.com/vi/D61EQuTqvvY/mqdefault.jpg", "2019-08-14"],
  ["https://i.ytimg.com/vi/5LEuJNLfLN0/mqdefault.jpg", "2019-08-01"],
  ["https://i.ytimg.com/vi/Hzxy6ml-FYE/mqdefault.jpg", "2019-06-25"],
  ["https://i.ytimg.com/vi/ViyTYEv9dM8/mqdefault.jpg", "2019-06-11"],
  ["https://i.ytimg.com/vi/I-EElTqUfjU/mqdefault.jpg", "2019-05-28"],
  ["https://i.ytimg.com/vi/y1TEPQz02iU/mqdefault.jpg", "2019-04-17"],
  ["https://i.ytimg.com/vi/EIH6IQgwdAc/mqdefault.jpg", "2019-04-03"],
  ["https://i.ytimg.com/vi/x1xJ8BCQTf8/mqdefault.jpg", "2019-04-01"],
  ["https://i.ytimg.com/vi/S0NQwttnr1I/mqdefault.jpg", "2019-03-20"],
  ["https://i.ytimg.com/vi/lNOP5dcLZF4/mqdefault.jpg", "2019-03-06"],
  ["https://i.ytimg.com/vi/eKuHlSZKlWM/mqdefault.jpg", "2019-02-20"],
  ["https://i.ytimg.com/vi/QXsWaA3HTHA/mqdefault.jpg", "2019-02-06"],
  ["https://i.ytimg.com/vi/m0JcYPRZuUg/mqdefault.jpg", "2019-01-23"],
  ["https://i.ytimg.com/vi/v1uwxBpKF60/mqdefault.jpg", "2017-12-13"],
  ["https://i.ytimg.com/vi/PgESLlNCv94/mqdefault.jpg", "2018-12-22"],
  ["https://i.ytimg.com/vi/kZ-a6SXTueU/mqdefault.jpg", "2018-12-20"],
  ["https://i.ytimg.com/vi/URrbSSguYzw/mqdefault.jpg", "2018-12-19"],
  ["https://i.ytimg.com/vi/adgI8-W1VjE/mqdefault.jpg", "2018-12-18"],
  ["https://i.ytimg.com/vi/te3Zm4bHBVs/mqdefault.jpg", "2018-12-05"],
  ["https://i.ytimg.com/vi/UlLQPguE7UQ/mqdefault.jpg", "2018-11-21"],
  ["https://i.ytimg.com/vi/g5CgV__a-ro/mqdefault.jpg", "2018-10-17"],
  ["https://i.ytimg.com/vi/COzBv_Ces3g/mqdefault.jpg", "2018-10-03"],
  ["https://i.ytimg.com/vi/RoVy9EoIloQ/mqdefault.jpg", "2018-09-19"],
  ["https://i.ytimg.com/vi/kBut8LqVgYE/mqdefault.jpg", "2018-09-12"],
  ["https://i.ytimg.com/vi/_5rX6pt0A_k/mqdefault.jpg", "2018-08-22"],
  ["https://i.ytimg.com/vi/Nzokr6Boeaw/mqdefault.jpg", "2018-08-08"],
  ["https://i.ytimg.com/vi/dR_J4X416hg/mqdefault.jpg", "2018-07-25"],
  ["https://i.ytimg.com/vi/0T4DQYgsazo/mqdefault.jpg", "2018-07-18"],
  ["https://i.ytimg.com/vi/Sz7IIDa7qfw/mqdefault.jpg", "2018-07-11"],
  ["https://i.ytimg.com/vi/GJRkEYRHVsk/mqdefault.jpg", "2018-07-04"],
  ["https://i.ytimg.com/vi/Lzj5yvlZGsc/mqdefault.jpg", "2018-06-27"],
  ["https://i.ytimg.com/vi/i7darFvRDVo/mqdefault.jpg", "2018-06-20"],
  ["https://i.ytimg.com/vi/zBbWClbltx8/mqdefault.jpg", "2018-06-13"],
  ["https://i.ytimg.com/vi/zhGym6t3Yo8/mqdefault.jpg", "2018-06-06"],
  ["https://i.ytimg.com/vi/zq_8OyYXPYY/mqdefault.jpg", "2018-05-30"],
  ["https://i.ytimg.com/vi/dfsyABvzpj0/mqdefault.jpg", "2018-05-23"],
  ["https://i.ytimg.com/vi/xnAtqPRa0Sk/mqdefault.jpg", "2018-05-16"],
  ["https://i.ytimg.com/vi/loqVnZywmvw/mqdefault.jpg", "2018-05-02"],
  ["https://i.ytimg.com/vi/xw5HYZ3KBI4/mqdefault.jpg", "2018-04-25"],
  ["https://i.ytimg.com/vi/lsd2-TCgHEs/mqdefault.jpg", "2018-04-10"],
  ["https://i.ytimg.com/vi/d1aWG4u-Z5U/mqdefault.jpg", "2018-03-28"],
  ["https://i.ytimg.com/vi/qIU151UPOSY/mqdefault.jpg", "2018-03-21"],
  ["https://i.ytimg.com/vi/VnxZggnmvpo/mqdefault.jpg", "2018-03-13"],
  ["https://i.ytimg.com/vi/2Kuwy-67VyY/mqdefault.jpg", "2018-02-28"],
  ["https://i.ytimg.com/vi/fusAJwee7ws/mqdefault.jpg", "2018-02-14"],
  ["https://i.ytimg.com/vi/mo8thg5XGV0/mqdefault.jpg", "2018-01-31"],
  ["https://i.ytimg.com/vi/BoLd3cMc0jQ/mqdefault.jpg", "2017-12-24"],
  ["https://i.ytimg.com/vi/AGoedbUXa9Q/mqdefault.jpg", "2017-12-23"],
  ["https://i.ytimg.com/vi/eg8eLH52d4s/mqdefault.jpg", "2017-12-22"],
  ["https://i.ytimg.com/vi/DETklM4JtyQ/mqdefault.jpg", "2017-12-21"],
  ["https://i.ytimg.com/vi/CyAhHG-1AiI/mqdefault.jpg", "2017-12-20"],
  ["https://i.ytimg.com/vi/wFVjeStSL9s/mqdefault.jpg", "2017-12-19"],
  ["https://i.ytimg.com/vi/tx0BtNO3gmk/mqdefault.jpg", "2017-12-18"],
  ["https://i.ytimg.com/vi/T9zP7eYzQ3k/mqdefault.jpg", "2017-12-17"],
  ["https://i.ytimg.com/vi/y64_w3Rivd0/mqdefault.jpg", "2017-12-16"],
  ["https://i.ytimg.com/vi/ZPkMMShYxKU/mqdefault.jpg", "2017-12-15"],
  ["https://i.ytimg.com/vi/qC-jHHOGaT0/mqdefault.jpg", "2017-12-14"],
  ["https://i.ytimg.com/vi/18MRkysjsC0/mqdefault.jpg", "2017-12-06"],
  ["https://i.ytimg.com/vi/7cbD-hFkzY0/mqdefault.jpg", "2017-11-22"],
  ["https://i.ytimg.com/vi/uCHZJy2n8Qs/mqdefault.jpg", "2017-11-08"],
  ["https://i.ytimg.com/vi/e6IjNW8OTv0/mqdefault.jpg", "2017-10-27"],
  ["https://i.ytimg.com/vi/VNr1Kb07aME/mqdefault.jpg", "2017-10-10"],
  ["https://i.ytimg.com/vi/RUEKVj3jE-E/mqdefault.jpg", "2017-09-27"],
  ["https://i.ytimg.com/vi/k2DRz0KIZAU/mqdefault.jpg", "2016-05-16"],
  ["https://i.ytimg.com/vi/CSjL1lrNAx4/mqdefault.jpg", "2015-12-01"],
  ["https://i.ytimg.com/vi/t_pxnrLktNI/mqdefault.jpg", "2015-11-16"],
  ["https://i.ytimg.com/vi/Bt2vFmjUELc/mqdefault.jpg", "2015-11-03"],
  ["https://i.ytimg.com/vi/MD0X8Eqdd1Y/mqdefault.jpg", "2015-10-16"],
  ["https://i.ytimg.com/vi/cOPhSJ6SUrg/mqdefault.jpg", "2015-10-12"],
  ["https://i.ytimg.com/vi/pLLLf1QPgoU/mqdefault.jpg", "2015-10-06"],
  ["https://i.ytimg.com/vi/Pvm3k4gpH0A/mqdefault.jpg", "2015-09-22"],
  ["https://i.ytimg.com/vi/IskiTVqHp18/mqdefault.jpg", "2015-09-08"],
  ["https://i.ytimg.com/vi/Hy6wceqkxvA/mqdefault.jpg", "2015-07-27"],
  ["https://i.ytimg.com/vi/6Zgp_G5o6Oc/mqdefault.jpg", "2015-07-14"],
  ["https://i.ytimg.com/vi/miLnRHNj7nQ/mqdefault.jpg", "2015-07-01"],
  ["https://i.ytimg.com/vi/mdcA5fR91S8/mqdefault.jpg", "2015-07-01"],
  ["https://i.ytimg.com/vi/SLjuOPXjHno/mqdefault.jpg", "2015-07-01"],
  ["https://i.ytimg.com/vi/3i9WFgMuKHs/mqdefault.jpg", "2015-07-01"],
  ["https://i.ytimg.com/vi/_RwzMCRsneU/mqdefault.jpg", "2015-07-01"],
  ["https://i.ytimg.com/vi/GhFR-G42mOA/mqdefault.jpg", "2015-07-01"],
  ["https://i.ytimg.com/vi/ngBy0H_q-GY/mqdefault.jpg", "2015-07-01"],
  ["https://i.ytimg.com/vi/VJQtNxyKJhQ/mqdefault.jpg", "2015-07-01"],
  ["https://i.ytimg.com/vi/4zoC3eaa9z0/mqdefault.jpg", "2015-07-01"],
  ["https://i.ytimg.com/vi/tNgBQC9qMP4/mqdefault.jpg", "2015-07-01"],
  ["https://i.ytimg.com/vi/kC5MmY54IBE/mqdefault.jpg", "2015-07-01"],
];
const router = useRouter();
const route = useRoute();
const from = route.query.from as string;
current.value = from;
console.log(current.value);
function toDetail(url: string) {
  const id = url.replace(/.*vi\/(.*)\/mqdefault.*/, (_, base64) => base64);

  current.value = id;
  transitionHelper(() => {
    router.push(`/item/${id}`);
    current.value = "";
  });
}
</script>
<template>
  <div class="m-2">
    <h1 class="title bg-purple-400">
      <span class="hidden">{{ "<" }}</span>
      <div class="title-name text-4xl mx-1 text-white inline-block">Hello</div>
    </h1>
    <div class="wrapper mt-1">
      <h4
        class="cursor-pointer"
        @click="toDetail(img)"
        v-for="[img, time] in list"
        :key="time"
      >
        <img
          :src="img"
          :class="['cover w-full', { active: img.includes(current) }]"
        />
        <span>{{ time }}</span>
      </h4>
    </div>
  </div>
</template>
<style scoped lang="less">
.wrapper {
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  @apply grid gap-1;
}

.title {
  view-transition-name: title;
}
.title-name {
  view-transition-name: title-name;
  width: fit-content;
}
.cover {
  &.active {
    view-transition-name: cover;
  }
}
</style>
<style lang="less">
@keyframes fade-in {
  from {
    opacity: 0;
  }
}

@keyframes fade-out {
  to {
    opacity: 0;
  }
}

@keyframes slide-from-right {
  from {
    transform: translateX(100px);
  }
}

@keyframes slide-from-left {
  from {
    transform: translateX(-100px);
  }
}

@keyframes slide-to-left {
  to {
    transform: translateX(-100px);
  }
}

@keyframes slide-to-right {
  to {
    transform: translateX(100px);
  }
}
/* ::view-transition-old(root),
::view-transition-new(root) {
  animation-duration: 5s;
} */
::view-transition-old(root) {
  animation: 90ms cubic-bezier(0.4, 0, 1, 1) both fade-out,
    300ms cubic-bezier(0.4, 0, 0.2, 1) both slide-to-left;
}
::view-transition-new(root) {
  animation: 210ms cubic-bezier(0, 0, 0.2, 1) 90ms both fade-in,
    300ms cubic-bezier(0.4, 0, 0.2, 1) both slide-from-right;
}

.back-transition {
  &::view-transition-old(root) {
    animation-name: fade-out, slide-to-right;
  }

  &::view-transition-new(root) {
    animation-name: fade-in, slide-from-left;
  }
}
</style>
