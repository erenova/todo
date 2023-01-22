/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
const projectsContainer = document.querySelector("[data-projects]");
const newProjectForm = document.querySelector("[data-new-project-form");
const newProjectInput = document.querySelector("[data-new-project-Input");
const deleteProjectButton = document.querySelector(
  "[data-delete-project-button]"
);
const listDisplayContainer = document.querySelector(
  "[data-todo-display-container]"
);
const listTitleElement = document.querySelector("[data-todo-title]");
const listCountElement = document.querySelector("[data-list-count]");
const tasksContainer = document.querySelector("[data-tasks]");
const taskTemplate = document.getElementById("task-template");
const newTaskForm = document.querySelector("[data-new-todo-form]");
const newTaskInput = document.querySelector("[data-new-todo-input]");
const clearCompletedTasksButton = document.querySelector(
  "[data-clear-completed-button]"
);

clearCompletedTasksButton.addEventListener("click", (e) => {
  const selectedList = lists.find((list) => list.id === selectedListId);
  selectedList.tasks = selectedList.tasks.filter((task) => !task.complete);
  saveAndRender();
});

window.addEventListener("keydown", (e) => {
  if (e.keyCode == 46) {
    lists = lists.filter((list) => list.id !== selectedListId);
    selectedListId = null;
    saveAndRender();
  }
});

deleteProjectButton.addEventListener("click", (e) => {
  lists = lists.filter((list) => list.id !== selectedListId);
  selectedListId = null;
  saveAndRender();
});
const LOCAL_STORAGE_LIST_KEY = "task.lists";
const LOCAL_STORAGE_SELECTED_LIST_ID_KEY = "task.selectedListId";
let lists = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_KEY)) || [];
let selectedListId = localStorage.getItem(LOCAL_STORAGE_SELECTED_LIST_ID_KEY);

projectsContainer.addEventListener("click", (e) => {
  if (e.target.tagName.toLowerCase() === "li") {
    selectedListId = e.target.dataset.listId;
    saveAndRender();
  }
});

tasksContainer.addEventListener("click", (e) => {
  if (e.target.tagName.toLowerCase() === "input") {
    const selectedList = lists.find((list) => list.id === selectedListId);
    const selectedTask = selectedList.tasks.find(
      (task) => task.id === e.target.id
    );
    selectedTask.complete = e.target.checked;
    save();
    renderTaskCount(selectedList);
  }
});

newProjectForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const projectName = newProjectInput.value;
  if (projectName == null || projectName === "") return;
  const project = createProject(projectName);
  newProjectInput.value = null;
  lists.push(project);
  saveAndRender();
});

newTaskForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const taskName = newTaskInput.value;
  if (taskName == null || taskName === "") return;
  const task = createTask(taskName);
  newTaskInput.value = null;
  const selectedList = lists.find((list) => list.id === selectedListId);
  selectedList.tasks.push(task);
  saveAndRender();
});

function createProject(name) {
  return {
    id: Date.now().toString(),
    name: name,
    tasks: [],
  };
}

function createTask(name) {
  return {
    id: Date.now().toString(),
    name: name,
    complete: false,
  };
}

function saveAndRender() {
  save();
  render();
}

function save() {
  localStorage.setItem(LOCAL_STORAGE_LIST_KEY, JSON.stringify(lists));
  localStorage.setItem(LOCAL_STORAGE_SELECTED_LIST_ID_KEY, selectedListId);
}

function render() {
  clearElement(projectsContainer);
  renderList();
  const selectedList = lists.find((list) => list.id === selectedListId);

  if (selectedListId == null) {
    listDisplayContainer.style.display = "none";
  } else {
    listDisplayContainer.style.display = "";
    renderTaskCount(selectedList);
    clearElement(tasksContainer);
    renderTasks(selectedList);
  }
}
function renderTasks(selectedList) {
  selectedList.tasks.forEach((task) => {
    const taskElement = document.importNode(taskTemplate.content, true);
    const checkbox = taskElement.querySelector("input");
    checkbox.id = task.id;
    checkbox.checked = task.complete;
    const label = taskElement.querySelector("label");
    label.htmlFor = task.id;
    label.append(task.name);
    tasksContainer.appendChild(taskElement);
  });
}

function renderTaskCount(selectedList) {
  const incompleteTaskCount = selectedList.tasks.filter(
    (task) => !task.complete
  ).length;
  const taskString = incompleteTaskCount === 1 ? "task" : "tasks";
  listCountElement.innerText = `${incompleteTaskCount} ${taskString} remaining`;
}

function renderList() {
  lists.forEach((list) => {
    const projectItem = document.createElement("li");
    projectItem.dataset.listId = list.id;
    projectItem.classList.add("project-item");
    projectItem.innerText = list.name;
    if (list.id == selectedListId) {
      projectItem.classList.add("active-item");
    }
    projectsContainer.appendChild(projectItem);
  });
}

function clearElement(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

saveAndRender();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MscUJBQXFCLEVBQUUsWUFBWTtBQUNyRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBwcm9qZWN0c0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1wcm9qZWN0c11cIik7XG5jb25zdCBuZXdQcm9qZWN0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1uZXctcHJvamVjdC1mb3JtXCIpO1xuY29uc3QgbmV3UHJvamVjdElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLW5ldy1wcm9qZWN0LUlucHV0XCIpO1xuY29uc3QgZGVsZXRlUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gIFwiW2RhdGEtZGVsZXRlLXByb2plY3QtYnV0dG9uXVwiXG4pO1xuY29uc3QgbGlzdERpc3BsYXlDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICBcIltkYXRhLXRvZG8tZGlzcGxheS1jb250YWluZXJdXCJcbik7XG5jb25zdCBsaXN0VGl0bGVFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLXRvZG8tdGl0bGVdXCIpO1xuY29uc3QgbGlzdENvdW50RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1saXN0LWNvdW50XVwiKTtcbmNvbnN0IHRhc2tzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLXRhc2tzXVwiKTtcbmNvbnN0IHRhc2tUZW1wbGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay10ZW1wbGF0ZVwiKTtcbmNvbnN0IG5ld1Rhc2tGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLW5ldy10b2RvLWZvcm1dXCIpO1xuY29uc3QgbmV3VGFza0lucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLW5ldy10b2RvLWlucHV0XVwiKTtcbmNvbnN0IGNsZWFyQ29tcGxldGVkVGFza3NCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICBcIltkYXRhLWNsZWFyLWNvbXBsZXRlZC1idXR0b25dXCJcbik7XG5cbmNsZWFyQ29tcGxldGVkVGFza3NCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gIGNvbnN0IHNlbGVjdGVkTGlzdCA9IGxpc3RzLmZpbmQoKGxpc3QpID0+IGxpc3QuaWQgPT09IHNlbGVjdGVkTGlzdElkKTtcbiAgc2VsZWN0ZWRMaXN0LnRhc2tzID0gc2VsZWN0ZWRMaXN0LnRhc2tzLmZpbHRlcigodGFzaykgPT4gIXRhc2suY29tcGxldGUpO1xuICBzYXZlQW5kUmVuZGVyKCk7XG59KTtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChlKSA9PiB7XG4gIGlmIChlLmtleUNvZGUgPT0gNDYpIHtcbiAgICBsaXN0cyA9IGxpc3RzLmZpbHRlcigobGlzdCkgPT4gbGlzdC5pZCAhPT0gc2VsZWN0ZWRMaXN0SWQpO1xuICAgIHNlbGVjdGVkTGlzdElkID0gbnVsbDtcbiAgICBzYXZlQW5kUmVuZGVyKCk7XG4gIH1cbn0pO1xuXG5kZWxldGVQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICBsaXN0cyA9IGxpc3RzLmZpbHRlcigobGlzdCkgPT4gbGlzdC5pZCAhPT0gc2VsZWN0ZWRMaXN0SWQpO1xuICBzZWxlY3RlZExpc3RJZCA9IG51bGw7XG4gIHNhdmVBbmRSZW5kZXIoKTtcbn0pO1xuY29uc3QgTE9DQUxfU1RPUkFHRV9MSVNUX0tFWSA9IFwidGFzay5saXN0c1wiO1xuY29uc3QgTE9DQUxfU1RPUkFHRV9TRUxFQ1RFRF9MSVNUX0lEX0tFWSA9IFwidGFzay5zZWxlY3RlZExpc3RJZFwiO1xubGV0IGxpc3RzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShMT0NBTF9TVE9SQUdFX0xJU1RfS0VZKSkgfHwgW107XG5sZXQgc2VsZWN0ZWRMaXN0SWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShMT0NBTF9TVE9SQUdFX1NFTEVDVEVEX0xJU1RfSURfS0VZKTtcblxucHJvamVjdHNDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gIGlmIChlLnRhcmdldC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09IFwibGlcIikge1xuICAgIHNlbGVjdGVkTGlzdElkID0gZS50YXJnZXQuZGF0YXNldC5saXN0SWQ7XG4gICAgc2F2ZUFuZFJlbmRlcigpO1xuICB9XG59KTtcblxudGFza3NDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gIGlmIChlLnRhcmdldC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09IFwiaW5wdXRcIikge1xuICAgIGNvbnN0IHNlbGVjdGVkTGlzdCA9IGxpc3RzLmZpbmQoKGxpc3QpID0+IGxpc3QuaWQgPT09IHNlbGVjdGVkTGlzdElkKTtcbiAgICBjb25zdCBzZWxlY3RlZFRhc2sgPSBzZWxlY3RlZExpc3QudGFza3MuZmluZChcbiAgICAgICh0YXNrKSA9PiB0YXNrLmlkID09PSBlLnRhcmdldC5pZFxuICAgICk7XG4gICAgc2VsZWN0ZWRUYXNrLmNvbXBsZXRlID0gZS50YXJnZXQuY2hlY2tlZDtcbiAgICBzYXZlKCk7XG4gICAgcmVuZGVyVGFza0NvdW50KHNlbGVjdGVkTGlzdCk7XG4gIH1cbn0pO1xuXG5uZXdQcm9qZWN0Rm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgY29uc3QgcHJvamVjdE5hbWUgPSBuZXdQcm9qZWN0SW5wdXQudmFsdWU7XG4gIGlmIChwcm9qZWN0TmFtZSA9PSBudWxsIHx8IHByb2plY3ROYW1lID09PSBcIlwiKSByZXR1cm47XG4gIGNvbnN0IHByb2plY3QgPSBjcmVhdGVQcm9qZWN0KHByb2plY3ROYW1lKTtcbiAgbmV3UHJvamVjdElucHV0LnZhbHVlID0gbnVsbDtcbiAgbGlzdHMucHVzaChwcm9qZWN0KTtcbiAgc2F2ZUFuZFJlbmRlcigpO1xufSk7XG5cbm5ld1Rhc2tGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBjb25zdCB0YXNrTmFtZSA9IG5ld1Rhc2tJbnB1dC52YWx1ZTtcbiAgaWYgKHRhc2tOYW1lID09IG51bGwgfHwgdGFza05hbWUgPT09IFwiXCIpIHJldHVybjtcbiAgY29uc3QgdGFzayA9IGNyZWF0ZVRhc2sodGFza05hbWUpO1xuICBuZXdUYXNrSW5wdXQudmFsdWUgPSBudWxsO1xuICBjb25zdCBzZWxlY3RlZExpc3QgPSBsaXN0cy5maW5kKChsaXN0KSA9PiBsaXN0LmlkID09PSBzZWxlY3RlZExpc3RJZCk7XG4gIHNlbGVjdGVkTGlzdC50YXNrcy5wdXNoKHRhc2spO1xuICBzYXZlQW5kUmVuZGVyKCk7XG59KTtcblxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdChuYW1lKSB7XG4gIHJldHVybiB7XG4gICAgaWQ6IERhdGUubm93KCkudG9TdHJpbmcoKSxcbiAgICBuYW1lOiBuYW1lLFxuICAgIHRhc2tzOiBbXSxcbiAgfTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlVGFzayhuYW1lKSB7XG4gIHJldHVybiB7XG4gICAgaWQ6IERhdGUubm93KCkudG9TdHJpbmcoKSxcbiAgICBuYW1lOiBuYW1lLFxuICAgIGNvbXBsZXRlOiBmYWxzZSxcbiAgfTtcbn1cblxuZnVuY3Rpb24gc2F2ZUFuZFJlbmRlcigpIHtcbiAgc2F2ZSgpO1xuICByZW5kZXIoKTtcbn1cblxuZnVuY3Rpb24gc2F2ZSgpIHtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oTE9DQUxfU1RPUkFHRV9MSVNUX0tFWSwgSlNPTi5zdHJpbmdpZnkobGlzdHMpKTtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oTE9DQUxfU1RPUkFHRV9TRUxFQ1RFRF9MSVNUX0lEX0tFWSwgc2VsZWN0ZWRMaXN0SWQpO1xufVxuXG5mdW5jdGlvbiByZW5kZXIoKSB7XG4gIGNsZWFyRWxlbWVudChwcm9qZWN0c0NvbnRhaW5lcik7XG4gIHJlbmRlckxpc3QoKTtcbiAgY29uc3Qgc2VsZWN0ZWRMaXN0ID0gbGlzdHMuZmluZCgobGlzdCkgPT4gbGlzdC5pZCA9PT0gc2VsZWN0ZWRMaXN0SWQpO1xuXG4gIGlmIChzZWxlY3RlZExpc3RJZCA9PSBudWxsKSB7XG4gICAgbGlzdERpc3BsYXlDb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICB9IGVsc2Uge1xuICAgIGxpc3REaXNwbGF5Q29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcIlwiO1xuICAgIHJlbmRlclRhc2tDb3VudChzZWxlY3RlZExpc3QpO1xuICAgIGNsZWFyRWxlbWVudCh0YXNrc0NvbnRhaW5lcik7XG4gICAgcmVuZGVyVGFza3Moc2VsZWN0ZWRMaXN0KTtcbiAgfVxufVxuZnVuY3Rpb24gcmVuZGVyVGFza3Moc2VsZWN0ZWRMaXN0KSB7XG4gIHNlbGVjdGVkTGlzdC50YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgY29uc3QgdGFza0VsZW1lbnQgPSBkb2N1bWVudC5pbXBvcnROb2RlKHRhc2tUZW1wbGF0ZS5jb250ZW50LCB0cnVlKTtcbiAgICBjb25zdCBjaGVja2JveCA9IHRhc2tFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKTtcbiAgICBjaGVja2JveC5pZCA9IHRhc2suaWQ7XG4gICAgY2hlY2tib3guY2hlY2tlZCA9IHRhc2suY29tcGxldGU7XG4gICAgY29uc3QgbGFiZWwgPSB0YXNrRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwibGFiZWxcIik7XG4gICAgbGFiZWwuaHRtbEZvciA9IHRhc2suaWQ7XG4gICAgbGFiZWwuYXBwZW5kKHRhc2submFtZSk7XG4gICAgdGFza3NDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0VsZW1lbnQpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyVGFza0NvdW50KHNlbGVjdGVkTGlzdCkge1xuICBjb25zdCBpbmNvbXBsZXRlVGFza0NvdW50ID0gc2VsZWN0ZWRMaXN0LnRhc2tzLmZpbHRlcihcbiAgICAodGFzaykgPT4gIXRhc2suY29tcGxldGVcbiAgKS5sZW5ndGg7XG4gIGNvbnN0IHRhc2tTdHJpbmcgPSBpbmNvbXBsZXRlVGFza0NvdW50ID09PSAxID8gXCJ0YXNrXCIgOiBcInRhc2tzXCI7XG4gIGxpc3RDb3VudEVsZW1lbnQuaW5uZXJUZXh0ID0gYCR7aW5jb21wbGV0ZVRhc2tDb3VudH0gJHt0YXNrU3RyaW5nfSByZW1haW5pbmdgO1xufVxuXG5mdW5jdGlvbiByZW5kZXJMaXN0KCkge1xuICBsaXN0cy5mb3JFYWNoKChsaXN0KSA9PiB7XG4gICAgY29uc3QgcHJvamVjdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgcHJvamVjdEl0ZW0uZGF0YXNldC5saXN0SWQgPSBsaXN0LmlkO1xuICAgIHByb2plY3RJdGVtLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWl0ZW1cIik7XG4gICAgcHJvamVjdEl0ZW0uaW5uZXJUZXh0ID0gbGlzdC5uYW1lO1xuICAgIGlmIChsaXN0LmlkID09IHNlbGVjdGVkTGlzdElkKSB7XG4gICAgICBwcm9qZWN0SXRlbS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlLWl0ZW1cIik7XG4gICAgfVxuICAgIHByb2plY3RzQ29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RJdGVtKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGNsZWFyRWxlbWVudChlbGVtZW50KSB7XG4gIHdoaWxlIChlbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICBlbGVtZW50LnJlbW92ZUNoaWxkKGVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gIH1cbn1cblxuc2F2ZUFuZFJlbmRlcigpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9