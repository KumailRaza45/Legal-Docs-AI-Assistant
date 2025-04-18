import React, {ReactNode} from 'react';
import './tag.css';

interface CustomTagProps {
    children: ReactNode;
    variant:string
}

const Tag: React.FC<CustomTagProps> = ({ children, variant }) => {
    return ( 
        <span className={ 'tag ' + variant }>
            {children}
        </span>
     );
}
 
export default Tag;