import { CirclePlayIcon, CircleStopIcon } from "lucide-react";
import { Button } from "./components/Button";
import { Container } from "./components/Container";
import { CountDown } from "./components/CountDown";
import { Cycles } from "./components/Cycles";
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
            <Cycles />
          </div>

          <div className="form-row">
            <Button icon={<CirclePlayIcon size={32} />} />
          </div>
        </form>
      </Container>
    </>
  );
}
