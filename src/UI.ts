interface UI {

    // Método para mostrar a mensagem de erro
    mostrarErro(mensagem: string, porta: any): void;

    // Método para mostrar a mensagem de status
    mostrarStatus(mensagem: string, porta: any): void;

    // Método para mostrar a mensagem de nova conexão
    mostrarNovaConexao(mensagem: string, porta: any): void;

}