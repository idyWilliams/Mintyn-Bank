import _ from "lodash";
import React, { useEffect, useState } from "react";
import {
  Control,
  Controller,
  useForm,
  UseFormGetValues,
} from "react-hook-form";
import Select from "react-select";

export type SelectOptionType = {
  label: string | number;
  value: string | number;
  description?: string;
  name?: string | number;
} | null;

type CustomSelectProps = {
  selectedOption: SelectOptionType | null;
  setSelectOption: (value: React.SetStateAction<any>) => void;
  options: any;
  isDisabled?: boolean;
  name?: string;
  control?: Control<any, any>;
  getValues?: UseFormGetValues<any>;
  placeholder?: string;
  errors?: any;
};

const CustomSelect = ({
  selectedOption,
  setSelectOption,
  options,
  isDisabled,
  name,
  getValues,
  control,
  placeholder,
  errors,
}: CustomSelectProps) => {
  const [defaultVal, setDefaultVal] = useState<SelectOptionType>(null);

  const handleChange = (option: any) => {
    setSelectOption(option);
  };

  const alteredOptions = options.map((option: any) => ({
    label: option.label || option.name,
    value: option.value || option.name,
    description: option.description || "",
  }));

  const actualOption = alteredOptions.find((option: SelectOptionType) => {
    return (
      option?.value === selectedOption?.value ||
      option?.value === selectedOption?.name ||
      (option?.value === selectedOption?.value &&
        selectedOption?.value.toString())
    );
  });

 const customStyles = {
   control: (provided: any, state: any) => ({
     ...provided,
     border: "none",
     width: "70px",
     height: "20px",
     boxShadow: state.isFocused ? "none" : provided.boxShadow,
   }),

   indicatorSeparator: () => ({
     display: "none",
   }),

   indicatorsContainer: (provided: any) => ({
     ...provided,
     paddingRight: "0px",
     background: "transparent",
     border: "none",
   }),

   dropdownIndicator: (provided: any) => ({
     ...provided,
     color: "#1875F0",
     border: "none",
     fontSize: "inherit", // Use the default font size
     padding: "2px", // Adjust the padding as per your preference
   }),

   singleValue: (provided: any) => ({
     ...provided,
     color: "#1875F0",
     textTransform: "capitalize",
   }),

   option: (provided: any) => ({
     ...provided,
     textTransform: "capitalize",
   }),
 };

  return (
    <div className="w-full">
      {control ? (
        <Controller
          control={control}
          name={_.camelCase(name)}
          defaultValue={
            getValues &&
            alteredOptions.find(
              (option: SelectOptionType) =>
                option?.label === getValues(_.camelCase(name))
            )
          }
          render={({ field: { onChange, onBlur, value, ref } }) => (
            <Select
              styles={customStyles}
              value={actualOption}
              defaultValue={
                getValues &&
                alteredOptions.find(
                  (option: SelectOptionType) =>
                    option?.label === getValues(_.camelCase(name))
                )
              }
              options={alteredOptions}
              placeholder={placeholder}
              isClearable={false}
              onChange={(option) => onChange(option.label)}
              isDisabled={isDisabled}
            />
          )}
        />
      ) : (
        <Select
          styles={customStyles}
          value={actualOption}
          options={alteredOptions}
          isClearable={false}
          placeholder={placeholder}
          onChange={handleChange}
          isDisabled={isDisabled}
        />
      )}
    </div>
  );
};

export default CustomSelect;
