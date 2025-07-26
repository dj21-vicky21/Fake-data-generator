import { ModeToggle } from './mode-toggle';

export function Header() {
  return (
    <div className="w-full border-b">
      <div className="max-w-[1400px] p-2 mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <h3 className="font-semibold text-sm mt-0.5">Genfaker</h3>
        </div>
        <div>
          <ModeToggle />
        </div>
      </div>
    </div>
  );
}
