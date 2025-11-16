import { createWebHistory, createRouter } from "vue-router";
import ContactBook from "@/views/ContactBook.vue";

const routes = [
  // 1. Route cho trang chủ (Hiển thị danh sách liên hệ)
  {
    path: "/",
    name: "contactbook",
    component: ContactBook,
  },
  // 2. Route cho trang Thêm mới liên hệ
  {
    path: "/contacts/add",
    name: "contact.add",
    component: () => import("@/views/ContactAdd.vue"),
  },
  // 3. Route cho trang Không tìm thấy (Not Found)
  {
    path: "/:pathMatch(.*)*",
    name: "notfound",
    component: () => import("@/views/NotFound.vue"),
  },

  {
    path: "/:pathMatch(.*)*",
    name: "notfound",
    component: () => import("@/views/NotFound.vue"),
  },

  {
    path: "/contacts/:id",
    name: "contact.edit",
    component: () => import("@/views/ContactEdit.vue"),
    props: true, // Truyền các biến trong $route.params vào làm props
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
