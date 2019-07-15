import React from "react";
import "./accordion.less";
import "./accordion-rtl.less";
import AccordionFrame from "./frame.jsx";

export default class Accordion extends React.Component{
    static defaultProps = {
        dataMarker: true,
        dataMaterial: false,
        dataOneFrame: true,

        dataClsAccordion: "",

        dataOnFrameOpen: () => {},
        dataOnFrameBeforeOpen: () => true,
        dataOnFrameClose: () => {},
        dataOnFrameBeforeClose: () => true,
        dataOnAccordionCreate: () => {}
    };

    constructor(props){
        super(props);

        const openFrames = {};

        this.props.children.forEach( (child, index) => {
            if (child.props.open) {
                openFrames[index] = true;
            }
        });

        this.state = {
            single: this.props.dataOneFrame,
            openFrames: openFrames
        };

        this.clickFrameHeading = this.clickFrameHeading.bind(this);
    }

    clickFrameHeading(frame){
        const {openFrames} = this.state;
        const isOpen = !!openFrames[frame];
        const allowMultipleOpen = this.props.dataOneFrame === false;

        if (allowMultipleOpen) {
            this.setState({
                openFrames: {
                    ...openFrames,
                    [frame]: !isOpen
                }
            });
        } else {
            this.setState({
                openFrames: {
                    [frame]: !isOpen
                }
            });
        }
    }

    render(){
        const className = `accordion ${this.props.dataMaterial ? 'material' : ''} ${this.props.dataClsAccordion} ${this.props.dataMarker ? 'marker-on' : ''}`;
        const children = !Array.isArray(this.props.children) ? [this.props.children] : this.props.children;

        return (
            <div className={className}>
                {
                    children.map( (frame, index) => (
                        <AccordionFrame key={index}
                                        dataTitle={frame.props.dataTitle}
                                        dataClsFrame={frame.props.dataClsFrame}
                                        dataClsFrameHeading={frame.props.dataClsFrameHeading}
                                        dataClsFrameContent={frame.props.dataClsFrameContent}
                                        open={!!this.state.openFrames[index]}
                                        onHeadingClick={this.clickFrameHeading}
                                        dataFrame={index}>
                            {frame.props.children}
                        </AccordionFrame>
                    ))
                }
            </div>
        )
    }
}