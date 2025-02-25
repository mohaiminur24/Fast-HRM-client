import { useAppSelector } from "@/redux/store";

interface props {
  title: string;
  className?: string;
  IsLoading?: boolean;
  OnClick?: () => void;
}

export default function Button({
  title,
  className,
  IsLoading = false,
  OnClick
}: props) {
  const theme = useAppSelector((state) => state.theme);

  return (
    <div
      onClick={OnClick}
      style={{ backgroundColor: theme.primary }}
      className={`w-full text-center py-3 rounded-md shadow-md cursor-pointer flex justify-center items-center ${className}`}
    >
      {IsLoading ? (
        <div className="flex justify-center items-center gap-2">
          <div className="border-2 border-white p-2 rounded-full border-dashed animate-spin"></div>
          <h1 className="font-sans text-sm animate-pulse" style={{ color: theme.buttonText }}>Loading ...</h1>
        </div>
      ) : (
        <h1 className="font-sans hover:scale-105" style={{ color: theme.buttonText }}>
          {title}
        </h1>
      )}
    </div>
  );
}
