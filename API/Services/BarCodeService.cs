

using API.Models.DTOs.Requests.BarCode;
using API.Models.DTOs.Responses.ImgRecognition;
using API.Models.Entities;
using API.Repositories;

namespace API.Services
{
    public class BarCodeService(BarCodeRepository barCodeRepository)
    {
        private readonly BarCodeRepository _barCodeRepository = barCodeRepository;

        public async Task<ItemOCRResponseDto?> SearchItemByBarCode(BarCodeRequestDto barCode)
        {
            return await _barCodeRepository.SearchItemByBarCode(barCode);
        }
    }
}