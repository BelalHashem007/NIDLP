import Dashboard from "@/components/shared/dashboard/dashboard";

export default function CompaniesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="h-full">
      <body className="h-full">
        <Dashboard>{children}</Dashboard>
      </body>
    </html>
  );
}
