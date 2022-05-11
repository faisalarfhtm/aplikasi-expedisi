package aplikasi.spring.core.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import aplikasi.spring.core.model.DataBarang;

@Repository
public interface DataBarangRepository extends JpaRepository<DataBarang, Long>{

}