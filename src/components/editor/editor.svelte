<style lang="scss">
@import "editor";
</style>

<input type="text" class="name" placeholder="Name..." bind:value="{data.name}">
<textarea class="data" placeholder="Type here..." bind:value="{data.note}"></textarea>

<script>
import service from "/src/service.js";

const data = {
    name : "",
    note : "",
};

$: service.send({
    type : "plugin:urlContext:CHANGE",
    data,
});

$: ({
    note = {},
} = $service.context);

$: if(!data.name && note.name) {
    data.name = note.name;
}

$: if(!data.note && note.name) {
    data.note = note.note;
}
</script>