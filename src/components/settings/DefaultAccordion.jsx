import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

const DefaultAccordion = () => {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <div className="max-w-xl mx-auto mt-8">
      <Accordion open={open === 1}>
        <AccordionHeader
          onClick={() => handleOpen(1)}
          className="text-base font-normal text-gray-100"
        >
          What time zone is used?
        </AccordionHeader>
        <AccordionBody className="text-lg font-bold text-blue-600">
          The entire web app uses the UTC time zone.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2}>
        <AccordionHeader
          onClick={() => handleOpen(2)}
          className="text-base font-normal text-gray-100"
        >
          Does the "Number of transactions" data refer to transactions from the
          last 24 hours or from the start (midnight) of this day?
        </AccordionHeader>
        <AccordionBody className="text-lg font-bold text-blue-600">
          The "Number of transactions" data refers to transactions from midnight
          until the moment the data is extracted from Production.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3}>
        <AccordionHeader
          onClick={() => handleOpen(3)}
          className="text-base font-normal text-gray-100"
        >
          Is the "Number of transactions" data compared to the data from the
          entire last day (0–24h) or to the data from the same time span?
        </AccordionHeader>
        <AccordionBody className="text-lg font-bold text-blue-600">
          The same time span is compared. For example, if today's data is
          extracted from Production at 3 PM, the same range (midnight–3 PM) is
          used for yesterday's transactions. The same calculation is applied for
          transactions on the same day of the previous month.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 4}>
        <AccordionHeader
          onClick={() => handleOpen(4)}
          className="text-base font-normal text-gray-100"
        >
          Is the "Conversion rate" data compared to the data from the entire
          last day (0–24h) or to the data from the same time span?
        </AccordionHeader>
        <AccordionBody className="text-lg font-bold text-blue-600">
          The same time span is compared. For example, if today's data is
          extracted from Production at 3 PM, the same range (midnight–3 PM) is
          used for yesterday's transactions. The same calculation is applied for
          transactions on the same day of the previous month.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 5}>
        <AccordionHeader
          onClick={() => handleOpen(5)}
          className="text-base font-normal text-gray-100"
        >
          Does the displayed data for today refer to the last 24 hours or to
          data collected from midnight to the moment of data extraction?
        </AccordionHeader>
        <AccordionBody className="text-lg font-bold text-blue-600">
          It always refers to data collected from midnight to the moment of data
          extraction. Data for yesterday, if not compared to today's data,
          refers to the entire previous day (midnight to midnight, UTC time
          zone).
        </AccordionBody>
      </Accordion>
    </div>
  );
};

export default DefaultAccordion;
