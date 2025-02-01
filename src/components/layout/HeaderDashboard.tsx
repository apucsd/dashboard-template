import { Avatar, Badge, Layout } from 'antd';
import { MdOutlineNotificationsNone } from 'react-icons/md';
import { Link } from 'react-router-dom';

const { Header } = Layout;

const HeaderDashboard = () => {
    return (
        <Header style={{ display: 'flex', height: '90px', justifyContent: 'end' }}>
            <div className="flex gap-4 items-center">
                <Link className="flex gap-2 items-center p-2 bg-[#f2f2f2] rounded-full" to={'/notification'}>
                    <Badge size="default" count={5}>
                        <MdOutlineNotificationsNone size={24} />
                    </Badge>
                </Link>
                <div>
                    <Badge
                        style={{
                            width: 12,
                            height: 12,
                        }}
                        color="green"
                        offset={[0, 40]}
                        dot
                        className="flex justify-end items-center"
                    >
                        <Avatar
                            style={{
                                border: '2px solid #2461CB',
                            }}
                            size={50}
                            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                        />
                    </Badge>
                </div>
                <p className="font-semibold text-black ms-1">John Doe</p>
            </div>
        </Header>
    );
};

export default HeaderDashboard;
