import { Container } from "../../components/Container";
import { GenericHtml } from "../../components/GenericHtml";
import { Heading } from "../../components/Heading";
import { RouterLink } from "../../components/RouterLink";
import { MainTemplate } from "../../templates/MainTemplate";

export function About() {
  return (
    <MainTemplate>
      <Container>
        <GenericHtml>
          <Heading>A Técnica Pomodoro</Heading>
          <p>
            A Técnica Pomodoro foi criada por Francesco Cirillo para uma maneira
            mais produtiva de trabalhar e estudar. A técnica utiliza um
            temporizador para dividir o trabalho em intervalos, tradicionalmente
            de 25 minutos de duração, separados por pausas curtas. Cada
            intervalo é conhecido como um pomodoro, da palavra italiana
            'tomate', por causa do cronômetro de cozinha em forma de tomate que
            Cirillo usou. -{" "}
            <a
              target="_blank"
              href="https://pt.wikipedia.org/wiki/T%C3%A9cnica_pomodoro"
            >
              Wikipedia
            </a>
          </p>
          <h2>Método tradicional</h2>
          <ul>
            <li>Defina uma tarefa que deseja realizar.</li>
            <li>Trabalhe e foque nela por 25 minutos.</li>
            <li>Faça uma pausa curta de 5 minutos.</li>
            <li>
              A cada 4 pomodoros (ciclos) faça uma pausa longa, de 15 a 30
              minutos.
            </li>
          </ul>
          <h2>Chronos Pomodoro</h2>
          <p>
            Aqui neste aplicativo, você consegue configurar os pomodoros do seu
            jeito, podendo definir os tempos de foco, de pausa curta e de pausa
            longa. Você pode fazer acessando as{" "}
            <RouterLink href="/configuracoes">Configurações</RouterLink>.
          </p>
        </GenericHtml>
      </Container>
    </MainTemplate>
  );
}
