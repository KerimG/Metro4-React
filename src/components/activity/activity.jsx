import React from "react";
import Ring from "./ring.jsx";
import Metro from "./metro.jsx";
import Square from "./square.jsx";
import Cycle from "./cycle.jsx";
import Simple from "./simple.jsx";

import "./activity.less";

export default class Activity extends React.Component {

    static defaultProps = {
        type: 'ring',
        style: 'light',
        size: 64,
        radius: 20,
        cls: ""
    };

    render() {
        let activityType;
        let activityClassName;

        const {type, style, size, radius, cls} = this.props;

        switch (type) {
            case 'metro': activityType = <Metro/>; break;
            case 'square': activityType = <Square/>; break;
            case 'cycle': activityType = <Cycle/>; break;
            case 'simple': activityType = <Simple size={size} radius={radius}/>; break;
            default: activityType = <Ring/>;
        }

        activityClassName = `activity-${type} ${style}-style ${cls}`;

        return (
            <div className={activityClassName}>
                {activityType}
            </div>
        )
    }
}
