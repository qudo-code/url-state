import { component } from "sms-plugin---components";

import aboutPage from "./about.page.svelte";

export default component(aboutPage, {
    initial : "resting",
    
    states : {
        resting : {}
    }
});