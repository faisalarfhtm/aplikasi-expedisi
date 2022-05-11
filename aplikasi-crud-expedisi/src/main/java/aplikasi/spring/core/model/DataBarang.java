package aplikasi.spring.core.model;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "DATABARANG")
public class DataBarang {

    private long ID;
    private String NAMABARANG;
    private Integer JUMLAH;
    private String TANGGALPENCATATAN;

    public DataBarang() {

    }
    public DataBarang(String NAMA_BARANG, Integer JUMLAH, String TANGGAL_PENCATATAN) {
        this.NAMABARANG = NAMA_BARANG;
        this.JUMLAH = JUMLAH;
        this.TANGGALPENCATATAN = TANGGAL_PENCATATAN;
    }
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    public long getId() {
        return ID;
    }
    public void setId(long id) {
        this.ID = id;
    }

    @Column(name = "NAMABARANG", nullable = false)
    public String getNamaBarang() {
        return NAMABARANG;
    }
    public void setNamaBarang(String NAMA_BARANG) {
        this.NAMABARANG = NAMA_BARANG;
    }

    @Column(name = "JUMLAH", nullable = false)
    public Integer getJumlah() {
        return JUMLAH;
    }
    public void setJumlah(Integer JUMLAH) {
        this.JUMLAH = JUMLAH;
    }

    @Column(name = "TANGGALPENCATATAN", nullable = true)
    public String getTanggalPencatatan() {
        return TANGGALPENCATATAN;
    }
    public void setTanggalPencatatan(String TANGGAL_PENCATATAN) {
        this.TANGGALPENCATATAN = TANGGAL_PENCATATAN;
    }
}
