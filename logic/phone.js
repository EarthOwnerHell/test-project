const phone_form = document.getElementById("phone_form");
phone_form?.addEventListener("input", () => {
  const digits = phone_form.value.replace(/\D/g, "").slice(0, 11); // до 11 цифр
  const d = digits.replace(/^8/, "7");
  const parts = [];
  if (d.length > 0) parts.push("+7");
  if (d.length > 1) parts.push(" (" + d.slice(1, 4));
  if (d.length >= 4) parts[parts.length - 1] += ")";
  if (d.length >= 5) parts.push(" " + d.slice(4, 7));
  if (d.length >= 8) parts.push("-" + d.slice(7, 9));
  if (d.length >= 10) parts.push("-" + d.slice(9, 11));
  phone_form.value = parts.join("");
});
phone_form?.setAttribute("pattern", "^\\+7 \\(\\d{3}\\) \\d{3}-\\d{2}-\\d{2}$");
