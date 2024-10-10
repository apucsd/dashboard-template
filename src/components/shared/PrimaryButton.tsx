import { Button } from 'antd';
import { ReactNode } from 'react';
type TButton = {
    children: React.ReactNode;
    icon?: ReactNode;
    onClick?: () => void;
    width?: number;
};
const PrimaryButton = ({ onClick, icon, children, width }: TButton) => {
    return (
        <Button
            onClick={onClick}
            style={{
                backgroundColor: '#2461CB',
                width: width ? width : '100%',

                height: '40px',
                borderRadius: 8,
            }}
            htmlType={'submit'}
            type="primary"
            icon={icon ? icon : ''}
        >
            {children}
        </Button>
    );
};

export default PrimaryButton;
