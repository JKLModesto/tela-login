const usernameCad = document.getElementById("username") as HTMLInputElement;
const fullnameCad = document.getElementById("fullname") as HTMLInputElement;
const emailCad = document.getElementById("email") as HTMLInputElement;
const cpfCad = document.getElementById("cpf") as HTMLInputElement;
const passwordCad = document.getElementById("password") as HTMLInputElement;
const passwordConfirmationCad = document.getElementById(
  "passwordConfirmation"
) as HTMLInputElement;
const cadBtn = document.getElementById("cadBtn") as HTMLButtonElement;

passwordConfirmationCad.addEventListener("change", () => {
  if (passwordCad.value !== passwordConfirmationCad.value) {
    const spanElement = document.getElementById(
      "passwordCheck"
    ) as HTMLSpanElement;
    spanElement.textContent = "As senhas não coincidem!!";
    spanElement.style.color = "red";
    spanElement.style.fontSize = "20px";
    cadBtn.disabled = true;
  } else {
    const spanElement = document.getElementById(
      "passwordCheck"
    ) as HTMLSpanElement;
    spanElement.textContent = "As senhas coincidem!!";
    spanElement.style.color = "green";
    spanElement.style.fontSize = "20px";
    cadBtn.disabled = false;
  }
});

  cadBtn.addEventListener("click", async () => {
    const userData = {
      username: usernameCad.value,
      fullname: fullnameCad.value,
      email: emailCad.value,
      cpf: cpfCad.value,
      password: passwordCad.value,
    };
  
    try {
      const response = await fetch("/cadastro/infos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
  
      if (!response.ok) {
        throw new Error("Erro ao cadastrar usuário");
      }
  
      alert("Usuário cadastrado com sucesso!");
    } catch (error) {
      console.error("Erro ao cadastrar usuário:", error);
      alert("Erro ao cadastrar usuário. Verifique o console para mais detalhes.");
    }
  });
