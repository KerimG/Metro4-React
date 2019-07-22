import React from "react";
import "../button/button.less";
import "./bottom-nav.less";

export class BottomNavItem extends React.Component {
    static defaultProps = {
        as: "button",
        label: "",
        icon: false,
        image: false,
        clsButton: "",
        clsButtonIcon: "",
        clsButtonLabel: ""
    };

    render(){
        const {
            label,
            icon,
            image,
            clsButton,
            clsButtonIcon,
            clsButtonLabel
        } = this.props;

        const Element = this.props.as;

        return (
            <Element className={'button ' + clsButton}>
                <span className={'icon ' + clsButtonIcon}>
                    {icon && (
                        <span className={"mif-"+icon}/>
                    )}

                    {image && (
                        <img src={image} alt=""/>
                    )}
                </span>
                <span className={'label ' + clsButtonLabel}>
                    {label}
                </span>
            </Element>
        )
    }
}

export default class BottomNav extends React.Component {
    static defaultProps = {
        cls: ""
    };

    render() {
        return (
            <div className={"bottom-nav " + this.props.cls}>
                {this.props.children}
            </div>
        )
    }
}