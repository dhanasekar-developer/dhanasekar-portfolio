import { useState, useCallback, useContext, createContext } from "react";
import { useSelector } from "react-redux";
import { getDarkMode } from "../slices/darkModeSlice";
import { FaArrowsSpin } from "react-icons/fa6";
import { TiTickOutline } from "react-icons/ti";

const AlertContext = createContext();
AlertContext.displayName = "AlertContext";

function useAlert() {
  const context = useContext(AlertContext);
  if (!context) {
    throw new Error("useAlert must be used within an AlertProvider");
  }
  return context;
}

function AlertProvider({ children }) {
    const [isOpen, setIsOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState("");
    const [heading, setHeading] = useState("")
    const dark = useSelector(getDarkMode)
    const showAlert = useCallback(({ loading = false, message = "", heading = "" }) => {
        setIsLoading(loading);
        setIsOpen(true);
        setMessage(message);
        setHeading(heading);
    }, []);

    const closeAlert = useCallback(() => {
        setIsLoading(false);
        setIsOpen(false);
        setMessage("");
        setHeading("");
    }, []);

  return (
    <AlertContext.Provider value={{ showAlert, closeAlert }}>
      {children}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center text-secondary-one">
          <div className="fixed z-20 inset-0 flex items-center justify-center bg-secondary-one opacity-[.12]"></div>
          <div className={`bg-primary-one border-[3px] border-theme-color rounded-xl shadow-shadow_9 w-[90%] max-w-md text-center space-y-4 !z-50 `}>
            <div className="text-2xl min-h-[150px] flex flex-col justify-center items-center gap-4 relative pt-12">
              <div className="flex items-center justify-center gap-2 text-xl w-full bg-theme-color h-12 absolute top-0 left-0 right-0">
                  {heading}
              </div>
              {isLoading ? (
                <div className="flex items-center justify-center gap-2">
                    <FaArrowsSpin className="animate-spin [animation-duration:1.5s]" />
                    <span className="text-lg font-normal">Please wait</span>
                </div>
              ) : (
                <div className="flex justify-center items-center flex-col gap-2 p-4">
                  <span className="text-lg font-normal">{message}</span>
                  <button
                      onClick={closeAlert}
                      className="px-4 py-1 bg-theme-color text-white rounded-full font-semibold text-[14px] mt-2"
                  >
                      OK
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </AlertContext.Provider>
  );
}

export { AlertProvider, useAlert };
