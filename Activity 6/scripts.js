/**
 * Activity 6: Enhanced To-Do List Application
 */

// --- GLOBAL STATE ---
let todoState = {
    tasks: [],
    nextId: 1,
    currentFilter: "all",
};

// --- UTILITY FUNCTIONS ---
function generateTaskId() {
    return todoState.nextId++;
}

function getCurrentTimestamp() {
    return new Date().toLocaleString();
}

function escapeHtml(text) {
    const div = document.createElement("div");
    div.textContent = text;
    return div.innerHTML;
}

// --- VALIDATION & CREATION ---
function validateTaskInput(taskText) {
    const trimmed = taskText.trim();
    if (trimmed.length === 0) {
        return { valid: false, message: "Task cannot be empty, silly." };
    }
    if (trimmed.length > 100) {
        return {
            valid: false,
            message: "Task is too long, keep it under 100 characters please.",
        };
    }
    return { valid: true, text: trimmed };
}

function createTask(text, priority = "medium") {
    const validation = validateTaskInput(text);

    if (!validation.valid) {
        throw new Error(validation.message);
    }

    const task = {
        id: generateTaskId(),
        text: validation.text,
        completed: false,
        priority: priority,
        createdAt: getCurrentTimestamp(),
        completedAt: null,
    };

    console.log("Created task:", task);
    return task;
}

// --- CORE OPERATIONS ---
function addTask(taskText, priority) {
    try {
        const task = createTask(taskText, priority);
        todoState.tasks.push(task);

        const taskElement = createTaskElement(task);
        document.getElementById("todo-list").appendChild(taskElement);

        updateDisplay();
        clearTaskInput();

        console.log(`Task added successfully. Total tasks: ${todoState.tasks.length}`);
    } catch (error) {
        console.error("Error adding task:", error.message);
        alert(error.message);
    }
}

function deleteTask(taskId) {
    const taskIndex = todoState.tasks.findIndex((task) => task.id === taskId);

    if (taskIndex === -1) return false;

    const task = todoState.tasks[taskIndex];

    if (confirm(`Are you sure you want to delete "${task.text}"?`)) {
        todoState.tasks.splice(taskIndex, 1);

        const taskElement = document.querySelector(`[data-task-id="${taskId}"]`);
        if (taskElement) taskElement.remove();

        updateDisplay();
        return true;
    }
    return false;
}

function toggleTaskStatus(taskId) {
    const task = todoState.tasks.find((t) => t.id === taskId);
    if (!task) return;

    task.completed = !task.completed;
    task.completedAt = task.completed ? getCurrentTimestamp() : null;

    const taskElement = document.querySelector(`[data-task-id="${taskId}"]`);
    updateTaskElementStatus(taskElement, task);

    updateDisplay();
}

// --- DOM ELEMENT CREATION ---
function createTaskElement(task) {
    const listItem = document.createElement("li");
    listItem.className = `task-item ${task.completed ? "completed" : ""}`;
    listItem.setAttribute("data-task-id", task.id);
    listItem.setAttribute("data-priority", task.priority);

    listItem.innerHTML = `
        <div class="task-priority priority-${task.priority}"></div>
        <div class="task-text">${escapeHtml(task.text)}</div>
        <div class="task-actions">
            <button class="task-btn toggle-btn" onclick="toggleTaskStatus(${task.id})">
                ${task.completed ? "\u21B6 Undo" : "\u2713 Done"}
            </button>
            <button class="task-btn delete-btn" onclick="confirmDeleteTask(${task.id})">
                \uD83D\uDDD1 Delete
            </button>
        </div>
    `;

    listItem.addEventListener("click", function (event) {
        if (!event.target.classList.contains("task-btn")) {
            toggleTaskStatus(task.id);
        }
    });

    return listItem;
}

function updateTaskElementStatus(taskElement, task) {
    taskElement.className = `task-item ${task.completed ? "completed" : ""}`;
    const toggleBtn = taskElement.querySelector(".toggle-btn");
    toggleBtn.textContent = task.completed ? "\u21B6 Undo" : "\u2713 Done";
}

// --- FILTERING & DISPLAY ---
function filterTasks(filterType) {
    todoState.currentFilter = filterType;
    const taskElements = document.querySelectorAll(".task-item");

    taskElements.forEach((element) => {
        const taskId = parseInt(element.getAttribute("data-task-id"));
        const task = todoState.tasks.find((t) => t.id === taskId);

        let shouldShow = true;
        if (filterType === "pending") shouldShow = !task.completed;
        else if (filterType === "completed") shouldShow = task.completed;

        element.classList.toggle("hidden", !shouldShow);
    });

    // Toggle active button UI
    document.querySelectorAll(".filter-btn").forEach((btn) => btn.classList.remove("active"));
    document.querySelector(`[data-filter="${filterType}"]`).classList.add("active");

    updateEmptyState();
}

function updateDisplay() {
    updateTaskStats();
    updateEmptyState();
    filterTasks(todoState.currentFilter);
}

function updateTaskStats() {
    const total = todoState.tasks.length;
    const completed = todoState.tasks.filter((task) => task.completed).length;
    const pending = total - completed;

    document.getElementById("taskCount").textContent = `(${total} task${total !== 1 ? "s" : ""})`;
    document.getElementById("totalTasks").textContent = `Total: ${total}`;
    document.getElementById("completedTasks").textContent = `Completed: ${completed}`;
    document.getElementById("pendingTasks").textContent = `Pending: ${pending}`;
}

function updateEmptyState() {
    const emptyState = document.getElementById("emptyState");
    const todoList = document.getElementById("todo-list");
    const visibleTasks = todoList.querySelectorAll(".task-item:not(.hidden)");

    if (visibleTasks.length === 0) {
        emptyState.classList.remove("hidden");
        emptyState.innerHTML = todoState.currentFilter === "all" 
            ? "<p>No tasks yet. Add one above! \uD83D\uDCDD</p>" 
            : `<p>No ${todoState.currentFilter} tasks found. \uD83D\uDD0D</p>`;
    } else {
        emptyState.classList.add("hidden");
    }
}

// --- UI HELPERS ---
function clearTaskInput() {
    document.getElementById("taskInput").value = "";
    document.getElementById("prioritySelect").value = "medium";
}

function handleAddTask() {
    const taskText = document.getElementById("taskInput").value;
    const priority = document.getElementById("prioritySelect").value;
    addTask(taskText, priority);
}

function confirmDeleteTask(taskId) {
    deleteTask(taskId);
}

// --- BULK OPERATIONS ---
function markAllTasksDone() {
    let changedCount = 0;
    todoState.tasks.forEach((task) => {
        if (!task.completed) {
            task.completed = true;
            task.completedAt = getCurrentTimestamp();
            changedCount++;
            const taskElement = document.querySelector(`[data-task-id="${task.id}"]`);
            updateTaskElementStatus(taskElement, task);
        }
    });

    updateDisplay();
    if (changedCount > 0) alert(`Marked ${changedCount} tasks as completed!`);
}

function deleteAllCompletedTasks() {
    const completedTasks = todoState.tasks.filter((task) => task.completed);
    if (completedTasks.length === 0) return alert("No completed tasks to delete!");

    if (confirm(`Delete ${completedTasks.length} completed tasks?`)) {
        todoState.tasks = todoState.tasks.filter((task) => !task.completed);
        completedTasks.forEach((task) => {
            const taskElement = document.querySelector(`[data-task-id="${task.id}"]`);
            if (taskElement) taskElement.remove();
        });
        updateDisplay();
    }
}

function clearAllTasks() {
    if (todoState.tasks.length === 0) return alert("No tasks to clear!");

    if (confirm(`Are you sure you want to delete ALL tasks?`)) {
        todoState.tasks = [];
        document.getElementById("todo-list").innerHTML = "";
        updateDisplay();
    }
}

// --- INITIALIZATION ---
function initializeEventListeners() {
    document.getElementById("addTaskBtn").addEventListener("click", handleAddTask);
    document.getElementById("taskInput").addEventListener("keypress", (e) => {
        if (e.key === "Enter") handleAddTask();
    });

    document.querySelectorAll(".filter-btn").forEach((button) => {
        button.addEventListener("click", function () {
            filterTasks(this.getAttribute("data-filter"));
        });
    });

    document.getElementById("markAllDoneBtn").addEventListener("click", markAllTasksDone);
    document.getElementById("deleteCompletedBtn").addEventListener("click", deleteAllCompletedTasks);
    document.getElementById("clearAllBtn").addEventListener("click", clearAllTasks);
}

function initializeApp() {
    initializeEventListeners();
    updateDisplay();
    document.getElementById("taskInput").focus();
}

initializeApp();