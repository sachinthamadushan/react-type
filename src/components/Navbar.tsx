export const NavBar = () => {
  return (
    <nav className="bg-blue-500 p-4 text-white">
      <div className="flex">
        <h1 className="text-2xl font-bold">Cake Shop</h1>
        <ul className="flex flex-col md:flex-row ml-auto">
            <li className="ml-6 hover:underline cursor-pointer text-xl">
                <a href="/">Home</a>
            </li>
            <li className="ml-6 hover:underline cursor-pointer text-xl">
                <a href="/dashboard">Dashboard</a>
            </li>
            <li className="ml-6 hover:underline cursor-pointer text-xl">
                <a href="/setting">Settings</a>
            </li>
        </ul>
      </div>
    </nav>
  );
};

