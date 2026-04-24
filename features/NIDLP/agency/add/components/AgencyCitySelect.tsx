import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
} from "@/components/ui/select";

export function AgencyCitySelect({
  id,
  value,
  onValueChange,
}: {
  id: string;
  value: string;
  onValueChange: (value: string) => void;
}) {
  return (
    <Select value={value} onValueChange={onValueChange}>
      <SelectTrigger
        className="flex-1 w-full rounded-md border border-[#E5E7EB] data-placeholder:text-[#9CA3AF]"
        dir="rtl"
        id={id}
      >
        <SelectValue
          placeholder="موقع الجهة الحكومية"
          style={{ color: "#9CA3AF" }}
        />
      </SelectTrigger>
      <SelectContent
        className="bg-white border border-[#E5E7EB] rounded-xl shadow-lg p-2 ring-0"
        position="popper"
        dir="rtl"
      >
        <SelectGroup>
          <SelectItem value="الرياض" className="focus:bg-[#F3F4F6]">
            الرياض
          </SelectItem>
          <SelectItem value="جدة" className="focus:bg-[#F3F4F6]">
            جدة
          </SelectItem>
          <SelectItem value="الطائف" className="focus:bg-[#F3F4F6]">
            الطائف
          </SelectItem>
          <SelectItem value="الدمام" className="focus:bg-[#F3F4F6]">
            الدمام
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
