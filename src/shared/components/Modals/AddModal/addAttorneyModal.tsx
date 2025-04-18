import React from 'react';
import { Modal, Button, Form, Input } from 'antd';
import './addAttorneyModal.css'; // This will be your custom CSS file

interface AddAttorneyModalProps {
    isVisible: boolean;
    onClose: () => void;
}

const AddAttorneyModal: React.FC<AddAttorneyModalProps> = ({ isVisible, onClose }) => {
    const [form] = Form.useForm();

    const handleCancel = () => {
        form.resetFields();
        onClose();
    };

    const handleSendInvite = () => {
        // Submit the form values
        form
            .validateFields()
            .then(values => {
                console.log(values);
                handleCancel(); // Reset and close modal after submit
            })
            .catch(info => {
                console.log('Validate Failed:', info);
            });
    };

    return (
        <Modal
            title="Add attorney"
            visible={isVisible}
            onCancel={handleCancel}
            footer={null}
            closeIcon={<span className="modal-close-x">X</span>}
            className="add-attorney-modal"
        >
            <Form
                form={form}
                layout="vertical"
                name="addAttorneyForm"
                onFinish={handleSendInvite}
            >
                <Form.Item
                    name="attorneyName"
                    label="Attorney name"
                    rules={[{ required: true, message: 'Please input the attorney name!' }]}
                >
                    <Input placeholder="Olivia Jenny" />
                </Form.Item>
                <Form.Item
                    name="attorneyEmail"
                    label="Attorney email"
                    rules={[{ required: true, message: 'Please input the attorney email!', type: 'email' }]}
                >
                    <Input placeholder="olivia@impactfund.com" />
                </Form.Item>
                <Form.Item>
                    <Button className="form-button cancel-button" onClick={handleCancel}>
                        Cancel
                    </Button>
                    <Button type="primary" htmlType="submit" className="form-button send-invite-button">
                        Send Invite
                    </Button>
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default AddAttorneyModal;
