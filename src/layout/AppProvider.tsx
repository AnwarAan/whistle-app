"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Header from "./Header";
import { usePathname } from "next/navigation";

interface Props {
  children: Readonly<React.ReactNode>;
}

const AppProvider = ({ children }: Props) => {
  const pathname = usePathname();
  const queryClient = new QueryClient({ defaultOptions: {} });
  if (pathname === "/auth") {
    return (
      <QueryClientProvider client={queryClient}>
        <div className="text-slate-700 dark:text-white">{children}</div>
      </QueryClientProvider>
    );
  } else {
    return (
      <>
        {pathname !== "/auth" && (
          <div className="text-slate-700 dark:text-white">
            <QueryClientProvider client={queryClient}>
              <Header>{children}</Header>
            </QueryClientProvider>
          </div>
        )}
      </>
    );
  }
};

export default AppProvider;
