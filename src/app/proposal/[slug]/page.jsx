"use client";

import React from "react";
import clientsData from "@/data/clients.json";

import { Hero } from "../Hero";
import { PersonalNote } from "../PersonalNote";
import { Recommendation } from "../Recommendation";
import { Deliverables } from "../Deliverables";
import { DemoProjects } from "../DemoProjects";
import { Timeline } from "../Timeline";
import { Investment } from "../Investment";
import { StatsBar } from "../StatsBar";
import { WhyUs } from "../WhyUs";
import { FAQ } from "../FAQ";

import { FloatingWhatsApp } from "../FloatingWhatsApp";
import { Divider } from "../Primitives";
import { CtaSection } from "../CtaSection";

export default function ProposalPage({ params }) {
  const { slug } = React.use(params);
  const client = clientsData.find((c) => c.slug === slug);

  if (!client) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center">
          <p
            className="font-display text-8xl font-bold mb-4"
            style={{ color: "var(--color-border)" }}
          >
            404
          </p>
          <p className="font-body text-base mb-2" style={{ color: "var(--color-muted)" }}>
            This proposal doesn't exist or has expired.
          </p>
          <a
            href="/"
            className="font-body text-sm"
            style={{ color: "var(--color-accent)" }}
          >
            ← Back to home
          </a>
        </div>
      </div>
    );
  }

  return (
    <>
      <main className="max-w-5xl mx-auto">
        {/* 1. Hero */}
        <Hero client={client} />

        <div className="flex flex-col">
          {/* 2. Personal note */}
          <Divider />
          <PersonalNote client={client} />

          {/* 3. Recommendation + tech badges */}
          <Divider />
          <Recommendation client={client} />

          {/* 4. Deliverables */}
          <Divider />
          <Deliverables client={client} />

          {/* 5. Demo projects */}
          {client.projects?.length > 0 && (
            <>
              <Divider />
              <DemoProjects client={client} />
            </>
          )}

          {/* 6. Timeline */}
          <Divider />
          <Timeline client={client} />

          {/* 7. Investment */}
          <Divider />
          <Investment client={client} />

          {/* 8. Stats bar */}
          <Divider />
          <StatsBar client={client} />

          {/* 9. Why us */}
          <Divider />
          <WhyUs />

          {/* 10. FAQ */}
          {client.faq?.length > 0 && (
            <>
              <Divider />
              <FAQ client={client} />
            </>
          )}

          {/* 11. CTA */}
          <Divider />
          <CtaSection client={client} />
        </div>
      </main>

      {/* 12. Floating WhatsApp — always visible after scroll */}
      <FloatingWhatsApp />
    </>
  );
}