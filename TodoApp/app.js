const list = document.querySelector("#list");
const form = document.querySelector("#new-task-form");
const input = document.querySelector("#new-task");
const deleteBtn = document.querySelector("#delete-btn");
form?.addEventListener("submit", (e) => {
    e.preventDefault();
    if (input?.value == "" || input?.value == null)
        return;
    const task = {
        id: 123,
        title: input.value,
        completed: false,
    };
    addListItem(task);
    input.value = "";
});
function addListItem(task) {
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
export {};
