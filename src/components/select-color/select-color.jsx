import React from "react";
import Select from "../select/select";
import "./select-color.less";

export default class SelectColor extends React.Component {
    static defaultProps = {
        source: null,
        colorNameInCaption: true,
        colorNameInItem: true,
    };

    constructor(props){
        super(props);
        let source = {};

        if (!props.source) {
            React.Children.toArray(props.children).forEach( (el) => {
                source = Object.assign(source, {[el.props.children]: el.props.value});
            } )
        }
        this.source = props.source ? props.source : source;
    }

    drawItem = item => {
        return !this.source ? item : `
            <div class='color-box-item'>
                <span class='box' style='background: ${this.source[item]}'></span>
                <span class='caption ${this.props.colorNameInItem ? '' : 'd-none'}'>${item}</span>
            </div>
        `;
    };

    drawCaption = caption => {
        return !this.source ? caption : `
            <div class='color-box-item'>
                <span class='box' style='background: ${this.source[caption]}'></span>
                <span class='caption ${this.props.colorNameInCaption ? '' : 'd-none'}'>${caption}</span>
            </div>
        `;
    };

    render(){
        const {colorNameInCaption, colorNameInItem, children, ...rest} = this.props;

        return (
            <Select onDrawItem={this.drawItem} onDrawCaption={this.drawCaption} {...rest}>
                {children}
            </Select>
        )
    }
}