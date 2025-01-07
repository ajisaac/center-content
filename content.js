if (!document.center_content_data) {
    document.center_content_data = {
        "state": "off",
        "prev_max_width": undefined,
        "prev_margin_left": undefined,
        "prev_margin_right": undefined
    };
}

if (document.center_content_data.state === "off") {

    let body = document.querySelector("body");
    document.center_content_data.state.prev_max_width = String(body.style.maxWidth);
    document.center_content_data.state.prev_margin_left = String(body.style.marginLeft);
    document.center_content_data.state.prev_margin_right = String(body.style.marginRight);

    body.style.maxWidth = "900px";
    body.style.marginLeft = "auto";
    body.style.marginRight = "auto";

    document.center_content_data.state = "on";

} else if (document.center_content_data.state === "on") {
    let body = document.querySelector("body");
    let max_width = String(document.center_content_data.state.prev_max_width);
    let prev_margin_left = String(document.center_content_data.state.prev_margin_left);
    let prev_margin_right = String(document.center_content_data.state.prev_margin_right);

    if (max_width !== "undefined") {
        body.style.maxWidth = max_width;
    } else {
        body.style.maxWidth = "unset"
    }

    if (prev_margin_left !== "undefined") {
        body.style.marginLeft = prev_margin_left;
    } else {
        body.style.marginLeft = "unset"
    }

    if (prev_margin_right !== "undefined") {
        body.style.marginRight = prev_margin_right;
    } else {
        body.style.marginRight = "unset"
    }

    document.center_content_data.state = "off";
}
