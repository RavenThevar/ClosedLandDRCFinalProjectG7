import java.net.http.HttpClient;
import java.util.Scanner;
import javax.swing.JOptionPane;
import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.net.HttpURLConnection;
import java.net.URL;

public class HelloWorld {
    public static void main(String[]args)
    {
        // Print out Exercise
        System.out.println("Hello World!" + "LOL");
        System.out.print("LOL" + "HELLO\n");
        System.out.print("LOL" + "HELLO\n");

        // Variable Exercise
        int x = 123;
        double y = 3.14;
        boolean z = true;
        char symbol = '#';
        String name = "Well Hello";
        System.out.println("Hi " + name);

        // Scanner Exercise
        Scanner hello = new Scanner (System.in);
        
        System.out.println("What is your name ?");
        String name2 = hello.nextLine();
        System.out.println("Hello " + name2);

        System.out.println("What is your age ?");
        String age = hello.nextLine();
        System.out.println("You are " + age + " years old");

        // Expression Exercise
        long hello2 = System.currentTimeMillis();
        long hello3 = System.nanoTime();
        System.out.println(hello2);
        System.out.println(hello3);

        double hello4 = (double) 10 / 3;
        System.out.println(hello4);

        // GUI Exercise
        String name3 = JOptionPane.showInputDialog("Hello, please enter your name: ");
        JOptionPane.showMessageDialog(null, "Hello " + name3); 

        double age2 = Double.parseDouble(JOptionPane.showInputDialog("What is your age"));
        JOptionPane.showMessageDialog(null, "You are " + age2 + " old");

        // // Sending and Receiving HTTP Request
        // HttpClient client = HttpClient.newHttpClient();
        // HttpRequest request = HttpRequest.newBuilder(http://www.facebook.com/);

        URL url = new URL("https://www.metaweather.com/api/location/search/?query=London");

            HttpURLConnection conn = (HttpURLConnection) url.openConnection();
            conn.setRequestMethod("GET");
            conn.connect();

    }
}