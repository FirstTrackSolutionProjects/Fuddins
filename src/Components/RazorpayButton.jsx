import React from "react";

const RazorpayButton = () => {
  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  const displayRazorpay = async () => {
    const res = await loadRazorpayScript();

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    const options = {
      key: "YOUR_RAZORPAY_KEY_ID", // Enter the Key ID generated from the Dashboard
      amount: "50000", // Amount is in the smallest currency unit (i.e., 50000 paise = INR 500)
      currency: "INR",
      name: "FUDDINS",
      description: "Test Transaction",
      image: "images/logo.jpg",
      order_id: "ORDER_ID", // Replace with your order_id if you have generated one
      handler: function (response) {
        alert(response.razorpay_payment_id);
        alert(response.razorpay_order_id);
        alert(response.razorpay_signature);
      },
      prefill: {
        name: "Fuddins",
        email: "info@fuddins.com",
        contact: "9692409083",
      },
      notes: {
        address: "Bhubaneshwar, Odisha",
      },
      theme: {
        color: "#3399cc",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  return (
    <button
      onClick={displayRazorpay}
      className="p-3 "
    >
      <img src="images/razorpay.JPG" className="w-40 rounded-sm"></img>
    </button>
  );
};

export default RazorpayButton;
