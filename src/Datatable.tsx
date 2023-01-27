import React, { Component } from 'react';

export class Datatable extends React.Component {
    render() {
  
      const headings = [
        'Product name',
        'SKU',
        'Stock quantity',
        'Wholesale cost',
        'Sale price',
        'Quantity sold',
        'Gross sales',
        'Net sales',
        'Notes',
      ];
  
      const rows = [
        [
          'Red and black plaid scarf with thin red stripes and thick black stripes',
          124689325,
          28,
          '$35.00',
          '$60.00',
          12,
          '$720.00',
          '$300.00',
          '',
        ],
        [
          'Yellow plaid scarf',
          124689389,
          0,
          '$35.00',
          '$60.00',
          20,
          '$1200.00',
          '$500.00',
          'Currently on back order by the supplier. Do not place another order to restock.',
        ],
        [
          'Blue plaid scarf',
          124689332,
          30,
          '$35.00',
          '$60.00',
          10,
          '$600.00',
          '$250.00',
          '',
        ],
        [
          'Pink plaid scarf',
          124689376,
          16,
          '$35.00',
          '$60.00',
          4,
          '$240.00',
          '$100.00',
          '',
        ],
      ];
  
      return (
        <div>
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
            <th scope="col" className="px-6 py-3">
                {headings[0]}
                </th>
                <th scope="col" className="px-6 py-3">
                {headings[1]}
                </th>
                <th scope="col" className="px-6 py-3">
                {headings[2]}
                </th>
                <th scope="col" className="px-6 py-3">
                {headings[3]}
                </th>
                <th scope="col" className="px-6 py-3">
                {headings[4]}
                </th>
                <th scope="col" className="px-6 py-3">
                {headings[5]}
                </th>
                <th scope="col" className="px-6 py-3">
                {headings[6]}
                </th>
                <th scope="col" className="px-6 py-3">
                {headings[7]}
                </th>
                <th scope="col" className="px-6 py-3">
                {headings[8]}
                </th>
            </tr>
        </thead>
          <tbody>
          <tr>
      <td>{rows[0][0]}</td>
      <td>{rows[0][1]}</td>
      <td>{rows[0][2]}</td>
      <td>{rows[0][3]}</td>
      <td>{rows[0][4]}</td>
      <td>{rows[0][5]}</td>
      <td>{rows[0][6]}</td>
      <td>{rows[0][7]}</td>
      <td>{rows[0][8]}</td>
    </tr>
    <tr>
      <td>{rows[1][0]}</td>
      <td>{rows[1][1]}</td>
      <td>{rows[1][2]}</td>
      <td>{rows[1][3]}</td>
      <td>{rows[1][4]}</td>
      <td>{rows[1][5]}</td>
      <td>{rows[1][6]}</td>
      <td>{rows[1][7]}</td>
      <td>{rows[1][8]}</td>
    </tr>
    <tr>
      <td>{rows[2][0]}</td>
      <td>{rows[2][1]}</td>
      <td>{rows[2][2]}</td>
      <td>{rows[2][3]}</td>
      <td>{rows[2][4]}</td>
      <td>{rows[2][5]}</td>
      <td>{rows[2][6]}</td>
      <td>{rows[2][7]}</td>
      <td>{rows[2][8]}</td>
    </tr>
    <tr>
      <td>{rows[3][0]}</td>
      <td>{rows[3][1]}</td>
      <td>{rows[3][2]}</td>
      <td>{rows[3][3]}</td>
      <td>{rows[3][4]}</td>
      <td>{rows[3][5]}</td>
      <td>{rows[3][6]}</td>
      <td>{rows[3][7]}</td>
      <td>{rows[3][8]}</td>
    </tr>
    <tr>
      <td>{rows[0][0]}</td>
      <td>{rows[0][1]}</td>
      <td>{rows[0][2]}</td>
      <td>{rows[0][3]}</td>
      <td>{rows[0][4]}</td>
      <td>{rows[0][5]}</td>
      <td>{rows[0][6]}</td>
      <td>{rows[0][7]}</td>
      <td>{rows[0][8]}</td>
    </tr>
          
            
            
          </tbody>
        </table>
            </div>
      );
    }
  }