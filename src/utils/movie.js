
export function getListMovies(size, movie){
    let popularMovies = [];

    for(let i = 0, l = size; i < l; i++){
        popularMovies.push(movie[i])
    }

    return popularMovies;
}