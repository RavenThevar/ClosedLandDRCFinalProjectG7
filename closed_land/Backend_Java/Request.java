import java.net.http.*;
import java.net.URI;
import java.time.*;
import java.io.*;

// import java.net.http.HttpClient;
// import java.net.http.HttpRequest;
// import java.net.http.HttpResponse;


public class Request {
    public static void main(String[]args) {

        HttpClient client = HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(10))
        .build();
        HttpResponse response = null;

        try {
            String endpoint = "https://api.opensea.io/api/v1/collections?offset=50&limit=300";
            // URI uri = URI.create(endpoint + "?foo=bar&foo2=bar2"); // This is used for passing parameters into the API request
            URI uri = URI.create(endpoint);
            HttpRequest request = HttpRequest.newBuilder().uri(uri)
            .build();
            response = client.send(request, HttpResponse.BodyHandlers.ofString());
        } catch (Exception e) {
            e.printStackTrace();
        }

        System.out.println("Status Code: " + response.statusCode());
        System.out.println("Body: " + response.body());
        System.out.println(response);
    }
}
