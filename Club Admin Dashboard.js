const ADMIN_USERNAME = "admin";
const ADMIN_PASSWORD = "admin";
const CONTENT_STORAGE_KEY = "clubContent";

document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
    document.getElementById("loginSection").style.display = "none";
    document.getElementById("adminSection").style.display = "block";
    renderExistingContent();
  } else {
    alert("Invalid credentials");
  }
});

document.getElementById("contentForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;
  const successStory = document.getElementById("successStory").value;
  const imageFile = document.getElementById("imageUpload").files[0];

  const reader = new FileReader();
  reader.onloadend = function () {
    const content = {
      id: Date.now(),
      title: title,
      description: description,
      successStory: successStory,
      image: reader.result,
    };

    let contents = JSON.parse(
      localStorage.getItem(CONTENT_STORAGE_KEY) || "[]"
    );
    contents.push(content);
    localStorage.setItem(CONTENT_STORAGE_KEY, JSON.stringify(contents));

    document.getElementById("contentForm").reset();
    renderExistingContent();
  };

  if (imageFile) {
    reader.readAsDataURL(imageFile);
  } else {
    alert("Please upload an image");
  }
});

function renderExistingContent() {
  const existingContent = document.getElementById("existingContent");
  const contents = JSON.parse(
    localStorage.getItem(CONTENT_STORAGE_KEY) || "[]"
  );

  existingContent.innerHTML =
    "<h3>Existing Content</h3>" +
    contents
      .map(
        (content) => `
          <div>
              <strong>${content.title}</strong>
              <button onclick="deleteContent(${content.id})">Delete</button>
          </div>
      `
      )
      .join("");
}

function deleteContent(id) {
  let contents = JSON.parse(localStorage.getItem(CONTENT_STORAGE_KEY) || "[]");
  contents = contents.filter((content) => content.id !== id);
  localStorage.setItem(CONTENT_STORAGE_KEY, JSON.stringify(contents));
  renderExistingContent();
}
