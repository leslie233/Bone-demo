import React, { Component } from "react";
// 以CSS Modules方式引入Home页样式
import style from "./index.css";
import { Nav, Icon, Menu } from '@bone/bone-web-ui';
const { Item, PopupItem } = Nav;

export class MyLayout extends Component {
    render(){
        return <div>
            <Nav direction="hoz" activeDirection="bottom">
                <Item key="1" onClick={()=>this.navigation.push('/')} icon="service">Table</Item>
                <Item key="2" onClick={()=>this.navigation.push('/login')}>Form</Item>
                <Item key="3" onClick={()=>this.navigation.push('/todo')} icon="favorite">Model</Item>
                <Item key="4"><Icon type="attachment"/>Favorite</Item>
                <PopupItem key="5" icon="history" label="History">
                    <Menu>
                        <Menu.Item key="51">Option 1</Menu.Item>
                        <Menu.Item key="52">Option 3</Menu.Item>
                        <Menu.Item disabled key="54">Option 2</Menu.Item>
                        <Menu.Item key="53">Option 4</Menu.Item>
                    </Menu>
                </PopupItem>
                <PopupItem key="6" icon="electronics" label="Sub Nav">
                    <Menu>
                        <Menu.Item key="61">Option 1</Menu.Item>
                        <Menu.Item key="62">Option 3</Menu.Item>
                        <Menu.Item key="63">Option 4</Menu.Item>
                        <Menu.PopupItem key="64" label="popup">
                            <Menu>
                                <Menu.Item key="640" >Option 1</Menu.Item>
                                <Menu.Item key="641">Option 3</Menu.Item>
                                <Menu.Item key="642">Option 4</Menu.Item>
                            </Menu>
                        </Menu.PopupItem>
                    </Menu>
                </PopupItem>
            </Nav>
            { this.props.children }
        </div>
    }
}

