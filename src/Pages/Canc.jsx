import React from "react";

const Canc =()=>{
    return(
        <div className="p-5 font-poppins bg-beige bg-opacity-30">
            <div className="font-domine font-semibold text-3xl text-black">Cancellation and Refund Policy:</div>
            <section className="mb-6">
        <h2 className="text-2xl  my-4">Cancellation Policy</h2>
        <p className="mb-4">
          At Fuddins, we strive to offer you the best products and services. However, if you need to cancel your order, please do so within 24 hours of placing the order. Cancellations made after this period may not be eligible for a refund, depending on the processing stage of your order.
        </p>
        <p className="mb-4">
          To cancel your order, please contact our customer support team at <a href="mailto:support@fuddins.com" className="text-blue-500 underline">support@fuddins.com</a> with your order details. We will respond to your request promptly.
        </p>
      </section>

      <div className="border-t border-gray-300 my-6"></div>

      <section className="mb-6">
        <h2 className="text-2xl  mb-4">Refund Policy</h2>
        <p className="mb-4">
          We offer refunds for eligible products that are returned within 14 days of receipt. To be eligible for a refund, the item must be unused, in its original packaging, and in the same condition that you received it.
        </p>
        <p className="mb-4">
          Once we receive and inspect your returned item, we will notify you of the approval or rejection of your refund. If approved, your refund will be processed, and a credit will automatically be applied to your original method of payment within 5-10 business days.
        </p>
        <p className="mb-4">
          Please note that shipping costs are non-refundable. If you receive a refund, the cost of return shipping will be deducted from your refund.
        </p>
      </section>

      <div className="border-t border-gray-300 my-6"></div>

      <section className="mb-6">
        <h2 className="text-2xl  mb-4">Exceptions and Non-Refundable Items</h2>
        <p className="mb-4">
          Certain types of items cannot be returned, such as perishable goods (like food, flowers, or plants), custom products (such as special orders or personalized items), and personal care goods (such as beauty products). We also do not accept returns for hazardous materials, flammable liquids, or gases.
        </p>
        <p className="mb-4">
          Please get in touch if you have questions or concerns about your specific item.
        </p>
      </section>

      <div className="border-t border-gray-300 my-6"></div>

      <section className="mb-6">
        <h2 className="text-2xl  mb-4">Contact Us</h2>
        <p className="mb-4">
          If you have any questions about our Cancellation and Refund Policy, please contact us at <a href="mailto:support@fuddins.com" className="text-blue-500 underline">support@fuddins.com</a>.
        </p>
      </section>
        </div>
    )
}

export default Canc;