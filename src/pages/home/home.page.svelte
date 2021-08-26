<style lang='scss'>
    @import 'home.page';
</style>

<div class="home">
    <div class="header">
        <img class="banner" src="img/banner.png" />
    </div>
    <div class="nav">
        {#each links as { label, event }}
            <a
                class="nav-link"
                on:click="{() => service.send({event})}">{label}</a>
        {/each}
    </div>
    <div class="grass">

    </div>
</div>

<script>
import service from "../../service.js";

const links = [
    {
        label : "Work Experience",
        event : "PAGES_SHOW_ABOUT",
    },
    {
        label : "Contributions &  Projects",
        event : "PAGES_SHOW_ABOUT",
    },
    {
        label : "Videos & Streams",
        event : "PAGES_SHOW_ABOUT",
    },
    {
        label : "Development Resources",
        event : "PAGES_SHOW_ABOUT",
    },
    {
        label : "My Tech",
        event : "PAGES_SHOW_ABOUT",
    }
];
</script>