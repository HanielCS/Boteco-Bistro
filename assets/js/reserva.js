/**
 * Validação completa, máscara de telefone e envio de reserva (WhatsApp / E-mail)
 * Corrige bugs legados: typo 'documnent', encodeURIComponent, validação prévia e número oficial
 */
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formReserva");
  if (!form) return;

  const whatsappNumber = window.BOTECO_DATA?.restaurant?.whatsappNumber || "5575992783169";

  const fields = {
    nome: document.getElementById("nome"),
    email: document.getElementById("email"),
    telefone: document.getElementById("telefone"),
    data: document.getElementById("data"),
    hora: document.getElementById("hora"),
    numPessoas: document.getElementById("num_pessoas"),
    ambiente: document.getElementById("ambiente"),
    msg: document.getElementById("msg")
  };

  const btnWhatsapp = document.getElementById("enviarWhatsapp");
  const btnEmail = document.getElementById("enviarEmail");
  const confirmModal = document.getElementById("bookingConfirmModal");
  const summaryBox = document.getElementById("bookingSummaryBox");
  const closeConfirmModal = document.getElementById("closeBookingModal");

  // Define data mínima como hoje
  const todayISO = new Date().toISOString().split("T")[0];
  if (fields.data) {
    fields.data.min = todayISO;
    if (!fields.data.value) fields.data.value = todayISO;
  }

  // Máscara progressiva de telefone brasileiro: (75) 99999-9999
  fields.telefone?.addEventListener("input", (e) => {
    let digits = e.target.value.replace(/\D/g, "").slice(0, 11);
    if (digits.length > 6) {
      e.target.value = `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
    } else if (digits.length > 2) {
      e.target.value = `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
    } else if (digits.length > 0) {
      e.target.value = `(${digits}`;
    }
  });

  function setError(inputEl, message) {
    if (!inputEl) return;
    const errorEl = document.getElementById(`err-${inputEl.id}`);
    if (message) {
      inputEl.classList.add("is-invalid");
      if (errorEl) errorEl.textContent = message;
    } else {
      inputEl.classList.remove("is-invalid");
      if (errorEl) errorEl.textContent = "";
    }
  }

  function validateForm() {
    let isValid = true;

    const nomeVal = fields.nome.value.trim();
    if (nomeVal.length < 3) {
      setError(fields.nome, "Informe seu nome completo (mínimo 3 caracteres).");
      isValid = false;
    } else {
      setError(fields.nome, "");
    }

    const emailVal = fields.email.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailVal)) {
      setError(fields.email, "Informe um endereço de e-mail válido.");
      isValid = false;
    } else {
      setError(fields.email, "");
    }

    const telDigits = fields.telefone.value.replace(/\D/g, "");
    if (telDigits.length < 10) {
      setError(fields.telefone, "Informe um telefone/WhatsApp válido com DDD.");
      isValid = false;
    } else {
      setError(fields.telefone, "");
    }

    if (!fields.data.value || fields.data.value < todayISO) {
      setError(fields.data, "Selecione uma data válida a partir de hoje.");
      isValid = false;
    } else {
      setError(fields.data, "");
    }

    if (!fields.hora.value) {
      setError(fields.hora, "Selecione o horário desejado.");
      isValid = false;
    } else {
      setError(fields.hora, "");
    }

    const people = Number(fields.numPessoas.value);
    if (!Number.isInteger(people) || people < 1 || people > 40) {
      setError(fields.numPessoas, "Informe entre 1 e 40 pessoas.");
      isValid = false;
    } else {
      setError(fields.numPessoas, "");
    }

    return isValid;
  }

  function formatDateBR(isoDate) {
    const [y, m, d] = isoDate.split("-");
    return `${d}/${m}/${y}`;
  }

  function getPayload() {
    return {
      nome: fields.nome.value.trim(),
      email: fields.email.value.trim(),
      telefone: fields.telefone.value.trim(),
      dataBR: formatDateBR(fields.data.value),
      hora: fields.hora.value,
      numPessoas: fields.numPessoas.value,
      ambiente: fields.ambiente ? fields.ambiente.value : "Salão Principal",
      msg: fields.msg.value.trim() || "Nenhuma observação adicional."
    };
  }

  function showSummaryModal(payload, channelLabel) {
    if (!confirmModal || !summaryBox) return;
    summaryBox.innerHTML = `
      <div><strong>Canal de Envio:</strong> ${channelLabel}</div>
      <div><strong>Cliente:</strong> ${payload.nome}</div>
      <div><strong>Contato:</strong> ${payload.telefone} • ${payload.email}</div>
      <div><strong>Data e Horário:</strong> ${payload.dataBR} às ${payload.hora}</div>
      <div><strong>Mesa:</strong> ${payload.numPessoas} ${Number(payload.numPessoas) === 1 ? "pessoa" : "pessoas"} (${payload.ambiente})</div>
      <div><strong>Observações:</strong> ${payload.msg}</div>
    `;
    confirmModal.classList.add("is-open");
  }

  // Envio via WhatsApp Oficial
  btnWhatsapp?.addEventListener("click", (event) => {
    event.preventDefault();
    if (!validateForm()) {
      window.showToast?.("Verifique os campos destacados antes de enviar.", "fa-triangle-exclamation");
      return;
    }

    const p = getPayload();
    const text = [
      "*Solicitação de Reserva — Boteco Bistrô*",
      "",
      `*Nome:* ${p.nome}`,
      `*E-mail:* ${p.email}`,
      `*Telefone:* ${p.telefone}`,
      `*Data:* ${p.dataBR}`,
      `*Horário:* ${p.hora}`,
      `*Pessoas:* ${p.numPessoas}`,
      `*Preferência:* ${p.ambiente}`,
      `*Observações:* ${p.msg}`
    ].join("\n");

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

    btnWhatsapp.disabled = true;
    setTimeout(() => {
      btnWhatsapp.disabled = false;
    }, 3000);

    showSummaryModal(p, "WhatsApp Oficial ((75) 99278-3169)");
    window.open(url, "_blank", "noopener,noreferrer");
  });

  // Envio via E-mail (FormSubmit)
  btnEmail?.addEventListener("click", (event) => {
    event.preventDefault();
    if (!validateForm()) {
      window.showToast?.("Verifique os campos destacados antes de enviar.", "fa-triangle-exclamation");
      return;
    }

    const p = getPayload();
    showSummaryModal(p, "E-mail (FormSubmit)");
    setTimeout(() => {
      form.submit();
    }, 900);
  });

  closeConfirmModal?.addEventListener("click", () => confirmModal?.classList.remove("is-open"));
  confirmModal?.addEventListener("click", (e) => {
    if (e.target === confirmModal) confirmModal.classList.remove("is-open");
  });
});
