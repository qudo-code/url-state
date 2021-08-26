<main>
    {#each components as component}
        <svelte:component
            this={component.component}
            components={component.children}
        />
    {/each}
</main>

<script>
import service from "./service.js";

$: ({
    components = [],
} = $service.context);
</script>