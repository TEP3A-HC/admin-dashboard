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
    workspace: "Institution List Update",
    owner: "2024-12-14 00:00:04.360",
    status: "Succeded",
    costs: "68",
  },
  {
    workspace: "Institution List Update",
    owner: "2024-12-11 00:00:02.533",
    status: "Failed",
    costs: "62",
  },
  {
    workspace: "Abort Transactions",
    owner: "2024-12-07 00:00:02.473",
    status: "Succeded",
    costs: "48",
  },
  {
    workspace: "Recur Transaction",
    owner: "2024-12-09 13:06:51.303",
    status: "Succeded",
    costs: "40",
  },
  {
    workspace: "Institution List Update",
    owner: "2024-12-12 00:00:02.193",
    status: "Pending",
    costs: "28",
  },
  {
    workspace: "Conversion Rate",
    owner: "2024-12-08 12:00:05.647",
    status: "Succeded",
    costs: "25",
  },
  {
    workspace: "Institution List Update",
    owner: "2024-12-14 00:00:04.360",
    status: "Failed",
    costs: "22",
  },
  {
    workspace: "Institution List Update",
    owner: "2024-12-11 00:00:02.533",
    status: "Failed",
    costs: "21",
  },
  {
    workspace: "Abort Transactions",
    owner: "2024-12-07 00:00:02.473",
    status: "Succeded",
    costs: "18",
  },
  {
    workspace: "Recur Transaction",
    owner: "2024-12-09 13:06:51.303",
    status: "Pending",
    costs: "12",
  },
  {
    workspace: "Institution List Update",
    owner: "2024-12-12 00:00:02.193",
    status: "Succeded",
    costs: "9",
  },
  {
    workspace: "Conversion Rate",
    owner: "2024-12-08 12:00:05.647",
    status: "Failed",
    costs: "7",
  },
];

export default function JobsTable() {
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
              Scheduled Jobs
            </h3>
            <p className="mt-1 text-tremor-default leading-6 text-tremor-content dark:text-dark-tremor-content">
              Top 10 long-lasting scheduled jobs in the last 10 days.
            </p>
          </div>
        </div>
        <div className="mt-8 h-auto overflow-y-auto border dark:border-dark-tremor-border rounded-lg">
          <Table className="mt-8">
            <TableHead>
              <TableRow className="border-b border-tremor-border dark:border-dark-tremor-border">
                <TableHeaderCell className="text-tremor-content-strong dark:text-dark-tremor-content-strong">
                  Job Name
                </TableHeaderCell>
                <TableHeaderCell className="text-tremor-content-strong dark:text-dark-tremor-content-strong">
                  Start Time
                </TableHeaderCell>
                <TableHeaderCell className="text-tremor-content-strong dark:text-dark-tremor-content-strong">
                  Status
                </TableHeaderCell>
                <TableHeaderCell className="text-tremor-content-strong dark:text-dark-tremor-content-strong">
                  Duration in seconds
                </TableHeaderCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((item) => (
                <TableRow
                  key={item.workspace}
                  className="even:bg-tremor-background-muted even:dark:bg-dark-tremor-background-muted"
                >
                  <TableCell className="font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
                    {item.workspace}
                  </TableCell>
                  <TableCell>{item.owner}</TableCell>
                  <TableCell>{item.status}</TableCell>
                  <TableCell>{item.costs}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </>
    </motion.div>
  );
}
