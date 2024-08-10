import React from "react";

const Shipp =()=>{
    return(
        <div className="p-5 font-poppins bg-beige bg-opacity-30">
            <h1 className="text-3xl font-domine font-semibold my-4">Shipping and Delivery Policy:</h1>
      
      <section className="mb-6">
        <h2 className="text-2xl  mb-2">Order Processing</h2>
        <p>
          At Fuddins, we strive to process and ship your orders as quickly as possible. Orders are typically processed within 1-2 business days. Please note that orders placed on weekends and holidays will be processed on the next business day.
        </p>
      </section>
      
      <section className="mb-6">
        <h2 className="text-2xl  mb-2">Shipping Methods and Delivery Times</h2>
        <p>
          We offer the following shipping methods to ensure your order arrives promptly:
        </p>
        <ul className="list-disc list-inside ml-4">
          <li>Standard Shipping: 5-7 business days</li>
          <li>Expedited Shipping: 2-3 business days</li>
          <li>Overnight Shipping: 1 business day</li>
        </ul>
      </section>
      
      <section className="mb-6">
        <h2 className="text-2xl  mb-2">Shipping Rates</h2>
        <p>
          Shipping rates are calculated based on the weight of your order and the shipping method selected. You will see the total shipping cost at checkout before you complete your purchase.
        </p>
      </section>
      
      <section className="mb-6">
        <h2 className="text-2xl  mb-2">International Shipping</h2>
        <p>
          Fuddins offers international shipping to many countries. Delivery times and shipping rates for international orders vary depending on the destination. Please note that international orders may be subject to customs duties and taxes, which are the responsibility of the recipient.
        </p>
      </section>
      
      <section className="mb-6">
        <h2 className="text-2xl  mb-2">Order Tracking</h2>
        <p>
          Once your order has been shipped, you will receive a confirmation email with a tracking number. You can use this tracking number to check the status of your shipment on the carrier's website.
        </p>
      </section>
      
      <section className="mb-6">
        <h2 className="text-2xl  mb-2">Delayed or Lost Orders</h2>
        <p>
          If your order is delayed or lost during shipping, please contact our customer service team at support@fuddins.com. We will work with the carrier to resolve the issue as quickly as possible.
        </p>
      </section>
      
      <section className="mb-6">
        <h2 className="text-2xl  mb-2">Contact Us</h2>
        <p>
          If you have any questions or concerns about our shipping and delivery policy, please contact us at <span className="text-blue-400">support@fuddins.com</span>.
        </p>
      </section>

        </div>
    )
}

export default Shipp;