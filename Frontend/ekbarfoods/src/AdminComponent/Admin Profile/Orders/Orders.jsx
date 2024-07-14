import { Card, FormControl, FormControlLabel, Radio, RadioGroup, Typography } from '@mui/material';
import React, { useState } from 'react';
import OrderTables from './OrderTables';

const orderStatus = [
  { label: "Pending", value: "PENDING" },
  { label: "Completed", value: "COMPLETED" },
  { label: "All", value: "ALL" },
];

export const Orders = () => {
  const [filterValue, setFilterValue] = useState('ALL'); // Set default value

  const handleFilter = (e) => {
    setFilterValue(e.target.value);
  };

  return (
    <div className="flex gap-3 flex-col w-full px-10 p-10">
      <div className='shadow-md rounded-2xl p-5'>
        <div className="text-black text-xl font-bold flex items-start mb-4">
          Order Status
        </div>
        <FormControl>
          <RadioGroup row onChange={handleFilter} name='category' value={filterValue}>
            {orderStatus.map((item, index) => (
              <FormControlLabel
                key={index}
                value={item.value}
                control={<Radio />}
                label={item.label}
                sx={{ color: "gray" }}
              />
            ))}
          </RadioGroup>
        </FormControl>
      </div>
      <div className="shadow-md rounded-2xl w-full p-5">
        <OrderTables filterValue={filterValue} /> 
      </div>
    </div>
  );
}
