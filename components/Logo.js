export default function Logo({ darkModeActive }) {
  const color = darkModeActive ? "#F7FAFC" : "#020203";
  return (
    <svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M38.5014 48.8956L32.0129 61.4463L2 3H62L56.5345 13.8577H20.3332L24.4276 21.7523H52.5506L46.8721 32.281H29.9272L38.5014 48.8956Z"
        fill={color}
      />
    </svg>
  );
}
