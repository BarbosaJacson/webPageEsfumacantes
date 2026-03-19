package br.com.esfumacante.api.repository;
import br.com.esfumacante.api.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {
    // Pronto! O Spring Boot vai criar toda a lógica de salvar e buscar aqui.
}