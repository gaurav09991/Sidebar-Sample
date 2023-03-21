import React from 'react';
import { useState } from "react"
import './sidebar.css'
import { Form } from "react-bootstrap"
function SidebarInnerItems({ item, key2 }) {
    const [open, setOpen] = useState(false)

    if (item.nodes) {
        return (
            <div className={open && item.nodes !== null ? "menu-item open innerSidebar setLine" : "menu-item"}>
                <div className="sidebar-title" >
                <span className= 'check-main'>
                <Form.Check.Input type='checkbox' isValid />
                        {item.label}
                    </span>
                    {item.nodes[item.nodes.length - 1] !== item.length ? (
                        <button className="btn-up" onClick={() => setOpen(!open)}>
                            {open ? <i className="bi-chevron-down toggle-btn"
                            ></i> : <i className="bi-chevron-up toggle-btn"
                            ></i>}
                        </button>
                    ) : null}
                </div>
                <div className={open && item.nodes !== null ? "sidebar-content innerSidebar setLine ":
                'sidebar-content innerSidebar'}>
                    {
                        item.nodes.map((child, index) => <SidebarInnerItems key={index} item={child} />)
                    }
                </div>
            </div>
        )
    }
    else {
        return (
            <div className={open && item.nodes !== null ? "menu-item open innerSidebar" : "menu-item"}>
                <div className="sidebar-title" >
                    <span  className="menu-item plain lastItem">
                    <Form.Check.Input type='checkbox' isValid readOnly />
                        {item.label}
                    </span>
                </div>
            </div>
        )
    }
}

export default SidebarInnerItems;
