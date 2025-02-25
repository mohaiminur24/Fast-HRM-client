import { Field, FieldProps } from "formik";
import { useRef } from "react";

interface OTPInputFieldProps {
  field: FieldProps["field"];
  form: FieldProps["form"];
  length: number;
}

const OTPInputField: React.FC<OTPInputFieldProps> = ({ field, form, length }) => {
  const inputRefs = useRef<HTMLInputElement[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const value = e.target.value;
    if (!/^\d*$/.test(value)) return;
    const otpString = inputRefs.current.map((input) => input?.value).join("");
    form.setFieldValue(field.name, otpString);
    if (value && index < length - 1) {
      inputRefs.current[index + 1]?.focus();

    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === "Backspace" && !inputRefs.current[index]?.value && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  return (
    <div className="flex gap-2">
      {Array.from({ length }).map((_, index) => (
        <Field key={index} name={`${field.name}.${index}`} validate={validateOTPField}>
          {({ field, meta }: FieldProps) => (
            <div className="relative">
              <input
                {...field}
                ref={(el) => {
                  inputRefs.current[index] = el as HTMLInputElement;
                }}
                type="text"
                maxLength={1}
                className={`w-12 h-12 border text-center text-xl font-semibold rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                  meta.touched && meta.error ? "border-red-500 focus:ring-red-500" : "border-gray-300"
                }`}
                value={field.value}
                onChange={(e) => handleChange(e, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
              />
              
            </div>
          )}
        </Field>
      ))}
    </div>
  );
};

// Validation for individual OTP field
const validateOTPField = (value: string) => {
  if (!value) {
    return "Required";
  }
  if (!/^\d{1}$/.test(value)) {
    return "Only digits allowed";
  }
};

export default OTPInputField;
