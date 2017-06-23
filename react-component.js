// Usage:
//   npm install blockies-identicon
//   const Blockies = require("blockies/react-component");
//   <Blockies opts={{seed: "foo", color: "#dfe", bgcolor: "#a71", size: 15, scale: 3, spotcolor: "#000"}}/>
import React from 'react';
import blockies from './blockies';

export default class BlockiesIdenticon extends React.Component {
    componentDidMount() {
        this.draw();
    }
    draw() {
        blockies.render(this.props.opts || {}, this.canvas);
    }
    render() {
        return <canvas ref={canvas => (this.canvas = canvas)} />;
    }
}
