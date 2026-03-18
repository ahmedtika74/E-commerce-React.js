import { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { confirmPayment, toggleModal } from "../../features/cart/cartSlice";
import CreditCard from "../ui/CreditCard";
import PaymentForm from "../ui/PaymentForm";

export default function CheckoutModal() {
  const [paymentData, setPaymentData] = useState({
    name: "",
    cardNumber: "",
    expireDate: "",
    cvv: "",
  });

  const [error, setError] = useState("");

  const dispatch = useDispatch();

  const handleName = useCallback((e) => {
    setPaymentData((prev) => ({ ...prev, name: e.target.value }));
  }, []);

  const handleNumber = useCallback((e, limit) => {
    const { name, value } = e.target;
    const numericValue = value.replace(/\D/g, "");
    if (numericValue.length <= limit) {
      setPaymentData((prev) => ({ ...prev, [name]: numericValue }));
    }
  }, []);

  const handleExpireDate = useCallback((e) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length >= 3) {
      value = value.slice(0, 2) + "/" + value.slice(2, 4);
    }
    if (value.length <= 5) {
      setPaymentData((prev) => ({ ...prev, expireDate: value }));
    }
  }, []);

  const onConfirm = () => {
    const { name, cardNumber, expireDate, cvv } = paymentData;
    if (
      !name ||
      cardNumber.length < 16 ||
      expireDate.length < 5 ||
      cvv.length < 3
    ) {
      setError("Please check your payment details.");
      return;
    }
    setError("");
    dispatch(confirmPayment());
  };

  return (
    <div
      className="fixed top-0 left-0 z-50 flex h-full w-full items-center justify-center bg-black/80 backdrop-blur-sm"
      onClick={() => dispatch(toggleModal())}
    >
      <div
        className="relative h-fit w-[95%] rounded-2xl border-slate-800 bg-slate-900 p-3 shadow-2xl md:w-3/4 md:p-5"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="mb-5 text-center text-2xl font-black underline md:mb-10 md:text-3xl lg:text-4xl">
          Secure Payment
        </h2>

        <div className="items-center pb-5 lg:grid lg:grid-cols-2 lg:gap-8">
          <CreditCard
            cardNumber={paymentData.cardNumber}
            name={paymentData.name}
            expireDate={paymentData.expireDate}
          />

          <PaymentForm
            error={error}
            paymentData={paymentData}
            handleName={handleName}
            handleNumber={handleNumber}
            handleExpireDate={handleExpireDate}
            onConfirm={onConfirm}
            onCancel={() => dispatch(toggleModal())}
          />
        </div>
      </div>
    </div>
  );
}
