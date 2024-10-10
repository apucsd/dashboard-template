import { Button, Divider, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import Brand from '/brand.svg';
const BrandDetails = () => {
    return (
        <div className=" p-6 rounded-lg  mx-auto">
            {/* Header with Logo */}
            <div className="flex justify-center mb-4">
                <img src={Brand} alt="Lay's Logo" className="size-[156px]" />
                {/* Adjust the logo path accordingly */}
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-2 gap-8">
                {/* Brand's Details Section */}
                <div>
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">Brand's Details</h3>
                    <p>
                        <strong>Company Name:</strong> Lionel Messi
                    </p>
                    <p>
                        <strong>Category:</strong> Wellness & Beauty
                    </p>
                    <p>
                        <strong>Email:</strong> irnabela@gmail.com
                    </p>
                    <p>
                        <strong>What's App Number:</strong> (+33)7 00 55 59 27
                    </p>
                    <p>
                        <strong>Phone Number:</strong> (+33)7 00 55 59 27
                    </p>
                    <p>
                        <strong>Owner Name:</strong> Shanto Hasan
                    </p>
                    <p>
                        <strong>Contact Number:</strong> (+33)7 00 55 59 27
                    </p>
                    <p>
                        <strong>Manager's Details:</strong> Here...
                    </p>
                    <p>
                        <strong>Location:</strong> Apt. 738 2086 Marianne Parks
                    </p>
                </div>

                {/* Social Media and Other Details Section */}
                <div>
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">Social Media Link</h3>
                    <p>
                        <strong>Facebook:</strong> www.facebook.com/shanto594
                    </p>
                    <p>
                        <strong>Instagram:</strong> www.instagram.com/shanto594
                    </p>

                    <Divider type="vertical" className="my-4" />

                    <h3 className="text-lg font-semibold text-gray-800 mb-4">ID Proof</h3>
                    <Upload>
                        <Button icon={<UploadOutlined />}>ID Proof</Button>
                    </Upload>

                    <h3 className="text-lg font-semibold text-gray-800 mt-6">Campaign Information</h3>
                    <p>
                        <strong>Active:</strong> <span className="text-green-500">4</span>
                    </p>
                    <p>
                        <strong>Completed:</strong> <span className="text-blue-500">15</span>
                    </p>
                </div>
            </div>

            {/* Divider */}
            <Divider />

            {/* Buttons */}
            <div className="flex justify-center space-x-4">
                <Button danger className="w-32">
                    Reject
                </Button>
                <Button type="primary" className="w-32">
                    Approve
                </Button>
            </div>
        </div>
    );
};

export default BrandDetails;
