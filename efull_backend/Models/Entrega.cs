namespace ApiProva.Models
{
    public class Entrega
    {
        public int Id { get; set; }
        public string EnderecoDestinatario { get; set; }
        public string EnderecoRemetente { get; set; }
        public double Distancia { get; set; } // Adicionando propriedade para armazenar a distância em quilômetros
        public string Status { get; set; }
        public DateTime DataEntrega { get; set; }
    }
}