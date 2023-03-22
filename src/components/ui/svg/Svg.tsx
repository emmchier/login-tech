import { FC } from 'react';
import { IconTypes } from '../../../interfaces';
import { theme } from '../../../styles/theme';

export const Brand: FC = () => {
  return (
    <svg
      aria-label="Brand icon"
      width="41"
      height="41"
      viewBox="0 0 41 41"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xlinkHref="http://www.w3.org/1999/xlink"
    >
      <rect width="40.6914" height="40.6914" fill="url(#pattern0)" />
      <defs>
        <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlinkHref="#image0_1_72" transform="scale(0.015625)" />
        </pattern>
        <image
          id="image0_1_72"
          width="64"
          height="64"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
};

export const ChevronIcon: FC<IconTypes> = ({ color = theme.color.text.secondary }) => (
  <svg
    aria-label="Chevron arrow icon"
    width="10"
    height="5"
    viewBox="0 0 10 5"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.14645 0.133133C9.34171 -0.0443778 9.65829 -0.0443778 9.85355 0.133133C10.0488 0.310644 10.0488 0.598446 9.85355 0.775957L5.35355 4.86687C5.15829 5.04438 4.84171 5.04438 4.64645 4.86687L0.146447 0.775957C-0.0488155 0.598446 -0.0488155 0.310644 0.146447 0.133133C0.341709 -0.0443778 0.658291 -0.0443778 0.853553 0.133133L5 3.90263L9.14645 0.133133Z"
      fill={color}
    />
  </svg>
);

export const ShowIcon: FC<IconTypes> = ({ color = theme.color.text.secondary }) => (
  <svg
    aria-label="Eye shown icon"
    width="25"
    height="15"
    viewBox="0 0 25 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15.1096 7.3271C15.9543 7.3271 16.639 6.62241 16.639 5.75315C16.639 4.88388 15.9543 4.1792 15.1096 4.1792C14.2649 4.1792 13.5802 4.88388 13.5802 5.75315C13.5802 6.62241 14.2649 7.3271 15.1096 7.3271Z"
      fill="white"
    />
    <path
      d="M24.7346 8.09548C23.6047 6.22974 22.0346 4.70486 20.1777 3.66995C18.3208 2.63505 16.2408 2.12556 14.141 2.1913C12.0351 2.12059 9.94812 2.62924 8.08569 3.66709C6.22326 4.70495 4.64969 6.23619 3.52009 8.10988L3.27405 8.57069L3.52009 9.0315C4.64896 10.8982 6.2189 12.4239 8.07601 13.4589C9.93312 14.494 12.0137 15.0028 14.1137 14.9357C16.2172 15.0039 18.3014 14.494 20.1613 13.4563C22.0211 12.4185 23.5925 10.8886 24.7209 9.0171L24.9669 8.55629L24.7346 8.09548ZM14.1273 13.0636C12.4265 13.1201 10.7381 12.7408 9.20716 11.9582C7.67621 11.1756 6.3485 10.0131 5.33809 8.57069C6.83933 6.3494 9.10593 4.83502 11.6532 4.35136C11.2386 4.77894 10.9296 5.30697 10.7532 5.88934C10.5769 6.47171 10.5386 7.09071 10.6417 7.69226L14.387 6.81384L11.9676 10.1259C12.6852 10.7993 13.6209 11.1564 14.5814 11.1233C15.5418 11.0902 16.4535 10.6694 17.1277 9.94802C17.8019 9.22664 18.1871 8.25983 18.2037 7.2476C18.2202 6.23537 17.8668 5.25517 17.2165 4.50977C19.5245 5.08263 21.5555 6.52103 22.9302 8.55629C21.9213 10.0014 20.5943 11.1666 19.0632 11.9518C17.5322 12.7369 15.843 13.1185 14.141 13.0636"
      fill={color}
    />
  </svg>
);

export const HideIcon: FC<IconTypes> = ({ color = theme.color.text.secondary }) => (
  <svg
    aria-label="Eye hidden icon"
    width="22"
    height="16"
    viewBox="0 0 22 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_120_288)">
      <path
        d="M5.27949 12.7255C3.43354 11.889 1.88728 10.5085 0.847839 8.76869H0.853492C2.58319 5.69931 6.3648 3.57393 10.7512 3.57393C11.8278 3.5723 12.9004 3.7033 13.945 3.96396"
        stroke={color}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.6075 4.88559C18.508 5.72354 20.099 7.13468 21.1578 8.92156C19.4281 11.9853 15.6465 14.1163 11.2601 14.1163C10.0876 14.1183 8.92023 13.9624 7.78937 13.6528"
        stroke={color}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.315 9.79221C7.64336 9.08105 7.27244 8.13791 7.27971 7.15975C7.28697 6.18159 7.67186 5.24407 8.354 4.54297C9.03613 3.84187 9.96275 3.43141 10.9403 3.39733C11.9179 3.36324 12.8709 3.70816 13.6002 4.36004L8.315 9.79221Z"
        stroke={color}
      />
      <path
        d="M10.2708 10.7078C10.7257 10.8895 11.211 10.9835 11.7009 10.9848C12.1992 10.9855 12.6927 10.8879 13.1532 10.6976C13.6137 10.5072 14.0322 10.2279 14.3845 9.87553C14.7369 9.52318 15.0162 9.10475 15.2066 8.64424C15.3969 8.18373 15.4945 7.69018 15.4938 7.19188C15.4953 6.6788 15.3914 6.17088 15.1885 5.69958L10.2708 10.7078Z"
        stroke={color}
      />
      <path
        d="M3.07507 14.9246L16.7318 1.07571"
        stroke={color}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_120_288">
        <rect width="22" height="15.5447" fill="white" transform="translate(0 0.227661)" />
      </clipPath>
    </defs>
  </svg>
);

export const LoadingIcon: FC<IconTypes> = ({ color = theme.color.white }) => (
  <svg
    aria-label="Loading icon"
    width="17"
    height="14"
    viewBox="0 0 17 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6.875 11.875C4.18562 11.875 2 9.68938 2 7C2 4.31063 4.18562 2.125 6.875 2.125C9.56437 2.125 11.75 4.31063 11.75 7L8.5 7L12.5625 11.0625L16.625 7L13.375 7C13.375 3.40875 10.4662 0.5 6.875 0.5C3.28375 0.5 0.375 3.40875 0.375 7C0.375 10.5912 3.28375 13.5 6.875 13.5L6.875 11.875Z"
      fill={color}
    />
  </svg>
);

export const WarningIcon: FC<IconTypes> = ({ color = theme.color.error }) => (
  <svg
    aria-label="Warning icon"
    width="16"
    height="14"
    viewBox="0 0 16 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16 13.9091L8 0.0909119L0 13.9091H16ZM8.72727 11C8.72727 11.4017 8.40166 11.7273 8 11.7273C7.59834 11.7273 7.27273 11.4017 7.27273 11C7.27273 10.5983 7.59834 10.2727 8 10.2727C8.40166 10.2727 8.72727 10.5983 8.72727 11ZM8.00022 9.40927C8.40188 9.40927 8.7275 9.08366 8.7275 8.682V5.63654C8.7275 5.23488 8.40188 4.90927 8.00022 4.90927C7.59856 4.90927 7.27295 5.23488 7.27295 5.63654V8.682C7.27295 9.08366 7.59856 9.40927 8.00022 9.40927Z"
      fill={color}
    />
  </svg>
);
