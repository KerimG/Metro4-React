import React from "react";
import "./button.less";

export default class CommandButton extends React.Component{
    static defaultProps = {
        as: "button",
        title: "",
        subtitle: "",
        icon: false,
        image: false,
        cls: "",
        type: "button"
    };

    render(){
        const {
            icon,
            image,
            title,
            subtitle,
            cls,
            type
        } = this.props;

        const Element = this.props.as;
        const className = `command-button ${cls}`;

        return (
            <Element className={className} type={type}>
                {icon && (
                    <span className={'icon mif-' + icon}/>
                )}

                {image && (
                    <img className={'icon '} src={image} alt=""/>
                )}
                <span className={'caption '}>
                    {title}
                    <small>{subtitle}</small>
                </span>
            </Element>
        )
    }
}
