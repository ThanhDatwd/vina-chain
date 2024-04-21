import Link from "next/link";
import React, {
  ForwardRefRenderFunction,
  InputHTMLAttributes,
  ReactNode,
} from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error: string | null;
  className?: string;
  endIcon?: ReactNode;
  forgotPassword?: string;
}

const FormInput: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  props
) => {
  const { label, error, className, endIcon, forgotPassword, ...rest } = props;
  return (
    <div className="flex flex-col gap-2 text-[15px] text-dark900">
      <div className="flex justify-between">
        {label && <label>{label}</label>}
        {forgotPassword && (
          <Link href={"/coming-soon"} className="text-gray550 hover:text-[#0784c3]">
            {forgotPassword}
          </Link>
        )}
      </div>
      <div className="flex justify-between items-center p-3 border border-[#e9ecef] rounded-lg">
        <input
          className={`${className} flex-1 outline-none border-none placeholder:text-gray550`}
          {...rest}
        />
        {endIcon}
      </div>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default FormInput;
