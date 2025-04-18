import { Row,Col } from 'antd';
import React, {useState} from 'react';
import Tag from '../../../shared/components/Tag/tag';
import avatar from '../../../shared/images/statistics/avatar.svg'
import LineUp from '../../../shared/images/statistics/Line.svg'
import LineDown from '../../../shared/images/statistics/Line-Down.svg'
import Today from '../../../shared/images/statistics/today.svg'
import ArrowUp from '../../../shared/images/statistics/arrow-up.svg'
import ArrowDown from '../../../shared/images/statistics/arrow-down.svg'
import './ModalStatistics.css';

const ModalStatistics = () => {
    const [stat,setStat] = useState(
        {
            title:"Drew Cano",
            image:avatar,
            stats:[
                {title:"Notices analyzed",quantity:142,rise:20,up:true},
                {title:"Notices downloaded",quantity:142,rise:20,up:true},
                {title:"Notices saved",quantity:142,rise:30,up:false},
                {title:"Impact fund template used",quantity:142,rise:20,up:true}
            ]
        }
    )

    return ( 
        <>
            <Row>
                <Col>
                    <img src={stat.image}/>
                </Col>
                <Col style={{paddingLeft:10,paddingBottom:-10}}>
                    <h3 className="stat-heading">{stat.title}</h3>
                </Col>
            </Row>
            <Row>
                <Col span={22}>
                    <h3 className="inter">
                        Analytics
                    </h3>
                </Col>
                <Col span={2}>
                    <img src={Today} className="todayImage"/>
                </Col>
            </Row>
            <Row>
                <Col span={24}>
                    <table className="statsTable">
                        <tbody>
                            {stat.stats.map(_stat => {
                                return <tr>
                                    <td>{_stat.title}</td>
                                    <td><strong>{_stat.quantity}</strong></td>
                                    <td>
                                        <Tag variant={_stat.up ? 'success' : 'danger'}>
                                            {_stat.up && <img src={ArrowUp}/>}
                                            {!_stat.up && <img src={ArrowDown}/>}
                                            {_stat.rise}%
                                        </Tag>
                                    </td>
                                    <td align="right">
                                        {_stat.up && <img src={LineUp}/>}
                                        {!_stat.up && <img src={LineDown}/>}
                                    </td>
                                </tr>
                            })}
                        </tbody>
                    </table>
                </Col>
            </Row>
        </>
     );
}
 
export default ModalStatistics;