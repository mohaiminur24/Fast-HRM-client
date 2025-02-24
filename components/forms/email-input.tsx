import { FieldProps } from "formik";

interface Props extends FieldProps {
  title: string;
  placeholder?: string
  type?: "email"|"password"|"text";
}

export default function InputField({ field, form, title,placeholder , type="text"}: Props) {
  const handleSubmit = (value: string) => {
    form.setFieldValue(field.name, value);
  };

  return (
    <div className="flex flex-col">
      <h1 className="my-2">{title}</h1>
      <input
        className="border border-gray-300 bg-transparent outline-none p-4 text-sm font-sans bg-gray-200 rounded-md"
        name="Email"
        type={type}
        placeholder={placeholder}
        onChange={(e) => handleSubmit(e.target.value)}
      />
    </div>
  );
}
