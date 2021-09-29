import sms from "state-machine-snacks";
import components from "sms-plugin---components";
import logger from "sms-plugin---logger";
import urlState from "sms-plugin---url-state";

import config from "./state.config.js";

// Create your service with 🍕.
const service = sms({
    config,

    plugins : [
        components(),
        logger(),
        urlState(),
    ],
});

service.start();

export default service;
