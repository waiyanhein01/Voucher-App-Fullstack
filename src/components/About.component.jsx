import React from "react";

const AboutComponent = () => {
  return (
    <div className="">
      <div className=" mb-5">
        <h1 className=" text-2xl font-bold mb-3">About</h1>
        <p>
          <a
            href="https://github.com/waiyanhein01?tab=repositories"
            className=" italic text-cyan-600 text-xl underline"
            target="_blank"
          >
            Hello I'm Wai Yan Hein.
          </a>
          I created this application for easily to use for your business. This
          application is designed to simplify the management and redemption of
          vouchers, offering a seamless experience for both administrators and
          customers. Our app includes the following key modules and features:
        </p>
      </div>

      <div className=" mb-5">
        <h2 className=" text-2xl font-bold mb-3">Modules</h2>
        <ul>
          <li className=" mb-2">
            <strong>Product Page</strong> <br />
            Manage your product catalog with ease. This module allows
            administrators to create and update products that are available for
            sale.
          </li>
          <li className=" mb-2">
            <strong>Sale Page</strong> <br />
            View and manage the list of products available for sale. This page
            provides a comprehensive overview of all the products currently
            offered, making it easier to track and update sales.
          </li>
          <li className=" mb-2">
            <strong>Voucher Page</strong> <br />
            Easily create new vouchers for your customers. This module also
            includes a list of customer-specific vouchers, giving a clear view
            of voucher distribution and usage.
          </li>
        </ul>
      </div>

      <div className=" mb-5">
        <h2 className=" text-2xl font-bold mb-3">Features</h2>
        <ul>
          <li className=" mb-2">
            <strong>Product Features:</strong> <br />
            Create new products quickly and efficiently, with all the details
            needed for sales and promotion.
          </li>
          <li className=" mb-2">
            <strong>Sale Features:</strong> <br />
            Access a complete list of products that are available for sale,
            ensuring easy management of current inventory and pricing.
          </li>
          <li className=" mb-2">
            <strong>Voucher Features:</strong> <br />
            Generate and manage vouchers for customers, including tracking
            voucher usage and maintaining a customer voucher list.
          </li>
        </ul>
      </div>

      <div className="mb-5">
        <h1 className=" text-2xl font-bold mb-2">Build By</h1>

        <ul className=" ps-5">
          <li className=" list-disc">React for the user interface</li>
          <li className=" list-disc">Axios for handling HTTP requests</li>
          <li className=" list-disc">
            SWR for efficient data fetching and caching
          </li>
          <li className=" list-disc">React Router DOM for routing</li>
          <li className=" list-disc">Zustand for state management</li>
        </ul>
      </div>

      <div className="">
        <h1 className=" text-2xl font-bold mb-2">Contact</h1>
        <div className=" mb-3">
          <label htmlFor="phone">Phone</label>
          <a
            id="phone"
            className=" text-cyan-600 underline ps-5"
            href="tel:+959773047960"
          >
            +959773047960
          </a>
        </div>
        <div className="">
          <label htmlFor="email">Email:</label>
          <a
            id="email"
            className=" text-cyan-600 underline ps-5"
            href="mailto:wyan.dev01@gmail.com"
          >
            wyan.dev01@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutComponent;
