import React, {useState} from "react";
import {Text} from "react-konva";
import {Html} from "react-konva-utils";

const CustomText = ({name, x, y, width, height, editableText, setEditable}) => {

    const [value, setValue] = useState(name);

    const getStyle = (width, height) => {
        const isFirefox = navigator.userAgent.toLowerCase().indexOf("firefox") > -1;
        const baseStyle = {
            width: `${width}px`,
            height: `${height}px`,
            border: "none",
            background: "none",
            outline: "none",
            resize: "none",
            fontSize: "15px",
            fontFamily: "sans-serif",
            overflow: 'hidden',
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

    return (editableText === name ?
            <Html
                groupProps={{x: x, y: y}}
                divProps={{
                    style: {
                        opacity: 1,
                        // border: '1px solid red',
                        width: width,
                        height: height,
                    }
                }}
            >
            <textarea
                value={value}
                maxLength={50}
                onChange={(e) => {
                    setValue(e.currentTarget.value);
                }}
                // onKeyDown={onKeyDown}
                style={style}
            />
            </Html> :
            <Text
            key={'t' + name}
            x={x}
            y={y}
            // align="center"
            verticalAlign="middle"
            text={value.length > 15 ? `${value.slice(0, 22)}...` : value}
            fill="black"
            fontSize={18}
            perfectDrawEnabled={false}
            onClick={() => {
                setEditable(name)
            }}
            width={width}
            height={height}
        />
    );
}

export default CustomText;
