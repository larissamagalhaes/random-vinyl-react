import React, { Component } from 'react';
import './Table.css';
import './index.css';
import { List, Avatar } from 'antd';



class Table extends Component {
    render() {
        const tracklist = this.props.tracklist
        console.log(tracklist);
        return (
            <List
                itemLayout="horizontal"
                size="large"
                header={<h3>Songs</h3>}
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

