
const FormInput: React.FC<{label?: string} & any> = ({label, ...otherProps}) => {
    return (
        <div className="group">
            <input 
                type="text" 
                className="form-input bg-white text-gray-500 text-[18px] py-[10px] pl-[5px] pr-[10px] block w-full border-none rounded-none border-b border-gray-500 my-[25px] focus:outline-none" 
                {...otherProps}
            />
            {
                label && (
                    <label 
                        className={`${otherProps.value.length ? 'shrink' : null} form-input-label text-gray-500 text-[16px] font-normal absolute pointer-events-none left-[5px] top-[10px] transition-all duration-300 ease-in-out`}>
                        {label}
                    </label>
                )
            }
        </div>
    );
};

export default FormInput;