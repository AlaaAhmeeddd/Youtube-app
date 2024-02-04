import React, { useContext } from 'react';
import { Header } from './Header';
import {Category} from './components/Category'
import { Sidebar } from './components/Sidebar';
import { VideosSection } from './components/Videos';
import { MenuBar } from './context/SidebarContext';

function App() {
  const menuAction = useContext(MenuBar);
  return (
    <div className={`flex-col max-h-screen relative before:absolute overflow-y-hidden ${menuAction.menuAction && 'h-screen'}`}>
    <Header />
    <div className={`relative ${menuAction.menuAction ? 'before:content-[""] before:absolute before:inset-0 before:bg-black before:bg-opacity-70 before:z-20 h-screen' : ''} before:lg:hidden`}>
      <div className="grid grid-cols-[auto,1fr] flex-grow-1">
        <Sidebar />
        <div className="overflow-y-auto relative max-h-screen">
          <div className="bg-white pb-4 pl-4 sticky top-0 z-50">
            <Category />
          </div>
          <VideosSection />
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;
