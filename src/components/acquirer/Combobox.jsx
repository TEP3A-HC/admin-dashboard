import { Select, SelectItem } from "@tremor/react";

const SelectComponent = ({ onSelectAcquirer }) => {
  const acquirers = [
    "CuroPayments",
    "PPRO",
    "LocalPayment",
    "Yapily",
    "Saltedge",
  ];

  const handleChange = (value) => {
    onSelectAcquirer(value); // Notify parent of the selected acquirer
  };

  return (
    <Select onValueChange={handleChange} placeholder="Select an acquirer...">
      {acquirers.map((acquirer) => (
        <SelectItem key={acquirer} value={acquirer}>
          {acquirer}
        </SelectItem>
      ))}
    </Select>
  );
};

export default SelectComponent;
