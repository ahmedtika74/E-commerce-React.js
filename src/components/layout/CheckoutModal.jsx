import { useState } from "react";
import ActionButton from "../ui/ActionButton";
import PaymentInput from "../ui/PaymentInput";
import { useDispatch } from "react-redux";
import { confirmPayment, toggleModal } from "../../features/cart/cartSlice";

export default function CheckoutModal() {
  const [paymentData, setPaymentData] = useState({
    name: "",
    cardNumber: "",
    expireDate: "",
    cvv: "",
  });

  const dispatch = useDispatch();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPaymentData((data) => ({
      ...data,
      [name]: value,
    }));
  };

  return (
    <div
      className="fixed top-0 left-0 flex h-full w-full items-center justify-center bg-black/80 backdrop-blur-sm"
      onClick={() => {
        dispatch(toggleModal());
      }}
    >
      <div
        className="relative h-fit w-[95%] rounded-2xl border-slate-800 bg-slate-900 p-3 shadow-2xl shadow-indigo-500/10 md:w-3/4 md:p-5"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="mb-5 text-center text-2xl font-black underline md:mb-20 md:text-3xl lg:text-4xl">
          Secure Payment
        </h2>
        <div className="pb-5 lg:grid lg:grid-cols-2">
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
                {paymentData.cardNumber
                  ? paymentData.cardNumber
                      .replace(/\s?/g, "")
                      .replace(/(\d{4})/g, "$1 ")
                      .trim()
                  : "**** **** **** ****"}
              </p>
            </div>
            <div className="flex items-end justify-between">
              <div className="flex flex-col">
                <span className="mb-1 text-[10px] tracking-widest uppercase opacity-50">
                  Card Holder
                </span>
                <p className="text-sm font-medium tracking-wide uppercase">
                  {paymentData.name || "YOUR NAME HERE"}
                </p>
              </div>
              <div className="flex gap-6">
                <div className="flex flex-col items-center">
                  <span className="text-[8px] uppercase opacity-50">
                    Expires
                  </span>
                  <p className="font-mono text-sm">
                    {paymentData.expireDate || "MM/YY"}
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-[8px] uppercase opacity-50">CVV</span>
                  <p className="font-mono text-sm">***</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mx-auto md:w-2/3">
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="flex w-full flex-col gap-2">
                <PaymentInput
                  name="name"
                  placeholder={"Full Name"}
                  value={paymentData.name}
                  onChange={handleChange}
                />
                <PaymentInput
                  name="cardNumber"
                  placeholder={"Card Number"}
                  value={paymentData.cardNumber}
                  onChange={handleChange}
                />
              </div>

              <div className="mt-2 flex items-center gap-2">
                <PaymentInput
                  name="cvv"
                  placeholder={"CVV"}
                  value={paymentData.cvv}
                  onChange={handleChange}
                />
                <PaymentInput
                  name="expireDate"
                  placeholder={"MM/YY"}
                  value={paymentData.expireDate}
                  onChange={handleChange}
                />
              </div>
              <div className="mt-2 flex items-center gap-2">
                <ActionButton
                  name={"Cancel"}
                  onClick={() => {
                    dispatch(toggleModal());
                  }}
                />
                <ActionButton
                  name={"Pay Now"}
                  onClick={() => {
                    const { name, cardNumber, expireDate, cvv } = paymentData;
                    if (!name || !cardNumber || !expireDate || !cvv) {
                      alert("Please fill all fields");
                      return;
                    }
                    dispatch(confirmPayment());
                  }}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
