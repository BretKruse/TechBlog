async function newFormHandler(event) {
  event.preventDefault();

  const titleElement = document.querySelector('input[name="post-title"]');
  const title = titleElement ? titleElement.value : "";

  const content =
    document.querySelector('textarea[name="content"]').value ||
    document.querySelector('input[name="content"]').value;

  const response = await fetch(`/api/posts`, {
    method: "POST",
    body: JSON.stringify({
      title,
      content,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert(response.statusText);
  }
}

document
  .querySelector("#new-post-form")
  .addEventListener("submit", newFormHandler);
