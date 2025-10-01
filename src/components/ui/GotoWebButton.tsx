import { ArrowRight } from "lucide-react";

export default function GotoWebButton() {
  return (
    <div className="flex justify-center">
      <button
        disabled
        className="bg-gray-500 text-white cursor-not-allowed px-12 py-4 rounded-xl text-sm font-medium relative hover:bg-gray-600 transition-colors shadow-[inset_0_0_12px_rgba(0,0,0,1)] group"
        onClick={() => {
          window.location.href = "https://borccu.com";
        }}
      >
        <span className="flex items-center">
          Web Versiyonuna Git
          <span className="ml-2 transition-transform duration-300 group-hover:translate-x-3">
            <span className="w-2 h-2 text-white text-2xl font-bold">
              <ArrowRight />
            </span>
          </span>
        </span>
        <span className="absolute -top-2 -right-4 bg-white/50 text-black text-s px-2 py-0.5 rounded-full border border-gray-800 backdrop-blur-sm transition-all duration-300 group-hover:top-1/2 group-hover:right-1/2 group-hover:translate-x-1/2 group-hover:-translate-y-1/2 group-hover:px-24 group-hover:py-3 group-hover:text-md group-hover:bg-white/75">
          Yakında..
        </span>
      </button>
    </div>
  );
}
