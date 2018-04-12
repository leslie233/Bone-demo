import React, { Component } from "react";
import { Input, Button, Icon } from '@bone/bone-web-ui';
// 以CSS Modules方式引入样式
import style from "./index.css";


export default class Demo extends Component {
    // 指定组件使用的模型

    constructor(props) {
        super(props);
        this.state = {
            number : 0
        };
    }

    add= ()=> {
        this.setState({ number: this.state.number+ 1});
    }

    render(){
        return <div className={ style.container }>
            <h1 className={ style.title }>{this.state.number}</h1>
            <Button type="normal" onClick={ this.add }>添加</Button>
        </div>
    }
}



