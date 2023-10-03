function SearchBar() {
  return (
    <div className="mr-2 ">
      <form action="">
        <input
          className="h-7 rounded-lg border border-black px-2 pb-[2px] focus:outline-none"
          type="text"
          placeholder="Search"
        />
      </form>
    </div>
  );
}

export default SearchBar;
