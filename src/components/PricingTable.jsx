import React from 'react';

const PricingTable = () => {
  return (
    <table className="w-full text-sm text-left dark:text-white mt-4">
      <thead className="bg-gray-200 dark:bg-blue-600">
        <tr>
          <th className="py-2 px-4">Plan</th>
          <th className="py-2 px-4">Monthly</th>
          <th className="py-2 px-4">Yearly</th>
        </tr>
      </thead>
      <tbody>
        <tr className="bg-gray-100 dark:bg-gray-800">
          <td className="py-2 px-4">Basic</td>
          <td className="py-2 px-4">$9.99</td>
          <td className="py-2 px-4">$99.99</td>
        </tr>
        <tr className="bg-gray-50 dark:bg-gray-700">
          <td className="py-2 px-4">Pro</td>
          <td className="py-2 px-4">$19.99</td>
          <td className="py-2 px-4">$199.99</td>
        </tr>
        <tr className="bg-gray-100 dark:bg-gray-800">
          <td className="py-2 px-4">Enterprise</td>
          <td className="py-2 px-4">$49.99</td>
          <td className="py-2 px-4">$499.99</td>
        </tr>
      </tbody>
    </table>
  );
};

export default PricingTable;
