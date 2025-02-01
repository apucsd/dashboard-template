import { ConfigProvider } from 'antd';

const Provider = ({ children }: { children: React.ReactNode }) => {
    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: '#FF6F3C',
                    fontFamily: 'Poppins',
                    fontSize: 16,
                },

                components: {
                    Layout: {
                        headerBg: 'white',
                    },
                    Table: {
                        headerBg: '#E9EFFA',
                        headerBorderRadius: 0,
                        rowHoverBg: '#F5F5F5',
                    },
                    Form: {
                        labelColor: '#333333',
                        marginLG: 16,
                    },
                    Button: {
                        controlHeight: 42,
                    },
                },
            }}
        >
            {children}
        </ConfigProvider>
    );
};

export default Provider;
