import './DeletePrompt.css';
import {Row,Col,Button} from 'antd';
import AvatarImage from '../../../shared/images/avatar.png';
import AlertImage from '../../../shared/images/alert.png';  //

const DeletePrompt = () => {
    return ( <>
        <h3 className="edit-heading">Are you sure you want to delete this firm?</h3>
        <br/>
        <Row>
            <Col>
                <img src={AvatarImage} height={60}/>
            </Col>
            <Col>
                <h4 className="no-margin" style={{marginTop:5}}>Williams Law firm</h4>
                <h5 className="no-margin-top" style={{fontWeight:'lighter'}}>&nbsp;william@wolf.com</h5>
            </Col>
        </Row>
        <Row>
            <Col>
                <img src={AlertImage} height={80}/>
            </Col>
            <Col>
               <h4 style={{marginTop:25}}>26 Members of this law firm will also be deleted</h4>
            </Col>
        </Row>
        <Row style={{marginTop:10}}>
            
            <Col span={10}>
                <Button block>Cancel</Button>
            </Col>
            <Col span={2}></Col>
            <Col span={12}>
                <Button type="primary" danger block>Delete</Button>
            </Col>
        </Row>
    </> );
}
 
export default DeletePrompt;