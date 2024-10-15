import React, { useRef } from "react";
import api from "../api/Api";
import useSWR from "swr";
import { useParams } from "react-router-dom";
import VoucherSkeletonLoaderComponent from "./VoucherSkeletonLoader.component";
import printJS from "print-js";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const VoucherDetailsCardComponent = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useSWR(api + "/vouchers/" + id, fetcher);
  const handlePrint = () => {
    printJS({
      printable: "printThis",
      type: "html",
      // header: "Custom Header",
      // style: "h1 { color: red; } p { font-size: 18px; }",
      css: "https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css",
      showModal: true,
    });
  };

  const contentRef = useRef();

  const handleDownloadPdf = () => {
    const input = contentRef.current;
    html2canvas(input, {
      backgroundColor: "#ffffff",
      useCORS: true,
      scale: 2,
    }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();

      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("invoice.pdf");
    });
  };

  return (
    <div className="">
      <div
        id="printThis"
        ref={contentRef}
        className=" w-[14.8cm] mx-auto bg-white p-3 shadow mb-5"
      >
        {isLoading ? (
          <VoucherSkeletonLoaderComponent />
        ) : (
          <div className="">
            <div className="flex justify-between items-start mb-8">
              <div>
                <h1 className="text-4xl font-bold mb-2">INVOICE</h1>
                <p className="text-md">#{data.data.voucher_id}</p>
              </div>
              <div className="text-right">
                <p className="font-bold">Invoice to</p>
                <p>{data.data.customer_name}</p>
                <p>Date: {data.data.sale_date.slice(0, 10)}</p>
              </div>
            </div>

            <table className="w-full mb-8">
              <thead>
                <tr className="border-b-2 border-gray-300">
                  <th className="text-left py-2 text-sm">No</th>
                  <th className="text-left py-2 text-sm">Description</th>
                  <th className="text-right py-2 text-sm">Qty</th>
                  <th className="text-right py-2 text-sm">Price</th>
                  <th className="text-right py-2 text-sm">Total</th>
                </tr>
              </thead>
              <tbody>
                {data.data.records.map((record, index) => (
                  <tr key={record.id} className="border-b border-gray-200">
                    <td className="py-2 text-sm">{index + 1}</td>
                    <td className="py-2 text-sm">
                      {record.product.product_name}
                    </td>
                    <td className="text-right py-2 text-sm">
                      {record.quantity}
                    </td>
                    <td className="text-right py-2 text-sm">
                      {record.product.price}
                    </td>
                    <td className="text-right py-2 text-sm">{record.cost}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="border-b border-gray-200">
                  <td className="py-2 text-right text-sm" colSpan={4}>
                    Total
                  </td>
                  <td className="py-2 text-right text-sm">
                    {parseFloat(data.data.total).toFixed(2)}
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-2 text-right text-sm" colSpan={4}>
                    Tax(5% MMK)
                  </td>
                  <td className="py-2 text-right text-sm">
                    {parseFloat(data.data.tax).toFixed(2)}
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-2 text-right text-md font-bold" colSpan={4}>
                    Net Total
                  </td>
                  <td className="py-2 text-right text-md font-bold">
                    {parseFloat(data.data.net_total).toFixed(2)}
                  </td>
                </tr>
              </tfoot>
            </table>

            <div className=" text-sm mb-8">
              <div className=" mb-4">
                <h2 className="font-bold mb-2">Payment Transfer to</h2>
                <p>Kpay,Wave - 09250152018</p>
                <p>KBZ Bank - 02730102705025601</p>
                <p>AYA Bank - 20003674121</p>
              </div>
              <div className="">
                <h2 className="font-bold text-xl">MMS IT</h2>
                <p>48, 1st Floor, Shan Kone St.</p>
                <p>+959-250-152-018</p>
                <p>enquiry@mms-it.com</p>
              </div>
            </div>

            <div className="border-t-2 border-gray-300 pt-4">
              <p className="mt-4 text-center text-sm">Thanks to You</p>
            </div>
          </div>
        )}
      </div>
      <div className="flex justify-center items-center gap-3">
        <button
          onClick={handlePrint}
          className="text-white flex justify-center items-center gap-3 bg-cyan-700 hover:bg-cyan-800 focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
        >
          Print Voucher
        </button>

        <button
          onClick={handleDownloadPdf}
          className="text-white flex justify-center items-center gap-3 bg-cyan-700 hover:bg-cyan-800 focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
        >
          Download PDF
        </button>
      </div>
    </div>
  );
};

export default VoucherDetailsCardComponent;
