import { useState, useId } from "react";
import { useTranslation } from "react-i18next";
import { IconType } from "react-icons";
import { FiEye, FiEyeOff } from "react-icons/fi";

interface MainInputProps {
  id?: string;
  label?: string;
  placeholder?: string;
  type?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  Icon?: IconType;
  required?: boolean;
  disabled?: boolean;
}

const MainInput: React.FC<MainInputProps> = ({
  id,
  label,
  placeholder,
  type = "text",
  value,
  onChange,
  error,
  Icon,
  required = false,
  disabled = false,
}) => {
  const { t } = useTranslation();
  const autoId = useId();
  const inputId = id || autoId;

  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === "password";

  const togglePassword = () => setShowPassword((prev) => !prev);

  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={inputId}
          className="text-sm md:text-base block mb-2 font-medium text-gray-700"
        >
          {t(label)}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}

      {/* Input Wrapper */}
      <div
        className={`rounded-lg w-full py-3 px-4 flex items-center gap-3 bg-[#F0EDFFCC] focus-within:ring-2 focus-within:ring-primary ${
          disabled ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        {Icon && (
          <Icon size={20} className="text-text-gray" aria-hidden="true" />
        )}

        <input
          id={inputId}
          type={isPassword && showPassword ? "text" : type}
          value={value}
          onChange={onChange}
          placeholder={placeholder ? t(placeholder) : ""}
          required={required}
          disabled={disabled}
          aria-invalid={!!error}
          aria-describedby={error ? `${inputId}-error` : undefined}
          className="flex-1 outline-none w-full bg-transparent border-none text-[#333333] placeholder:text-gray-400"
        />

        {/* Password Toggle */}
        {isPassword && (
          <button
            type="button"
            onClick={togglePassword}
            aria-label={showPassword ? t("hide password") : t("show password")}
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
          >
            {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
          </button>
        )}
      </div>

      {/* Error Message */}
      {error && (
        <p
          id={`${inputId}-error`}
          className="text-red-500 text-xs mt-1"
          role="alert"
        >
          {t(error)}
        </p>
      )}
    </div>
  );
};

export default MainInput;
