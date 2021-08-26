import { component } from "sms-plugin---components";

import pageComponent from "./page.svelte";

import homePartial from "./home/home.partial.js";
import aboutPartial from "./about/about.partial.js";

const page = (c) => component(pageComponent, {
    initial : "page",

    states : {
        page : c,
    },
});

export default {
    initial : "homePage",

    on : {
        PAGES_SHOW_HOME : ".homePage",
        PAGES_SHOW_ABOUT : ".aboutPage",
        PAGES_HIDE : ".hide",
    },

    states : {
        hide : {},

        homePage : page(homePartial),
        aboutPage : page(aboutPartial),
    },
}