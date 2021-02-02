import PropTypes from 'prop-types'
import "./FormTask.css";
import Modal from 'antd/lib/modal/Modal';
import { Button, Col, Input, Row, Select,Form } from 'antd';
import { Priorities } from '../../constants/global';

function FormTask(props) {
    const { onCloseFrom, visible, task, updateTask } = props;
    const onFinish = (values)=>{
        const taskUpdate = {
            ...task,
            ...values,
            priority:values.priority.value,
        }
        updateTask(taskUpdate);
        onCloseFrom();
    }
    return (
            <Modal
                centered
                title="Your Task"
                visible={ visible }
                onOk={() => onCloseFrom()}
                onCancel={() => onCloseFrom()}
                width="50%"
                height="auto"
                className="form-wrap"
                footer={[]}
            >
            <Form 
            className="form-task"
            layout="vertical" 
            hideRequiredMark
            onFinish={  onFinish }
            initialValues={{
                ...task,
                priority:{value:task.priority}
              }}
            >
                <Row gutter={16}>
                    <Col span={24}>
                        <Form.Item
                        name="title"
                        label="Title"
                        rules={[{ required: true, message: 'Please choose the title' }]}
                        >
                        <Input placeholder="'Please enter your title"  value={task.title} disabled/>
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col xs={24} sm={12} md={12} lg={12} xl={12}>
                        <Form.Item
                        name="priority"
                        label="Priority"
                        rules={[{ required: true, message: 'Please choose the priority' }]}
                        >
                        <Select 
                            labelInValue
                            options={ Priorities }
                        />
                        </Form.Item>
                    </Col>
                    <Col xs={24} sm={12} md={12} lg={12} xl={12}>
                        <Form.Item
                        name="deadline"
                        label="Deadline"
                        rules={[{ required: true, message: 'Please choose the deadline' }]}
                        >
                        <Input type="date" />
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
                            message: 'please enter  description',
                            },
                        ]}
                        >
                        <Input.TextArea rows={4} placeholder="please enter description"  />
                        </Form.Item>
                    </Col>
                </Row>
                <div>
                    <Button 
                        htmlType="submit" 
                        type="primary"
                        style={{ marginBottom: 10, width:"100%"}}
                    >
                        Save
                    </Button>
                    <Button type="danger"  style={{ marginBottom: 10, width:"100%"}} onClick={()=>{onCloseFrom();}}>
                        Cancel
                    </Button>
                </div>
            </Form>
            </Modal>
    )
}

FormTask.propTypes = {
    onCloseFrom:PropTypes.func,
    visible:PropTypes.bool
}
FormTask.defaultProps = {
    onCloseFrom:null,
    visible:false,
}

export default FormTask;

