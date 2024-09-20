import { BsTrash } from "react-icons/bs";
import { ConfigProvider, Flex, Input, Table } from "antd";
import Title from "antd/es/typography/Title";
import { dummyData } from "../../constant/constant";
import { AiOutlineSearch } from "react-icons/ai";

const UserManagement = () => {
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
            User
          </Title>
        </div>

        <div
          style={{
            marginBottom: 10,
          }}
        >
          <Input
            style={{
              width: 300,
              borderRadius: 5,
              padding: "8px 20px",
              fontSize: 16,
              marginBottom: 0,
              outlineColor: "transparent",
            }}
            placeholder="Search"
            suffix={<AiOutlineSearch />}
          />
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

export default UserManagement;
