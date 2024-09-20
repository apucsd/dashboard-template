import { HiMiniUserGroup } from "react-icons/hi2";

const DashboardStats = () => {
  const data = [
    {
      name: "Total User",
      count: "20.10K",
      title1: " Daily user",
      total: "1025",
      icon: <HiMiniUserGroup color="#DBB162" size={24} />,
      bgColor: "#EFEFEF",
      textColor: "#DBB162",
    },
    {
      name: "Total Salon",
      count: "920",
      title1: " Daily user",
      total: "125",
      icon: <HiMiniUserGroup color="#DBB162" size={24} />,
      textColor: "#8E3C50",
      bgColor: "#EFEFEF",
    },
    {
      name: "Total Earning",
      count: "150.10K",
      title1: " Daily donation",
      total: "$2.5k",
      icon: <HiMiniUserGroup color="#DBB162" size={24} />,
      textColor: "#F16365",
      bgColor: "#EFEFEF",
    },
  ];
  return (
    <div>
      <div className="grid grid-cols-3 gap-3 items-center mt-4">
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-md p-10 border"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <div
              style={{
                background: `${item.bgColor}`,
                width: "44px",
                height: "44px",
                borderRadius: "100%",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {item?.icon}
            </div>
            <div
              style={{
                flex: 1,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <p
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.2em",
                  fontWeight: "400",
                  color: "#6A6D7C",
                }}
              >
                {item.name}
              </p>
              <div>
                <p
                  style={{
                    fontSize: "1.6em",
                    fontWeight: "600",
                    color: `${item?.textColor}`,
                  }}
                >
                  {item.count} +
                </p>
                <p className="flex gap-3 items-center text-[#00B047] font-medium text-lg">
                  {" "}
                  <span> {item?.title1} </span> <span> {item?.total}</span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardStats;
