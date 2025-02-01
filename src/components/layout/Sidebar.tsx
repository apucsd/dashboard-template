import { ConfigProvider, Layout, Menu } from 'antd';
import { sidebarItemsGenerator } from '../../utils/generateSidebarItems';
import sidebarItems from '../../utils/sidebarItems';
import { Link } from 'react-router-dom';

const { Sider } = Layout;
const Sidebar = () => {
    return (
        <ConfigProvider
            theme={{
                token: {
                    // colorPrimary: '#DAA520',
                    // colorBgContainer: '#DAA520',
                    // colorText: '#414446',
                },
                components: {
                    Menu: {
                        // itemBg: '#DAA520',
                        // itemActiveBg: '#DAA520',
                        itemSelectedColor: '#fff',
                        // itemBorderRadius: '20px 0px 0px 20px' as any,
                        // itemHeight: 45,
                        itemSelectedBg: '#FF6F3C',
                        // colorItemBgActive: '#DAA520',
                        // colorPrimaryActive: '#DAA520',
                        // colorBgBase: '#DAA520',
                    },
                },
            }}
        >
            <Sider
                width={250}
                theme="light"
                breakpoint="lg"
                collapsedWidth="0"

                // onBreakpoint={(broken) => {
                //   // console.log(broken);
                // }}
                // onCollapse={(collapsed, type) => {
                //   console.log(collapsed, type);
                // }}
            >
                <Link to="/">
                    <img className="w-[165.6px] object-cover mx-auto" src="/logo.png" alt="" />
                </Link>

                <Menu
                    style={
                        {
                            // color: '#DAA520',
                            // width: 250,
                        }
                    }
                    theme="light"
                    mode="inline"
                    defaultSelectedKeys={['dashboard']}
                    items={sidebarItemsGenerator(sidebarItems)}
                />
            </Sider>
        </ConfigProvider>
    );
};

export default Sidebar;
