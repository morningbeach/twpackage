'use client';

import { useState } from 'react';

export default function RFQDrawer() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* FAB */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-40 rounded-full bg-black text-white px-5 py-3 text-sm shadow-lg hover:opacity-90"
      >
        Get a Quote
      </button>

      {/* Drawer */}
      <div
        id="rfq"
        className={`fixed inset-0 z-50 ${open ? '' : 'pointer-events-none'}`}
        aria-hidden={!open}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/30 transition-opacity ${open ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setOpen(false)}
        />
        {/* Panel */}
        <div
          className={`absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl transition-transform duration-300 ${
            open ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between border-b px-6 py-4">
            <h3 className="text-lg font-medium">Request for Quotation</h3>
            <button onClick={() => setOpen(false)} className="text-neutral-500 hover:text-black">
              ×
            </button>
          </div>

          <form
            className="p-6 space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              const data = Object.fromEntries(new FormData(e.currentTarget as HTMLFormElement));
              alert('Submitted! (demo)\n\n' + JSON.stringify(data, null, 2));
              setOpen(false);
            }}
          >
            <div className="grid grid-cols-2 gap-3">
              <div className="col-span-2">
                <label className="text-sm">Company</label>
                <input name="company" className="mt-1 w-full rounded-lg border px-3 py-2" required />
              </div>
              <div>
                <label className="text-sm">Name</label>
                <input name="name" className="mt-1 w-full rounded-lg border px-3 py-2" required />
              </div>
              <div>
                <label className="text-sm">Email</label>
                <input
                  name="email"
                  type="email"
                  className="mt-1 w-full rounded-lg border px-3 py-2"
                  required
                />
              </div>
              <div className="col-span-2">
                <label className="text-sm">Category</label>
                <select name="category" className="mt-1 w-full rounded-lg border px-3 py-2">
                  <option>Gifts</option>
                  <option>Packaging Boxes</option>
                  <option>Gift Sets</option>
                </select>
              </div>
              <div className="col-span-2">
                <label className="text-sm">Details</label>
                <textarea
                  name="details"
                  rows={5}
                  placeholder="Sizes, materials, MOQ, delivery city..."
                  className="mt-1 w-full rounded-lg border px-3 py-2"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-black text-white px-5 py-3 text-sm hover:opacity-90"
            >
              Submit RFQ
            </button>
            <p className="text-xs text-neutral-500">
              This is a demo form. No data is sent to a server.
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
