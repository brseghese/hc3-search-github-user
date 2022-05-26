import React, { useState } from "react";
import axios from "axios";
import * as S from "./styled";
import { useHistory } from "react-router-dom";

export default function Home(props) {
  const history = useHistory();
  const [usuario, setUsuario] = useState("brseghese");
  const [erro, setErro] = useState(false);

  function handlePesquisar() {
    axios
      .get(`https://api.github.com/users/${usuario}/repos`)
      .then((response) => {
        const repositories = response.data;
        const repositoriesName = [];
        repositories.map((repository) => {
          repositoriesName.push(repository.name);
        });
        localStorage.setItem(
          "repositoriesName",
          JSON.stringify(repositoriesName)
        );
        setErro(false);
        history.push("/repositories");
      })
      .catch((err) => {
        setErro(true);
      });
  }
  return (
    <S.Container>
      <S.Content>
        <S.Input
          value={usuario}
          className="usuarioInput"
          placeholder="Usuário"
          onChange={(e) => setUsuario(e.target.value)}
        />
        <S.Button onClick={handlePesquisar} type="button">
          Pesquisar
        </S.Button>
      </S.Content>
      {erro ? (
        <S.ErroMessage>Ocorreu um erro, tente novamente!</S.ErroMessage>
      ) : (
        ""
      )}
    </S.Container>
  );
}
