'use client'
import React, { useState } from 'react';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker, DateRange } from 'react-date-range';
import { addDays } from 'date-fns';

interface CustomDateRange extends React.ComponentProps<typeof DateRange> {
  startDate: Date;
  endDate: Date;
  key: string;
}

function MyComponents(): JSX.Element {
  const [state, setState] = useState<CustomDateRange[]>([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: 'selection'
    }
  ]);

  return (
    <DateRange
      editableDateInputs={true}
      onChange={(item: any) => setState([item.selection])}
      moveRangeOnFirstSelection={false}
      ranges={state}
    />
  );
}

export default MyComponents;
