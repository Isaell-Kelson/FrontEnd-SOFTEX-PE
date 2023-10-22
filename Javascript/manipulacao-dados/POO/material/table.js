class Mesa {
    constructor(material, cor, tamanho) {
      this.material = material;
      this.cor = cor;
      this.tamanho = tamanho;
      this.objetosEmCima = [];
    }
  
    colocarObjeto(objeto) {
      this.objetosEmCima.push(objeto);
      console.log(`Colocado ${objeto} na mesa.`);
    }
  
    limparMesa() {
      this.objetosEmCima = [];
      console.log("A mesa foi limpa.");
    }
  
    redimensionar(novoTamanho) {
      this.tamanho = novoTamanho;
      console.log(`A mesa foi redimensionada para ${novoTamanho} cm.`);
    }
  }
  
  const minhaMesa = new Mesa("Madeira", "Marrom", 120);
  minhaMesa.colocarObjeto("Livro");
  minhaMesa.redimensionar(150);
  minhaMesa.limparMesa();
  