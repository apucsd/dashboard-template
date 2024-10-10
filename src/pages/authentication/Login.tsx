import { Form, Input, Button, Checkbox } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';

const Login = () => {
    const onFinish = (values: any) => {
        console.log('Success:', values);
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md bg-white rounded-lg p-8 shadow-lg">
                <h2 className="text-center text-2xl font-semibold mb-2">Login to Account</h2>
                <p className="text-center text-gray-500 mb-6">Please enter your email and password to continue</p>

                <Form name="login" initialValues={{ remember: true }} onFinish={onFinish} layout="vertical">
                    {/* Email Address */}
                    <Form.Item
                        label="Email address:"
                        name="email"
                        rules={[{ required: true, message: 'Please input your email!' }]}
                    >
                        <Input
                            placeholder="pasqual@gmail.com"
                            className="rounded-lg bg-gray-100 text-gray-700"
                            size="large"
                        />
                    </Form.Item>

                    {/* Password */}
                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password
                            placeholder="******"
                            iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                            className="rounded-lg bg-gray-100"
                            size="large"
                        />
                    </Form.Item>

                    {/* Remember Me and Forgot Password */}
                    <div className="flex justify-between items-center mb-4">
                        <Form.Item name="remember" valuePropName="checked" noStyle>
                            <Checkbox>Remember Password</Checkbox>
                        </Form.Item>
                        <a className="text-blue-500">Forget Password?</a>
                    </div>

                    {/* Sign In Button */}
                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="w-full rounded-lg" size="large">
                            Sign In
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};

export default Login;
