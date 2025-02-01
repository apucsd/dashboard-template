import { Form, FormProps, FormInstance } from 'antd';
import React from 'react';

export interface CustomFormProps<T = any> extends Omit<FormProps<T>, 'form'> {
    form?: FormInstance<T>;
    children: React.ReactNode;
    onFinish?: (values: T) => void;
    className?: string;
    resetOnSubmit?: boolean;
}

const CustomForm = <T extends object>({
    form,
    children,
    onFinish,
    className,
    resetOnSubmit = false,
    ...props
}: CustomFormProps<T>) => {
    const [formInstance] = Form.useForm(form);

    const handleFinish = async (values: T) => {
        try {
            if (onFinish) {
                await onFinish(values);
                if (resetOnSubmit) {
                    formInstance.resetFields();
                }
            }
        } catch (error) {
            console.error('Form submission error:', error);
        }
    };

    return (
        <Form
            requiredMark={false}
            form={formInstance}
            onFinish={handleFinish}
            layout="vertical"
            className={className}
            {...props}
        >
            {children}
        </Form>
    );
};

export default CustomForm;
