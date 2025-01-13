// 'use client';

import {
  Card,
  LineChart,
  List,
  ListItem,
  Divider,
  Select,
  SelectItem,
} from "@tremor/react";
import { useState } from "react";
import { motion } from "framer-motion";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const data = [
  { date: "Jan 23", Organic: 232, Sponsored: 0, Affiliate: 49 },
  { date: "Feb 23", Organic: 241, Sponsored: 0, Affiliate: 61 },
  { date: "Mar 23", Organic: 291, Sponsored: 0, Affiliate: 55 },
  { date: "Apr 23", Organic: 101, Sponsored: 0, Affiliate: 21 },
  { date: "May 23", Organic: 318, Sponsored: 0, Affiliate: 66 },
  { date: "Jun 23", Organic: 205, Sponsored: 0, Affiliate: 69 },
  { date: "Jul 23", Organic: 372, Sponsored: 0, Affiliate: 55 },
  { date: "Aug 23", Organic: 341, Sponsored: 0, Affiliate: 74 },
  { date: "Sep 23", Organic: 387, Sponsored: 120, Affiliate: 190 },
  { date: "Oct 23", Organic: 220, Sponsored: 0, Affiliate: 89 },
  { date: "Nov 23", Organic: 372, Sponsored: 0, Affiliate: 44 },
  { date: "Dec 23", Organic: 321, Sponsored: 0, Affiliate: 93 },
];

const summary = [
  { name: "Organic", value: 3273 },
  { name: "Sponsored", value: 120 },
  { name: "Affiliate", value: 866 },
];

const valueFormatter = (number) =>
  `${Intl.NumberFormat("us").format(number).toString()}`;

const statusColor = {
  Organic: "bg-blue-500",
  Sponsored: "bg-violet-500",
  Affiliate: "bg-fuchsia-500",
};

export default function Example() {
  const [timeRange, setTimeRange] = useState("lastMonth");

  // Filter data based on the selected time range
  const filteredData =
    {
      last7Days: data.slice(-2), // Example: Last 7 days
      lastMonth: data.slice(-4), // Example: Last month
      last3Months: data.slice(-6), // Example: Last 3 months
    }[timeRange] || data;

  return (
    <motion.div className="col-span-2">
      <>
        <Card className="sm:mx-auto sm:max-w-md">
          <div className="flex items-center justify-between">
            <h3 className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
              Units sold by channel
            </h3>
            <div>
              <Select
                onValueChange={(value) => setTimeRange(value)}
                defaultValue="lastMonth"
              >
                <SelectItem value="last7Days">Last 7 days</SelectItem>
                <SelectItem value="lastMonth">Last month</SelectItem>
                <SelectItem value="last3Months">Last 3 months</SelectItem>
              </Select>
            </div>
          </div>
          <Divider>Divider</Divider>
          <LineChart
            data={filteredData}
            index="date"
            categories={["Organic", "Sponsored", "Affiliate"]}
            colors={["blue", "violet", "fuchsia"]}
            valueFormatter={valueFormatter}
            showLegend={false}
            showYAxis={false}
            startEndOnly={true}
            className="mt-6 h-32"
          />
          <List className="mt-2">
            {summary.map((item) => (
              <ListItem key={item.name}>
                <div className="flex items-center space-x-2">
                  <span
                    className={classNames(statusColor[item.name], "h-0.5 w-3")}
                    aria-hidden={true}
                  />
                  <span>{item.name}</span>
                </div>
                <span className="font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
                  {valueFormatter(item.value)}
                </span>
              </ListItem>
            ))}
          </List>
        </Card>
      </>
    </motion.div>
  );
}
