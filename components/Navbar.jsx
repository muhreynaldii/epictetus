import {useState} from 'react';

function Navbar(){
  const [dropdown,setDropdown] = useState(false);
  const dropdownList = [
    {text: 'Internet', href:'#'},
    {text: 'Books', href:'#'},
    {text: 'Open Source', href:'#'},
  ]
    return (
        <nav className="py-10">
          <div className="mx-auto container">
            <div className="flex items-center">
              <div className="w-2/12 flex items-center">
                <div className="w-10 bg-gray-500 rounded flex items-center justify-center mr-4 shadow-2xl">E</div>
                epictetus
              </div>
              <div className="w-8/12">
                <ul className="space-x-10 flex items-center">
                  <li><a href="" className="hover:underline">Ui Design</a></li>
                  <li><a href="" className="hover:underline">Front-End</a></li>
                  <li><a href="" className="hover:underline">Back-End</a></li>
                  <li className="relative">
                    <a
                    className="hover:underline cursor-pointer flex items-center"
                    onClick={()=>setDropdown(!dropdown)}
                    >Lainnya
                    <svg className="ml-2" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 6L8 10L12 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    </a>
                    {dropdown && (
                    <ul className="absolute w-[200px] bg-gray-800 rounded mt-4">
                      {dropdownList.map(({ text,href })=>(
                        <li key={text} className="border-b border-white/5 last:border-0">
                          <a href={href} className=" flex py-3 px-6 hover:bg-gray-700/60">
                            {text}
                          </a>
                        </li>
                      ))}
                    </ul>
                    )}
                  </li>
                </ul>
              </div>
              <div className="w-2/12">
                <input className="bg-gray-700 py-3 px-6 w-full rounded-full bg-search pl-12" placeholder="Search..."/>
              </div>
            </div>
          </div>
        </nav>
    )
}

export default Navbar;