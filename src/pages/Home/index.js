import React, { useState } from "react";
import axios from "axios";
import * as S from "./styled";
import { useHistory } from "react-router-dom";

import github from "../../components/github.png";

export default function Home(props) {
  const history = useHistory();
  const [usuario, setUsuario] = useState("");
  const [erro, setErro] = useState(false);

  function handlePesquisar() {
    axios
      .get(`https://api.github.com/users/${usuario}/repos`)
      .then((response) => {
        const repositories = response.data;
        const repositoriesName = [];
        repositories.forEach((repository) => {
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
      <S.ImgGitHub src={github} />
      <S.Content>
        <S.Input
          autoFocus
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
