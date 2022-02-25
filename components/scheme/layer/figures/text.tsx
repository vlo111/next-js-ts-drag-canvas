import React, {useState} from "react";
import {Text} from "react-konva";
import {Html} from "react-konva-utils";

const Text1 = ({name, x, y, width, height}) => {

    const [editable, setEditable] = useState(false);

    const getStyle = (width, height) => {
        const isFirefox = navigator.userAgent.toLowerCase().indexOf("firefox") > -1;
        const baseStyle = {
            width: `${width}px`,
            height: `${height}px`,
            border: "none",
            padding: "0px",
            margin: "0px",
            background: "none",
            outline: "none",
            resize: "none",
            colour: "black",
            fontSize: "15px",
            fontFamily: "sans-serif"
        };
        if (isFirefox) {
            return baseStyle;
        }
        return {
            ...baseStyle,
            margintop: "-4px"
        };
    }

    const style = getStyle(width, height);

    return (editable ?
            <Html
                groupProps={{x: x, y: y}}
                divProps={{style: {opacity: 1}}}
            >
            <textarea
                value={name}
                // onChange={onChange}
                // onKeyDown={onKeyDown}
                style={style}
            />
            </Html> :
            <Text
                key={'t' + name}
                x={x}
                y={y}
                // ref={textRef}
                text={name}
                fill="black"
                fontFamily="sans-serif"
                fontSize={18}
                perfectDrawEnabled={false}
                // onDragStart={handleDragStart}
                // onDragEnd={handleDragEnd}
                onClick={() => {
                    setEditable(true)
                }}
                width={70}
            />
    );
}

export default Text1;
