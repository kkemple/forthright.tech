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
        d="M32.0218 54.9806L35.1683 48.8944L25.0664 29.3196H45.1046L47.5887 24.7137H22.6275L15.4613 10.8962H54.7098L57.1938 5.96142H6.84978L32.0218 54.9806Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M38.5014 48.8956L32.0129 61.4463L2 3H62L56.5345 13.8577H20.3332L24.4276 21.7523H52.5506L46.8721 32.281H29.9272L38.5014 48.8956ZM25.0664 29.3196H45.1046L47.5887 24.7137H22.6275L15.4613 10.8962H54.7098L57.1938 5.96142H6.84978L32.0218 54.9806L35.1683 48.8944L25.0664 29.3196Z"
        fill={color}
      />
    </svg>
  );
}
