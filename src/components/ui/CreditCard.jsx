export default function CreditCardView({ cardNumber, name, expireDate }) {
  const formattedNumber = cardNumber
    ? cardNumber
        .replace(/\s?/g, "")
        .replace(/(\d{4})/g, "$1 ")
        .trim()
    : "**** **** **** ****";

  return (
    <div className="relative mx-auto mb-8 aspect-[1.58/1] w-full max-w-[320px] overflow-hidden rounded-2xl border border-white/10 bg-linear-to-br from-slate-800 via-indigo-950 to-slate-900 p-4 text-white shadow-2xl sm:max-w-100 sm:p-6">
      <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-white/5 blur-3xl"></div>
      <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-indigo-500/10 blur-3xl"></div>

      <div className="mb-8 flex items-start justify-between">
        <div className="relative h-9 w-12 overflow-hidden rounded-md bg-linear-to-br from-yellow-200 via-yellow-400 to-yellow-600 shadow-inner">
          <div className="absolute inset-0 grid grid-cols-2 gap-1 opacity-30">
            <div className="border-r border-b border-black"></div>
            <div className="border-b border-black"></div>
            <div className="border-r border-black"></div>
          </div>
        </div>
        <div className="text-right">
          <p className="text-xl font-black tracking-tighter italic opacity-90">
            VISA
          </p>
          <p className="text-[8px] tracking-[2px] uppercase opacity-60">
            Platinum
          </p>
        </div>
      </div>

      <div className="mb-6">
        <p className="text-md font-mono tracking-[4px] shadow-sm md:text-xl">
          {formattedNumber}
        </p>
      </div>

      <div className="flex items-end justify-between">
        <div className="flex flex-col">
          <span className="mb-1 text-[10px] tracking-widest uppercase opacity-50">
            Card Holder
          </span>
          <p className="text-sm font-medium tracking-wide uppercase">
            {name || "YOUR NAME HERE"}
          </p>
        </div>
        <div className="flex gap-6">
          <div className="flex flex-col items-center">
            <span className="text-[8px] uppercase opacity-50">Expires</span>
            <p className="font-mono text-sm">{expireDate || "MM/YY"}</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-[8px] uppercase opacity-50">CVV</span>
            <p className="font-mono text-sm">***</p>
          </div>
        </div>
      </div>
    </div>
  );
}
