import { useMemo, useEffect } from "react";
export default function Pagination({ page, totalPages, setPage }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

  const paginationButtons = useMemo(() => {
    const maxVisibleButtons = 3;
    let startButton = Math.max(1, page - Math.floor(maxVisibleButtons / 2));
    let endButton = Math.min(totalPages, startButton + maxVisibleButtons - 1);

    if (endButton - startButton + 1 < maxVisibleButtons) {
      startButton = Math.max(1, endButton - maxVisibleButtons + 1);
    }

    const buttonNumbers = [];
    for (let i = startButton; i <= endButton; i++) {
      if (i > 0) buttonNumbers.push(i);
    }
    return buttonNumbers;
  }, [page, totalPages]);

  if (totalPages <= 1) return null;

  const paginate = (page) => {
    setPage(page);
  };

  return (
    <div className="mt-8 flex justify-center gap-2">
      <button
        disabled={page === 1}
        onClick={() => paginate(page - 1)}
        className="cursor-pointer rounded-lg bg-slate-800 px-4 py-2 disabled:opacity-50"
      >
        &lt;
      </button>

      {paginationButtons.map((number) => (
        <button
          key={number}
          onClick={() => paginate(number)}
          className={`cursor-pointer rounded-lg border px-4 py-2 transition-all ${
            page === number
              ? "border-indigo-600 bg-indigo-600 text-white"
              : "border-slate-700 bg-slate-800 text-slate-400 hover:bg-slate-700"
          }`}
        >
          {number}
        </button>
      ))}

      <button
        disabled={page === totalPages}
        onClick={() => paginate(page + 1)}
        className="cursor-pointer rounded-lg bg-slate-800 px-4 py-2 disabled:opacity-50"
      >
        &gt;
      </button>
    </div>
  );
}
