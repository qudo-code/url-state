import sms from "state-machine-snacks";
import components from "sms-plugin---components";
import logger from "sms-plugin---logger";

import config from "./state.config.js";

import url from "./plugins/url";

// Create your service with 🍕.
const service = sms({
    config,

    plugins : [
        components(),
        url(),
        logger(),
    ],
});

service.start();

export default service;
