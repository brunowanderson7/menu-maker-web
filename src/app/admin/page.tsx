"use client";

import React, { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

import InputMMUI from "@/components/InputMMUI";
import InputPassMMUI from "@/components/InputPassMMUI";
import ButtonMMUI from "@/components/ButtonMMUI";
import Avatar from "@mui/material/Avatar";
import { ADMIN_LOGIN } from "@/services/ auth/admin-auth";
import AlertMMUI from "@/components/AlertMMUI";
import { routes } from "@/routes/admin.routes";

export default function Admin() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState([false, false]);

  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  const router = useRouter();

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const data = new FormData(e.currentTarget);

    const email = data.get("admin-email-login")?.toString() || "";
    const password = data.get("admin-password-login")?.toString() || "";

    const newError = [...error];

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newError[0] = true;
    } else {
      newError[0] = false;
    }

    if (password.length < 6) {
      newError[1] = true;
    } else {
      newError[1] = false;
    }

    if (newError.includes(true)) {
      setLoading(false);
      setError(newError);
      return;
    }

    try {
      const res = await ADMIN_LOGIN({ email, password });
      console.log(res);

      localStorage.setItem("token", res.token);
      router.push(routes.dashboard);
    } catch (err) {
      setMessage("Erro ao fazer login");
      setOpen(true);
    }

    setLoading(false);
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-start p-24">
      <form
        onSubmit={handleLogin}
        className="w-full max-w-[1200px] flex flex-col items-center justify-center gap-3"
      >
        <Avatar
          alt="Logo menu maker"
          src="/logo.png"
          sx={{
            width: 256,
            height: 256,
          }}
        />

        {open && <AlertMMUI message={message} severity="error" />}

        <InputMMUI error={error[0]} label="Email" id="admin-email-login" />
        <InputPassMMUI
          error={error[1]}
          label="Senha *"
          id="admin-password-login"
        />

        <ButtonMMUI loading={loading} type="submit" label="Entrar" />
      </form>
    </main>
  );
}
