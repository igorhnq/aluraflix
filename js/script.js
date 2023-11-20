document.getElementById('addMovie').onclick = function() {
    let movie = document.getElementById('filme').value;
    let showMovie = document.getElementById('listaFilmes');

    showMovie.innerHTML = showMovie.innerHTML + '<img src=' + movie + '>';
    document.getElementById('filme').value = '';
}
