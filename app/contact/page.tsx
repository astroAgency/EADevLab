"use client";

import { Mail, Send, AlertCircle, RefreshCw, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { useLanguage } from "@/context/language-context";
import { useState } from "react";

export default function ContactPage() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message");
      }

      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });

      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "An unexpected error occurred",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    if (error) setError(null);
  };

  const handleRetry = () => {
    setError(null);
    handleSubmit();
  };

  const isFormValid =
    formData.name && formData.email && formData.subject && formData.message;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="relative">
        {/* Background effects */}
        <div className="absolute inset-0 dot-pattern opacity-30" />
        <div className="absolute inset-0 mesh-gradient" />

        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-[-0.02em]">
                {t("contact.title1")}{" "}
                <span className="gradient-text">{t("contact.title2")}</span>
              </h1>
              <p className="text-muted-foreground text-base md:text-lg font-medium leading-relaxed max-w-2xl mx-auto">
                {t("contact.description")}
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-card/60 backdrop-blur-xl border border-[rgba(255,255,255,0.08)] rounded-2xl p-8 md:p-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
                  {t("contact.formTitle")}
                </h2>

                {/* Error Banner */}
                {error && (
                  <div className="bg-destructive/10 border border-destructive/30 rounded-xl p-4 mb-6">
                    <div className="flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                      <div className="flex-1">
                        <p className="text-foreground font-medium text-sm">
                          {error}
                        </p>
                      </div>
                      <Button
                        onClick={handleRetry}
                        disabled={isSubmitting || !isFormValid}
                        variant="outline"
                        className="bg-transparent border-[rgba(255,255,255,0.1)] text-foreground hover:bg-[rgba(255,255,255,0.05)] rounded-lg px-3 py-1.5 font-medium flex items-center gap-2 h-auto text-sm"
                      >
                        <RefreshCw className="w-3 h-3" />
                        {t("contact.retry")}
                      </Button>
                    </div>
                  </div>
                )}

                {submitted ? (
                  <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-8 text-center">
                    <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Send className="w-8 h-8 text-green-400" />
                    </div>
                    <h3 className="text-xl font-bold text-green-400 mb-2">
                      {t("contact.successTitle")}
                    </h3>
                    <p className="text-green-400/80">
                      {t("contact.successMessage")}
                    </p>
                  </div>
                ) : (
                  <div className="space-y-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium mb-2 text-foreground"
                      >
                        {t("contact.nameLabel")}
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder={t("contact.namePlaceholder")}
                        required
                        className="bg-background/50 border-[rgba(255,255,255,0.1)] rounded-xl px-4 h-12 text-base placeholder:text-muted-foreground focus:border-primary/50 focus:ring-primary/20"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium mb-2 text-foreground"
                      >
                        {t("contact.emailLabel")}
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder={t("contact.emailPlaceholder")}
                        required
                        className="bg-background/50 border-[rgba(255,255,255,0.1)] rounded-xl px-4 h-12 text-base placeholder:text-muted-foreground focus:border-primary/50 focus:ring-primary/20"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium mb-2 text-foreground"
                      >
                        {t("contact.subjectLabel")}
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder={t("contact.subjectPlaceholder")}
                        required
                        className="bg-background/50 border-[rgba(255,255,255,0.1)] rounded-xl px-4 h-12 text-base placeholder:text-muted-foreground focus:border-primary/50 focus:ring-primary/20"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium mb-2 text-foreground"
                      >
                        {t("contact.messageLabel")}
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder={t("contact.messagePlaceholder")}
                        required
                        rows={5}
                        className="w-full bg-background/50 border border-[rgba(255,255,255,0.1)] rounded-xl px-4 py-3 text-base resize-none placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 text-foreground"
                      />
                    </div>

                    <Button
                      type="button"
                      onClick={handleSubmit}
                      disabled={isSubmitting || !isFormValid}
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl py-5 text-base font-semibold h-auto disabled:opacity-50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(45,212,191,0.4)]"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <svg
                            className="animate-spin h-5 w-5"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                              fill="none"
                            />
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            />
                          </svg>
                          {t("contact.sending")}
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          <Send className="w-5 h-5" />
                          {t("contact.sendButton")}
                          <ArrowRight className="w-4 h-4" />
                        </span>
                      )}
                    </Button>
                  </div>
                )}
              </div>

              {/* Contact Info */}
              <div className="flex items-center justify-center">
                <div className="relative w-full overflow-hidden rounded-2xl">
                  {/* Gradient background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary via-[#14b8a6] to-accent" />
                  <div className="absolute inset-0 dot-pattern opacity-20" />

                  {/* Glow effect */}
                  <div className="absolute top-0 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-[80px]" />

                  <div className="relative p-10 md:p-12 text-white">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6">
                      <Mail className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3">
                      {t("contact.emailUs")}
                    </h3>
                    <p className="text-white/80 mb-6 leading-relaxed">
                      {t("contact.emailUsDesc")}
                    </p>
                    <a
                      href="mailto:eadev@eadevlab.com"
                      className="text-lg font-semibold hover:underline underline-offset-4 transition-all"
                    >
                      eadev@eadevlab.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
