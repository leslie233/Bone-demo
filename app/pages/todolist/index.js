import React, { Component } from "react";
// 以CSS Modules方式引入样式
import style from "./index.css";
// 导入组件
import Add from "./Add";
import List from "./List";
// 导入模型
import TodoListModel from "./Model"

// 导出Home页组件
export default class TodoList extends Component {
    // 指定组件使用的模型
    static Model = TodoListModel;

    render(){
        return <div className={ style.container }>
            <h1 className={ style.title }>待办清单</h1>
            <div className={ style.panel }>
                <Add onAdd={ name => this.actions.add(name) } />
                <List
                    list={ this.props.tasks }
                    onChange={(id, checked) => this.actions.complete(id, checked)}
                    onDelete={id => this.actions.remove(id)}
                />
            </div>
        </div>
    }
}



