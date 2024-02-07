import { IoSearch } from "react-icons/io5";

function Search() {
  return (
    <div className="flex relative py-2 items-center">
      <IoSearch size={24} className="text-[--gray] absolute pl-2" />
      <input type="text" placeholder="Procurar" className="pl-8 outline-none rounded-full border border-[var(--gray)] bg-transparent hover:bg-[--dark-50] h-8" />
    </div>
  );
}

export default Search;