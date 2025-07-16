import { Link } from "react-router"


export default function Navbar() {

    const links = [
        {
            name: "Home",
            path: '/'
        },
        {
            name: "All Books",
            path: '/'
        },
        {
            name: "Add Book",
            path: '/'
        },
        {
            name: "Borrow Summary",
            path: '/'
        },
    ]


    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">Library</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    {links.map((link,idx)=><li key={idx}>
                        <Link to={link.path}>{link.name}</Link>
                    </li>)}
                    
                </ul>
            </div>
        </div>
    )
}
