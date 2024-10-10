import { Table, Dropdown, Input, Select } from 'antd';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { SearchOutlined } from '@ant-design/icons';
const { Option } = Select;
// Sample data
const influencerData = [
    {
        id: '00001',
        name: 'Christine Brooks',
        email: 'alma.lawson@example.com',
        status: 'Active',
    },
    {
        id: '00002',
        name: 'Rosie Pearson',
        email: 'tim.jennings@example.com',
        status: 'Inactive',
    },
    {
        id: '00003',
        name: 'Darrell Caldwell',
        email: 'debra.holt@example.com',
        status: 'Active',
    },
    {
        id: '00004',
        name: 'Gilbert Johnston',
        email: 'kenzi.lawson@example.com',
        status: 'Inactive',
    },
    {
        id: '00005',
        name: 'Alan Cain',
        email: 'willie.jennings@example.com',
        status: 'Inactive',
    },
    {
        id: '00006',
        name: 'Alfred Murray',
        email: 'georgia.young@example.com',
        status: 'Active',
    },
    {
        id: '00007',
        name: 'Maggie Sullivan',
        email: 'michelle.rivera@example.com',
        status: 'Inactive',
    },
    {
        id: '00008',
        name: 'Rosie Todd',
        email: 'bill.sanders@example.com',
        status: 'Inactive',
    },
    {
        id: '00009',
        name: 'Dollie Hines',
        email: 'deanna.curtis@example.com',
        status: 'Active',
    },
];

// Column definitions
const columns = [
    {
        title: 'ID',
        dataIndex: 'id',
        key: 'id',
    },
    {
        title: "Influencer's Name",
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
    },
    {
        title: 'Campaign Status',
        dataIndex: 'status',
        key: 'status',
        render: (status: string) => (
            <span className={status === 'Active' ? 'text-green-500' : 'text-red-500'}>{status}</span>
        ),
    },
    {
        title: 'Action',
        key: 'action',
        render: (_: any, record: any) => (
            <Dropdown
                menu={{
                    items: [
                        {
                            key: 'view',
                            label: <span onClick={() => handleAction('view', record)}>View</span>,
                        },

                        {
                            key: 'disable',
                            label: <span onClick={() => handleAction('disable', record)}>Disable User</span>,
                        },
                        {
                            key: 'enable',
                            label: <span onClick={() => handleAction('enable', record)}>Enable User</span>,
                        },
                        {
                            key: 'remove',
                            label: <span onClick={() => handleAction('remove', record)}>Remove</span>,
                        },
                    ],
                }}
                trigger={['click']}
            >
                <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
                    <BsThreeDotsVertical />
                </a>
            </Dropdown>
        ),
    },
];

const handleAction = (action: any, record: any) => {
    console.log(action, record);
    // Implement action handling logic here
};

const Influencer = () => {
    return (
        <div className="container mx-auto p-5">
            <div className="flex items-center gap-5 justify-end mb-5">
                <Input
                    style={{
                        maxWidth: 300,
                        height: 42,
                    }}
                    placeholder="Search"
                    prefix={<SearchOutlined />}
                />

                {/* Dropdown Filter */}
                <Select defaultValue="All" className="w-32 h-[42px]">
                    <Option value="All">All</Option>
                    <Option value="Active">Active</Option>
                    <Option value="Inactive">Inactive</Option>
                    <Option value="Pending">Pending</Option>
                </Select>
            </div>
            <Table columns={columns} dataSource={influencerData} rowClassName="hover:bg-gray-100" />
        </div>
    );
};

export default Influencer;
