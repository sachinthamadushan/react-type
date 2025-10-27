import { NavLink } from "react-router-dom";
export const Sidebar = () => {

    const navLinkClasses = ({isActive}:{isActive:boolean}) =>{
       return `flex items-center py-2 px-4 rounded hover:bg-gray-700
       transition-colors mb-2
        ${isActive ? "bg-blue-700 font-bold" : ""}`;
    };

    return(
        <div className="bg-gray-800 h-screen w-64 text-white
        flex flex-col">
            <h1 className="text-4xl font-bold mb-8 p-4">My POS</h1>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/" className={navLinkClasses}>
                        Dashboard</NavLink>
                    </li>
                    <li>
                        <NavLink to="/product" 
                        className={navLinkClasses}>
                        Product</NavLink>
                    </li>
                    <li>
                        <NavLink to="/sales" 
                        className={navLinkClasses}>
                        Sales</NavLink>
                    </li>
                    <li>
                        <NavLink to="/settings" 
                        className={navLinkClasses}>
                        Settings</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
}