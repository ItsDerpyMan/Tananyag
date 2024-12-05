namespace OraiFeladat
{
    internal class Program
    {
        static void SayHello(string name)
        {
            Console.WriteLine($"Hello {name}");
        }
        static bool AddTwoNumbers(int num, int num2, out int number)
        {
            number =  num + num2;
            return true;
        }

        static string IsODDorEVEN(int num)
        {
            if (num % 2 == 0) { return "Páros"; }
            return "Páratlan";
        }
        static void Main(string[] args) {
            SayHello("Géza");
            Console.WriteLine($"{AddTwoNumbers(1, 2, out int number)}, {IsODDorEVEN(number)} ");

            int[] nums = { 1, 60, 6, 8, 20, 53 };
            Console.WriteLine(WhichOneIsBigger(nums));
            Console.WriteLine(WhichOneIsSmaller(nums));
        }

        static int WhichOneIsBigger(int[] nums)
        {
            int max = 0;
            for (int i = 0; i < nums.Length; i++) {
                if (nums[i] > max) {  max = nums[i]; }
            }
            return max;
        }
        static int WhichOneIsSmaller(int[] nums)
        {
            int min = 1000000000;
            for (int i = 0; i < nums.Length; i++)
            {
                if (nums[i] < min) { min = nums[i]; }
            }
            return min;
        }
    }
}
