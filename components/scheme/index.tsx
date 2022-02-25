import { Stage } from "react-konva";
import React, {useState} from "react";
import Layer from './layer'

const Scheme = () => {

    const [stageScale, setStageScale] = useState(1);

    const [stageX, setStageX] = useState(0);

    const [stageY, setStageY] = useState(0);

    const handleWheel = (e) => {
        e.evt.preventDefault();

        const scaleBy = 1.02;

        const stage = e.target.getStage();
        const oldScale = stage.scaleX();
        const mousePointTo = {
            x: stage.getPointerPosition().x / oldScale - stage.x() / oldScale,
            y: stage.getPointerPosition().y / oldScale - stage.y() / oldScale
        };

        const newScale = e.evt.deltaY > 0 ? oldScale * scaleBy : oldScale / scaleBy;
        setStageScale(newScale);
        setStageX(-(mousePointTo.x - stage.getPointerPosition().x / newScale) * newScale)
        setStageY(-(mousePointTo.y - stage.getPointerPosition().y / newScale) * newScale)
    }

    return (
        <Stage
            style={{border: '1px solid red'}}
            width={window.innerWidth - 10}
            height={window.innerHeight - 250}
            onWheel={(event) => handleWheel(event)}
            scaleX={stageScale}
            scaleY={stageScale}
            x={stageX}
            y={stageY}
        >
            <Layer/>
        </Stage>
    );
}

export default Scheme;
