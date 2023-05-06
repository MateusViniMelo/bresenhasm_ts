import Desenho from "./modulos/Desenho";
import Grid from "./modulos/Grid";


let grid = new Grid(10)


// Desenho.desenharLinha(0, 0, 9, 9, grid)
Desenho.desenharCirculo(4, 4, 4, grid)

grid.mostrarMatriz()