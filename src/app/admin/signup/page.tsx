"use client";

import React, { FormEvent, useState } from "react";
import InputMMUI from "@/components/InputMMUI";
import InputPassMMUI from "@/components/InputPassMMUI";
import ButtonMMUI from "@/components/ButtonMMUI";
import Avatar from "@mui/material/Avatar";
import { useRouter } from "next/navigation";
import { ADMIN_SIGNUP } from "@/services/ auth/admin-auth";
import { routes } from "@/routes/admin.routes";
import AlertMMUI from "@/components/AlertMMUI";

export default function Admin() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState([false, false, false, false, false]);

  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  const router = useRouter();

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const data = new FormData(e.currentTarget);

    const firstName = data.get("admin-first-name")?.toString() || "";
    const lastName = data.get("admin-last-name")?.toString() || "";

    const email = data.get("admin-email")?.toString() || "";
    const password = data.get("admin-password")?.toString() || "";
    const passwordRepeat = data.get("admin-password-repeat")?.toString() || "";

    const newError = [...error];
    if (firstName.length < 3) {
      newError[0] = true;
    } else {
      newError[0] = false;
    }

    if (lastName.length < 3) {
      newError[1] = true;
    } else {
      newError[1] = false;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newError[2] = true;
    } else {
      newError[2] = false;
    }

    if (password.length < 6) {
      newError[3] = true;
    } else {
      newError[3] = false;
    }

    if (password !== passwordRepeat) {
      newError[4] = true;
    } else {
      newError[4] = false;
    }

    if (newError.includes(true)) {
      setLoading(false);
      setError(newError);
      return;
    }

    try {
      const res = await ADMIN_SIGNUP({ firstName, lastName, email, password });
      console.log(res);

      localStorage.setItem("token", res.token);
      router.push(routes.login);
    } catch (err) {
      setMessage("Erro ao se cadastrar");
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

        <InputMMUI error={error[0]} label="Nome" id="admin-first-name" />
        <InputMMUI error={error[1]} label="Sobrenome" id="admin-last-name" />

        <InputMMUI error={error[2]} label="Email" id="admin-email" />
        <InputPassMMUI error={error[3]} label="Senha *" id="admin-password" />
        <InputPassMMUI
          error={error[4]}
          label="Repita sua senha *"
          id="admin-password-repeat"
        />
        <ButtonMMUI loading={loading} type="submit" label="Cadastrar" />
      </form>
    </main>
  );
}
