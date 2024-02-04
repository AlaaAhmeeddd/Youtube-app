import { HomeIcon, 
    Clapperboard, 
    Library, 
    History, 
    Video, 
    Clock, 
    ListVideo , 
    ChevronDown, 
    ChevronUp, 
    Flame, 
    ShoppingBag, 
    Music2, 
    Film, 
    Radio, 
    Gamepad2, 
    Newspaper, 
    Trophy, 
    Lightbulb } from "lucide-react";
import { Button } from "./Button";
import { useContext, useState } from "react";
import { subscriptions } from "../data/Sidebar";
import { MenuBar } from "../context/SidebarContext";

export function Sidebar(){
    const [toggle , setToggle] = useState(false);
    const sideBarAction = useContext(MenuBar);
    return(
        <div className={`max-h-screen overflow-y-auto pb-4 flex-col gap-2 px-2 sticky overflow-hidden bg-white z-50 lg:${sideBarAction.menuAction && 'w-20'}`}
        style={{ height: 'calc(100vh - 73px)' , top: '72px' }}>
            <div className={`lg:${sideBarAction.menuAction ? 'block' : 'hidden'} ${sideBarAction.menuAction ? 'hidden' : 'block'}`}>
                <Button className="flex w-24 h-20 justify-around flex-col items-center rounded-md pl-3" variant={"ghost"} size={"default"}>
                    <HomeIcon />
                    <p className="text-sm">Home</p>
                </Button>
                <Button className="flex w-24 h-20 justify-around flex-col items-center rounded-md pl-3" variant={"ghost"} size={"default"}>
                    <Clapperboard />
                    <p className="text-sm">Subscriptions</p>
                </Button>
                <Button className="flex w-24 h-20 justify-around flex-col items-center rounded-md pl-3" variant={"ghost"} size={"default"}>
                    <Library />
                    <p className="text-sm">Library</p>
                </Button>
                <Button className="flex w-24 h-20 justify-around flex-col items-center rounded-md pl-3" variant={"ghost"} size={"default"}>
                    <History />
                    <p className="text-sm">History</p>
                </Button>
            </div>
            <div className="lg:overflow-y-auto"></div>
            <div className={`lg:${sideBarAction.menuAction ? 'hidden' : 'block' } ${sideBarAction.menuAction ? 'block' : 'hidden' }`}>
                <div className="border-b border-b-gray-200 mb-2 pb-2">
                    <Button className="flex bg-gray-100 w-full h-12 items-center gap-4 rounded-md pl-3" variant={"default"} size={"default"}>
                        <HomeIcon />
                        <p className="font-bold">Home</p>
                    </Button>
                    <Button className="flex w-full h-12 items-center gap-4 rounded-md pl-3" variant={"ghost"} size={"default"}>
                        <Clapperboard />
                        <p>Subscriptions</p>
                    </Button>
                </div>
                <div className="border-b border-b-gray-200 mb-2 pb-2">
                    <Button className="flex w-full h-12 items-center gap-4 rounded-md pl-3" variant={"ghost"} size={"default"}>
                        <Library />
                        <p>Library</p>
                    </Button>
                    <Button className="flex w-full h-12 items-center gap-4 rounded-md pl-3" variant={"ghost"} size={"default"}>
                        <History />
                        <p>History</p>
                    </Button>
                    <Button className="flex w-full h-12 items-center gap-4 rounded-md pl-3" variant={"ghost"} size={"default"}>
                        <Video />
                        <p>Your Videos</p>
                    </Button>
                    <Button className="flex w-full h-12 items-center gap-4 rounded-md pl-3" variant={"ghost"} size={"default"}>
                        <Clock />
                        <p>Watch Latter</p>
                    </Button>
                    <Button className="flex w-full h-12 items-center gap-4 rounded-md pl-3" variant={"ghost"} size={"default"}>
                        <ListVideo />
                        <p>Frontend & Backend</p>
                    </Button>
                    <div className={`${toggle ? "hidden" : "flex"}`}>
                        <Button 
                            onClick={() => {
                                setToggle(true);
                                }}
                            className="flex w-full h-12 items-center gap-4 rounded-md pl-3" variant={"ghost"} size={"default"}>
                            <ChevronDown />
                            <p>Show More</p>
                        </Button>
                    </div>
                    <div className={`${toggle ? "flex flex-col" : "hidden"}`}>
                        <Button className="flex w-full h-12 items-center gap-4 rounded-md pl-3" variant={"ghost"} size={"default"}>
                            <ListVideo />
                            <p>Favorites</p>
                        </Button>
                        <Button className="flex w-full h-12 items-center gap-4 rounded-md pl-3" variant={"ghost"} size={"default"}>
                            <ListVideo />
                            <p>React</p>
                        </Button>
                        <Button className="flex w-full h-12 items-center gap-4 rounded-md pl-3" variant={"ghost"} size={"default"}>
                            <ListVideo />
                            <p>Non-Dev</p>
                        </Button>
                        <Button className="flex w-full h-12 items-center gap-4 rounded-md pl-3" variant={"ghost"} size={"default"}>
                            <ListVideo />
                            <p>TypeScript</p>
                        </Button>
                        <Button 
                            onClick={() => {
                                setToggle(false);
                                }}
                            className="flex w-full h-12 items-center gap-4 rounded-md pl-3" variant={"ghost"} size={"default"}>
                            <ChevronUp />
                            <p>Show Less</p>
                        </Button>
                    </div>
                </div>
                <div className="border-b border-b-gray-200 mb-2 pb-2">
                    <p className="text-lg ml-4 my-3">Subscriptions</p>
                    {subscriptions.map((subscription)=>(
                        <Button className="flex w-full h-12 items-center gap-4 rounded-md pl-3" variant={"ghost"} size={"default"}>
                            <img src={subscription.imgUrl} alt="" className="w-6 rounded-full"/>
                            <p>{subscription.channelName}</p>
                        </Button>
                    ))}
                </div>
                <div className="mb-2 pb-2">
                    <p className="text-lg ml-4 my-3">Explore</p>
                        <Button className="flex w-full h-12 items-center gap-4 rounded-md pl-3" variant={"ghost"} size={"default"}>
                            <Flame />
                            <p>Trending</p>
                        </Button>
                        <Button className="flex w-full h-12 items-center gap-4 rounded-md pl-3" variant={"ghost"} size={"default"}>
                            <ShoppingBag />
                            <p>Shopping</p>
                        </Button>
                        <Button className="flex w-full h-12 items-center gap-4 rounded-md pl-3" variant={"ghost"} size={"default"}>
                            <Music2 />
                            <p>Music</p>
                        </Button>
                        <Button className="flex w-full h-12 items-center gap-4 rounded-md pl-3" variant={"ghost"} size={"default"}>
                            <Film />
                            <p>Movies & TV</p>
                        </Button>
                        <Button className="flex w-full h-12 items-center gap-4 rounded-md pl-3" variant={"ghost"} size={"default"}>
                            <Radio />
                            <p>Live</p>
                        </Button>
                        <Button className="flex w-full h-12 items-center gap-4 rounded-md pl-3" variant={"ghost"} size={"default"}>
                            <Gamepad2 />
                            <p>Gaming</p>
                        </Button>
                        <Button className="flex w-full h-12 items-center gap-4 rounded-md pl-3" variant={"ghost"} size={"default"}>
                            <Newspaper />
                            <p>News</p>
                        </Button>
                        <Button className="flex w-full h-12 items-center gap-4 rounded-md pl-3" variant={"ghost"} size={"default"}>
                            <Trophy />
                            <p>Sports</p>
                        </Button>
                        <Button className="flex w-full h-12 items-center gap-4 rounded-md pl-3" variant={"ghost"} size={"default"}>
                            <Lightbulb />
                            <p>Learning</p>
                        </Button>
                </div>
            </div>
        </div>
    )
}
