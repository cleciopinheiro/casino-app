import Search from "../Inputs/Search";
import Button from "../forms/Button";

function NavMenu() {
  return (
    <div className="flex fixed top-0 w-[80vw] h-20 bg-[var(--dark-75)] justify-between items-center px-8">
      <Search />
      <div className="flex gap-8">
        <Button text="Entrar" style="bg-transparent hover:bg-transparent" />
        <Button text="Cadastrar" />
      </div>
    </div>
  );
}

export default NavMenu;