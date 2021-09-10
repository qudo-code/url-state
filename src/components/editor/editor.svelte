<style>
    textarea,
    input {
        border: 1px solid rgb(192, 192, 192);
        appearance: none;
        background: transparent;
        color: rgb(192, 192, 192);
    }

    .name {
        width: 100%;
        margin: 1rem 0;
        font-size: 2rem;
    }

    .data {
        width: 100%;
        min-height: 500px;
    }
</style>

<input type="text" class="name" placeholder="Name..." bind:value="{data.name}"/>
<textarea class="data" placeholder="Type here..." bind:value="{data.note}"></textarea>

<script>
import service from "/src/service.js";

const data = {
    name : "",
    note : ""
};

$: service.send({
    type : "plugin:url-context:UPDATE",
    data
});

$: ({
    decoded = {},
} = $service.context);

$: if(!data.name && decoded.name) {
    data.name = decoded.name;
}

$: if(!data.note && decoded.note) {
    data.note = decoded.note;
}


</script>