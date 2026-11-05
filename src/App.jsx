import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import AppRoutes from "./routes/AppRoutes";

const App = () => (
  <BrowserRouter>
    <AppRoutes />
    <ToastContainer
      position="bottom-left"
      autoClose={5000}
      newestOnTop
      closeOnClick
      pauseOnHover
      pauseOnFocusLoss={false}
      draggable
      theme="light"
      toastClassName="!rounded-xl !font-sans !text-sm !shadow-lift"
      progressClassName="!bg-electric"
    />
  </BrowserRouter>
);

export default App;
