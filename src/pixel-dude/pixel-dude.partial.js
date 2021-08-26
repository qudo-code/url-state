import { component } from "sms-plugin---components";

import pixelDudeComponent from "./pixel-dude.svelte";

export default component(pixelDudeComponent, {
    initial : "resting",
    
    states : {
        resting : {}
    }
});