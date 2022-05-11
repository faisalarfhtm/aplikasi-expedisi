package aplikasi.spring.core.controller;

import okhttp3.*;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.RequestBody;

import java.io.IOException;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "http://localhost:3000")
public class DataExpedisiController {

    @GetMapping("/getkota")
    public String getAllCity() throws IOException {
        OkHttpClient client = new OkHttpClient().newBuilder()
                .build();
        Request request = new Request.Builder()
                .url("https://api.rajaongkir.com/starter/city")
                .method("GET", null)
                .addHeader("key", "a79ee07a3ecbd185032b38f9fd979a97")
                .build();

        try (Response response = client.newCall(request).execute()) {
            return response.body().string();
        }
    }

    @GetMapping("/getprovinsi")
    public String getAllprovince() throws IOException {
        OkHttpClient client = new OkHttpClient().newBuilder()
                .build();
        Request request = new Request.Builder()
                .url("https://api.rajaongkir.com/starter/province")
                .method("GET", null)
                .addHeader("key", "a79ee07a3ecbd185032b38f9fd979a97")
                .build();

        try (Response response = client.newCall(request).execute()) {
            return response.body().string();
        }
    }


    @PostMapping("/cekharga")
    public String cekHarga() throws IOException {
        OkHttpClient client = new OkHttpClient().newBuilder()
                .build();
        MediaType mediaType = MediaType.parse("text/plain");
        MultipartBody body = new MultipartBody.Builder().setType(MultipartBody.FORM)
                .addFormDataPart("origin","12") //masih harcode dulu
                .addFormDataPart("destination","12") //masih harcode dulu
                .addFormDataPart("weight","1") //masih harcode dulu
                .addFormDataPart("courier","jne") //masih harcode dulu
                .build();
        Request request = new Request.Builder()
                .url("https://api.rajaongkir.com/starter/cost")
                .method("POST", body)
                .addHeader("key", "a79ee07a3ecbd185032b38f9fd979a97")
                .build();

        try (Response response = client.newCall(request).execute()) {
            return response.body().string();
        }
    }
}
