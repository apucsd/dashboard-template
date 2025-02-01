import { Input } from 'antd';
import { Form } from 'antd';

interface ICustomInputProps {
    name: string;
    placeholder?: string;
    type?: 'text' | 'password' | 'email' | 'number';
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    label?: string;
    style?: React.CSSProperties;
}

const CustomInput = ({
    name,
    placeholder = `Enter your ${name}`,
    type = 'text',
    value = '',
    onChange,
    label,
    style,
}: ICustomInputProps) => {
    return (
        <Form.Item rules={[{ required: true, message: `Please enter your ${name}` }]} label={label} name={name}>
            <Input
                style={{
                    ...style,
                    height: 42,
                }}
                placeholder={placeholder}
                type={type}
                value={value}
                onChange={onChange}
            />
        </Form.Item>
    );
};

export default CustomInput;
