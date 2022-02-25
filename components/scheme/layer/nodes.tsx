import {Group} from "react-konva";
import React, { useState } from "react";
import Konva from "konva";
import Circle from './figures/circle'
import EditableText from './figures/text'

const Nodes = () => {
    const generateCircles = () => {
        const items = [];
        for (let i = 0; i < 10; i++) {
            items.push({
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                id: 'node-' + i,
                rotation: Math.random() * 180,
                isDragging: false,
                color: Konva.Util.getRandomColor(),
                name: 'name ' + i,
            });
        }
        return items;
    }

    const handleDragStart = (e) => {
        const id = e.target.id();
        setNodes(
            nodes.map((node) => {
                return {
                    ...node,
                    isDragging: node.id === id
                };
            })
        );
    };

    const handleDragEnd = () => {
        setNodes(
            nodes.map((node) => {
                return {
                    ...node,
                    isDragging: false
                };
            })
        );
    };

    const INITIAL_STATE = generateCircles();

    const [nodes, setNodes] = useState(INITIAL_STATE);

    return (
        nodes.map((node) => (
            <Group key={node.id} draggable>
                <Circle
                    node={node}
                    handleDragStart={handleDragStart}
                    handleDragEnd={handleDragEnd}
                />
                <EditableText
                    name={node.name}
                    x={node.x}
                    y={node.y}
                    width={200}
                    height={30}
                />
            </Group>
        ))
    );
}

export default Nodes;
