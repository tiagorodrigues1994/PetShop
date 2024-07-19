import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
export function Header(){
    return(
        <header className="w-full bg-blue-200/60">
            <nav className="flex w-full max-w-7xl mx-auto h-14 justify-between items-center px-5 ">
                <Link className="font-bold text-2xl" to='/'>
                PetShop
                </Link>
                <Link className="relative" to='/cart'>
                <FiShoppingCart size={24} color='#121212' />
                <span className="absolute -right-3 -top-3 ppx-2.5 bg-sky-500 rounded-full w-6 h-6 flex items-center justify-center text-white text-xs">2</span>
                </Link>
            </nav>
        </header>
    )
}