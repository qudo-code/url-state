import { component } from "sms-plugin---components";

import homePage from "./home.page.svelte";

export default component(homePage, {
    initial : "resting",
    
    states : {
        resting : {}
    }
});