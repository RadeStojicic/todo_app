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
import PrimeVue from "primevue/config";

library.add(faList);
library.add(faPlus);
library.add(faEllipsis);
library.add(faEllipsisVertical);
library.add(faBoxArchive);
library.add(faFilePen);
library.add(faCircleInfo);

const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon);

app.use(router);
app.use(PrimeVue);
app.mount("#app");
