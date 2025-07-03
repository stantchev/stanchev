"use client";

import React, { useState } from "react";
import { Input, Textarea, Button, Column } from "@once-ui-system/core";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Моля, въведете вашето име";
    if (!formData.email.trim()) newErrors.email = "Моля, въведете вашия имейл";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Моля, въведете валиден имейл адрес";
    if (!formData.message.trim()) newErrors.message = "Моля, въведете вашето съобщение";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Грешка при изпращане");

      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (err) {
      alert("Възникна грешка при изпращане. Моля, опитайте отново.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <Column
        gap="m"
        padding="l"
        style={{
          border: "2px solid var(--brand-strong)",
          borderRadius: 8,
          color: "var(--brand-strong)",
          textAlign: "center",
          fontWeight: "600",
          fontSize: "1.2rem",
        }}
      >
        Благодарим ви, вашето съобщение беше изпратено успешно.
      </Column>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <Column gap="16">
        <Input
          id="name"
          name="name"
          placeholder="Вашето име"
          value={formData.name}
          onChange={handleChange}
          error={errors.name}
          required
        />
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="your@email.com"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
          required
        />
        <Input
          id="subject"
          name="subject"
          placeholder="Тема на съобщението"
          value={formData.subject}
          onChange={handleChange}
          required
        />
        <Textarea
          id="message"
          name="message"
          placeholder="Вашето съобщение..."
          rows={6}
          value={formData.message}
          onChange={handleChange}
          error={errors.message}
          required
        />
        <Button
          type="submit"
          variant="primary"
          size="m"
          fillWidth
          disabled={isSubmitting}
        >
          {isSubmitting ? "Изпращане..." : "Изпрати съобщение"}
        </Button>
      </Column>
    </form>
  );
}
