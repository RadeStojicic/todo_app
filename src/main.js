import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { faBoxArchive } from "@fortawesome/free-solid-svg-icons";
import { faFilePen } from "@fortawesome/free-solid-svg-icons";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight} from "@fortawesome/free-solid-svg-icons";
import PrimeVue from "primevue/config";
import ConfirmationService from "primevue/confirmationservice";
import ToastService from "primevue/toastservice";

library.add(faList);
library.add(faPlus);
library.add(faEllipsis);
library.add(faEllipsisVertical);
library.add(faBoxArchive);
library.add(faFilePen);
library.add(faCircleInfo);
library.add(faCheck);
library.add(faArrowRight);

const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon);

app.use(router);
app.use(ConfirmationService);
app.use(PrimeVue);
app.use(ToastService);

app.mount("#app");
