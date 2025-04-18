import React from 'react';
import './AddUserDetailPrompt.css';
import {Select, Input,Row,Col,Button} from 'antd';  //

const AddUserDetailPrompt = () => {

    const handleChange = (value: string) => {
        console.log(`selected ${value}`);
      };

      const { TextArea } = Input;

    return ( <>
        <h3 className="edit-heading">Add Law Firm</h3><br/>
        <div>
            <label>Email</label>
            <Input placeholder="olivia@impactfund.com"/>
        </div>
        <div>
            <label>Law Firm Name</label>
            <Input/>
        </div>
        <Row style={{marginTop:10}}>
            
            <Col span={10}>
                <Button block>Cancel</Button>
            </Col>
            <Col span={2}></Col>
            <Col span={12}>
                <Button type="primary" block>Send Invite</Button>
            </Col>
        </Row>
    </> );
}
 
export default AddUserDetailPrompt;