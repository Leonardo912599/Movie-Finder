import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuItems, MenuItem, MenuButton } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import { Link, useNavigate, useLocation } from "react-router-dom";

export default function Navbar() {
    const [isSearchVisible, setIsSearchVisible] = useState(false);
    const [busqueda, setBusqueda] = useState("");
    const navigate = useNavigate();
    const location = useLocation();

    const navigation = [
        { name: "Inicio", href: "/" },
        { name: "Mas Popular", href: "/mas-popular/page/1" },
        {
            name: "Géneros",
            isDropdown: true,
            items: [
                { name: "Acción", href: "/genero/accion/page/1" },
                { name: "Comedia", href: "/genero/comedia/page/1" },
                { name: "Aventura", href: "/genero/aventura/page/1" },
                { name: "Terror", href: "/genero/terror/page/1" },
                { name: "Animación", href: "/genero/animacion/page/1" },
                { name: "Crimen", href: "/genero/crimen/page/1" },
            ],
        },
        { name: "Series", href: "/series/page/1" },
    ];

    const handleChangeBuscar = (e) => setBusqueda(e.target.value);

    const toggleSearch = () => {
        setIsSearchVisible(!isSearchVisible);
        if (busqueda.trim()) navigate(`/buscar-pelicula/${busqueda}/page/1`);
    };

    const classNames = (...classes) => classes.filter(Boolean).join(" ");

    return (
        <Disclosure as="nav" className="bg-black">
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                        <div className="relative flex h-16 items-center justify-between">

                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                <DisclosureButton className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="sr-only">Abrir menú principal</span>
                                    {open ? (
                                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </DisclosureButton>
                            </div>

                            <div className="flex flex-1 items-center justify-center sm:justify-between sm:items-stretch sm:justify-start">
                                <div className="flex shrink-0 items-center">
                                    <Link to="/">
                                        <h2 className="text-white text-2xl">MOVIE FINDER</h2>
                                    </Link>
                                </div>
                                <div className="hidden sm:ml-6 sm:block">
                                    <div className="flex space-x-4">
                                        {navigation.map((item) =>
                                            item.isDropdown ? (
                                                <Menu as="div" className="relative" key={item.name}>
                                                    <MenuButton
                                                        className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                                                    >
                                                        {item.name}
                                                    </MenuButton>
                                                    <MenuItems className="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-gray-800 text-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                        {item.items.map((subItem) => (
                                                            <MenuItem key={subItem.name}>
                                                                {({ active }) => (
                                                                    <Link
                                                                        to={subItem.href}
                                                                        className={classNames(
                                                                            location.pathname === subItem.href ? 'bg-gray-900' : active ? 'bg-gray-700' : '',
                                                                            'block px-4 py-2 text-sm text-gray-300'
                                                                        )}
                                                                    >
                                                                        {subItem.name}
                                                                    </Link>
                                                                )}
                                                            </MenuItem>
                                                        ))}
                                                    </MenuItems>
                                                </Menu>
                                            ) : (
                                                <Link
                                                    key={item.name}
                                                    to={item.href}
                                                    className={classNames(
                                                        location.pathname === item.href
                                                            ? 'bg-gray-900 text-white'
                                                            : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                                        'rounded-md px-3 py-2 text-sm font-medium'
                                                    )}
                                                >
                                                    {item.name}
                                                </Link>
                                            )
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div className="relative flex items-center">
                                <button
                                    onClick={toggleSearch}
                                    className="p-2 rounded-full text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-white"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 10-14 0 7 7 0 0014 0z" />
                                    </svg>
                                </button>
                                <div className="hidden sm:block ml-4">
                                    <input onChange={handleChangeBuscar} value={busqueda} type="text" placeholder="Buscar..."
                                        className="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                            </div>
                        </div>

                        {isSearchVisible && (
                            <div className="sm:hidden mb-6 p-4">
                                <input
                                    onChange={handleChangeBuscar}
                                    value={busqueda}
                                    type="text"
                                    placeholder="Buscar..."
                                    className="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                        )}

                    </div>

                    <DisclosurePanel className="sm:hidden">
                        <div className="space-y-1 px-2 pt-2 pb-3">
                            {navigation.map((item) =>
                                item.isDropdown ? (
                                    <div key={item.name}>
                                        <span className="text-gray-300 block px-3 py-2 text-base font-medium">
                                            {item.name}
                                        </span>
                                        {item.items.map((subItem) => (
                                            <a
                                                key={subItem.name}
                                                href={subItem.href}
                                                className="ml-4 block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                                            >
                                                {subItem.name}
                                            </a>
                                        ))}
                                    </div>
                                ) : (
                                    <DisclosureButton
                                        key={item.name}
                                        as="a"
                                        href={item.href}
                                        className={classNames(
                                            location.pathname === item.href ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                            'block rounded-md px-3 py-2 text-base font-medium'
                                        )}
                                    >
                                        {item.name}
                                    </DisclosureButton>
                                )
                            )}
                        </div>
                    </DisclosurePanel>
                </>
            )}
        </Disclosure>
    );
}