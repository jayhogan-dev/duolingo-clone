import { Loader } from "lucide-react";

const Loading = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center">
      <Loader className="h-10 w-10 text-indigo-400 animate-spin" />
    </div>
  );
};

export default Loading;
