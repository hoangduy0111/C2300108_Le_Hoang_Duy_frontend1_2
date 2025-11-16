<template>
  <div class="page">
    <h4>Thêm Liên hệ</h4>

    <ContactForm :contact="contact" @submit:contact="onAddContact" />

    <p class="text-success">{{ message }}</p>
  </div>
</template>

<script>
import ContactForm from "@/components/ContactForm.vue";
import ContactService from "@/services/contact.service";

export default {
  components: {
    ContactForm,
  },
  data() {
    return {
      contact: {},
      message: "",
    };
  },
  methods: {
    async onAddContact(data) {
      try {
        await ContactService.create(data);
        this.message = "Liên hệ được thêm thành công.";

        // Sau khi thêm thành công, chuyển hướng người dùng về trang danh bạ
        this.$router.push({ name: "contactbook" });
      } catch (error) {
        console.log(error);
        this.message = "Đã xảy ra lỗi khi thêm liên hệ.";
      }
    },
  },
  // Thêm style cho form
  // (Lưu ý: Bạn đã có style.page ở dưới, không cần thêm style mới ở đây)
};
</script>

<style scoped>
.page {
  max-width: 400px;
  margin: auto;
}
</style>
