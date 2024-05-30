const list = document.querySelector("#list") as HTMLUListElement;
const form = document.querySelector("#new-task-form") as HTMLFormElement;
const input = document.querySelector("#new-task") as HTMLInputElement;
const deleteBtn = document.querySelector("#delete-btn");

type Task = {
  id: number;
  title: string;
  completed: boolean;
};

form?.addEventListener("submit", (e) => {
  e.preventDefault();

  if (input?.value == "" || input?.value == null) return;

  const task = {
    id: 123,
    title: input.value,
    completed: false,
  };

  addListItem(task);
  input.value = "";
});

function addListItem(task: Task) {
  const item = document.createElement("li");
  const label = document.createElement("label");
  label.append(task.title);
  item.append(label);
  list?.append(item);
}

deleteBtn?.addEventListener("click", () => {
  if (list?.lastChild) {
    list.removeChild(list.lastChild);
  }
});
