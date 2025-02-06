using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Cars
{

    internal class Car
    {// Márka;Modell;Szín;Gyártási év;Ajtók száma;Üzemanyag típusa;Motor méret;Fogyasztás;Első forgalomba helyezés;Utoljára szervizelt

        private string _brand;
        private string _model;
        private string _color;
        private int _manufacture_date;
        private int _number_of_doors;
        private FuelType _fuel_type;
        private double _enginecc;
        private double _consumption;
        private DateOnly _firstserve;
        private DateOnly _lastserve;

        public enum FuelType {
            Benzin = 1,
            Diesel = 2,
            Electric = 3
        }
        public Car(string brand, string model, string color, int manufacture_date, int number_of_doors, FuelType fuel_type, double enginecc, double consumption, DateOnly firstserve, DateOnly lastserve) {
            _brand = brand;
            _model = model;
            _color = color;
            _manufacture_date = manufacture_date;
            _number_of_doors = number_of_doors;
            _fuel_type = fuel_type;
            _enginecc = enginecc;
            _consumption = consumption;
            _firstserve = firstserve;
            _lastserve = lastserve;
        }
        public int YearSinceFirstServe()
        {
            return DateTime.Now.Year - _firstserve.Year;
        }

        public int DaysSinceLastServic() {
            DateOnly today = DateOnly.FromDateTime(DateTime.Now);
            return today.DayNumber - _lastserve.DayNumber;
        }

        public void RepaintCar(string color)
        {
            _color = color;
        }

        public void Servicenow()
        {
            _lastserve = DateOnly.FromDateTime(DateTime.Now); 
        }

        public string Brand { get => _brand; set => _brand = value; }
        public string Model { get => _model; set => _model = value; }
        public string Color { get => _color; set => _color = value; }
        public int Manufacture_date { get => _manufacture_date; set => _manufacture_date = value; }
        public int Number_of_doors { get => _number_of_doors; set => _number_of_doors = value; }
        public FuelType Fuel_type { get => _fuel_type; set => _fuel_type = value; }
        public double Enginecc { get => _enginecc; set => _enginecc = value; }
        public double Consumption { get => _consumption; set => _consumption = value; }
        public DateOnly Firstserve { get => _firstserve; set => _firstserve = value; }
        public DateOnly Lastserve { get => _lastserve; set => _lastserve = value; }
    }
}
