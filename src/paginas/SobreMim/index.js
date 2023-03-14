import PostModelo from "componentes/PostModelo";
import React from "react";
import fotoCapa from "assets/sobre_mim_capa.png";
import styles from "./SobreMim.module.css";

export default function SobreMim() {
  return (
    <PostModelo fotoCapa={fotoCapa} titulo="Sobre Mim">
      <h3 className={styles.subtitulo}>Olá, eu me chamo Vinícius!</h3>

      <img
        src="https://github.com/vvaller.png"
        alt="Foto Vinicius Sorrindo"
        className={styles.fotoSobreMim}
      />
      <p className={styles.paragrafo}>
        Nascido em Jaraguá do Sul, desde pequeno já demostrava interesse por
        tecnologia, programando e criando designs de mapas para jogos. Na
        adolescência descobri o mundo da gastronomia, fazendo assim que aos 17
        anos iniciasse uma faculdade de gastronomia.
      </p>
      <p className={styles.paragrafo}>
        Após anos na área minha atenção se volta novamente para a tecnologia,
        devido as oportunidades e possibilidades desse ramo. Atualmente aos 26
        anos estou cursando Analise e Desenvolvimento de Sistemas na Estácio de
        Sá, Além dos cursos Alura e Coursera do Google em UX.
      </p>
    </PostModelo>
  );
}
