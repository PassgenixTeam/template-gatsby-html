import { GatsbySSR } from "gatsby";
import React from "react";

export const onRenderBody: GatsbySSR["onRenderBody"] = ({ setPostBodyComponents }) => {
    // Put the scripts of the third-party libraries here
    setPostBodyComponents([
        <script src="/assets/js/vendors/swiper-bundle.min.js"></script>
    ]);
};
