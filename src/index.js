import "./styles.css";

const onClickAdd = () => {
  const inputElement = document.getElementById("add-text");
  const inputText = inputElement.value;
  inputElement.value = "";

  const div = document.createElement("div");
  div.className = "list-row";

  const li = document.createElement("li");
  li.innerText = inputText;

  div.appendChild(li);
  document.getElementById("incomplete-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
