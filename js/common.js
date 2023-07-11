const FAVORITOS = [];
function agregarPeliculaFavoritos(codigo)
{
    if (isNaN(codigo))
    {
        console.log("Error: La película seleccionada no se encuentra en la API o se produjo un error");
        return;
    }
    else
    {
        if (FAVORITOS.includes(codigo))
        {
            console.log("La Película ingresada ya se encuentra almacenada");
            return;
        }
        FAVORITOS.push(codigo);
        console.log("Película almacenada con éxito");
    }
}







