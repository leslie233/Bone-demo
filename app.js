import { createApp } from "@bone/web";
// 引入公共样式
import "./app/common.css";
// 引入各个页面组件
import { MyLayout } from "./app/pages/home/index.js";
import Loo from "./app/pages/home/login.js";
import Login from "./app/pages/login";
import NotFound from "./app/pages/not-found";
import TodoList from "./app/pages/todolist";
import TodoList1 from "./app/pages/todolist/index1.js";
import Demo from "./app/pages/todolist/demo.js";
import Demo1 from "./app/pages/todolist/demo1.js";


// 创建App实例
export default createApp({
    // 设置应用名
    appName: "Z1",
    layout: MyLayout,
    // 配置路由信息
    router: {
        routes: [{
            // 页面路径
            path: "/",
            // 页面组件
            page: Loo
           // page: Home
        },{
            path: "/login",
            page: Login
        },{
            path: "/todo",
            page: TodoList1
        },{
            path: "/demo",
            page: Demo1
        }],
        // routes中路由无法匹配时显示的404页面
        notFound: NotFound
    }
})