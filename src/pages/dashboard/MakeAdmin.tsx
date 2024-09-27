import { BsTrash } from 'react-icons/bs';
import { Button, ConfigProvider, Flex, Form, Input, Popconfirm, Table } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import Title from 'antd/es/typography/Title';
import { dummyData } from '../../constant/constant';
import CustomModal from '../../components/shared/CustomModal';
import { useState } from 'react';
import { IoSaveSharp } from 'react-icons/io5';

const MakeAdmin = () => {
    const [makeAdminModal, setMakeAdminModal] = useState(false);
    const columns = [
        {
            title: 'S.No',
            dataIndex: 'key',
            key: 'key',
            width: 150,
        },
        {
            title: 'Admin Name',
            dataIndex: 'admin_name',
            key: 'admin_name',
        },

        {
            title: 'Admin Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Admin Type',
            dataIndex: 'admin_type',
            key: 'admin_type',
        },
        {
            title: 'Action',
            dataIndex: 'action',
            key: 'action',
            width: 150,
            textAlign: 'center',
            render: () => (
                <Popconfirm title="Delete User" description="Are you sure to delete this task?">
                    <button>
                        <BsTrash className="text-red-600" size={20} />
                    </button>
                </Popconfirm>
            ),
        },
    ];

    const addAdminForm = (
        <Form
            style={{
                color: '#767676',
            }}
            layout="vertical"
        >
            <Form.Item label="Name" name="name">
                <Input
                    style={{
                        height: '40px',
                    }}
                    placeholder="John Doe"
                />
            </Form.Item>
            <Form.Item label="Email">
                <Input
                    style={{
                        height: '40px',
                    }}
                    type="email"
                    placeholder="email@gmail.com"
                />
            </Form.Item>
            <Form.Item label="Password">
                <Input
                    style={{
                        height: '40px',
                    }}
                    type="password"
                    placeholder="******"
                />
            </Form.Item>
            <Form.Item>
                <div className="flex justify-center w-full">
                    <Button
                        htmlType="submit"
                        style={{
                            backgroundColor: '#2461CB',
                            height: '40px',
                            borderRadius: 8,
                            width: '100%',
                        }}
                        type="primary"
                        icon={<IoSaveSharp />}
                    >
                        Make Admin
                    </Button>
                </div>
            </Form.Item>
        </Form>
    );

    return (
        <div>
            <Flex vertical={false} gap={10} align="center" justify="space-between">
                <div>
                    <Title
                        style={{
                            color: '#2461CB',
                        }}
                        level={2}
                    >
                        Add Admin
                    </Title>
                </div>

                <div
                    style={{
                        marginBottom: 10,
                    }}
                >
                    <Button
                        onClick={() => setMakeAdminModal(true)}
                        style={{
                            backgroundColor: '#2461CB',

                            height: '40px',
                            borderRadius: 8,
                        }}
                        type="primary"
                        icon={<PlusOutlined />}
                    >
                        Add Admin
                    </Button>
                </div>
            </Flex>

            <ConfigProvider
                theme={{
                    components: {
                        Table: {
                            headerBg: '#E9EFFA',
                            headerBorderRadius: 0,
                            rowHoverBg: '#F5F5F5',
                        },
                    },
                }}
            >
                <Table columns={columns} dataSource={dummyData} />
            </ConfigProvider>

            <CustomModal
                open={makeAdminModal}
                setOpen={setMakeAdminModal}
                title="Make Admin"
                width={500}
                body={addAdminForm}
            />
        </div>
    );
};

export default MakeAdmin;
