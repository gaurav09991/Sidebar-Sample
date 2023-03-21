import { useState } from "react"
import SidebarInnerItems from "./SidebarInnerItems"
import './sidebar.css'
import { Form } from "react-bootstrap"
export default function SidebarItem({ item, key2 }) {
    const [open, setOpen] = useState(false)
    if (item.nodes) {
        return (
            <div className={open && item.nodes !== null ? "menu-item open" : "menu-item"}>
               <hr/>
                <div className={open && key2 !== '' && "inside-menu "}>
                    <div className="sidebar-title" >

                        <div>
                        <Form.Check.Input  className='label-name' type='checkbox' isValid readOnly  />
                          { item.label}
                           
                        </div>
                        {item.nodes[item.nodes.length - 1] !== item.length ? (
                            <button className="btn-up" onClick={() => setOpen(!open)}>
                                {open ? <i className="bi-chevron-down toggle-btn"
                                ></i> : <i className="bi-chevron-up toggle-btn"
                                ></i>}
                            </button>
                        ) : null}
                    </div>
                </div>

                <div className="sidebar-content">
                    {
                        item.nodes.map((child, index) => <SidebarInnerItems key={index} item={child} />)
                    }
                </div>

            </div>
        )
    }
    else {
        return (
            <div className={open && item.nodes !== null ? "menu-item open" : "menu-item"}>
                <div className={open && test && key2 !== '' && "inside-menu "}>
                    <span href={item.path || "#"} className="menu-item plain">
                    <Form.Check.Input type='checkbox' isValid readOnly />
                        {item.label}
                    </span>
                </div>
            </div>
        )
    }
}