export default function Input({icon, type ="text", placeholder }){
    return(
        <div className="flex item-center gap-3 border rounded-lg px-3 py-2">
            <span className="text-grey-400">{icon}</span>\
            <input
            type={type}
            placeholder={placeholder}
            className= "w-full outnone-none"
            />
        </div>
    );
}