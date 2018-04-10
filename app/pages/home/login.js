import React, { Component } from "react";
// 以CSS Modules方式引入Home页样式
import style from "./index.css";
// 导出Home页组件
// export default class Loo extends Component {
//     render(){
//         return <div className="container">
//             <p className={ style.welcome }>welcome</p>
//         </div>
//     }
// }

import { Table, Button } from '@bone/bone-web-ui';
const getData = (a,b) => {
    let result = [];
    for (let i = a; i < b; i++) {
        result.push({
            title: `这是第 ${i}行`,
            id: 100306660940 + i,
            time: 2000 + i
        });
    }
    return result;
}

const render1 = (value, index, record) => {
    return <a>Remove({record.time})</a>;
};


export default class Loo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rowSelection: {
                onChange: this.onChange.bind(this),
                onSelect: function(selected, record, records) {
                    console.log('onSelect', selected, record, records);
                },
                onSelectAll: function(selected, records) {
                    console.log('onSelectAll', selected, records);
                },
                selectedRowKeys: [],
                getProps: (record) => {
                    return {
                        disabled: record.id === 100306660941
                    };
                }
            },
            dataSource: getData(1,5)
        };
    }

    componentDidMount() {
        (this.location.state !== undefined && this.location.state.id !== undefined) && this.state.dataSource.push(this.location.state)
        let dataSource = this.state.dataSource
        this.setState( {dataSource:dataSource} );
    }

    render () {

        return (
            <div className="container">
                <p>
                <Button onClick={this.clear.bind(this)}>Clear Selection</Button>&nbsp;
                <Button onClick={this.changeMode.bind(this)}>Switch single mode</Button>&nbsp;
                <Button onClick={this.modifyDataSource.bind(this)}>Modify dataSource</Button>
                </p>
                <Table dataSource={this.state.dataSource}
                                  isLoading={this.state.isLoading}
                                  rowSelection={this.state.rowSelection}>
                    <Table.Column title="Id" dataIndex="id"/>
                    <Table.Column title="Title" dataIndex="title" />
                    <Table.Column title="Time" dataIndex="time"/>
                    <Table.Column cell={render1} width={200}/>
                </Table>
          </div>
        );
    }
    onChange(ids, records) {
        let {rowSelection} = this.state;
        rowSelection.selectedRowKeys = ids;
        console.log('onChange', ids, records);
        this.setState({ rowSelection });
    }
    clear() {
        let {rowSelection} = this.state;
        rowSelection.selectedRowKeys = [];
        this.setState({ rowSelection });
    }
    changeMode() {
        let {rowSelection} = this.state;
        rowSelection.mode = 'single';
        this.setState({ rowSelection });
    }
    modifyDataSource() {
        this.setState({
            dataSource: getData(9, 14)
        });
    }
}