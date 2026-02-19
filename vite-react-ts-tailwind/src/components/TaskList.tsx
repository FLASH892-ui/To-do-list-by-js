interface Task {
    id: number;
    text: string;
}

interface TaskListProps {
    tasks: Task[];
    onDeleteTask: (id: number) => void;
    children?: React.ReactNode;
}

export default function TaskList({ tasks, onDeleteTask, children }: TaskListProps) {
    return (
        <div className="max-w-[700px] w-[90%] p-5 bg-[#f9f9f9] rounded-[15px] shadow-[0_2px_10px_rgba(0,213,255,0.338)] flex flex-col gap-[5px] hover:shadow-[0_4px_15px_rgba(0,213,255,0.5)] transition-shadow duration-300">

            {children}

            <h2 className="text-center text-[#333] text-[3rem] font-semibold font-[jostSemibold,sans-serif]">
                To-do List
            </h2>

            <div className="w-1/2 h-[2px] bg-gradient-to-r from-transparent via-[#999] to-transparent self-center my-2"></div>

            <table className="w-full border-[1.5px] border-black rounded-[5px] font-['Segoe_UI',Tahoma,Geneva,Verdana,sans-serif] mt-[10px] border-collapse">
                <thead>
                    <tr>
                        <th className="border border-black p-2 font-['Lucida_Sans',sans-serif] text-center w-[10%] rounded-tl-[5px]">Serial No.</th>
                        <th className="border border-black p-2 font-['Lucida_Sans',sans-serif] text-center w-[70%]">Task</th>
                        <th className="border border-black p-2 font-['Lucida_Sans',sans-serif] text-center w-[20%] rounded-tr-[5px]">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map((task, index) => (
                        <tr key={task.id}>
                            <td className="border border-black p-2 font-['Lucida_Sans',sans-serif] text-center">{index + 1}</td>
                            <td className="border border-black p-2 font-['Lucida_Sans',sans-serif] text-center">{task.text}</td>
                            <td className="border border-black p-2 font-['Lucida_Sans',sans-serif] text-center">
                                <button
                                    onClick={() => onDeleteTask(task.id)}
                                    className="px-[10px] py-[5px] bg-[#007bff] text-white border-none rounded-[4px] cursor-pointer text-[0.9rem] hover:bg-[#0056b3] transition-colors duration-200"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
