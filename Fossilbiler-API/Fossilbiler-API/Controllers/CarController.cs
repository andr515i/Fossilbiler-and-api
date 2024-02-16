using Fossilbiler_API.models;
using Microsoft.AspNetCore.Mvc;
using System.Text.Json;

namespace Fossilbiler_API.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class CarController : Controller
  {

    private readonly string filePath = "data.json";


    [HttpGet("GetCars")]
    public IEnumerable<CarData> GetCars()
    {
      try
      {
        string json = System.IO.File.ReadAllText(filePath);  // get json data
        return JsonSerializer.Deserialize<List<CarData>>(json)!;    // return json data as a list of CarData

      }
      catch (Exception)
      {
        throw;
      }
    }

    [HttpPost("PostCars")]
    public IActionResult PostCars([FromBody] CarData carData)
    {

      try
      {
        if (!ModelState.IsValid)
        {
          return BadRequest(ModelState);
        }

        // read existing data

        string json = System.IO.File.ReadAllText(filePath);
        List<CarData> cars = JsonSerializer.Deserialize<List<CarData>>(json);

        cars.Add(carData);
        System.IO.File.WriteAllText(filePath, JsonSerializer.Serialize(cars));
        return Ok();
      }
      catch (Exception)
      {
        return BadRequest();

        throw;
      }
    }

    [HttpDelete("DeleteCar")]
    public IActionResult DeleteCar(DeleteCarDTO request)
    {
      try
      {
        string json = System.IO.File.ReadAllText(filePath);
        List<CarData> cars = JsonSerializer.Deserialize<List<CarData>>(json);


        Console.WriteLine(request.Index);
        cars.RemoveAt(request.Index);

        System.IO.File.WriteAllText(filePath, JsonSerializer.Serialize(cars));

        return Ok();
      }
      catch (Exception)
      {
        Console.WriteLine("something went wrong");
        return BadRequest();
      }
    }

    [HttpGet("GetCar/{index}")]
    public CarData GetCar(int index)
    {

      try
      {

        string json = System.IO.File.ReadAllText(filePath);
        List<CarData> cars = JsonSerializer.Deserialize<List<CarData>>(json);

        return cars.ElementAt(index);


      }

      catch (IndexOutOfRangeException)
      {
        Console.WriteLine("element doesnt exist.");
        throw;
      }
      catch (Exception)
      {

        throw;
      }

    }



    [HttpPut("EditCar/{index}")]
    public IActionResult EditCar(int index, CarData newCar)
    {
      try
      {

        string json = System.IO.File.ReadAllText(filePath);
        List<CarData> cars = JsonSerializer.Deserialize<List<CarData>>(json);

        if (cars.Count != 0)
        {
          cars[index] = newCar;
          System.IO.File.WriteAllText(filePath, JsonSerializer.Serialize(cars));
          return Ok();
        }
        return BadRequest();


      }
      catch (Exception)
      {

        throw;
      }
    }



  }
}
