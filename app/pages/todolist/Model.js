import { Model } from "@bone/web";

export default class TodoListModel extends Model {
    // 初始状态
    static initialState = {
        // 任务列表
        tasks: [{
            id: 1,
            name: "吃饭",
            completed: false
        }, {
            id: 2,
            name: "睡觉",
            completed: true
        }]
    }

    // 添加一个任务
    add(taskName){
        return {
            tasks: [
                ...this.state.tasks,
                {
                    id: +new Date(),
                    name: taskName,
                    completed: false
                }
            ]
        }
    }

    // 删除一个任务
    remove(taskId){
        return {
            tasks: this.state.tasks.filter(item => item.id !== taskId)
        }
    }
    // 完成一个任务
    complete(taskId, completed = true){
        return {
            tasks: this.state.tasks.map(item => {
                if(item.id === taskId){
                    return {
                        ...item,
                        completed
                    }
                }

                return item;
            })
        }
    }
}