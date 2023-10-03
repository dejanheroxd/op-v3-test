import SortByButton from "./SortByButton";

function SortByTable({ onSortClick, sortActive }) {
  return (
    <div className="flex w-full justify-end">
      <div className="mb-9 mr-14 flex h-7 justify-between rounded-md border border-black ">
        <SortByButton
          sortActive={sortActive}
          isFirst
          label={"Legendary"}
          onSortClick={onSortClick}
        />
        <SortByButton
          sortActive={sortActive}
          label={"Epic"}
          onSortClick={onSortClick}
        />
        <SortByButton
          sortActive={sortActive}
          label={"Rare"}
          onSortClick={onSortClick}
        />
        <SortByButton
          sortActive={sortActive}
          label={"Uncommon"}
          onSortClick={onSortClick}
        />
        <SortByButton
          sortActive={sortActive}
          isLast
          label={"Common"}
          onSortClick={onSortClick}
        />
      </div>
    </div>
  );
}

export default SortByTable;
