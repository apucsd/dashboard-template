import { useState, useRef } from 'react';
import JoditEditor from 'jodit-react';
import { Button } from 'antd';

const TermsCondition = () => {
    const editor = useRef(null);
    const [content, setContent] = useState('');

    const config = {
        readonly: false,
        placeholder: 'Start typings...',
        style: {
            height: 400,
            background: 'white',
        },
    };
    return (
        <div className=" bg-white px-4 py-2 rounded-lg pb-10 ">
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    margin: '16px 0',
                }}
            >
                <div>
                    <h3 className="text-2xl text-primary font-semibold">Terms and Conditions</h3>
                </div>
            </div>
            <div>
                <JoditEditor
                    ref={editor}
                    value={content}
                    config={config}
                    onBlur={(newContent) => setContent(newContent)}
                    onChange={() => {}}
                />
            </div>
            <div
                style={{
                    marginTop: 24,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Button
                    style={{
                        height: 40,
                        width: '150px',
                    }}
                    type="primary"
                >
                    Save Changes
                </Button>
            </div>
        </div>
    );
};

export default TermsCondition;
