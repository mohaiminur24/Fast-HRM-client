interface props {
  IsOpen: boolean;
  children: React.ReactNode;
}
export default function Modal({ IsOpen, children }: props) {
  return (
    <div
      className={`${
        IsOpen ? "absolute" : "hidden"
      } top-5 left-5 right-5 bottom-5 shadow-md bg-white opacity-95 rounded-md`}
    >
      {children}
    </div>
  );
}
