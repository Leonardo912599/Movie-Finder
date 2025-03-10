import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

const Paginacion = ({paginas,paginaActual,totalPages,handleClickLeft,handleClickRight,cambiarPagina}) => {
    return (
        <div className="flex flex-row justify-center p-5 w-full">
            <button
                className={`${paginaActual === 1 ? "disable bg-gray-400 cursor-not-allowed" : "bg-blue-500"
                    } w-[70px] h-[50px] rounded-lg`}
                onClick={handleClickLeft}
            >
                <FontAwesomeIcon className="text-white" icon={faChevronLeft} />
            </button>
            {paginas.map((pagina) => (
                <button
                    key={pagina}
                    className={`${paginaActual === pagina ? "bg-blue-500 text-white" : "bg-white text-black"
                        } p-3 border w-[50px] h-[50px]`}
                    onClick={() => cambiarPagina(pagina)}
                >
                    {pagina}
                </button>
            ))}
            <button
                className={`${paginaActual === totalPages ? "disable bg-gray-400" : "bg-blue-500"
                    } w-[70px] h-[50px] rounded-lg`}
                onClick={handleClickRight}
            >
                <FontAwesomeIcon className="text-white" icon={faChevronRight} />
            </button>
        </div>
    )
}

export default Paginacion
