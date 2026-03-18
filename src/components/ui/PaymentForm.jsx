import PaymentInput from "./PaymentInput";
import ActionButton from "./ActionButton";

export default function PaymentForm({
  error,
  paymentData,
  handleName,
  handleNumber,
  handleExpireDate,
  onConfirm,
  onCancel,
}) {
  return (
    <div className="mx-auto md:w-2/3">
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="flex w-full flex-col gap-2">
          <PaymentInput
            name="name"
            placeholder="Full Name"
            value={paymentData.name}
            onChange={handleName}
          />
          <PaymentInput
            name="cardNumber"
            placeholder="Card Number"
            value={paymentData.cardNumber}
            maxLength={16}
            onChange={(e) => handleNumber(e, 16)}
          />
        </div>

        <div className="mt-2 flex items-center gap-2">
          <PaymentInput
            name="cvv"
            placeholder="CVV"
            value={paymentData.cvv}
            onChange={(e) => handleNumber(e, 3)}
            type="password"
            maxLength={3}
          />
          <PaymentInput
            name="expireDate"
            placeholder="MM/YY"
            value={paymentData.expireDate}
            onChange={handleExpireDate}
            maxLength={5}
          />
        </div>
        {error && (
          <p className="mt-4 animate-pulse text-center text-sm font-medium text-red-400">
            ⚠️ {error}
          </p>
        )}
        <div className="mt-2 flex items-center gap-2">
          <ActionButton name="Cancel" onClick={onCancel} />
          <ActionButton name="Pay Now" onClick={onConfirm} />
        </div>
      </form>
    </div>
  );
}
