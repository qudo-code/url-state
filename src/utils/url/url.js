// Other utils for grabbing various forms of the url?
const hash = new URL(location.href).searchParams.get("state");

const updateUrl = (encoded) => {
    const url = new URL(window.location.href);

    url.searchParams.set("state", encoded);

    window.history.pushState(null, null, url);
};

export {
    hash,
    updateUrl,
};
