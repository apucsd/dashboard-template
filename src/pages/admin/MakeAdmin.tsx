import { BsTrash } from 'react-icons/bs';
import { Button, Flex, Popconfirm, Table } from 'antd';
import { dummyData } from '../../constant/constant';
import CustomModal from '../../components/shared/CustomModal';
import { useState } from 'react';
import CustomForm from '../../components/shared/CustomForm';
import CustomInput from '../../components/shared/CustomInput';

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

    const onFinish = (values: any) => {
        console.log(values);
    };
    const addAdminForm = (
        <CustomForm onFinish={onFinish} resetOnSubmit>
            <CustomInput label="Name" name="name" placeholder="Enter Admin Name" />
            <CustomInput label="Email" name="email" placeholder="Enter Admin Email" />
            <CustomInput label="Password" name="password" placeholder="Enter Admin Password" />
            <Button type="primary" htmlType="submit">
                Add Admin
            </Button>
        </CustomForm>
    );

    return (
        <div>
            <Flex vertical={false} gap={10} align="center" justify="space-between">
                <div>
                    <div className="my-4">
                        <h1 className="text-3xl font-semibold text-primary">Admin Management</h1>
                    </div>
                </div>

                <div
                    style={{
                        marginBottom: 10,
                    }}
                >
                    <Button
                        onClick={() => setMakeAdminModal(true)}
                        type="primary"
                        style={{
                            height: 40,
                        }}
                    >
                        Add Admin
                    </Button>
                </div>
            </Flex>

            <Table columns={columns} dataSource={dummyData} />

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
