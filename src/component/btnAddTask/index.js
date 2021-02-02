import React, { useState } from 'react'
import "./btnAddTask.css"
import { Drawer, Form, Button, Col, Row, Input, Select } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { Priorities } from '../../constants/global';

function BtnAddTask(props) {
    const { addTask }= props;
    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
        setVisible(true);
      };
    
    const onClose = () => {
        setVisible(false);
      };

    const { Option } = Select;
    
    const onHandleAddTask = (values) => {
        addTask(values);
      };
    return (
        <>
            <Button type="primary" onClick={()=>{showDrawer()}}>
                <PlusOutlined /> New Task
            </Button>
            <Drawer
                title="Create a new Task"
                height="auto"
                onClose={onClose}
                visible={visible}
                placement="bottom"
            >
            <Form 
                layout="vertical" 
                hideRequiredMark
                onFinish={ onHandleAddTask }
                >
                <Row gutter={16}>
                    <Col span={24}>
                        <Form.Item
                        name="title"
                        label="Title"
                        rules={[{ required: true, message: 'Please enter your title' }]}
                        >
                        <Input placeholder="'Please enter your title" />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col xs={24} sm={12} md={12} lg={12} xl={12}>
                        <Form.Item
                        name="priority"
                        label="Priority"
                        rules={[{ required: true, message: 'Please select an priority' }]}
                        >
                        <Select 
                            placeholder="Please select an owner"
                            options={ Priorities }
                        >
                            <Option/>
                        </Select>
                        </Form.Item>
                    </Col>
                    <Col xs={24} sm={12} md={12} lg={12} xl={12}>
                        <Form.Item
                        name="deadline"
                        label="Deadline"
                        rules={[{ required: true, message: 'Please choose the deadline' }]}
                        >
                        <Input type="date"/>
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col span={24}>
                        <Form.Item
                        name="description"
                        label="Description"
                        rules={[
                            {
                            required: true,
                            message: 'please enter url description',
                            },
                        ]}
                        >
                        <Input.TextArea rows={4} placeholder="please enter url description" />
                        </Form.Item>
                    </Col>
                </Row>
                <div>
                    <Button 
                        htmlType="submit"
                        onClick={onClose} 
                        type="primary"
                        style={{ marginBottom: 10, width:"100%"}}>
                        Submit
                    </Button>
                    <Button type="danger" onClick={onClose} style={{ marginBottom: 10, width:"100%"}}>
                        Cancel
                    </Button>
                </div>
            </Form>
            </Drawer>
        </>
            
    )
}

BtnAddTask.propTypes = {

}

export default BtnAddTask

