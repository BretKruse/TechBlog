async function signupFormHandler(event) {
  event.preventDefault();

  const username = document.querySelector("#username-sign-up").value.trim();
  const email = document.querySelector("#email-sign-up").value.trim();
  const password = document.querySelector("#password-sign-up").value.trim();

  if (username && password) {
    const response = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({
        username,
        email,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      console.log("success");

      document.location.replace("/dashboard");
    } else {
      alert(response.statusText);
    }
  }
}

document
  .querySelector("#sign-up-form")
  .addEventListener("submit", signupFormHandler);
