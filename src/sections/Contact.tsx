import { useMemo, useState } from "react";
import Section from "../components/Section";
import Reveal from "../components/Reveal";
import emailjs from "@emailjs/browser";

type Status = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const disabled = useMemo(() => status === "sending", [status]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");

    try {
      /* ===========================
         1️⃣ AUTO-RÉPONSE → VISITEUR
      =========================== */
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_AUTOREPLY,
        {
          from_name: form.name,
          reply_to: form.email,
          message: form.message,
        },
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      );

      /* ===========================
         2️⃣ NOTIFICATION → TOI
      =========================== */
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_NOTIFY,
        {
          from_name: form.name,
          reply_to: form.email,
          message: form.message,
        },
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      );

      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("❌ EmailJS error:", error);
      setStatus("error");
    }
  }

  return (
    <Section
      id="contact"
      title="Contact"
      subtitle="Un message et je te réponds rapidement."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {/* =======================
            INFOS CONTACT
        ======================= */}
        <Reveal>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl shadow-glow">
            <h3 className="font-semibold">Coordonnées</h3>

            <p className="mt-3 text-sm text-white/70">
              Email :
              <span className="ml-1 text-white/85">
                mrdhlaura@gmail.com
              </span>
            </p>

            <p className="mt-2 text-sm text-white/70">
              LinkedIn :
              <a
                href="https://www.linkedin.com/in/laura-mridha-83b037273/"
                target="_blank"
                rel="noreferrer"
                className="ml-1 text-white/85 underline underline-offset-2 hover:text-white transition"
              >
                laura-mridha
              </a>
            </p>

            <div className="mt-6 rounded-xl border border-white/10 bg-black/20 p-4 text-xs text-white/60">
              Les messages reçoivent une réponse automatique.
              Je réponds personnellement dès que possible.
            </div>
          </div>
        </Reveal>

        {/* =======================
            FORMULAIRE
        ======================= */}
        <Reveal delay={0.06}>
          <form
            onSubmit={onSubmit}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl shadow-glow"
          >
            <div className="grid gap-4">
              <input
                className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm outline-none focus:border-white/25 transition"
                placeholder="Ton nom"
                value={form.name}
                onChange={(e) =>
                  setForm((s) => ({ ...s, name: e.target.value }))
                }
                required
                disabled={disabled}
              />

              <input
                className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm outline-none focus:border-white/25 transition"
                placeholder="Ton email"
                type="email"
                value={form.email}
                onChange={(e) =>
                  setForm((s) => ({ ...s, email: e.target.value }))
                }
                required
                disabled={disabled}
              />

              <textarea
                className="min-h-[130px] w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-sm outline-none focus:border-white/25 transition"
                placeholder="Ton message"
                value={form.message}
                onChange={(e) =>
                  setForm((s) => ({ ...s, message: e.target.value }))
                }
                required
                disabled={disabled}
              />

              <button
                type="submit"
                disabled={disabled}
                className="rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black hover:opacity-90 disabled:opacity-60 transition"
              >
                {status === "sending" ? "Envoi en cours..." : "Envoyer"}
              </button>

              {status === "sent" && (
                <p className="text-sm text-green-300">
                  Message envoyé avec succès ✅
                </p>
              )}

              {status === "error" && (
                <p className="text-sm text-red-300">
                  Erreur lors de l’envoi ❌ — réessaie plus tard.
                </p>
              )}
            </div>
          </form>
        </Reveal>
      </div>
    </Section>
  );
}


