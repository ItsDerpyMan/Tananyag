using System.Text;

namespace Exercises
{
    internal class Program
    {
        static void Main(string[] args)
        {
            var str = new StringBuilder();
            str.AppendLine();
            str.Append('#', 80);
            str.AppendLine();
            Console.WriteLine("Hello, World!");

            var array = new array(20, 1, 50);
            Console.WriteLine(String.Join(", ", array.arr));
            Console.WriteLine(str.ToString()); ;
            Console.WriteLine($"Statistics\n" +
                $" A Sum: {array.Sum()}\n" +
                $" Avg: {array.Avg()}\n" +
                $" Minimum: {array.Min()}\n" +
                $" Maximum: {array.Max()}");

            Console.WriteLine(str.ToString()); ;
            var list = new list(20, 1, 50);
            Console.WriteLine(String.Join(", ", list.lst));
            
            Console.WriteLine(str.ToString()); ;
            HowManyTimesItContains(array.arr);
            ContainsIt(list.lst, out List<int> lst);
            Console.WriteLine(String.Join(", ", lst));

        }

        static void HowManyTimesItContains(int[] array)
        {
            int c = 0;
            for (int i = 0; i < array.Length; i++)
            {
                if (IsEven(array[i])) {
                    c++;
                }
            }
            Console.WriteLine($"A tömben {c}-szer fordul elő páros szám.");
        }
        static void ContainsIt(List<int> lst, out List<int> newlst)
        {
            List<int> modifiedlst = new List<int>();
            for (int i = 0; i < lst.Count(); i++)
            {
                if (IsOdd(lst[i]))
                {
                    modifiedlst.Add(lst[i]);
                }
            }
            newlst = modifiedlst;
        }

        static bool IsOdd(int n)
        {
            if (n % 2 != 0) { return true; }
            return false;
        }

        static bool IsEven(int n)
        {
            if (n % 2 != 0) { return false; }
            return true;
        }

        class array
        {
            public static int[] arr { get; set; }
            public static int size { get; private set; }

            public array(int s, int min, int max) 
            {
                size = s;
                arr = new int[s];
                
                Random rand = new Random();

                for (int i = 0; i < s; i++)
                {
                    try {
                        arr[i] = rand.Next(min, max);
                    }
                    catch { throw new IndexOutOfRangeException(); }
                    
                }
            }
            public static int Sum()
            {
                int sum = 0;
                for (int i = 0; i < size; i++)
                {
                    sum += arr[i];
                }
                return sum;
            }
            public static int Min()
            {
                int min = 999999999;
                int index = 0;
                for (int i = 0; i < size; i++)
                {
                    if (arr[i] < min)
                    {
                        min = arr[i];
                        index = i;
                    }
                }
                return index;
            }
            public static int Max()
            {
                int max = 0;
                int index = 0;
                for (int i = 0; i < size; i++)
                {
                    if (arr[i] > max)
                    {
                        max = arr[i];
                        index = i;
                    }
                }
                return index;
            }
            public static int Avg()
            {
                return Sum() / size;
            }
        }
        class list
        {

            public List<int> lst;

            public list(int size, int min, int max)
            {
                    lst = new List<int>();

                    Random rand = new Random();

                    for (int i = 0; i < size; i++)
                    {
                        try
                        {
                            lst.Add(rand.Next(min, max));
                        }
                        catch { throw new IndexOutOfRangeException(); }
                }
            }

        }
    }
}
