using System.Diagnostics.Metrics;

namespace Dolgozoat
{
    internal class Program
    {
        static void Main(string[] args)
        {
            //    // 1fel
            //    int[] tegla = { 0, 0, 0 };
            //    int counter = 0;
            //    bool loop = true;

            //    Console.WriteLine("Add meg a hosszúságát, szélleségét és legutóljára a magasságát a téglatestnek.");
            //    while (loop == true)
            //    {
            //        bool success = int.TryParse(Console.ReadLine(), out tegla[counter]);
            //        if (success == true) { counter++; }
            //        if (counter > 2) { loop = false; }


            //    }
            //    //Console.WriteLine($"{tegla[0]},{tegla[1]},{tegla[2]}");
            //    Console.WriteLine($"A téglatest felülete: {tegla[0] * tegla[1]} \n" +
            //        $"A téglatest térfogata: {tegla[0] * tegla[1] * tegla[2]}");

            // 2fel
            Random rand = new Random();

            int[] ints = { 0, 0, 0 };
            int counter2 = 0;
            bool loop2 = true;

            Console.WriteLine("Addjon meg három számot: ");
            while (loop2 == true)
            {
                bool success2 = int.TryParse(Console.ReadLine(), out ints[counter2]);
                if (success2 == true) { counter2++; }
                if (counter2 > 2) { loop2 = false; }
            }
            int[] randnums = { 0 };
            for (int i = 0; i < ints[2]; i++)
            {
                randnums.Append(rand.Next(ints[0], ints[1]));
            }
            for (int i = 0; i < randnums.Length; i++) { Console.WriteLine($"{randnums[i]}"); }
            
            

        }
    }
}
