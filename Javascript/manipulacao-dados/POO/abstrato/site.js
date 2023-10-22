class Site {
    constructor(titulo, autor) {
      this.titulo = titulo;
      this.autor = autor;
      this.conteudo = "";
    }
  
    publicar(conteudo) {
      this.conteudo = conteudo;
      console.log(`Artigo "${this.titulo}" publicado por ${this.autor}`);
    }
  
    editar(novoConteudo) {
      this.conteudo = novoConteudo;
      console.log(`Artigo "${this.titulo}" editado por ${this.autor}`);
    }
  
    excluir() {
      this.conteudo = "";
      console.log(`Artigo "${this.titulo}" excluído por ${this.autor}`);
    }
  }
  
  const meuBlog = new Site("Introdução à Programação", "Alice");
  meuBlog.publicar("Este é um artigo introdutório sobre programação.");
  meuBlog.editar("Este é um artigo revisado sobre programação.");
  meuBlog.excluir();
  