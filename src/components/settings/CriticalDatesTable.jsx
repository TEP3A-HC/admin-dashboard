// 'use client';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
} from "@tremor/react";
import { motion } from "framer-motion";

const data = [
  {
    date: "2024-12-14",
    description: "Release 2024.42",
  },
  {
    date: "2024-12-07",
    description: "Release 2024.41",
  },
  {
    date: "2024-11-30",
    description: "Release 2024.40",
  },
  {
    date: "2024-11-21",
    description: "Down time (40 minutes)",
  },
  {
    date: "2024-11-16",
    description: "Release 2024.39",
  },
  {
    date: "2024-11-08",
    description: "Release 2024.38.1",
  },
  {
    date: "2024-11-02",
    description: "Release 2024.38",
  },
  {
    date: "2024-10-30",
    description: "PPRO Down Time (300 Acquirer Down trns)",
  },
  {
    date: "2024-10-23",
    description: "Release 2024.37",
  },
  {
    date: "2024-10-14",
    description: "Release 2024.36",
  },
  {
    date: "2024-10-12",
    description: "Release 2024.35.1",
  },
  {
    date: "2024-10-01",
    description: "Release 2024.35",
  },
];

export default function CriticalDatesTable() {
  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 lg:col-span-1 border border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
    >
      <>
        <div className="sm:flex sm:items-center sm:justify-between sm:space-x-10">
          <div>
            <h3 className="font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
              Important Dates
            </h3>
            <p className="mt-1 text-tremor-default leading-6 text-tremor-content dark:text-dark-tremor-content">
              Events that potentially could impact sales trends
            </p>
          </div>
        </div>
        <div className="mt-8 h-auto overflow-y-auto border dark:border-dark-tremor-border rounded-lg">
          <Table className="mt-8">
            <TableHead>
              <TableRow className="border-b border-tremor-border dark:border-dark-tremor-border">
                <TableHeaderCell className="text-tremor-content-strong dark:text-dark-tremor-content-strong">
                  Date
                </TableHeaderCell>
                <TableHeaderCell className="text-tremor-content-strong dark:text-dark-tremor-content-strong">
                  Description
                </TableHeaderCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((item) => (
                <TableRow
                  key={item.date}
                  className="even:bg-tremor-background-muted even:dark:bg-dark-tremor-background-muted"
                >
                  <TableCell className="font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
                    {item.date}
                  </TableCell>
                  <TableCell>{item.description}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </>
    </motion.div>
  );
}
