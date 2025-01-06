if (!document.center_content_data) {
    document.center_content_data = {
        "state": "off",
        "prev_max_width": undefined,
        "prev_margin": undefined
    };
}

if (document.center_content_data.state === "off") {

    let body = document.querySelector("body");
    document.center_content_data.state.prev_max_width = String(body.style.maxWidth);
    document.center_content_data.state.prev_margin = String(body.style.margin);

    body.style.maxWidth = "900px";
    body.style.margin = "auto";

    document.center_content_data.state = "on";

} else if (document.center_content_data.state === "on") {
    let body = document.querySelector("body");
    let max_width = String(document.center_content_data.state.prev_max_width);
    let prev_margin = String(document.center_content_data.state.prev_margin);

    if (max_width !== "undefined") {
        body.style.maxWidth = max_width;
    } else {
        body.style.maxWidth = "unset"
    }
    if (prev_margin !== "undefined") {
        body.style.margin = prev_margin;
    } else {
        body.style.margin = "unset"
    }

    document.center_content_data.state = "off";
}
