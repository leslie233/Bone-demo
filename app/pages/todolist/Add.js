import React, { Component } from "react";
import { Input, Button, Icon } from '@bone/bone-web-ui';
import style from "./index.css";

export default class Add extends Component {
    state = {
        value: ""
    }

    add = () => {
        let value = this.state.value.trim();

        if(value){
            this.props.onAdd(value);
            this.setState({
                value: ""
            });
        }
    }

    render(){
        return <div className={ style.addbar }>
            <Input
                className={ style.input }
                placeholder="填入新任务"
                value={ this.state.value }
                onChange={ value => this.setState({ value }) }
                onPressEnter={ this.add }
            />
            <Button type="normal" onClick={ this.add }>添加</Button>
        </div>
    }
}