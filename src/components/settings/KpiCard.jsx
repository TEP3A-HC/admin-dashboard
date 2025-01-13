// 'use client';
import { motion, useAnimation } from "framer-motion";
import { Card } from "@tremor/react";
import { useEffect, useState } from "react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const data = [
  {
    name: "Number of transactions",
    stat: 7148,
    backgroundColor: "bg-gray-100",
  },
  {
    name: "vs yesterday",
    stat: 7848,
    change: "-9.8%",
    changeType: "negative",
  },
  {
    name: "vs same day, previous month",
    stat: 6597, // Changed to number
    change: "+7.7%",
    changeType: "positive",
  },
];

export default function Example() {
  return (
    <motion.div className="col-span-2">
      <dl className="grid grid-cols-2 gap-3 sm:grid-cols-2 lg:grid-cols-1 ">
        {data.map((item) => (
          <Card
            key={item.name}
            className="relative w-full text-left ring-1 rounded-tremor-default p-6 shadow-tremor-card override-card"
          >
            <div className="flex items-center justify-between ">
              <dt className="text-tremor-default font-medium text-tremor-content dark:text-white ">
                {item.name}
              </dt>
              {item.change && item.changeType && (
                <span
                  className={classNames(
                    item.changeType === "positive"
                      ? "bg-emerald-100 text-emerald-800 ring-emerald-600/10 dark:bg-emerald-400/10 dark:text-emerald-500 dark:ring-emerald-400/20"
                      : "bg-red-100 text-red-800 ring-red-600/10 dark:bg-red-400/10 dark:text-red-500 dark:ring-red-400/20",
                    "inline-flex items-center rounded-tremor-small px-2 py-1 text-tremor-label font-medium ring-1 ring-inset"
                  )}
                >
                  {item.change}
                </span>
              )}
            </div>
            <dd className="text-tremor-metric font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
              <AnimatedNumber value={item.stat} />
            </dd>
          </Card>
        ))}
      </dl>
    </motion.div>
  );
}

// AnimatedNumber Component
function AnimatedNumber({ value }) {
  const [currentValue, setCurrentValue] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      current: value,
      transition: { duration: 2, ease: "easeInOut" },
    });
  }, [value, controls]);

  return (
    <motion.span
      animate={controls}
      initial={{ current: 0 }}
      onUpdate={(latest) => setCurrentValue(Math.round(latest.current))}
    >
      {Intl.NumberFormat("en-US").format(currentValue)}
    </motion.span>
  );
}
