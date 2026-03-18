export default function PaymentInput({
  name,
  placeholder,
  value,
  onChange,
  type,
  maxLength,
}) {
  return (
    <>
      <input
        name={name}
        maxLength={maxLength}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className="w-full rounded-md border-slate-700 bg-slate-800 p-2 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 focus:outline-0"
        required
      />
    </>
  );
}
