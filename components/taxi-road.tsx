import { Taxi } from "@/components/taxi";

/** A small taxi that drives along the top edge of the footer. */
export function TaxiRoad() {
  return (
    <div aria-hidden className="relative h-[76px] overflow-hidden">
      <div className="taxi-drive absolute bottom-0 left-0 w-[160px]">
        <svg viewBox="0 0 430 202" className="block h-auto w-full">
          <g transform="translate(10 0)">
            <Taxi idPrefix="road" spin />
          </g>
        </svg>
      </div>
    </div>
  );
}
