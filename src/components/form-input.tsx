import React from 'react';

const FormInput: React.FC<
    { label?: string } & React.InputHTMLAttributes<HTMLInputElement>
> = ({ label, ...otherProps }) => {
    return (
        //image upload component
        <div className="relative my-11.25 mx-0 p-2">
            <input
                type="text"
                className="peer form-input bg-transparent text-gray-500 text-lg px-2.5 py-2.5 border-b border-gray-500 w-full outline-none focus:outline-none"
                {...otherProps}
            />
            {label && (
                <label
                    className={`form-input-label text-gray-500 text-[16px] font-normal absolute transition-all duration-300 ease-in-out left-2 top-2 -translate-y-1 scale-75 origin-top-left peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-blue-500 peer-placeholder-shown:text-gray-500`}
                >
                    {label}
                </label>
            )}
        </div>
    );
};

export default FormInput;
