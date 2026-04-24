export default function ReusableCardComponent({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-w-100 border border-[#E5E7EB] bg-white rounded-lg">
      {children}
    </div>
  );
}
