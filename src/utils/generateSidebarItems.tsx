import { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';

// Sidebar Item Type
export type TSidebarItem = {
    key: string;
    label: ReactNode;
    path?: string;
    icon?: ReactNode;
    children?: TSidebarItem[];
};

export const sidebarItemsGenerator = (items: TSidebarItem[], handleLogout?: () => void) => {
    const sidebarItems = items.reduce((acc: TSidebarItem[], item) => {
        if (item.key === 'logout') {
            acc.push({
                key: item.key,
                icon: item.icon,
                label: (
                    <button
                        onClick={handleLogout}
                        className="flex items-center p-2 bg-transparent border-none cursor-pointer text-inherit font-inherit"
                    >
                        {item.label}
                    </button>
                ),
            });
        } else if (item.children && item.children.length > 0) {
            acc.push({
                key: item.key,
                icon: item.icon,
                label: <>{item.label}</>,
                children: item.children.map((child) => ({
                    key: child.key,
                    icon: child.icon,
                    label: <NavLink to={`/${child.path}`}>{child.label}</NavLink>,
                })),
            });
        } else if (item.label) {
            acc.push({
                key: item.key,
                icon: item.icon,
                label: <NavLink to={`/${item.path}`}>{item.label}</NavLink>,
            });
        }

        return acc;
    }, []);

    return sidebarItems;
};
