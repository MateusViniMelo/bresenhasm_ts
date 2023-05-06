var __defProp = Object.defineProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
__export(exports, {
  default: () => Grid_default
});
class Grid {
  tamanho;
  matriz;
  constructor(tamanho) {
    this.tamanho = tamanho;
    this.matriz = [];
    this.criarMatriz();
  }
  criarMatriz() {
    for (let i = 0; i < this.tamanho; i++) {
      this.matriz.push(new Array(this.tamanho).fill(0));
    }
  }
  mostrarMatriz() {
    this.matriz = this.matriz.reverse();
    let output = "";
    for (let i = 0; i < this.matriz.length; i++) {
      for (let j = 0; j < this.matriz[i].length; j++) {
        output += this.matriz[i][j] + " ";
      }
      output += "\n";
    }
    console.log(output);
  }
}
var Grid_default = Grid;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
//# sourceMappingURL=Grid.js.map
