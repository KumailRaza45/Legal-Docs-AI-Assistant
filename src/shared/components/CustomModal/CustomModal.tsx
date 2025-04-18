import {Modal} from 'antd'
import React, {ReactNode, useState } from 'react';
import { FunctionLikeDeclaration } from 'typescript';

interface CustomModalProps {
    children: ReactNode;
    isShow:boolean,
    onModalHide:(value:boolean) => void;
  }

  
const CustomModal: React.FC<CustomModalProps> = ({ children, isShow, onModalHide }) => {
    const [isModalOpen, setIsModalOpen] = useState(isShow);
    const showModal = () => {
        setIsModalOpen(true);
      };
    
      const handleOk = () => {
        setIsModalOpen(false);
        onModalHide(false);
      };
    
      const handleCancel = () => {
        setIsModalOpen(false);
        onModalHide(false);
      };
    return ( <Modal  footer={null} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        {children}
</Modal> );
}
 

export default CustomModal;