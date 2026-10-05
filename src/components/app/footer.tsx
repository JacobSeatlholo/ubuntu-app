"use client";

import { PROGRAM, RESOURCES } from "@/lib/program-data";

export function AppFooter() {
  return (
    <footer className="mt-auto border-t border-uw-teal/15 bg-uw-navy text-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-3">
        <div>
          <p className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-uw-teal text-lg">
              ❄
            </span>
            <span className="text-sm font-extrabold uppercase tracking-widest">
              Ubuntu Wellness
            </span>
          </p>
          <p className="mt-3 max-w-xs text-xs leading-relaxed text-white/70">
            {PROGRAM.fullName} — prepared by {PROGRAM.preparedBy}. Building a healing
            circle that optimises individual health, protects the animals and heals the
            environment. {PROGRAM.hashtag}
          </p>
        </div>

        <div>
          <p className="text-sm font-bold">Resources</p>
          <ul className="mt-3 space-y-2">
            {RESOURCES.map((r) => (
              <li key={r.url}>
                <a
                  href={r.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-white/70 transition-colors hover:text-teal-200"
                >
                  {r.label} ↗
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-bold">Contact</p>
          <ul className="mt-3 space-y-2 text-xs text-white/70">
            <li>{PROGRAM.contact.address}</li>
            <li>
              <a href={`mailto:${PROGRAM.contact.email}`} className="hover:text-teal-200">
                {PROGRAM.contact.email}
              </a>
            </li>
            <li>{PROGRAM.contact.phone}</li>
            <li className="pt-2 text-white/50">
              Program Nutritionist — {PROGRAM.contact.nutritionist.name}
              <br />
              {PROGRAM.contact.nutritionist.email} · {PROGRAM.contact.nutritionist.phone}
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-[11px] text-white/50">
        {PROGRAM.contact.npo} · Content from the WFPB Ubuntu Manual. This app is an
        educational companion and does not replace medical advice — always work with your
        physician.
      </div>
    </footer>
  );
}
