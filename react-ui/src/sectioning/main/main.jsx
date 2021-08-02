import { Switch } from "react-router-dom";
import Routes from "../../routes/index";

function Main() {
  return (
    <main>
      <Switch>
        <Routes />
      </Switch>
    </main>
  );
}

export default Main;
