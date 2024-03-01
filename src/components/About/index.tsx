import React from "react";
import * as A from "./style";

const About: React.FC = () => {
  return (
    <A.AboutStyle>
      <A.ContainerStyle>
        <A.AboutContent>
          <h3>Sobre Mim</h3>
          <p>Eu sou um Desenvolvedor Full Stack</p>
          <span>
            Olá! Sou um desenvolvedor Full Stack com experiências em React.js,
            TypeScript, JavaScript, Styled-Components e consumo de APIS. Formado
            em desenvolvimento full stack da Arnia - Escola de programação e
            cursando analise e desenvolvimento de sistemas.
          </span>
        </A.AboutContent>
        <A.AboutImage src="/program.png" />
      </A.ContainerStyle>
    </A.AboutStyle>
  );
};

export { About };
