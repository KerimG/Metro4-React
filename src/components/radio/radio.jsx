import React from "react";
import "./radio.less";

export default class Radio extends React.Component {
    static defaultProps = {
        name: "",
        dataCaption: "",
        dataStyle: "",
        checked: false,
        disabled: false,
        value: "",

        dataClsCheckbox: "",
        dataClsCheck: "",
        dataClsCaption: "",

        onChange: ()=>{},
        onCheck: ()=>{},
        onUnCheck: ()=>{}
    };

    constructor(props){
        super(props);
        this.state = {
            checked: false
        };

        this.onChangeHandler = this.onChangeHandler.bind(this);
    }

    onChangeHandler(e){
        const state = e.target.checked;
        this.setState({
            checked: state
        });
        this.props.onChange(e.target, state);
        this.props[state ? 'onCheck' : 'onUnCheck'](e.target, state);
    }

    render(){
        const {
            name,
            value,
            dataCaption,
            dataStyle,
            disabled,
            dataClsCheckbox
        } = this.props;

        return (
            <label className={'radio' + dataClsCheckbox + ' style' + dataStyle + ' transition-on'}>
                <input type="radio" name={name} defaultChecked={this.props.checked} onChange={this.onChangeHandler} disabled={disabled} value={value} readOnly={false}/>
                <span className="check"/>
                <span className="caption">{dataCaption}</span>
            </label>
        )
    }
}