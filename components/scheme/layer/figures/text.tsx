import React, {useState} from "react";
import {Text} from "react-konva";
import {Html} from "react-konva-utils";

const Text1 = ({name, x, y, width, height, editableText, setEditable}) => {

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
            </Html>
        // :
            // <Html
            //     groupProps={{x: x, y: y}}
            //     divProps={{
            //         style: {
            //             opacity: 1,
            //             height: height,
            //             display: 'flex',
            //             justifyContent: 'center',
            //             alignItems: 'center'
            //         }
            //     }}
            // >
            //     <label
            //         style={{
            //             width: width,
            //             height: height,
            //             display: 'flex',
            //             justifyContent: 'center',
            //             alignItems: 'center',
            //             userSelect: 'none'
            //         }}
            //         key={'t' + name}
            //         onClick={() => {
            //             setEditable(name)
            //         }}
            //     >
            //         {value.length > 25 ? value.slice(0, 25) + '...' : value}
            //     </label>
            // </Html>
        :
        <Text
            key={'t' + name}
            x={x}
            y={y}
            align="center"
            verticalAlign="middle"
            // ref={textRef}
            text={value.length > 15 ? `${value.slice(0, 22)}...` : value}
            fill="black"
            fontFamily="sans-serif"
            fontSize={18}
            perfectDrawEnabled={false}
            // onDragStart={handleDragStart}
            // onDragEnd={handleDragEnd}
            onClick={() => {
                setEditable(name)
            }}
            width={width}
            height={height}
        />
    );
}

export default Text1;
