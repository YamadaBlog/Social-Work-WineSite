export default function Header(){
  return (
    <>
      <div className="navbar bg-gray-600 opacity-50 text-neutral-content sticky z-20 rounded-full "><font></font>
        <a href="home" className="logo hidden md:block">
          <img className="p-8 rounded-t-lg" src="/logo.png" alt="logo" height="150" width="150" />
        </a>

        <button className="btn btn-ghost text-xl md:text-3xl">Oenophile.App</button>
        <div className="flex-1"><font></font>
        <div className="ml-auto">
          <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-default" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
          </button>
        </div>
        
        <div className="hidden w-full md:block md:w-auto ml-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:bg-transparent">
            <li><a href="shoponline" className="block py-2 px-3 text-white rounded md:p-0 ">Shop</a></li>
            <li><a href="trustus" className="block py-2 px-3 text-white rounded md:p-0 ">Why trust us</a></li>
            <li><a href="faq" className="block py-2 px-3 text-white rounded md:p-0 ">FAQ</a></li>
          </ul>
        </div>
        </div>

      <div className="flex-none"><font></font>
        <div className="dropdown dropdown-end"><font></font>
          <div tabIndex="0" role="button" className="btn btn-ghost btn-circle"><font></font>
            <div className="indicator"><font></font>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg><font></font>
              <span className="badge badge-sm indicator-item">8</span><font></font>
            </div><font></font>
          </div><font></font>
          <div tabIndex="0" className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"><font></font>
            <div className="card-body"><font></font>
              <span className="font-bold text-lg">8 Items</span><font></font>
              <span className="text-info">Subtotal: $999</span><font></font>
              <div className="card-actions"><font></font>
                <button className="btn btn-primary btn-block">View cart</button><font></font>
              </div><font></font>
            </div><font></font>
          </div><font></font>
        </div><font></font>
        <div className="dropdown dropdown-end flex justify-center"><font></font>
          <div tabIndex="0" role="button" className="btn btn-ghost btn-circle avatar"><font></font>
            <div className="w-10 rounded-full"><font></font>
              <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" /><font></font>
            </div><font></font>
          </div><font></font>       
          <ul tabIndex="0" className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"><font></font>
            <li><font></font>
              <a className="justify-between"><font></font>
                Profile<font></font>
                <span className="badge">New</span><font></font>
              </a><font></font>
            </li><font></font>
            <li><a>Settings</a></li><font></font>
            <li><a>Logout</a></li><font></font>
          </ul><font></font>
        </div><font></font>
      </div><font></font>
      </div>
    </>
  )
}

