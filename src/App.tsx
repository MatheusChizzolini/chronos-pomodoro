import { Container } from "./components/Container";
import { CountDown } from "./components/CountDown";
import { Input } from "./components/Input";
import { Logo } from "./components/Logo";
import { Menu } from "./components/Menu";

import "./styles/global.css";
import "./styles/theme.css";

export default function App() {
  return (
    <>
      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>

      <Container>
        <CountDown />
      </Container>

      <Container>
        <form className="form" action="">
          <div className="form-row">
            <Input
              id="input"
              type="text"
              label="Tarefa"
              placeholder="Ex: Estudar ED2"
            />
          </div>

          <div className="form-row">
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </div>

          <div className="form-row">
            <p>Ciclos</p>
            <p>0 0 0 </p>
          </div>

          <div className="form-row">
            <button>Enviar</button>
          </div>
        </form>
      </Container>
    </>
  );
}
