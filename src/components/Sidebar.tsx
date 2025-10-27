import { NavLink } from "react-router-dom";
import { FaCashRegister, FaBoxOpen, FaChartBar, FaWarehouse } from "react-icons/fa";
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
                        <FaCashRegister className="mr-2"/>
                        Dashboard</NavLink>
                    </li>
                    <li>
                        <NavLink to="/product" 
                        className={navLinkClasses}>
                        <FaBoxOpen className="mr-2"/>
                        Product</NavLink>
                    </li>
                    <li>
                        <NavLink to="/sales" 
                        className={navLinkClasses}>
                        <FaChartBar className="mr-2"/>
                        Sales</NavLink>
                    </li>
                    <li>
                        <NavLink to="/settings" 
                        className={navLinkClasses}>
                        <FaWarehouse className="mr-2"/>
                        Settings</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
}