import { createRoot } from "react-dom/client";
import "./style/index.css";
import App from "./App.tsx";
import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "./lib/tanstack-react-query/queryClient.ts";
import { BrowserRouter as Router } from "react-router-dom";
import AuthProvider from "./store/AuthProvider.tsx";
import { HelmetProvider } from "react-helmet-async";
import AxiosConfig from "./lib/axios/Axios.ts";
import LanguageProvider from "./store/LanguageProvider.tsx";
import ScrollToTop from "./components/common/scrollToTop/ScrollToTop.tsx";
import { Toaster } from "sonner";
createRoot(document.getElementById("root")!).render(
  <Router>
    <AuthProvider>
      <HelmetProvider>
        <QueryClientProvider client={queryClient}>
          <LanguageProvider>
            <AxiosConfig />
            <Toaster position="top-center" richColors closeButton />
            <App />
          </LanguageProvider>
          <ScrollToTop />
        </QueryClientProvider>
      </HelmetProvider>
    </AuthProvider>
  </Router>
);
