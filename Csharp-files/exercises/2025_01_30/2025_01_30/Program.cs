namespace _2025_01_30
{
    internal class Program
    {
        static void Main(string[] args)
        {
            var f = File.ReadAllLines("vallasi_vezetok.csv").Skip(1).ToArray();
            List<CultMembers> cultMembers = new List<CultMembers>();

            foreach (string line in f)
            {

                var l = line.Split(';').ToArray();
                var birth = l[8].Split("-").Select(x => int.Parse(x)).ToArray();
                var servedate= l[9].Split("-").Select(x => int.Parse(x)).ToArray();

                CultMembers cm = new CultMembers(
                    l[0],
                    l[1],
                    l[2],
                    int.Parse(l[3]),
                    int.Parse(l[4]),
                    int.Parse(l[5]),
                    double.Parse(l[6]),
                    double.Parse(l[7]),
                    new DateOnly(birth[0], birth[1], birth[2]),
                    new DateOnly(servedate[0], servedate[1], servedate[2]));
                cultMembers.Add(cm);
            }
            Console.WriteLine(cultMembers.Count);

            Console.WriteLine(cultMembers.Count(x => x.InfluenceScore() == "Nagyon befolyásos"));
            var longestserve = cultMembers.MaxBy(x => x.ServeTime());
            Console.WriteLine(longestserve.Name + " " + longestserve.ServeTime());
            var villager = cultMembers.MaxBy(x => x.FollowersBasedOnAge());
            Console.WriteLine(villager.Name + "   " + villager.Religion + "   " + villager.Followers / villager.Age);
            
        }
    }
}
