import { Button, Flex } from 'antd';
import { useState } from 'react';

import CustomModal from '../../components/shared/CustomModal';
import AddFaqForm from '../../components/ui/form/AddFaqForm';
import EditFaqForm from '../../components/ui/form/EditFaqForm';
import { faqData } from '../../const';

import { GoQuestion } from 'react-icons/go';
import { CiEdit } from 'react-icons/ci';
import { RxCross2 } from 'react-icons/rx';

const FAQs = () => {
    const [openModal, setOpenModal] = useState(false);
    const [openEditModal, setEditModal] = useState(false);

    const handleAddFaq = (values: any) => {
        console.log('Form Submitted', values);
        setOpenModal(false);
    };

    const handleEdit = (index: number) => {
        // Logic for editing the FAQ
        console.log(`Edit FAQ at index: ${index}`);
    };

    // const handleDelete = (index: number) => {
    //     // Logic for deleting the FAQ
    //     console.log(`Delete FAQ at index: ${index}`);
    // };
    return (
        <div>
            <Flex vertical={false} gap={10} align="center" justify="space-between">
                <div>
                    <h1 className="text-3xl text-primary font-semibold">FAQs</h1>
                </div>

                <div
                    style={{
                        marginBottom: 10,
                    }}
                >
                    <Button
                        onClick={() => setOpenModal(true)}
                        style={{
                            height: 40,
                        }}
                        type="primary"
                    >
                        Add FAQs
                    </Button>
                </div>
            </Flex>

            <div className="space-y-6 my-5">
                <div className="bg-white py-6 px-4 rounded-md">
                    {faqData.map((item, index) => (
                        <div key={index} className="flex justify-between items-start gap-4 ">
                            <div className="mt-3">
                                <GoQuestion color="#DBB162" size={25} />
                            </div>
                            <div className="w-full ">
                                <p className="text-base font-medium border-b rounded-xl py-2 px-4 flex items-center gap-8 bg-slate-50">
                                    <span className=" flex-1 "> {item?.question}</span>
                                </p>
                                <div className="flex justify-start items-start gap-2 border-b  py-2 px-4  rounded-xl my-4 bg-slate-50">
                                    <p className="text-[#919191] leading-[24px] mb-6 ">{item?.answer}</p>
                                </div>
                            </div>
                            <div className="w-[5%] flex justify-start flex-col items-start gap-2">
                                <CiEdit
                                    size={24}
                                    onClick={() => {
                                        setEditModal(true);
                                    }}
                                    className="text-2xl cursor-pointer text-[#DBB162]"
                                />
                                <RxCross2
                                    size={24}
                                    onClick={() => {}}
                                    className="text-2xl cursor-pointer text-red-600"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <CustomModal
                open={openModal}
                setOpen={setOpenModal}
                title="Add Faq"
                width={500}
                body={<AddFaqForm onFinish={handleAddFaq} />}
            />
            <CustomModal
                open={openEditModal}
                setOpen={setEditModal}
                title="Edit Faq"
                width={500}
                body={<EditFaqForm onFinish={handleEdit} />}
            />
        </div>
    );
};

export default FAQs;
