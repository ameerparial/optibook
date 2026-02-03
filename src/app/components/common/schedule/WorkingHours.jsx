import { Button } from "../../ui/button";

export default function WorkingHoursCard() {
  return (
    <div className="w-full max-w-lg rounded-lg border bg-white p-4 space-y-4">
      <h2 className="text-base font-semibold">Working Hours</h2>

      {/* Monday to Friday */}
      <div className="space-y-2">
        <p className="text-sm font-medium">Monday to Friday</p>
        <div className="flex flex-col sm:flex-row gap-2">
          <input
            type="time"
            className="w-full px-3 py-2 border rounded-md text-sm"
          />
          <span className="hidden sm:flex items-center text-sm text-muted-foreground">
            To
          </span>
          <input
            type="time"
            className="w-full px-3 py-2 border rounded-md text-sm"
          />
        </div>
      </div>

      {/* Lunch Break */}
      <div className="space-y-2">
        <p className="text-sm font-medium">Lunch Break</p>
        <div className="flex flex-col sm:flex-row gap-2">
          <input
            type="time"
            className="w-full px-3 py-2 border rounded-md text-sm"
          />
          <span className="hidden sm:flex items-center text-sm text-muted-foreground">
            To
          </span>
          <input
            type="time"
            className="w-full px-3 py-2 border rounded-md text-sm"
          />
        </div>
      </div>

      {/* Saturday */}
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium">Saturday</p>
        <span className="text-sm text-muted-foreground">Not working</span>
      </div>

      {/* Save Button */}
      <div className="pt-2">
        <Button className="w-full sm:w-auto">Save Working Hours</Button>
      </div>
    </div>
  );
}
