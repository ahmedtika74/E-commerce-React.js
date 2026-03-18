export default function ActionButton({ name, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="mt-auto w-full cursor-pointer rounded-lg border border-indigo-600 bg-indigo-600 p-3 py-2 font-semibold transition hover:bg-indigo-700"
    >
      {name}
    </button>
  );
}
