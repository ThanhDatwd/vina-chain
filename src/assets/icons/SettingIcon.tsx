import classNames from "classnames";

export const SettingIcon = ({ className }: { className?: string }) => {
  return (
    <div className={classNames("w-4 h-4", className)}>
      <svg
        viewBox="0 0 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <mask
          id="mask0_4301_1138"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="25"
          height="25"
        >
          <rect
            x="0.199921"
            y="0.308594"
            width="24"
            height="24"
            fill="#D9D9D9"
          />
        </mask>
        <g mask="url(#mask0_4301_1138)">
          <path
            d="M12.0124 21.3086C11.0538 21.3086 10.2453 20.5948 10.1264 19.6437L10.1135 19.5404C10.0281 18.857 9.53931 18.2972 8.93744 17.9624V17.9624C8.82001 17.8971 8.70813 17.8304 8.60181 17.7621C8.20785 17.5092 7.71443 17.4163 7.28363 17.5996L7.05245 17.6979C6.06581 18.1176 4.92118 17.7335 4.38744 16.8036L4.31102 16.6705C3.8234 15.8209 4.04435 14.7412 4.8265 14.1515L5.31344 13.7844C5.59014 13.5757 5.72491 13.2313 5.69031 12.8865V12.8865C5.67108 12.6948 5.66146 12.5086 5.66146 12.3278C5.66146 12.1599 5.67108 11.9833 5.69031 11.798V11.798C5.73056 11.4104 5.57137 11.0273 5.26017 10.7927L4.94616 10.5559C4.09674 9.91548 3.85964 8.74144 4.39395 7.82156V7.82156C4.92514 6.90704 6.05305 6.52955 7.02772 6.94009L7.29091 7.05094C7.70874 7.22694 8.18513 7.14772 8.56314 6.89738C8.6855 6.81635 8.81122 6.73868 8.94031 6.66437C9.04333 6.60507 9.1455 6.54976 9.24683 6.49846C9.66577 6.28637 9.9927 5.90526 10.054 5.43971L10.092 5.15119C10.2308 4.0968 11.1295 3.30859 12.193 3.30859V3.30859C13.2624 3.30859 14.1643 4.10538 14.2961 5.16664L14.333 5.46417C14.3905 5.92728 14.7113 6.30609 15.1294 6.51348C15.2391 6.56791 15.3437 6.62462 15.4432 6.68359C15.5441 6.74337 15.646 6.80826 15.7489 6.87829C16.1343 7.14057 16.6221 7.22684 17.0536 7.05022L17.3738 6.91913C18.35 6.51956 19.4713 6.90118 20.0011 7.81328V7.81328C20.5382 8.73786 20.2998 9.91791 19.446 10.5615L19.0202 10.8825C18.7418 11.0924 18.6389 11.4495 18.6519 11.798V11.798C18.6583 11.9705 18.6615 12.1406 18.6615 12.3086C18.6615 12.4637 18.6551 12.6275 18.6423 12.7999V12.7999C18.6135 13.1861 18.75 13.573 19.0598 13.8053L19.4048 14.064C20.2574 14.7033 20.4994 15.878 19.9689 16.8023V16.8023C19.4354 17.7319 18.2895 18.1137 17.305 17.69L17.0406 17.5762C16.6183 17.3944 16.135 17.4744 15.7553 17.7335C15.641 17.8116 15.5264 17.8847 15.4115 17.9528C15.3241 18.0047 15.2358 18.0535 15.1465 18.0994C14.7236 18.3164 14.3894 18.6991 14.3308 19.1708L14.2953 19.4567C14.1639 20.5144 13.2651 21.3086 12.1992 21.3086H12.0124ZM11.0817 19.3303C11.1492 19.8886 11.623 20.3086 12.1853 20.3086V20.3086C12.7413 20.3086 13.2117 19.8979 13.2868 19.3471L13.4229 18.3495C13.4847 17.8962 13.8176 17.5352 14.2419 17.3641C14.469 17.2725 14.6836 17.1684 14.8855 17.0519C15.1085 16.9232 15.3338 16.7681 15.5613 16.5867C15.9129 16.3062 16.3864 16.2099 16.8001 16.3863L17.7107 16.7745C18.2256 16.994 18.8233 16.7964 19.1058 16.3133V16.3133C19.3907 15.8262 19.2653 15.2028 18.8141 14.8638L18.0297 14.2745C17.6612 13.9977 17.5216 13.5236 17.5782 13.0663C17.5798 13.0537 17.5812 13.0412 17.5826 13.0288C17.6096 12.7897 17.623 12.5496 17.623 12.3086C17.623 12.0547 17.6096 11.8147 17.5826 11.5884V11.5884C17.5283 11.1316 17.6615 10.6567 18.0285 10.3794L18.8528 9.75658C19.3041 9.41552 19.429 8.79072 19.1434 8.30236V8.30236C18.8609 7.81935 18.2645 7.6201 17.7484 7.83633L16.8307 8.22082C16.3914 8.4049 15.8887 8.28403 15.5091 7.99634C15.3267 7.85812 15.1252 7.72406 14.9047 7.59417C14.6801 7.46184 14.461 7.34981 14.2474 7.25808C13.8184 7.07384 13.4704 6.70384 13.418 6.23988L13.312 5.30086C13.2482 4.7357 12.7701 4.30859 12.2014 4.30859V4.30859C11.6339 4.30859 11.1564 4.73389 11.0911 5.29762L10.9836 6.22513C10.9301 6.6865 10.5834 7.05057 10.1491 7.21532C9.92473 7.30046 9.70993 7.4011 9.50474 7.51724C9.26907 7.65063 9.03411 7.81185 8.79984 8.00089C8.44719 8.28547 7.97114 8.38852 7.55314 8.21352L6.64878 7.8349C6.1342 7.61947 5.53963 7.81819 5.258 8.29974V8.29974C4.97195 8.78886 5.09895 9.41481 5.55303 9.75375L6.32144 10.3273C6.6792 10.5944 6.80611 11.0657 6.74994 11.5086V11.5086C6.7166 11.7714 6.69994 12.0445 6.69994 12.3278C6.69994 12.5817 6.7166 12.8336 6.74994 13.0836V13.0836C6.80945 13.53 6.6693 13.9952 6.31158 14.2687L5.53958 14.8591C5.09184 15.2015 4.96934 15.8239 5.2539 16.3104V16.3104C5.53754 16.7954 6.13725 16.9943 6.65447 16.7749L7.53646 16.4007C7.95218 16.2243 8.42691 16.3277 8.78024 16.6089C8.99818 16.7824 9.22045 16.9332 9.44706 17.0615C9.66804 17.1866 9.90366 17.2972 10.1539 17.3933C10.5793 17.5567 10.911 17.9186 10.9657 18.371L11.0817 19.3303ZM12.173 14.8086C12.8704 14.8086 13.4615 14.5663 13.9461 14.0817C14.4307 13.5971 14.673 13.006 14.673 12.3086C14.673 11.6112 14.4307 11.0201 13.9461 10.5355C13.4615 10.0509 12.8704 9.80859 12.173 9.80859C11.4717 9.80859 10.8797 10.0509 10.397 10.5355C9.91435 11.0201 9.67301 11.6112 9.67301 12.3086C9.67301 13.006 9.91435 13.5971 10.397 14.0817C10.8797 14.5663 11.4717 14.8086 12.173 14.8086Z"
            stroke="currentColor"
            stroke-linecap="round"
          />
        </g>
      </svg>
    </div>
  );
};
