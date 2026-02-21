console.log("=== My Interactive To-Do List ===");

// Global task storage
let myTasks = [];
let taskCounter = 1;

console.log("\n--- ELEMENT CREATION DEMO ---");
const demoDiv = document.createElement("div");
const demoSpan = document.createElement("span");
const demoBtn = document.createElement("button");

demoDiv.textContent = "Demo Div Element";
demoDiv.id = "demoDiv";
demoSpan.innerHTML = "<strong>Demo Span Element</strong>";
demoBtn.textContent = "Demo Button";

demoDiv.style.backgroundColor = "#d0e7ff";
demoDiv.style.padding = "8px";
demoDiv.style.border = "1px solid #007bff";

demoDiv.classList.add("demoClass");
demoDiv.classList.toggle("activeDemo");

demoSpan.style.display = "block";
demoSpan.style.marginTop = "8px";
demoBtn.style.display = "block";
demoBtn.style.marginTop = "8px";

document.getElementById("demoOutput").append(demoDiv, demoSpan, demoBtn);

console.log("Created elements:", demoDiv, demoSpan, demoBtn);

// To-Do List Functions
function addTask() {
    const input = document.getElementById("newTaskInput");
    const text = input.value.trim();

    if (!text) {
        alert("Please type a task!");
        return;
    }
    if (text.length > 100) {
        alert("Task too long! Max 100 characters.");
        return;
    }

    const task = {
        id: taskCounter++,
        text: text,
        completed: false
    };

    myTasks.push(task);
    const li = createTaskItem(task);
    document.getElementById("taskList").appendChild(li);
    input.value = "";

    updateStats();
}

function createTaskItem(task) {
    const li = document.createElement("li");
    li.className = "task-item";
    li.setAttribute("data-id", task.id);

    const spanText = document.createElement("span");
    spanText.className = "task-text";
    spanText.textContent = task.text;

    const spanStatus = document.createElement("span");
    spanStatus.className = "status-label status-pending";
    spanStatus.textContent = "⏳ Pending";

    li.append(spanText, spanStatus);

    li.onclick = () => toggleTask(task.id);

    return li;
}

function toggleTask(taskId) {
    const task = myTasks.find(t => t.id === taskId);
    if (!task) return;

    task.completed = !task.completed;

    const li = document.querySelector(`[data-id="${taskId}"]`);
    const status = li.querySelector(".status-label");

    if (task.completed) {
        li.classList.add("completed");
        status.textContent = "✔ Done";
        status.className = "status-label status-done";
    } else {
        li.classList.remove("completed");
        status.textContent = "⏳ Pending";
        status.className = "status-label status-pending";
    }

    updateStats();
}

function updateStats() {
    const total = myTasks.length;
    const completed = myTasks.filter(t => t.completed).length;
    const pending = total - completed;

    document.getElementById("taskSummary").textContent = `(${total} task${total !== 1 ? "s" : ""})`;
    document.getElementById("taskStats").textContent = `Total: ${total} | Completed: ${completed} | Pending: ${pending}`;
    console.log(`Stats -> Total: ${total}, Completed: ${completed}, Pending: ${pending}`);
}

// Add button & Enter key events
document.getElementById("addTaskBtn").onclick = addTask;
document.getElementById("newTaskInput").addEventListener("keydown", (e) => {
    if (e.key === "Enter") addTask();
});

console.log("To-Do List initialized. Start adding tasks");

// I dont know why but I really had trouble on the console for this one
// Had trouble with the u23F3 and u2713 as well