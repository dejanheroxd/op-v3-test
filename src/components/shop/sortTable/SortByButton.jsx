function SortByButton({ label, isFirst, isLast, onSortClick }) {
  const buttonClass = `cursor-pointer border-r border-gray-400 px-3 hover:bg-yellow-200 ${
    isFirst ? "rounded-l-md" : ""
  } ${isLast ? "rounded-r-md" : ""}`;
  return (
    <button className={buttonClass} onClick={() => onSortClick(label)}>
      {label}
    </button>
  );
}

export default SortByButton;
