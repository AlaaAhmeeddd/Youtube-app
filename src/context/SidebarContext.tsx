import { createContext, useState, ReactNode } from "react";

interface MenuBarContextProps {
    menuAction: boolean;
    setMenuAction: React.Dispatch<React.SetStateAction<boolean>>;
}

export const MenuBar = createContext<MenuBarContextProps>({
    menuAction: false,
    setMenuAction: () => {},
});

export default function MenuBarProvider({ children }: { children: ReactNode }) {
    const [menuAction, setMenuAction] = useState(false);

    return (
        <MenuBar.Provider value={{ menuAction, setMenuAction }}>
        {children}
        </MenuBar.Provider>
    );
}
