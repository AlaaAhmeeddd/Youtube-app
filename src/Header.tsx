import logo from "./assets/Logo.png";
import { Button } from "./components/Button"
import { ArrowLeft, Bell, Menu, Mic, Search, Upload, User} from "lucide-react";
import { useContext, useState } from "react"
import {MenuBar} from "./context/SidebarContext";

export function Header(){
    const action = useContext(MenuBar)
    const [showFullWidthSearch, setShowFullWidthSearch] = useState(false);
    return(
        <div className={`bg-white flex mb-6 mx-4 pt-2 gap-10 lg:gap-20 ${showFullWidthSearch ? "justify-evenly" : "justify-between"}`}>
            <div className={`logo flex items-center gap-4 ${showFullWidthSearch ? "hidden" : "flex"}`}>
                <Button variant="ghost" size="icon" onClick={()=>action.setMenuAction(!action.menuAction)}>
                    <Menu />
                </Button>
                <a href="/">
                    <img src={logo} alt="" className="h-6"/>
                </a>
            </div>
            <form className={`${showFullWidthSearch ? "flex w-full" : "hidden"} max-w-[600px] md:flex flex-grow gap-3`}>
                <Button
                    onClick={()=>{
                        setShowFullWidthSearch(false);
                    }}
                    variant="ghost" size="icon" className={`{${showFullWidthSearch ? "flex" : "hidden"} ${ !showFullWidthSearch && "md:hidden"}`}>
                    <ArrowLeft />
                </Button>
                <div className="search flex w-full">
                    <input type="search" placeholder="Search" className="rounded-l-full border border-secondary-border shadow-inner shadow-secondary py-1 px-4 text-lg w-full focus:border-blue-500 outline-none"/>
                    <Button className="py-2 px-4 rounded-r-full border-secondary-border border border-l-0 flex-shrink-0" variant={"default"} size={"default"}>
                        <Search />
                    </Button>
                </div>
                <Button variant="default" size="icon">
                    <Mic />
                </Button>
            </form>
            <div className={`icons flex md:gap-1 ${showFullWidthSearch ? "hidden" : "flex"}`}>
                <Button
                    onClick={()=>{
                        setShowFullWidthSearch(true);
                    }}
                    variant="ghost" size="icon" className="md:hidden">
                        <Search />
                </Button>
                <Button variant="ghost" size="icon"  className="md:hidden">
                    <Mic />
                </Button>
                <Button variant="ghost" size="icon">
                    <Upload />
                </Button>
                <Button variant="ghost" size="icon">
                    <Bell />
                </Button>
                <Button variant="ghost" size="icon">
                    <User />
                </Button>
            </div>
        </div>
    )
}