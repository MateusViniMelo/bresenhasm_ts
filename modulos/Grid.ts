class Grid {

  tamanho
  matriz: any
  constructor(tamanho: any) {
    this.tamanho = tamanho
    this.matriz = []
    this.criarMatriz()
    
  }

  private criarMatriz() {
    for (let i = 0; i < this.tamanho; i++) {
      this.matriz.push(new Array(this.tamanho).fill(0));
    }
  }
  mostrarMatriz() {
    this.matriz = this.matriz.reverse()
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

export default Grid