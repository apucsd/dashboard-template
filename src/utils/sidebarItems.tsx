import { TSidebarItem } from './generateSidebarItems';
import { RiAdminFill } from 'react-icons/ri';
import {
    AiOutlineBarChart,
    AiOutlineFileText,
    AiOutlineLogout,
    AiOutlineQuestionCircle,
    AiOutlineStar,
    AiOutlineUnorderedList,
    AiOutlineUsergroupAdd,
} from 'react-icons/ai';
const sidebarItems: TSidebarItem[] = [
    {
        key: 'dashboard',
        label: 'Dashboard',
        path: '',
        icon: <AiOutlineBarChart size={24} />,
    },
    {
        key: 'brands',
        label: 'Brands',
        path: 'brands',
        icon: <AiOutlineStar size={24} />, // Assuming you want a star icon for Brands
    },
    {
        key: 'influencer',
        label: 'Influencer',
        path: 'influencer',
        icon: <AiOutlineUsergroupAdd size={24} />, // Assuming you want a group icon for Influencer
    },
    {
        key: 'categories',
        label: 'Categories',
        path: 'categories',
        icon: <AiOutlineUnorderedList size={24} />, // Assuming you want a list icon for Categories
    },
    {
        key: 'reviews',
        label: 'Reviews',
        path: 'reviews',
        icon: <AiOutlineStar size={24} />, // Assuming a star for Reviews as well
    },
    {
        key: 'campaign',
        label: 'Campaign',
        path: 'campaign',
        icon: <AiOutlineStar size={24} />, // Assuming you want a bullhorn icon for Campaign
    },
    {
        key: 'add-admin',
        label: 'Add Admin',
        path: 'make-admin',
        icon: <RiAdminFill size={24} />,
    },
    {
        key: 'terms',
        label: 'Terms & Conditions',
        path: 'terms',
        icon: <AiOutlineFileText size={24} />, // Assuming you want a file icon for Terms & Conditions
    },
    {
        key: 'faqs',
        label: 'FAQs',
        path: 'faqs',
        icon: <AiOutlineQuestionCircle size={24} />, // Assuming you want a question icon for FAQs
    },
    {
        key: 'logout',
        label: 'Log Out',
        path: 'logout',
        icon: <AiOutlineLogout size={24} />, // Assuming you want a logout icon for Log Out
    },
];

export default sidebarItems;
