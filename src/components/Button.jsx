export default function Button({ children, ...props }) {
  return (
    <button
      className="px-4 py-2 text-xs md:text-base rounded-md bg-teal-200 text-gray-700 font-bold hover:bg-teal-300 hover:text-gray-700"
      {...props}
    >
      {" "}
      {children}
    </button>
  );
}
