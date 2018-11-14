import React, { Component } from 'react';
import './Table.css';
import './index.css';
import './Album.css';
import { List, Avatar } from 'antd';



class Table extends Component {
    render() {
        const tracklist = this.props.tracklist
        console.log(tracklist);
        return (
            <List
                bordered="true"
                itemLayout="horizontal"
                size="middle"
                header={<text className="HeaderText">Songs</text>}
                dataSource={tracklist}
                renderItem={item => (
                    <List.Item>
                        <List.Item.Meta
                            title={item.title} />
                    </List.Item>
                )}
            />
        );
    }
}

export default Table;

