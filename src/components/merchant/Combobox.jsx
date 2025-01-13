import { Select, SelectItem } from "@tremor/react";

const SelectComponent = ({ onSelectMerchant }) => {
  const merchants = [
    "mer_5c068b1",
    "mer_f8a70ae",
    "mer_23f10de",
    "mer_3d67ea6",
    "mer_1045854",
    "mer_2e6df72",
    "mer_59013d0",
    "mer_3d63177",
    "mer_cbfc4b8",
    "mer_2443b97",
    "mer_a36cc4b",
  ];

  const handleChange = (value) => {
    onSelectMerchant(value); // Notify parent of the selected merchant
  };

  return (
    <Select onValueChange={handleChange} placeholder="Select a merchant">
      {merchants.map((merchant) => (
        <SelectItem key={merchant} value={merchant}>
          {merchant}
        </SelectItem>
      ))}
    </Select>
  );
};

export default SelectComponent;
