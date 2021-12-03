import Vue from 'vue';
import VueRouter from "vue-router";
import Home from '../views/Home';
import About from '../views/About';


Vue.use(VueRouter);

const routes = [
    { path: "/", name: "home", component: Home },
    { path: "/about", name: "about", component: About }
];



const index = new VueRouter({
    mode: "history",
    routes
})

export default index;