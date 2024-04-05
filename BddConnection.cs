using MySql.Data.MySqlClient;

namespace APITest.BddConnection;

public class BddConnection
{
    public void Main()
    {

        string connectionString = "Server=localhost;Database=StiveTEST;User Id=thoma;Password=pikachu;";

        using (MySqlConnection connection = new MySqlConnection(connectionString)) 
        {
            try
            {
                connection.Open();
                Console.WriteLine("Connexion établie");
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Erreur de connexion : {ex.Message}");
            }
        }
    }
}
