import React, { Component } from "react";
import { Input, Button, Icon } from '@bone/bone-web-ui';
// 以CSS Modules方式引入样式
import style from "./index.css";
import DemoModel from "./demoModel"

export default class Demo1 extends Component {
    static Model = DemoModel;

    render(){
        return <div className={ style.container }>
            <h1 className={ style.title }>{this.props.number}</h1>
            <Button type="normal" onClick={ this.actions.add }>添加</Button>
        </div>
    }
}



