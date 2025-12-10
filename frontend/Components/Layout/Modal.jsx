export default function Modal({ open, children }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0  bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white w-115 p-5 rounded-lg shadow-xl relative">


        {children}
      </div>
    </div>
  );
}
