import { useTheme } from "@/hooks/useTheme";
import { THEME } from "@/utils/constants";
import React, { useState } from "react";

export const TwitterIcon = (props: any) => {
  const [isHover, setIsHover] = useState(false);
  const { theme } = useTheme();
  const hoverBg = theme === THEME.DARK ? "#D9610B" : "#3B3BFC";

  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onMouseMove={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <g clipPath="url(#clip0_2_42)">
        <path
          d="M17.9453 5.92578C17.957 6.10156 17.957 6.28125 17.957 6.45703C17.957 11.875 13.832 18.1211 6.29297 18.1211C3.96875 18.1211 1.8125 17.4492 0 16.2812C0.328125 16.3203 0.648438 16.332 0.988281 16.332C2.90625 16.332 4.66797 15.6836 6.07812 14.582C4.27734 14.543 2.76562 13.3633 2.24609 11.7383C2.5 11.7773 2.75391 11.8008 3.01953 11.8008C3.38672 11.8008 3.75391 11.75 4.09766 11.6602C2.21875 11.2812 0.8125 9.62891 0.8125 7.63672V7.58594C1.35938 7.89062 1.99219 8.08203 2.66406 8.10547C1.55859 7.37109 0.835938 6.11328 0.835938 4.69141C0.835938 3.92969 1.03906 3.23047 1.39453 2.62109C3.41406 5.10937 6.44531 6.73437 9.84766 6.91016C9.78516 6.60547 9.74609 6.28906 9.74609 5.97266C9.74609 3.71484 11.5742 1.875 13.8438 1.875C15.0234 1.875 16.0898 2.37109 16.8398 3.16797C17.7656 2.99219 18.6562 2.64844 19.4414 2.17969C19.1367 3.13281 18.4883 3.92969 17.6406 4.4375C18.4648 4.34766 19.2656 4.12109 20 3.80469C19.4414 4.61719 18.7422 5.33984 17.9453 5.92578Z"
          fill={isHover ? hoverBg : props.color}
        />
      </g>
      <defs>
        <clipPath id="clip0_2_42">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
