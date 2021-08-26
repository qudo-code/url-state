import pagesPartial from "./pages/pages.partial.js";
import pixelDudePartial from "./pixel-dude/pixel-dude.partial.js";

export default {
    type : "parallel",
    
    states : {
        pages : pagesPartial,
        pixelDude : pixelDudePartial,
    },
};