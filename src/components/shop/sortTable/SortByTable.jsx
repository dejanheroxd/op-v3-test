import SortByButton from "./SortByButton";

function SortByTable({ onSortClick }) {
  return (
    <div className="flex w-full justify-end">
      <div className="mb-9 mr-14 flex h-7 justify-between rounded-md border border-black ">
        <SortByButton isFirst label={"Legendary"} onSortClick={onSortClick} />
        <SortByButton label={"Epic"} onSortClick={onSortClick} />
        <SortByButton label={"Rare"} onSortClick={onSortClick} />
        <SortByButton label={"Uncommon"} onSortClick={onSortClick} />
        <SortByButton isLast label={"Common"} onSortClick={onSortClick} />
      </div>
    </div>
  );
}

export default SortByTable;
