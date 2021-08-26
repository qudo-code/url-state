<div class="page">
    {#each components as component (component)}
        <svelte:component
            this={component.component}
            components={component.children}
        />
    {/each}
</div>

<style lang="scss">
    @import 'page';
</style>

<script>
export let components = [];
</script>
