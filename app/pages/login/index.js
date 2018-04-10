import React, { Component } from "react";
// 以CSS Modules方式引入Home页样式
import style from "./index.css";
import { Form, Input, Select, Field } from '@bone/bone-web-ui';
import { Table, Button } from '@bone/bone-web-ui';

const FormItem = Form.Item;

const formItemLayout = {
    labelCol: {span: 4},
    wrapperCol: {span: 20},
};

// 导出Home页组件
export default class Login extends Component {
	constructor(props) {
        super(props);
        this.field = new Field(this);
    }

    submit = () =>{
    	console.log('收到表单值：', this.field.getValues());
    	this.navigation.push("/",this.field.getValues())
    	//console.log('22：', this.field.getValue('id'));
    }

    render(){
    	const init = this.field.init;

        return <div className="center">
            <Form field={this.field} labelAlign="inset" style={{maxWidth: '500px'}}>
		        <FormItem {...formItemLayout} label="ID：">
		            <Input placeholder="请输入" {...init('id')} />
		        </FormItem>

		        <FormItem {...formItemLayout} label="Title：">
		            <Input placeholder="请输入" {...init('title')} />
		        </FormItem>
		        <FormItem {...formItemLayout} label="Time：" >
		            <Input placeholder="请输入" {...init('time')}/>
		        </FormItem>

		        <FormItem {...formItemLayout} label="Hide：">
		            <Select {...init('hide')}>
		                <div value="small">small</div>
		                <div value="medium">medium</div>
		                <div value="large">large</div>
		            </Select>
		        </FormItem>
		        <Button onClick={this.submit} className="ml">submit</Button>
		    </Form>
        </div>
    }
}