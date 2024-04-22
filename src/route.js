import { createMemoryHistory, createRouter } from "vue-router";

import HomePage from "./page/Home.vue";
import VisionPage from "./page/Vision.vue";
import StoryPage from "./page/Story.vue";
import VolunteerPage from "./page/Volunteer.vue";
import CompanyPage from "./page/Company.vue";
import loginPage from "./page/Login.vue";
import joinPage from "./page/Join.vue";
import MyPage from "./page/Mypage.vue";

const routes = [
  { path: "/", name: "home", component: HomePage },
  { path: "/vision", name: "vision", component: VisionPage },
  { path: "/story", name: "story", component: StoryPage },
  { path: "/volunteer", name: "volunteer", component: VolunteerPage },
  { path: "/company", name: "company", component: CompanyPage },
  { path: "/login", name: "login", component: loginPage},
  { path: "/join", name: "join", component: joinPage},
  { path: "/mypage", name: "mypage", component: MyPage}
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
