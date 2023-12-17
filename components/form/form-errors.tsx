import { XCircle } from "lucide-react";

interface FormErrorsProps {
  id: string;
  errors?: Record<string, string[] | undefined>;
}

const FormErrors = ({ id, errors }: FormErrorsProps) => {
  if (!errors) {
    return null;
  }

  return (
    <div
      id={`${id}-error`}
      aria-live="polite"
      className="mt-2 text-xs text-rose-500"
    >
      {errors?.[id]?.map((error: string) => (
        <div
          key={error}
          className="flex items-center font-medium p-2 border border-rose-50 bg-rose-500/10 rounded-sm"
        >
          <XCircle />
          {error}
        </div>
      ))}
    </div>
  );
};

export default FormErrors;
