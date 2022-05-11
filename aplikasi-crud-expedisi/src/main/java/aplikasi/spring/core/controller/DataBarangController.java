package aplikasi.spring.core.controller;

import java.util.HashMap;

import java.util.List;
import java.util.Map;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import aplikasi.spring.core.model.DataBarang;
import aplikasi.spring.core.repository.DataBarangRepository;
import aplikasi.spring.core.execption.ResourceNotFoundException;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "http://localhost:3000")
public class DataBarangController {
    @Autowired
    private DataBarangRepository dataBarangRepository;

    @GetMapping("/listdatabarang")
    public List <DataBarang> getAllDataBarang() {
//        System.out.println("count >> " + dataBarangRepository.findAll().size());
        return dataBarangRepository.findAll();
    }

    @GetMapping("/listdatabarang/{id}")
    public ResponseEntity < DataBarang > getDataBarangById(@PathVariable(value = "id") Long Id)
            throws ResourceNotFoundException {
        DataBarang barang = dataBarangRepository.findById(Id)
                .orElseThrow(() -> new ResourceNotFoundException("Barang Tidak Ada Dengan id : " + Id));
//        System.out.println("barang");
        return ResponseEntity.ok().body(barang);
    }

    @PostMapping("/simpandatabarang")
    public DataBarang SimpanBarang( @RequestBody DataBarang barang) {
        return dataBarangRepository.save(barang);
    }

    @PutMapping("/databarang/{id}")
    public ResponseEntity < DataBarang > updateBarang(@PathVariable(value = "id") Long Id,
                                                       @RequestBody DataBarang barangDetails) throws ResourceNotFoundException {
        DataBarang editbarang = dataBarangRepository.findById(Id)
                .orElseThrow(() -> new ResourceNotFoundException("Barang Tidak Ada Dengan id : " + Id));

        editbarang.setNamaBarang(barangDetails.getNamaBarang());
        editbarang.setJumlah(barangDetails.getJumlah());
        editbarang.setTanggalPencatatan(barangDetails.getTanggalPencatatan());
        final DataBarang updatedBarang = dataBarangRepository.save(editbarang);
        return ResponseEntity.ok(updatedBarang);
    }

    @DeleteMapping("/databarang/{id}")
    public Map < String, Boolean > deleteBarang(@PathVariable(value = "id") Long Id)
            throws ResourceNotFoundException {
        DataBarang barang = dataBarangRepository.findById(Id)
                .orElseThrow(() -> new ResourceNotFoundException("Barang Tidak Ada Dengan id : " + Id));

        dataBarangRepository.delete(barang);
        Map < String, Boolean > response = new HashMap < > ();
        response.put("deleted", Boolean.TRUE);
        return response;
    }



}
