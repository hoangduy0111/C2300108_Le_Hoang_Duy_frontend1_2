import { createApp } from "vue";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./assets/main.css";
import router from "./router";

// START: THÊM CÁC DÒNG IMPORT TỪ VEE-VALIDATE
import { Form, Field, ErrorMessage } from "vee-validate";
// END: THÊM CÁC DÒNG IMPORT TỪ VEE-VALIDATE

const app = createApp(App);

// START: ĐĂNG KÝ COMPONENT TOÀN CỤC CHO VEE-VALIDATE
app.component("Form", Form);
app.component("Field", Field);
app.component("ErrorMessage", ErrorMessage);
// END: ĐĂNG KÝ COMPONENT TOÀN CỤC CHO VEE-VALIDATE

app.use(router).mount("#app");
