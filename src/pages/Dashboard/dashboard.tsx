import { Layout, Card, Row, Col, Statistic,Button } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';
import React, {useState} from 'react';
import CustomModal from '../../shared/components/CustomModal/CustomModal';
import EditPrompt from './EditPrompt/EditPrompt';
import DeletePrompt from './DeletePrompt/DeletePrompt';
import UserDetailPrompt from './UserDetailPrompt/UserDetailPrompt';
import AddUserDetailPrompt from './AddUserDetailPrompt/AddUserDetailPrompt';
const { Content } = Layout; //updated

const Dashboard: React.FC = () => {
    const [isModalShow,setIsModalShow] = useState(false);   //
    const [isDeleteConfirmationShow,setIsDeleteConfirmationShow] = useState(false);
    const [isUserDetailShow,setIsUserDetailShow] = useState(false);
    const [isAddUserDetailShow,setIsAddUserDetailShow] = useState(false);   //

    return <Content style={{ marginLeft: 200 }}>
        <Row gutter={16} style={{ margin: '16px 0' }}>
            {/* Repeat this `Col` for each statistic card */}
            <Col span={8}>
                <Card>
                    <Statistic
                        title="Total Users"
                        value={2300}
                        precision={0}
                        valueStyle={{ color: '#3f8600' }}
                        prefix={<ArrowUpOutlined />}
                        suffix="15%"
                    />
                </Card>
            </Col>
            {/* ... other cards */}
        </Row>
        {/* Add more content here as needed */}
        <Row>
            <Col span={24}> 
                 <Button style={{marginLeft:10}} type="primary" onClick={() => setIsModalShow(true)}>Show Prompt Dialog</Button>
                <Button type="primary" onClick={() => setIsDeleteConfirmationShow(true)} style={{marginLeft:10}}>Show Delete Confirmation</Button>
                <Button type="primary" onClick={() => setIsUserDetailShow(true)} style={{marginLeft:10}}>Show User Detail</Button>
                <Button type="primary" onClick={() => setIsAddUserDetailShow(true)} style={{marginLeft:10}}>Add User Detail</Button>
            </Col>
            {isModalShow && <CustomModal isShow={isModalShow} onModalHide={setIsModalShow}>
                <EditPrompt/>
            </CustomModal>}
            {isDeleteConfirmationShow && <CustomModal isShow={isDeleteConfirmationShow} onModalHide={setIsDeleteConfirmationShow}>
                <DeletePrompt/>
            </CustomModal>}
            {
                isUserDetailShow && <CustomModal isShow={isUserDetailShow} onModalHide={setIsUserDetailShow}>
                <UserDetailPrompt/>
            </CustomModal>
            }
             {
                isAddUserDetailShow && <CustomModal isShow={isAddUserDetailShow} onModalHide={setIsAddUserDetailShow}>
                <AddUserDetailPrompt/>
            </CustomModal>
            }
        </Row>
    </Content>
};


export default Dashboard
