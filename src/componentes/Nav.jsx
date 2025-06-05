import { FaRegUser } from "react-icons/fa";
import { MdFavoriteBorder } from "react-icons/md";
import { IoCartOutline, IoClose } from "react-icons/io5";
import { useState } from "react";
import { Link } from "react-router-dom";
import Cart from "./Cart";

export default function Nav({cartItems, vacio, vaciarItems, eliminarItem, agregarItem}){

    const [isCartOpen, setCartOpen] = useState(false);

    const Menu = [
                    {id: 1, name: "Inicio", link: "/"},
                    {id: 2, name: "Galeria", link: "/productos"},
                    {id: 3, name: "Nosotros", link: "/nosotros"},
                    {id: 4, name: "Contacto", link: "/contacto"}
                ];
    return (
        <div>
            <div class="w-full h-[86px] bg-white lg:block md:px-20 px-5">
                <div class="container-x mx-auto h-full">
                    <div class="relative h-full">
                        <div class="flex justify-between items-center h-full"> 
                            <div class="text-3xl font-bold"><span>AvComputing</span></div>
                            <div class="md:flex w-[517px] h-[44px] border border-slate-400 hidden">
                                <div class="w-full h-full flex items-center bg-white">
                                    <form action="#" class="h-full w-full">
                                        <input type="text" class="search-input h-full w-full px-4 focus:outline-none" placeholder="Buscar producto..."/>
                                    </form>
                                </div>
                                <div class="border-2 border-black px-3 flex items-center bg-slate-900 text-white">
                                    <button>Buscar</button>
                                </div>
                            </div>
                            <div class="flex space-x-3 items-center">
                                <div class="md:flex text-3xl hidden">
                                    <span><MdFavoriteBorder /></span>
                                </div>
                                <div class="flex text-3xl">
                                    <button class="relative cursor-pointer" type="button" onClick={() => setCartOpen(!isCartOpen)}>
                                        <span><IoCartOutline /></span>
                                        <span class="w-[18px] h-[18px] rounded-full absolute -top-2 -right-2 flex justify-center items-center text-[9px] bg-blue-700 text-white">0</span>
                                    </button>
                                    <Cart cartItems={cartItems} vacio={vacio} vaciarItems={vaciarItems} eliminarItem={eliminarItem} agregarItem={agregarItem} isOpen={isCartOpen} onClose={()=>setCartOpen(false)} />
                                </div>
                                <div class="flex text-2xl">
                                    <span><FaRegUser /></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="bg-slate-900 w-full h-[60px] relative md:block text-white px-20">
                <div class="w-full h-full relative">
                    <div class="w-full h-full flex justify-between items-center">
                        <div class="flex xl:space-x-7 space-x-3 items-center">
                            <div class="nav">
                                <ul class="flex">
                                    {
                                        Menu.map((menu)=>(
                                            <li key={menu.id} class="hover:bg-white hover:text-black"><Link to={menu.link}><div class="px-4 py-[18px] cursor-pointer">{menu.name}</div></Link></li>       
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>           
    );
}