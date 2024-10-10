import { Form, Input, Button } from 'antd';
import { AiOutlineEdit } from 'react-icons/ai';

const { TextArea } = Input;

const EditFaqForm = ({ onFinish }: { onFinish: (values: any) => void }) => {
    const [form] = Form.useForm();

    return (
        <Form form={form} layout="vertical" onFinish={onFinish}>
            {/* Product Name */}
            <Form.Item
                label="Question"
                name="productName"
                rules={[{ required: true, message: 'Please enter a question' }]}
            >
                <Input placeholder="Your faq question" />
            </Form.Item>

            {/* Description */}
            <Form.Item label="Answer" name="answer" rules={[{ required: true, message: 'Please enter a answer' }]}>
                <TextArea
                    style={{
                        width: '100%',
                        resize: 'none',
                        borderRadius: 6,
                        backgroundColor: '#F9F9F9',
                    }}
                    rows={3}
                    placeholder="Your faq answer"
                />
            </Form.Item>

            {/* Submit Button */}
            <Form.Item>
                <Button
                    icon={<AiOutlineEdit />}
                    htmlType="submit"
                    style={{
                        height: 40,
                    }}
                    type="primary"
                >
                    Edit FAQ
                </Button>
            </Form.Item>
        </Form>
    );
};

export default EditFaqForm;
