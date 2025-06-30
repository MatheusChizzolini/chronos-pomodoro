import { Container } from "../../components/Container";
import { GenericHtml } from "../../components/GenericHtml";
import { Heading } from "../../components/Heading";
import { MainTemplate } from "../../templates/MainTemplate";

export function NotFound() {
  return (
    <MainTemplate>
      <Container>
        <GenericHtml>
          <Heading>Erro 404. Página não econtrada.</Heading>
          <p>
            Epa, pera lá, muita calma, ladrão. Parece que a página que você
            tentou acessar não existe :/{" "}
          </p>
          <p>
            Volte para a <a href="/">página principal</a> e finja que nada disso
            aconteceu...
          </p>
        </GenericHtml>
      </Container>
    </MainTemplate>
  );
}
