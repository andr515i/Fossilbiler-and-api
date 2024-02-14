using Fossilbiler_API.@interface;

namespace Fossilbiler_API.models
{
  public class CarData : ICarData
  {
    public int rank { get; set; }

    public string model { get; set; }

    public int quantity { get; set; }

    public int changeQuantityPercent { get; set; }


    public override string? ToString()
    {
      return $"rank: {rank}, model: {model}, quantity: {quantity}, cqp: {changeQuantityPercent}";
    }
  }
}
