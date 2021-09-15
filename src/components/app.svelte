<style>
    .app {
        display: flex;
        justify-content: center;
        background: rgb(28, 28, 28);
    }

    .content {
        position: relative;
        width: 100%;
        max-width: 800px;
        height: 100vh;
        overflow-x: hidden;
    }
</style>

<div class="app">
    <div class="content">
        <URLShareBar />
        <Editor />
    </div>
</div>

<script>
    import URLShareBar from "./url/url.svelte";
    import Editor from "./editor/editor.svelte";
</script>