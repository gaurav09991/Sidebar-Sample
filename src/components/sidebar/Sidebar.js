import SidebarItem from "./SidebarItem"
import items from "../../data/sidebar.json"
import React from 'react';
import { AiOutlineBarChart } from "react-icons/ai";

export default function Sidebar() {
    return (
        <div className="containers">
            <div className="sidebar">
                <div className="menu-title">
                    <h3 className='title-icon'><AiOutlineBarChart /></h3>
                    <div className='title'> Statistics</div>
                </div>
                <div className="menu-item-container">
                    <div className="menu-item-2">
                        {items.map((item, index) => <SidebarItem key={index} item={item} key2={index} />)}
                        
                    </div>
                </div>
            </div>
        </div>

    )
}