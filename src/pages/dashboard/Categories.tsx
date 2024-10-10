import { Button, ConfigProvider, Flex, Form, Input, Table } from 'antd';

import CustomModal from '../../components/shared/CustomModal';
import { useState } from 'react';
import { IoTrashOutline } from 'react-icons/io5';

import { AiOutlineEdit } from 'react-icons/ai';

const Categories = () => {
    const [categoryModal, setCategoryModal] = useState(false);
    const categories = [
        { id: '01', name: 'Beauty & Fashion' },
        { id: '02', name: 'Health & Fitness' },
        { id: '03', name: 'Travel & Adventure' },
        { id: '04', name: 'Food & Beverage' },
        { id: '05', name: 'Tech & Gadgets' },
        { id: '06', name: 'Lifestyle & Vlogging' },
        { id: '07', name: 'Parenting & Family' },
        { id: '08', name: 'Entertainment & Gaming' },
        { id: '09', name: 'Business & Finance' },
    ];

    const addCategoryForm = (
        <Form
            style={{
                color: '#767676',
            }}
            layout="vertical"
        >
            <Form.Item label="Category Name" name="name">
                <Input
                    style={{
                        height: '40px',
                    }}
                    placeholder="Enter Category Name"
                />
            </Form.Item>

            <Form.Item>
                <div className="flex justify-center w-full">
                    <Button
                        type="primary"
                        style={{
                            height: 40,
                        }}
                    >
                        Add Category
                    </Button>
                </div>
            </Form.Item>
        </Form>
    );

    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Category Name',
            dataIndex: 'name',
            key: 'name',
        },

        {
            title: 'Action',
            key: 'action',
            render: (_: any, _record: any, index: number) => (
                <div key={index} className="flex items-center gap-3">
                    <button>
                        <AiOutlineEdit className="text-xl text-primary" />
                    </button>
                    <button>
                        <IoTrashOutline className="text-xl text-red-500" />
                    </button>
                </div>
            ),
        },
    ];
    return (
        <div>
            <Flex className="my-2" vertical={false} gap={10} align="center" justify="space-between">
                <div>
                    <h1 className="text-3xl text-primary font-semibold">Categories</h1>
                </div>

                <div
                    style={{
                        marginBottom: 10,
                    }}
                >
                    <Button
                        onClick={() => setCategoryModal(true)}
                        style={{
                            height: 40,
                        }}
                        type="primary"
                    >
                        Add Category
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
                <Table columns={columns} dataSource={categories} />
            </ConfigProvider>

            <CustomModal
                open={categoryModal}
                setOpen={setCategoryModal}
                title="Add Category"
                width={500}
                body={addCategoryForm}
            />
        </div>
    );
};

export default Categories;
