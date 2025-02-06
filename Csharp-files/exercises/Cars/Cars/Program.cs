using static Cars.Car;

namespace Cars
{
    internal class Program
    {
        static void Main(string[] args)
        {
            try
            {
                string[] lines = File.ReadAllLines("autok.csv");
                Car[] cars = new Car[lines.Length - 1];

                for (int i = 0; i < lines.Length; i++)
                {
                    string[] splitted_line = lines[i].Split(",");
                    var raw_line_9 = splitted_line[9].Trim().Split("-").ToArray();
                    var line9 = new DateOnly(int.Parse(raw_line_9[0]), int.Parse(raw_line_9[1]), int.Parse(raw_line_9[2]));
                    var raw_line_10 = splitted_line[10].Trim().Split("-").ToArray();
                    var line10 = new DateOnly(int.Parse(raw_line_10[0]), int.Parse(raw_line_10[1]), int.Parse(raw_line_10[2]));

                    Car car = new Car(
                        splitted_line[0],
                        splitted_line[1],
                        splitted_line[3],
                        int.Parse(splitted_line[4]),
                        int.Parse(splitted_line[5]),
                        (FuelType)int.Parse(splitted_line[6]),
                        double.Parse(splitted_line[7]),
                        double.Parse(splitted_line[8]),
                        line9,
                        line10);
                }
                var carccs = cars.Select(x => x.Enginecc);
                foreach (var c in carccs)
                {
                    Console.WriteLine(c.ToString() + " cm^3");
                }
                var kia_cars = cars.Where(x => x.Brand == "Kia").Select(x => x.Color);
                foreach (var c in kia_cars)
                {
                    Console.WriteLine(c.ToString());
                }
            }
            catch (Exception e)
            {
                Console.WriteLine("The File could not be read:");
                Console.WriteLine(e.Message);

                Console.ReadLine();
            }
        }
    }
}
