import HEADER_ICON from "../../../Icons/todo-icon.svg"

export default function Header(){
    return(
        <header>
        <img src={HEADER_ICON} className="header-icon"></img>
        <h1>TO DO</h1>
        </header>
    )
}