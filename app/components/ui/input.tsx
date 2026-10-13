import clsx from "clsx";
import { forwardRef } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
}
export const Input = forwardRef<HTMLInputElement, InputProps>(({ label, error, id, className, ...props }, ref) => {
    return (
        <div>
 
            {label && <label htmlFor={id} className="mb-1 block text-sm font-medium">{label}</label>}
            <input
                ref={ref}
                id={id}
                className={clsx(
                    "w-full rounded-md border px-3 py-2 text-sm transition-colors",
                    error ? "border-red-600 focus:outline-red-600" : "border-gray-300 focus:outline-primary",
                    className
                )}
                {...props}
            />
 
            {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
        </div>
    );
},
);
Input.displayName = "Input";