import { FaUpload, FaDownload, FaTrash } from 'react-icons/fa';
import { RiEraserFill } from "react-icons/ri";

interface ControlsProps {
    onSave: () => void;
    onLoad: () => void;
    onClear: () => void;
    onDeleteAll: () => void;
}

export default function Controls({ onSave, onLoad, onClear, onDeleteAll }: ControlsProps) {
    const buttonClass = "px-[15px] py-[10px] bg-[#007bff] text-white border-none rounded-[4px] cursor-pointer text-[1rem] hover:bg-[#0056b3] transition-colors duration-200";

    return (
        <div className="flex justify-between w-full mb-2">
            <div className="flex gap-1">
                <button onClick={onSave} className={buttonClass} title="Save Tasks">
                    <FaUpload />
                </button>
                <button onClick={onLoad} className={buttonClass} title="Load Tasks">
                    <FaDownload />
                </button>
            </div>
            <div className="flex gap-1">
                <button onClick={onClear} className={buttonClass} title="Clear View">
                    <RiEraserFill />
                </button>
                <button onClick={onDeleteAll} className={buttonClass} title="Delete All Tasks">
                    <FaTrash />
                </button>
            </div>
        </div>
    );
}
