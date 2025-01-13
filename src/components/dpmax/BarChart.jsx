import { motion } from "framer-motion";
import { RiExternalLinkLine } from "@remixicon/react";
import {
  BarChart,
  Card,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
} from "@tremor/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const ratio = [
  {
    date: "Aug 01",
    image:
      "https://thumbs.dreamstime.com/b/turkey-flag-vector-round-flat-icon-turkey-flag-vector-round-flat-icon-illustration-101721021.jpg",
    "Successful requests": 1040,
    Errors: 0,
  },
  {
    date: "Aug 02",
    "Successful requests": 1200,
    Errors: 0,
  },
  {
    date: "Aug 03",
    "Successful requests": 1130,
    Errors: 0,
  },
  {
    date: "Aug 04",
    "Successful requests": 1050,
    Errors: 0,
  },
  {
    date: "Aug 05",
    "Successful requests": 920,
    Errors: 0,
  },
  {
    date: "Aug 06",
    "Successful requests": 870,
    Errors: 0,
  },
  {
    date: "Aug 07",
    "Successful requests": 790,
    Errors: 0,
  },
  {
    date: "Aug 08",
    "Successful requests": 910,
    Errors: 0,
  },
  {
    date: "Aug 09",
    "Successful requests": 951,
    Errors: 0,
  },
  {
    date: "Aug 10",
    "Successful requests": 1232,
    Errors: 0,
  },
  {
    date: "Aug 11",
    "Successful requests": 1230,
    Errors: 0,
  },
  {
    date: "Aug 12",
    "Successful requests": 1289,
    Errors: 0,
  },
  {
    date: "Aug 13",
    "Successful requests": 1002,
    Errors: 0,
  },
  {
    date: "Aug 14",
    "Successful requests": 1034,
    Errors: 0,
  },
  {
    date: "Aug 15",
    "Successful requests": 1140,
    Errors: 0,
  },
  {
    date: "Aug 16",
    "Successful requests": 1280,
    Errors: 0,
  },
  {
    date: "Aug 17",
    "Successful requests": 1345,
    Errors: 0,
  },
  {
    date: "Aug 18",
    "Successful requests": 1432,
    Errors: 0,
  },
  {
    date: "Aug 19",
    "Successful requests": 1321,
    Errors: 0,
  },
  {
    date: "Aug 20",
    "Successful requests": 1230,
    Errors: 0,
  },
  {
    date: "Aug 21",
    "Successful requests": 1020,
    Errors: 0,
  },
  {
    date: "Aug 22",
    "Successful requests": 1040,
    Errors: 0,
  },
  {
    date: "Aug 23",
    "Successful requests": 610,
    Errors: 81,
  },
  {
    date: "Aug 24",
    "Successful requests": 610,
    Errors: 87,
  },
  {
    date: "Aug 25",
    "Successful requests": 610,
    Errors: 92,
  },
  {
    date: "Aug 26",
    "Successful requests": 501,
    Errors: 120,
  },
  {
    date: "Aug 27",
    "Successful requests": 480,
    Errors: 120,
  },
  {
    date: "Aug 28",
    "Successful requests": 471,
    Errors: 120,
  },
  {
    date: "Aug 29",
    "Successful requests": 610,
    Errors: 89,
  },
  {
    date: "Aug 30",
    "Successful requests": 513,
    Errors: 199,
  },
  {
    date: "Aug 31",
    "Successful requests": 500,
    Errors: 56,
  },
];

const projects = [
  {
    date: "Aug 01",
    "Successful requests": 1040,
    "Online shop": 780,
    Blog: 200,
    "Test project": 60,
  },
  {
    date: "Aug 02",
    "Successful requests": 1200,
    "Online shop": 1030,
    Blog: 50,
    "Test project": 120,
  },
  {
    date: "Aug 03",
    "Successful requests": 1130,
    "Online shop": 950,
    Blog: 80,
    "Test project": 100,
  },
  {
    date: "Aug 04",
    "Successful requests": 1050,
    "Online shop": 840,
    Blog: 70,
    "Test project": 140,
  },
  {
    date: "Aug 05",
    "Successful requests": 920,
    "Online shop": 710,
    Blog: 50,
    "Test project": 160,
  },
  {
    date: "Aug 06",
    "Successful requests": 870,
    "Online shop": 660,
    Blog: 100,
    "Test project": 110,
  },
  {
    date: "Aug 07",
    "Successful requests": 790,
    "Online shop": 590,
    Blog: 120,
    "Test project": 80,
  },
  {
    date: "Aug 08",
    "Successful requests": 910,
    "Online shop": 700,
    Blog: 90,
    "Test project": 120,
  },
  {
    date: "Aug 09",
    "Successful requests": 951,
    "Online shop": 741,
    Blog: 90,
    "Test project": 120,
  },
  {
    date: "Aug 10",
    "Successful requests": 1232,
    "Online shop": 1040,
    Blog: 100,
    "Test project": 92,
  },
  {
    date: "Aug 11",
    "Successful requests": 1230,
    "Online shop": 1030,
    Blog: 100,
    "Test project": 100,
  },
  {
    date: "Aug 12",
    "Successful requests": 1289,
    "Online shop": 1099,
    Blog: 100,
    "Test project": 90,
  },
  {
    date: "Aug 13",
    "Successful requests": 1002,
    "Online shop": 842,
    Blog: 70,
    "Test project": 90,
  },
  {
    date: "Aug 14",
    "Successful requests": 1034,
    "Online shop": 884,
    Blog: 80,
    "Test project": 70,
  },
  {
    date: "Aug 15",
    "Successful requests": 1140,
    "Online shop": 970,
    Blog: 100,
    "Test project": 70,
  },
  {
    date: "Aug 16",
    "Successful requests": 1280,
    "Online shop": 1120,
    Blog: 90,
    "Test project": 70,
  },
  {
    date: "Aug 17",
    "Successful requests": 1345,
    "Online shop": 1185,
    Blog: 90,
    "Test project": 55,
  },
  {
    date: "Aug 18",
    "Successful requests": 1432,
    "Online shop": 1272,
    Blog: 90,
    "Test project": 55,
  },
  {
    date: "Aug 19",
    "Successful requests": 1321,
    "Online shop": 1161,
    Blog: 90,
    "Test project": 55,
  },
  {
    date: "Aug 20",
    "Successful requests": 1230,
    "Online shop": 1070,
    Blog: 100,
    "Test project": 60,
  },
  {
    date: "Aug 21",
    "Successful requests": 1020,
    "Online shop": 1090,
    Blog: 90,
    "Test project": 60,
  },
  {
    date: "Aug 22",
    "Successful requests": 1040,
    "Online shop": 510,
    Blog: 100,
    "Test project": 430,
  },
  {
    date: "Aug 23",
    "Successful requests": 610,
    "Online shop": 510,
    Blog: 100,
    "Test project": 430,
  },
  {
    date: "Aug 24",
    "Successful requests": 610,
    "Online shop": 510,
    Blog: 100,
    "Test project": 430,
  },
  {
    date: "Aug 25",
    "Successful requests": 610,
    "Online shop": 381,
    Blog: 100,
    "Test project": 129,
  },
  {
    date: "Aug 26",
    "Successful requests": 501,
    "Online shop": 360,
    Blog: 100,
    "Test project": 120,
  },
  {
    date: "Aug 27",
    "Successful requests": 480,
    "Online shop": 351,
    Blog: 100,
    "Test project": 120,
  },
  {
    date: "Aug 28",
    "Successful requests": 471,
    "Online shop": 510,
    Blog: 100,
    "Test project": 0,
  },
  {
    date: "Aug 29",
    "Successful requests": 610,
    "Online shop": 414,
    Blog: 100,
    "Test project": 0,
  },
  {
    date: "Aug 30",
    "Successful requests": 513,
    "Online shop": 444,
    Blog: 100,
    "Test project": 0,
  },
  {
    date: "Aug 31",
    "Successful requests": 500,
    "Online shop": 510,
    Blog: 100,
    "Test project": 0,
  },
];

const valueFormatter = (number) =>
  `${Intl.NumberFormat("us").format(number).toString()}`;

const tabs = [
  {
    name: "Ratio",
    data: ratio,
    categories: ["Successful requests", "Errors"],
    colors: ["blue", "red"],
    summary: [
      {
        name: "Successful requests",
        total: 23450,
        color: "bg-blue-500",
      },
      {
        name: "Errors",
        total: 1397,
        color: "bg-red-500",
      },
    ],
  },
  {
    name: "Projects",
    data: projects,
    categories: ["Online shop", "Blog", "Test project"],
    colors: ["blue", "cyan", "violet"],
    summary: [
      {
        name: "Online shop",
        total: 23450,
        color: "bg-blue-500",
      },
      {
        name: "Blog",
        total: 1397,
        color: "bg-cyan-500",
      },
      {
        name: "Test project",
        total: 1397,
        color: "bg-violet-500",
      },
    ],
  },
];

export default function Example() {
  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 lg:col-span-2 border border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
    >
      <Card className="p-0">
        <div className="p-6">
          <h3 className="font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
            API Requests
          </h3>
          <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">
            Number of API requests divided by the country from where the
            consumers' account is located.{" "}
            <a
              href="#"
              className="inline-flex items-center gap-1 text-tremor-default text-tremor-brand dark:text-dark-tremor-brand"
            >
              Learn more
              <RiExternalLinkLine className="size-4" aria-hidden={true} />
            </a>
          </p>
        </div>
        <div className="border-t border-tremor-border p-6 dark:border-dark-tremor-border">
          <TabGroup>
            <div className="md:flex md:items-center md:justify-between">
              <TabList
                variant="solid"
                className="w-full rounded-tremor-small md:w-60"
              >
                {tabs.map((tab) => (
                  <Tab
                    key={tab.name}
                    className="w-full justify-center ui-selected:text-tremor-content-strong ui-selected:dark:text-dark-tremor-content-strong"
                  >
                    {tab.name}
                  </Tab>
                ))}
              </TabList>
              <div className="hidden md:flex md:items-center md:space-x-2">
                <span
                  className="shrink-0 animate-pulse rounded-tremor-full bg-emerald-500/30 p-1"
                  aria-hidden={true}
                >
                  <span className="block size-2 rounded-tremor-full bg-emerald-500" />
                </span>
                <p className="mt-4 text-tremor-default text-tremor-content dark:text-dark-tremor-content md:mt-0">
                  Updated just now
                </p>
              </div>
            </div>
            <TabPanels>
              {tabs.map((tab) => (
                <TabPanel key={tab.name}>
                  <ul
                    role="list"
                    className="mt-6 flex flex-wrap gap-x-20 gap-y-10"
                  >
                    {tab.summary.map((item) => (
                      <li key={item.name}>
                        <div className="flex items-center space-x-2">
                          <span
                            className={classNames(
                              item.color,
                              "size-3 shrink-0 rounded-sm"
                            )}
                            aria-hidden={true}
                          />
                          <p className="font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
                            {valueFormatter(item.total)}
                          </p>
                        </div>
                        <p className="whitespace-nowrap text-tremor-default text-tremor-content dark:text-dark-tremor-content">
                          {item.name}
                        </p>
                      </li>
                    ))}
                  </ul>
                  <BarChart
                    data={tab.data}
                    index="date"
                    categories={tab.categories}
                    colors={tab.colors}
                    stack={true}
                    showLegend={false}
                    yAxisWidth={45}
                    valueFormatter={valueFormatter}
                    customXLabel={(data) => (
                      <img
                        src={data.image}
                        alt={data.date}
                        style={{
                          width: "30px",
                          height: "30px",
                          borderRadius: "50%",
                        }}
                      />
                    )}
                    className="mt-10 hidden h-72 md:block"
                  />
                  <BarChart
                    data={tab.data}
                    index="date"
                    categories={tab.categories}
                    colors={tab.colors}
                    stack={true}
                    showLegend={false}
                    showYAxis={false}
                    valueFormatter={valueFormatter}
                    className="mt-6 h-72 md:hidden"
                  />
                </TabPanel>
              ))}
            </TabPanels>
          </TabGroup>
        </div>
      </Card>
    </motion.div>
  );
}
