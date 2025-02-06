using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace _2025_01_30
{

    internal class CultMembers
    {
        private string _name;
        private string _religion;
        private string _title;
        private int _age;
        private int _followers;
        private int _publications;
        private double _influence;
        private double _popularity;
        private DateOnly _birth;
        private DateOnly _serve;

        public CultMembers(string name, string religion, string title, int age, int followers, int publications, double influence, double popularity, DateOnly birth, DateOnly serve)
        {
            _name = name;
            _religion = religion;
            _title = title;
            _age = age;
            _publications = publications;
            _influence = influence;
            _popularity = popularity;
            _birth = birth;
            _serve = serve;
            _followers = followers;

        }
        //- SzolgálatiEvek  Visszaad egy egész számot, hogy mostani évben hány éves szolgálatnál tart.
        //–	BefolyasKategoria  Visszaad egy szöveget a befolyás alapján. Ha a befolyás nagyobb, vagy egyenlő, mint 8,0, akkor „Nagyon befolyásos”, ha nagyobb, vagy egyenlő, mint 5,0, akkor „Befolyásos”, minden más esetben pedig „Kevésbé befolyásos”.
        //–	KovetokEletkorhozViszonyitva  Visszaad egy valós számot, ami 0 akkor, ha a vezető követőinek a száma 0. Ha nem 0, akkor visszaadja, hogy mennyi az átlagos követőszám az életkorára vetítve, azaz évenként hány követőt szerzett átlagosan.
        //Mindegyik metódushoz készíts dokumentációs kommentet a feladatáról.

        public int ServeTime()
        {
            return DateTime.Now.Year - _serve.Year;
        }

        public string InfluenceScore()
        {
            if (_influence >= 8.0) return new string("Nagyon befolyásos");
            if (_influence >= 5.0) return new string("Befolyásos");
            return new string("Kevésbé befolyásos");
        }

        public int FollowersBasedOnAge()
        {
            if (_followers == 0) return 0;

            return _followers / _age;
        }

        public string Name { get => _name; set => _name = value; }
        public string Religion { get => _religion; set => _religion = value; }
        public string Title { get => _title; set => _title = value; }
        public int Age { get => _age; set => _age = value; }
        public int Publications { get => _publications; set => _publications = value; }
        public double Influence { get => _influence; set => _influence = value; }
        public double Popularity { get => _popularity; set => _popularity = value; }
        public DateOnly Birth { get => _birth; set => _birth = value; }
        public DateOnly Serve { get => _serve; set => _serve = value; }
        public int Followers { get => _followers; set => _followers = value; }
    }
}
