import {Circle} from "react-konva";
import React from "react";

const Circle1 = ({node, handleDragStart, handleDragEnd}) => {

    return (
        <Circle
            id={node.id}
            name={node.id}
            x={node.x}
            y={node.y}
            // fill={node.color}
            stroke={node.color}
            radius={50}
            opacity={0.8}
            numPoints={5}
            innerRadius={20}
            outerRadius={40}
            shadowColor="black"
            shadowBlur={10}
            shadowOpacity={0.6}
            scaleX={node.isDragging ? 1.2 : 1}
            scaleY={node.isDragging ? 1.2 : 1}
            shadowOffsetX={node.isDragging ? 10 : 5}
            shadowOffsetY={node.isDragging ? 10 : 5}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
            rotation={node.rotation}
        />
    );
}

export default Circle1;
