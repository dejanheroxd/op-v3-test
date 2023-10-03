function SortByButton({ label, isFirst, isLast, onSortClick, sortActive }) {
  const buttonClass = `cursor-pointer border-r border-gray-400 px-3  ${
    isFirst ? "rounded-l-md" : ""
  } ${isLast ? "rounded-r-md" : ""} ${
    sortActive === label ? "bg-yellow-200" : ""
  }`;
  return (
    <button className={buttonClass} onClick={() => onSortClick(label)}>
      {label}
    </button>
  );
}

export default SortByButton;
