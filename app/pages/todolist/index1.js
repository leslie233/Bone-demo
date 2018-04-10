import React, { Component } from "react";
// 以CSS Modules方式引入样式
import style from "./index.css";
// 导入组件
import Add from "./Add";
import List from "./List";
// 导入模型

// 导出Home页组件
export default class TodoList1 extends Component {
    // 指定组件使用的模型

    constructor(props) {
        super(props);
        this.state = {
            tasks: [{
                id: 1,
                name: "吃饭",
                completed: false
            }, {
                id: 2,
                name: "睡觉",
                completed: true
            }]
        };
    }

    add(taskName){
        this.setState({
            tasks: [
                ...this.state.tasks,
                {
                    id: +new Date(),
                    name: taskName,
                    completed: false
                }
            ]
        });
    }

    remove(taskId){
        this.setState({
            tasks: this.state.tasks.filter(item => item.id !== taskId)
        });
    }
    // 完成一个任务
    complete(taskId, completed = true){
        this.setState({
            tasks: this.state.tasks.map(item => {
                if(item.id === taskId){
                    return {
                        ...item,
                        completed
                    }
                }

                return item;
            })
        });
    }

    render(){
        return <div className={ style.container }>
            <h1 className={ style.title }>待办清单</h1>
            <div className={ style.panel }>
                <Add onAdd={ name => this.add(name) } />
                <List
                    list={ this.state.tasks }
                    onChange={(id, checked) => this.complete(id, checked)}
                    onDelete={id => this.remove(id)}
                />
            </div>
        </div>
    }
}



