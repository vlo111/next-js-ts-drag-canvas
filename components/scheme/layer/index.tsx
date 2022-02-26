import { Layer } from "react-konva";
import React from "react";
import Nodes from './nodes'

const Scheme = ({setEditable, editableText}) => {

    return (
        <Layer>
            <Nodes editableText={editableText} setEditable={setEditable}/>
        </Layer>
    );
}

export default Scheme;
