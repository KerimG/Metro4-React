import React from "react";
import "./grid.less";

export class Cell extends React.Component {

    static defaultProps = {
        style: {},
        cls: ""
    };

    render() {
        return (
            <div className={this.props.cls} style={this.props.style}>
                {this.props.children}
            </div>
        );
    }
}

export class Row extends React.Component {

    static defaultProps = {
        cls: ""
    };

    render() {
        return (
            <div className={'row ' + this.props.cls}>
                {this.props.children}
            </div>
        );
    }
}

export class Grid extends React.Component {

    static defaultProps = {
        as: "div",
        cls: ""
    };

    render() {

        const Element = this.props.as;

        return (
            <Element className={'grid ' + this.props.cls}>
                {this.props.children}
            </Element>
        );
    }
}
