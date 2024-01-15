import Account from "./pages/Account";
import Bookings from "./pages/Bookings";
import Cars from "./pages/Cars";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import Settings from "./pages/Settings";
import Users from "./pages/Users";
import GlobalStyle from "./styles/GlobalStyle";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import AppLayout from "./ui/AppLayout";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import toast, { Toaster } from "react-hot-toast";
import Map from "./pages/Map";
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      <GlobalStyle />

      <BrowserRouter>
        <Routes>
          <Route index element={<Navigate replace to="/dashboard" />} />

          <Route element={<AppLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />

            <Route path="/bookings" element={<Bookings />} />

            <Route path="/settings" element={<Settings />} />
            <Route path="/cars" element={<Cars />} />
            <Route path="/map" element={<Map />} />
            <Route path="/users" element={<Users />} />
            <Route path="/account" element={<Account />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Toaster
          position="top-center"
          containerStyle={{ margin: "1rem", display: "flex" }}
          gutter={10}
          toastOptions={{
            success: {
              duration: 3000,
            },
            error: {
              duration: 5000,
            },
            style: {
              fontSize: "22px",
              maxWidth: "500px",
              padding: "14px 28px",
              backgroundColor: "var(--color-grey-1)",
              color: "var(--color-grey-8)",
            },
          }}
        ></Toaster>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
