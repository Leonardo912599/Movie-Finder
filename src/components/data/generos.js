
export const generos = {
    accion: {
        nombre: "Acción",
        url: (paginaActual) => `https://api.themoviedb.org/3/discover/movie?&with_genres=28&page=${paginaActual}`,
    },
    comedia: {
        nombre: "Comedia",
        url: (paginaActual) => `https://api.themoviedb.org/3/discover/movie?&with_genres=35&page=${paginaActual}`,
    },
    terror: {
        nombre: "Terror",
        url: (paginaActual) => `https://api.themoviedb.org/3/discover/movie?&with_genres=27&page=${paginaActual}`,
    },
    aventura: {
        nombre: "Aventura",
        url: (paginaActual) => `https://api.themoviedb.org/3/discover/movie?&with_genres=12&page=${paginaActual}`,
    },
    animacion: {
        nombre: "Animación",
        url: (paginaActual) => `https://api.themoviedb.org/3/discover/movie?&with_genres=16&page=${paginaActual}`,
    },
    crimen: {
        nombre: "Crimen",
        url: (paginaActual) => `https://api.themoviedb.org/3/discover/movie?&with_genres=80&page=${paginaActual}`,
    },
};

export const categoria = {
    en_cines: {
        nombre: "Peliculas en Cines",
        url: (paginaActual) => `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${paginaActual}`,
    },
    mejores_calificadas: {
        nombre: "Mejores Calificadas",
        url: (paginaActual) => `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=${paginaActual}`,
    },
    proximas_peliculas: {
        nombre: "Proximas Peliculas",
        url: (paginaActual) => `https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=${paginaActual}`,
    },
};

