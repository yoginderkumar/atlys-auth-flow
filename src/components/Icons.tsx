import { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  size?: number;
  color?: string;
};
export function EyeIcon({ size = 24, color = "#7F8084", ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      fill={color}
      viewBox="0 0 20 16"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.41675 8C2.41675 7.19329 2.9352 5.70472 4.18615 4.40565C5.40728 3.13755 7.29896 2.08334 10.0001 2.08334C12.7012 2.08334 14.5929 3.13755 15.814 4.40565C17.065 5.70472 17.5834 7.19329 17.5834 8C17.5834 8.80671 17.065 10.2953 15.814 11.5944C14.5929 12.8624 12.7012 13.9167 10.0001 13.9167C7.29896 13.9167 5.40728 12.8624 4.18615 11.5944C2.9352 10.2953 2.41675 8.80671 2.41675 8ZM10.0001 0.583336C6.86787 0.583336 4.59288 1.82078 3.10567 3.36519C1.64829 4.87862 0.916748 6.72338 0.916748 8C0.916748 9.27662 1.64829 11.1214 3.10567 12.6348C4.59288 14.1792 6.86787 15.4167 10.0001 15.4167C13.1323 15.4167 15.4073 14.1792 16.8945 12.6348C18.3519 11.1214 19.0834 9.27662 19.0834 8C19.0834 6.72338 18.3519 4.87862 16.8945 3.36519C15.4073 1.82078 13.1323 0.583336 10.0001 0.583336ZM8.25 8C8.25 7.0335 9.03351 6.25 10 6.25C10.9665 6.25 11.75 7.0335 11.75 8C11.75 8.9665 10.9665 9.75 10 9.75C9.03351 9.75 8.25 8.9665 8.25 8ZM10 4.75C8.20508 4.75 6.75 6.20508 6.75 8C6.75 9.79493 8.20508 11.25 10 11.25C11.7949 11.25 13.25 9.79493 13.25 8C13.25 6.20508 11.7949 4.75 10 4.75Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function SpinnerIcon({
  size = 24,
  color = "#7F8084",
  ...props
}: IconProps) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      className="text-gray-200 animate-spin fill-primary"
      viewBox="0 0 100 101"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
        fill="currentColor"
      />
      <path
        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
        fill="currentFill"
      />
    </svg>
  );
}

export function Logo() {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.53118 10.6665C5.53118 7.83026 7.83042 5.53102 10.6667 5.53102C13.5029 5.53102 15.8022 7.83026 15.8022 10.6665C15.8022 13.5028 13.5029 15.802 10.6667 15.802C7.83042 15.802 5.53118 13.5028 5.53118 10.6665ZM10.6667 3.53102C6.72585 3.53102 3.53118 6.72569 3.53118 10.6665C3.53118 14.6073 6.72585 17.802 10.6667 17.802C14.6075 17.802 17.8022 14.6073 17.8022 10.6665C17.8022 6.72569 14.6075 3.53102 10.6667 3.53102ZM15.934 29.3336L6.46659 34.5709V24.0963L15.934 29.3336ZM6.32166 21.7305C5.48854 21.2696 4.46659 21.8722 4.46659 22.8243L4.46659 35.8429C4.46659 36.795 5.48854 37.3976 6.32166 36.9367L18.0885 30.4274C18.9484 29.9517 18.9484 28.7155 18.0885 28.2398L6.32166 21.7305ZM22.3333 23.5834C22.3333 22.893 22.893 22.3334 23.5833 22.3334H35.0833C35.7737 22.3334 36.3333 22.893 36.3333 23.5834V35.0834C36.3333 35.7737 35.7737 36.3334 35.0833 36.3334H23.5833C22.893 36.3334 22.3333 35.7737 22.3333 35.0834V23.5834ZM24.3333 24.3334V34.3334H34.3333V24.3334H24.3333ZM35.7071 5.70684C36.0976 5.31631 36.0976 4.68315 35.7071 4.29263C35.3166 3.9021 34.6834 3.9021 34.2929 4.29263L29.3333 9.25222L24.3738 4.29269C23.9832 3.90217 23.3501 3.90217 22.9596 4.29269C22.569 4.68322 22.569 5.31638 22.9596 5.70691L27.9191 10.6664L22.9596 15.626C22.569 16.0165 22.569 16.6496 22.9596 17.0402C23.3501 17.4307 23.9832 17.4307 24.3738 17.0402L29.3333 12.0806L34.2929 17.0402C34.6834 17.4308 35.3166 17.4308 35.7071 17.0402C36.0976 16.6497 36.0976 16.0166 35.7071 15.626L30.7475 10.6664L35.7071 5.70684Z"
        fill="#C5C7CA"
      />
    </svg>
  );
}

export function MenuIcon({
  size = 24,
  color = "#7F8084",
  ...props
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      fill={color}
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.83337 10C4.83337 10.8284 4.1618 11.5 3.33337 11.5C2.50495 11.5 1.83337 10.8284 1.83337 10C1.83337 9.17157 2.50495 8.5 3.33337 8.5C4.1618 8.5 4.83337 9.17157 4.83337 10ZM11.5 10C11.5 10.8284 10.8285 11.5 10 11.5C9.17161 11.5 8.50004 10.8284 8.50004 10C8.50004 9.17157 9.17161 8.5 10 8.5C10.8285 8.5 11.5 9.17157 11.5 10ZM16.6667 11.5C17.4951 11.5 18.1667 10.8284 18.1667 10C18.1667 9.17157 17.4951 8.5 16.6667 8.5C15.8383 8.5 15.1667 9.17157 15.1667 10C15.1667 10.8284 15.8383 11.5 16.6667 11.5Z"
        fill="currentFill"
      />
    </svg>
  );
}
