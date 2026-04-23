import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectItem,
} from "@/components/ui/select";
import Image from "next/image";

type Data = {
  name: string;
  photo?: string;
};

type Props = {
  value: string;
  setValue: (a: string) => void;
  data: Data[];
  defaultSelect: string;
  isImage: boolean;
};

export function Filter({
  value,
  setValue,
  data,
  defaultSelect,
  isImage,
}: Props) {
  return (
    <Select value={value} onValueChange={setValue}>
      <SelectTrigger className="flex-1 w-full px-3.25 py-5.25 rounded-md bg-white border border-[#E5E7EB] text-[#9CA3AF] shadow-[0px_1px_2px_0px_#0000000D] flex-row-reverse focus:ring-0 focus:ring-offset-0">
        <div className="flex items-center justify-between w-full flex-row-reverse gap-2">
          <div className="flex items-center gap-2">
            {/* 1. Logic for Employees */}
            {isImage ? (
              <>
                <span>{value}</span>
                <Image
                  src={data.find((e) => e.name === value)?.photo || ""}
                  width={24}
                  height={24}
                  alt=""
                  className="rounded-full"
                />
              </>
            ) : (
              <SelectValue placeholder={defaultSelect} />
            )}
          </div>
        </div>
      </SelectTrigger>
      <SelectContent
        className="bg-white border border-[#E5E7EB] rounded-xl shadow-lg p-2 ring-0"
        position="popper"
      >
        <SelectGroup>
          <SelectItem
            value={defaultSelect}
            className="flex justify-end cursor-pointer focus:bg-[#F3F4F6] transition-colors px-4 py-3 mb-1 rounded-lg"
          >
            {defaultSelect}
          </SelectItem>
          {data.map((r, i) => (
            <SelectItem
              key={i}
              value={r.name}
              className="flex justify-end items-center px-4 py-3 mb-1 rounded-lg text-right cursor-pointer focus:bg-[#F3F4F6] transition-colors"
            >
              <div className="flex items-center gap-2">
                <span>{r.name}</span>
                {r.photo && (
                  <Image
                    src={r.photo}
                    width={24}
                    height={24}
                    alt=""
                    className="rounded-full"
                  />
                )}
              </div>
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
