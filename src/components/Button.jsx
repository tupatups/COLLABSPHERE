export default function Button({ children, ...props }) {
  return (
    <button
      className="px-4 py-2 text-xs md:text-base rounded-md bg-gray-800 text-gray-200 font-bold hover:bg-gray-700 hover:text-gray-100"
      {...props}
    >
      {" "}
      {children}
    </button>
  );
}
