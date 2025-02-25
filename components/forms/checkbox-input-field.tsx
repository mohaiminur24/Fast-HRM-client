"use client";

import { FieldProps } from "formik";

interface props extends FieldProps {
  title: string;
  className?: string;
}

export default function CheckboxInputField({
  title,
  field,
  form,
  className,
}: props) {
  const handleSubmit = (value: boolean) => {
    form.setFieldValue(field.name, value);
  };

  return (
    <div className={`flex flex-row gap-2 my-2 items-center ${className}`}>
      <input
        className="w-4 h-4"
        type="checkbox"
        onChange={(e) => handleSubmit(e.target.checked)}
        checked={field.value}
      />
      <h1 className="text-sm opacity-55">
        {title}
      </h1>
    </div>
  );
}
