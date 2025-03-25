export default function TableMenu({ item, onItemClick }) {
    return (
        <>
            <ul className=" text-sm text-gray-700 shadow-md rounded-md">
                {item.map((item, index) => (
                    <li 
                    className="flex flex-col items-start bg-stone-100 w-full hover:text-white hover:bg-rose-900  p-1 rounded-md px-3 rounded-b-none "
                     key={index} onClick={()=>onItemClick(item)}>{item}</li>
                ))}
            </ul>
        </>
    )
}
