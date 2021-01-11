import Vue from "vue";

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

import "./assets/css/index.css";  //global css
import "./assets/css/iconfont.css";

import App from "./App";
import router from "./router";
import store from "./store";

import './permission'

// import config from "./assets/js/config";
import axios from "axios";
import VueAxios from "vue-axios";
// import ECharts from "vue-echarts";
// import "echarts/lib/chart/line";
// import "echarts/lib/chart/pie";
// import "echarts/lib/chart/bar";
// import "echarts/lib/component/tooltip";
// import "echarts/lib/component/legend";
// import "echarts/lib/component/title";
// import mavonEditor from "mavon-editor";
// import "mavon-editor/dist/css/index.css";
// import moment from "moment";

Vue.prototype.msgSuccess = function (msg) {
  this.$message({ showClose: true, message: msg, type: "success" });
}

Vue.prototype.msgError = function (msg) {
  this.$message({ showClose: true, message: msg, type: "error" });
}

Vue.prototype.msgInfo = function (msg) {
  this.$message.info(msg);
}

// Vue.prototype.config = config;
// Vue.use(mavonEditor);
// Vue.component("v-chart", ECharts);
Vue.use(VueAxios, axios);
Vue.use(ElementUI);
Vue.config.productionTip = false;
// Vue.prototype.$moment = moment;
// Vue.filter("date", function(value, formatStr = "YYYY-MM-DD") {
//   return moment(value).format(formatStr);
// });



new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
