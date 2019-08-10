import * as React from "react";
import Demo from "../../demo";
import IconExample from "./icon.example";

const IconDemo = () => {
    return (
        <Demo code={require(`!!raw-loader!./icon.example.tsx`).default}>
            <IconExample/>
        </Demo>
    )
};

export default IconDemo;
