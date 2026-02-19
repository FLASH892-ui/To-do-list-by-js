import { useState } from 'react';

interface TaskInputProps {
    onAddTask: (text: string) => void;
}

export default function TaskInput({ onAddTask }: TaskInputProps) {
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = () => {
        if (inputValue.trim()) {
            onAddTask(inputValue.trim());
            setInputValue('');
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            handleSubmit();
        }
    };

    return (
        <div className="max-w-[700px] w-[90%] p-5 bg-[#f9f9f9] rounded-[15px] shadow-[0_2px_10px_rgba(0,213,255,0.338)] flex justify-center mb-5 hover:shadow-[0_4px_15px_rgba(0,213,255,0.5)] transition-shadow duration-300">
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Add a new task"
                className="w-[75%] p-[10px] border-[0.5px] border-[#ccc] rounded-l-[4px] text-[1rem] outline-[#ccc] focus:outline focus:outline-[0.5px] focus:outline-[#007bff] bg-white text-[#333]"
                id="taskInput"
            />
            <button
                onClick={handleSubmit}
                className="w-[25%] px-[15px] py-[10px] bg-[#007bff] text-white border-none rounded-r-[4px] cursor-pointer text-[1rem] hover:bg-[#0056b3] outline outline-[0.5px] outline-[#007bff] transition-colors duration-200"
                id="addTaskButton"
            >
                Add Task
            </button>
        </div>
    );
}
