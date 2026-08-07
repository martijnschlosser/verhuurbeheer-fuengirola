"use client";

import type { FormEvent, ReactNode } from "react";
import { useState } from "react";

type FormSubmitProps = {
  action: string;
  children: ReactNode;
  className?: string;
  thankYouPath: string;
};

export function FormSubmit({ action, children, className, thankYouPath }: FormSubmitProps) {
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setSubmitting(true);

    try {
      const ajaxAction = action.replace("https://formsubmit.co/", "https://formsubmit.co/ajax/");
      const response = await fetch(ajaxAction, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });

      if (!response.ok) throw new Error("Form submission failed");
      window.location.assign(thankYouPath);
    } catch {
      setSubmitting(false);
      form.submit();
    }
  }

  return (
    <form className={className} action={action} method="post" onSubmit={handleSubmit} aria-busy={submitting}>
      {children}
      {submitting && <p className="form-sending" role="status">Aanmelding wordt verstuurd…</p>}
    </form>
  );
}
