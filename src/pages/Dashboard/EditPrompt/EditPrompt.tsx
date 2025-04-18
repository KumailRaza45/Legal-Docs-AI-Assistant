import React from 'react';
import './EditPrompt.css';
import {Select, Input,Row,Col,Button} from 'antd';

const EditPrompt = () => {

    const handleChange = (value: string) => {
        console.log(`selected ${value}`);
      };

      const { TextArea } = Input;

    return ( <>
        <h3 className="edit-heading">Edit Prompt</h3><br/>
        <div>
            <label>Phase</label>
            <Select 
            style={{width:'100%'}} 
            defaultValue={"Pre Analysis Phase"}//working updated
            options={[
                { value: 'Pre Analysis Phase', label: 'Pre Analysis Phase' },
                { value: 'lucy', label: 'Lucy' },
                { value: 'Yiminghe', label: 'yiminghe' },
                { value: 'disabled', label: 'Disabled' },
            ]}
            />
        </div>
        <div>
            <br/>
            <TextArea rows={4} placeholder="Write something here to begin"/>
        </div>
        <Row style={{marginTop:10}}>
            
            <Col span={10}>
                <Button block>Cancel</Button>
            </Col>
            <Col span={2}></Col>
            <Col span={12}>
                <Button type="primary" block>Update Prompt</Button>
            </Col>
        </Row>
    </> );
}
 
export default EditPrompt;