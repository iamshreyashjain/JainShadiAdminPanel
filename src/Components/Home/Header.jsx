import bg_header from "../../assets/Images/menuImg.png"

export default function Header(){
    return(
        <>
            <div className="bg-rose-800  h-1/12">
                <img src= {bg_header} className="opacity-30 h-12/12"/>
            </div>
        </>
    )
}