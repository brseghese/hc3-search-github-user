import React, { useState } from "react";
import axios from "axios";
import * as S from "./styled";

function Home(props) {
  const [usuario, setUsuario] = useState("");

  function handlePesquisar() {
    axios
      .get(`https://api.github.com/users/${usuario}/repos`)
      .then((response) => console.log(response.data));
  }
  return (
    <S.Container>
      <S.Input
        value={usuario}
        className="usuarioInput"
        placeholder="Usuário"
        onChange={(e) => setUsuario(e.target.value)}
      />
      <S.Button onClick={handlePesquisar} type="button">
        Pesquisar
      </S.Button>
    </S.Container>
  );
}

export default Home;
