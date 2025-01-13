import { Select, SelectItem } from "@tremor/react";

const SelectComponent = ({ onSelectPaymentOption }) => {
  const paymentOptions = [
    "iDeal",
    "Blik",
    "P24",
    "EPS",
    "PIX",
    "SEPA",
    "Sofort",
    "PaySafeCard",
  ];

  const handleChange = (value) => {
    onSelectPaymentOption(value); // Notify parent of the selected payment Option
  };

  return (
    <Select
      onValueChange={handleChange}
      placeholder="Select a payment option..."
    >
      {paymentOptions.map((paymentOption) => (
        <SelectItem key={paymentOption} value={paymentOption}>
          {paymentOption}
        </SelectItem>
      ))}
    </Select>
  );
};

export default SelectComponent;
