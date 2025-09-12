import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../components/ui/dialog";
import Form from "./Form";

const FlotForm = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 6000); // 6 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger className="hidden">Open</DialogTrigger>
      <DialogContent className="sm:max-w-[450px] w-[80%] bg-white shadow-2xl rounded-3xl p-6">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-bold text-red-600 montserrat">
            Contact Chamundeswari Astrology Center
          </DialogTitle>
          <DialogDescription className="mt-2 text-center text-gray-600 text-sm open-sans">
            Please fill in your details to get in touch
          </DialogDescription>
        </DialogHeader>

        <div className="mt-4">
          <Form />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default FlotForm;
