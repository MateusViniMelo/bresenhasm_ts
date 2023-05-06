var __defProp = Object.defineProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
__export(exports, {
  default: () => Desenho_default
});
class Desenho {
  static desenharLinha(x0, y0, x1, y1, grid) {
    let dx = Math.abs(x1 - x0);
    let dy = Math.abs(y1 - y0);
    let sx = x0 < x1 ? 1 : -1;
    let sy = y0 < y1 ? 1 : -1;
    let err = dx - dy;
    while (x0 !== x1 || y0 !== y1) {
      grid.matriz[x0][y0] = 1;
      let e2 = err * 2;
      if (e2 > -dy) {
        err -= dy;
        x0 += sx;
      }
      if (e2 < dx) {
        err += dx;
        y0 += sy;
      }
    }
    grid.matriz[x0][y0] = 1;
  }
  static desenharCirculo(xc, yc, r, grid) {
    let x = 0;
    let y = r;
    let d = 3 - 2 * r;
    while (x <= y) {
      grid.matriz[xc + x][yc + y] = 1;
      grid.matriz[xc + x][yc - y] = 1;
      grid.matriz[xc - x][yc + y] = 1;
      grid.matriz[xc - x][yc - y] = 1;
      grid.matriz[xc + y][yc + x] = 1;
      grid.matriz[xc + y][yc - x] = 1;
      grid.matriz[xc - y][yc + x] = 1;
      grid.matriz[xc - y][yc - x] = 1;
      if (d < 0) {
        d += 4 * x + 6;
      } else {
        d += 4 * (x - y) + 10;
        y--;
      }
      x++;
    }
  }
}
var Desenho_default = Desenho;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
//# sourceMappingURL=Desenho.js.map
