import { Wordmark } from "@/components/navbar";
import { TaxiRoad } from "@/components/taxi-road";

export function Footer() {
  return (
    <footer>
      <TaxiRoad />
      <div className="border-t-4 border-dashed border-taxi bg-black text-white">
        <div className="container flex flex-col items-center gap-4 py-14 text-center">
          <a href="#" aria-label="UltraPay home">
            <Wordmark inverted />
          </a>
          <p className="text-white">UltraPay — cashless taxi payments for South Africa</p>
          <p className="max-w-md text-sm text-gray-400">
            Proudly built in South Africa for taxi owners, associations and vendors.
          </p>
        </div>

        <div className="border-t border-white/10">
          <div className="container py-6 text-center text-xs text-gray-500">
            © {new Date().getFullYear()} UltraPay. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
