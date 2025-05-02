
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;



namespace API.Models.Entities
{
    public enum BarCodeType
    {
        code_128,
        data_matrix,
        ean_13,
        itf,
        upc_a,
    }
    public class BarCode
    {
        [Required]
        public required BarCodeType Type { get; set; }

        public string? Content { get; set; }

        [ForeignKey("UnitId")]
        public Unit Unit { get; set; }

        [Required]
        public required int UnitId { get; set; }

    }
}