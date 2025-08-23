import React from "react";

interface BadgeIconProps {
  icon: React.ReactNode;
  label: string; // aria-label
  count?: number;
  onClick?: () => void;
}

const BadgeIcon: React.FC<BadgeIconProps> = ({
  icon,
  label,
  count = 0,
  onClick,
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      aria-live="polite"
      className="relative flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 rounded-full"
    >
      {icon}
      {count > 0 && (
        <span
          className="absolute -top-1 -right-2 text-xs w-4 h-4 flex items-center justify-center rounded-full text-white bg-red-600"
          aria-label={`${count} new ${label}`}
        >
          {count}
        </span>
      )}
    </button>
  );
};

export default React.memo(BadgeIcon);
