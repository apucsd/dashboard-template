import { Table, Input, Select } from 'antd';

import { SearchOutlined } from '@ant-design/icons';
const { Option } = Select;
// Sample data
const data = [
    {
        key: '1',
        campaignName: 'Campaign 1',
        brandName: 'Christine Brooks',
        influencers: 14,
        campaignStatus: 'Active',
        startDate: '02-02-2024',
        endDate: '05-02-2024',
    },
    {
        key: '2',
        campaignName: 'Campaign 2',
        brandName: 'Rosie Pearson',
        influencers: 53,
        campaignStatus: 'Pending',
        startDate: '02-02-2024',
        endDate: '05-02-2024',
    },
    {
        key: '3',
        campaignName: 'Campaign 3',
        brandName: 'Darrell Caldwell',
        influencers: 14,
        campaignStatus: 'Completed',
        startDate: '02-02-2024',
        endDate: '05-02-2024',
    },
    {
        key: '4',
        campaignName: 'Campaign 4',
        brandName: 'Gilbert Johnston',
        influencers: 14,
        campaignStatus: 'Inactive',
        startDate: '02-02-2024',
        endDate: '05-02-2024',
    },
    {
        key: '5',
        campaignName: 'Campaign 5',
        brandName: 'Alan Cain',
        influencers: 14,
        campaignStatus: 'Completed',
        startDate: '02-02-2024',
        endDate: '05-02-2024',
    },
    {
        key: '6',
        campaignName: 'Campaign 6',
        brandName: 'Alfred Murray',
        influencers: 14,
        campaignStatus: 'Active',
        startDate: '02-02-2024',
        endDate: '05-02-2024',
    },
    {
        key: '7',
        campaignName: 'Campaign 7',
        brandName: 'Maggie Sullivan',
        influencers: 14,
        campaignStatus: 'Completed',
        startDate: '02-02-2024',
        endDate: '05-02-2024',
    },
    {
        key: '8',
        campaignName: 'Campaign 8',
        brandName: 'Rosie Todd',
        influencers: 14,
        campaignStatus: 'Inactive',
        startDate: '02-02-2024',
        endDate: '05-02-2024',
    },
    {
        key: '9',
        campaignName: 'Campaign 9',
        brandName: 'Dollie Hines',
        influencers: 14,
        campaignStatus: 'Active',
        startDate: '02-02-2024',
        endDate: '05-02-2024',
    },
];

// Column definitions
const columns = [
    {
        title: 'Campaign Name',
        dataIndex: 'campaignName',
        key: 'campaignName',
    },
    {
        title: 'Brand Name',
        dataIndex: 'brandName',
        key: 'brandName',
    },
    {
        title: 'Influencers',
        dataIndex: 'influencers',
        key: 'influencers',
    },
    {
        title: 'Campaign Status',
        dataIndex: 'campaignStatus',
        key: 'campaignStatus',
    },
    {
        title: 'Start Date/End Date',
        key: 'dateRange',
        render: (_text: any, record: any) => (
            <span>
                {record.startDate}/{record.endDate}
            </span>
        ),
    },
    {
        title: 'Actions',
        key: 'action',
        render: () => (
            <div>
                <a href="#" className="text-blue-500">
                    View
                </a>
                <a href="#" className="text-red-500 ml-2">
                    Delete
                </a>
            </div>
        ),
    },
];

const Campaign = () => {
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
            <Table columns={columns} dataSource={data} rowClassName="hover:bg-gray-100" />
        </div>
    );
};

export default Campaign;
