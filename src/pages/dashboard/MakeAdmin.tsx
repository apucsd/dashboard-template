import { BsTrash } from "react-icons/bs";
import { Button, ConfigProvider, Flex, Table } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import Title from "antd/es/typography/Title";
import { dummyData } from "../../constant/constant";

const MakeAdmin = () => {
  const columns = [
    {
      title: "S.No",
      dataIndex: "key",
      key: "key",
      width: 150,
    },
    {
      title: "Admin Name",
      dataIndex: "admin_name",
      key: "admin_name",
    },

    {
      title: "Admin Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Admin Type",
      dataIndex: "admin_type",
      key: "admin_type",
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      width: 150,
      textAlign: "center",
      render: () => (
        <button
          style={{
            cursor: "pointer",

            color: "red",
          }}
        >
          <BsTrash size={20} />
        </button>
      ),
    },
  ];

  return (
    <div>
      <Flex vertical={false} gap={10} align="center" justify="space-between">
        <div>
          <Title
            style={{
              color: "#2461CB",
            }}
            level={2}
          >
            Add Admin
          </Title>
        </div>

        <div
          style={{
            marginBottom: 10,
          }}
        >
          <Button
            style={{
              backgroundColor: "#2461CB",

              height: "40px",
              borderRadius: 8,
            }}
            type="primary"
            icon={<PlusOutlined />}
          >
            Add Admin
          </Button>
        </div>
      </Flex>

      <ConfigProvider
        theme={{
          components: {
            Table: {
              headerBg: "#E9EFFA",
              headerBorderRadius: 0,
              rowHoverBg: "#F5F5F5",
            },
          },
        }}
      >
        <Table columns={columns} dataSource={dummyData} />
      </ConfigProvider>
    </div>
  );
};

export default MakeAdmin;
