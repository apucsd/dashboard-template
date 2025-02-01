import { TSidebarItem } from './generateSidebarItems';
import { RiAdminLine } from 'react-icons/ri';
import { AiOutlineFileText, AiOutlineQuestionCircle } from 'react-icons/ai';
import { LuLogOut } from 'react-icons/lu';
import { RxHome } from 'react-icons/rx';
const sidebarItems: TSidebarItem[] = [
    {
        key: 'dashboard',
        label: 'Dashboard',
        path: '',
        icon: <RxHome size={24} />,
    },

    {
        key: 'add-admin',
        label: 'Add Admin',
        path: 'make-admin',
        icon: <RiAdminLine size={24} />,
    },
    {
        key: 'terms',
        label: 'Terms & Conditions',
        path: 'terms',
        icon: <AiOutlineFileText size={24} />,
    },
    {
        key: 'faqs',
        label: 'FAQs',
        path: 'faqs',
        icon: <AiOutlineQuestionCircle size={24} />,
    },
    {
        key: 'logout',
        label: 'Log Out',
        path: '',
        icon: <LuLogOut size={24} />,
    },
];

export default sidebarItems;
