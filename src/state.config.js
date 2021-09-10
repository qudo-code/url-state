import { actions } from "xstate";
import { component } from "sms-plugin---components";

import App from "./components/app.svelte";

const { send } = actions;

export default {
    initial : "running",

    states : {
        running : component(App, {
            entry : [
                send("plugin:url-context:DECODE"),
            ],
        }),
    },
};
