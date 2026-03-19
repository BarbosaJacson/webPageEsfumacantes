package br.com.esfumacante.api.model;
import jakarta.persistence.*;
import jakarta.persistence.Column;
import java.math.BigDecimal;

@Entity
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nome;
    private String descricao;

    @Column(name = "descricao_longa", length = 1000)
    private String descricaoLonga;
    private BigDecimal preco;
    private String imagem;
    private boolean disponivel;
    private int quantidade;

    public Product() {

    }

    public Product(Long id, String nome, String descricao, String descricaoLonga, BigDecimal preco, String imagem, boolean disponivel, int quantidade) {
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
        this.descricaoLonga = descricaoLonga;
        this.preco = preco;
        this.imagem = imagem;
        this.disponivel = disponivel;
        this.quantidade = quantidade;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public String getDescricaoLonga() {
        return descricaoLonga;
    }

    public void setDescricaoLonga(String descricaoLonga) {
        this.descricaoLonga = descricaoLonga;
    }

    public BigDecimal getPreco() {
        return preco;
    }

    public void setPreco(BigDecimal preco) {
        this.preco = preco;
    }

    public String getImagem() {
        return imagem;
    }

    public void setImagem(String imagem) {
        this.imagem = imagem;
    }

    public boolean isDisponivel() {
        return disponivel;
    }

    public void setDisponivel(boolean disponivel) {
        this.disponivel = disponivel;
    }

    public int getQuantidade() {
        return quantidade;
    }

    public void setQuantidade(int quantidade) {
        this.quantidade = quantidade;
    }
}