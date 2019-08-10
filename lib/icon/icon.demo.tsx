import * as React from "react";
import Demo from "../../demo";
import IconExample from "./icon.example";

const x = require('!!raw-loader!./icon.example.tsx'); // require 支持自定义加载方式; !! 开启自定义加载方式的标志

const IconDemo = () => {
    return (
        <Demo code={x.default}>
            <IconExample/>
        </Demo>
    )
};

export default IconDemo;