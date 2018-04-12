import { Model } from "@bone/web";

export default class DemoModel extends Model {
    // 初始状态
    static initialState = {
        number : 0
    }


    add() {
        return { number: this.state.number+ 1 }
    }
}