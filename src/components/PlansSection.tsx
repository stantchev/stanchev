"use client";

import "./PlansSection.scss";

type Plan = {
  name: string;
  price: string;
  oldPrice?: string;
  period?: string;
  badge?: string;
  featured?: boolean;
  features: string[];
  cta: { href: string; label: string };
};

export default function PlansSection({ plans }: { plans: Plan[] }) {
  return (
    <section className="plans">
      {plans.map((p) => (
        <div key={p.name} className={`plan ${p.featured ? "featured" : ""}`}>
          {p.badge && <div className="badge">{p.badge}</div>}

          <h3>{p.name}</h3>
          <p className="price">
            {p.oldPrice && <span className="old">{p.oldPrice}</span>}
            {p.price} <span className="period">{p.period}</span>
          </p>

          <ul>
            {p.features.map((f) => (
              <li key={f}>✔ {f}</li>
            ))}
          </ul>

          <a href={p.cta.href} className="btn">
            {p.cta.label}
          </a>
        </div>
      ))}
    </section>
  );
}
