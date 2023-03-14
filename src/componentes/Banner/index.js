import React from "react";
import styles from "./Banner.module.css";
import circuloColorido from "assets/circulo_colorido.png";

export default function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.apresentacao}>
        <h1 className={styles.titulo}>Olá</h1>
        <p className={styles.paragrafo}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tincidunt
          porta feugiat. Ut luctus nisi pellentesque rhoncus pellentesque.
          Vestibulum vestibulum leo odio, tristique dignissim mauris lacinia sit
          amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <div className={styles.imagens}>
        <img
          className={styles.circuloColorido}
          alt="Imagem Banner"
          src={circuloColorido}
          aria-hidden={true}
        />

        <img
          className={styles.minhaFoto}
          src="https://github.com/vvaller.png"
          alt="Minha foto"
        />
      </div>
    </div>
  );
}
