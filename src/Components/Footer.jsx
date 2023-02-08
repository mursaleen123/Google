export default function Footer() {
  return (
      <div className="text-center p-10 mt-10 border-t dark:border-gray-700 border-gray-200">
        <span>© {Date('d-m-y')}<br /> Copyright:</span>
        <a
          className="text-gray-600 font-semibold dark:text-gray-200"
          href=""
        >
          Muhammad Mursaleen Umar
        </a>
      </div>
  );
}