"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Header from "./Header";
import { usePathname } from "next/navigation";
import { Provider } from "react-redux";
import { store } from "../store/store";

interface Props {
  children: Readonly<React.ReactNode>;
}

const AppProvider = ({ children }: Props) => {
  const pathname = usePathname();
  const queryClient = new QueryClient({ defaultOptions: {} });

  if (pathname === "/auth") {
    return (
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <div className="text-slate-700 dark:text-white">{children}</div>
        </Provider>
      </QueryClientProvider>
    );
  } else {
    return (
      <>
        {pathname !== "/auth" && (
          <div className="text-slate-700 dark:text-white">
            <QueryClientProvider client={queryClient}>
              <Provider store={store}>
                <Header>{children}</Header>
              </Provider>
            </QueryClientProvider>
          </div>
        )}
      </>
    );
  }
};

export default AppProvider;
