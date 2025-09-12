import { isValidDate, formatDate } from "./helpers";

const isValidPriority = function (value) {
  const allowed = ["high", "medium", "low"];
  return typeof value === "string" && allowed.includes(value.toLowerCase());
};

const isValidList = function (obj) {
  let isValid = true;

  if (typeof obj !== "object") {
    console.warn(`Supplied value, ${obj}, is not of type Object`);
    isValid = false;
  } else if (obj.id === null || obj.id === "") {
    console.warn(`List id is invalid or missing. Validate ${obj}`);
    isValid = false;
  }

  return isValid;
};

const isValidTaskList = function (arr) {
  let isValid = true;

  if (!Array.isArray(arr)) {
    isValid = false;
    console.warn(`Supplied task list, ${arr}, is not of type Array`);
  } else if (arr.length < 1) {
    isValid = false;
    console.warn(
      `Supplied task list, ${arr}, does not have any values in array`
    );
  }

  return isValid;
};

export const createTask = function (taskData) {
  let _taskName = taskData.name;
  let _desc = taskData.description;
  let _dueDate = taskData.dueDate;
  let _priority = taskData.priority;
  let _listId = taskData.list;
  let _id = crypto.randomUUID();
  let _completed = false;
  let _deleted = false;

  const task = {
    id: _id,
    name: _taskName,
    description: _desc,
    dueDate: _dueDate,
    priority: _priority,
    listId: _listId,
    completed: _completed,
    deleted: _deleted,
  };
  
  Object.defineProperty(task, "id", {
    get() {
      return _id;
    },
    enumerable: true,
    configurable: false,
  });

  Object.defineProperty(task, "name", {
    get() {
      return _taskName;
    },
    set(newName) {
      if (typeof newName !== "string") {
        console.warn(`Name supplied, ${newName}, is not of type String.`);
        return;
      }

      if (newName.length < 2) {
        console.warn("Minimum characters of two not met. Try again.");
        return;
      }

      if (newName.length > 70) {
        console.warn("Maximum 70 characters exceeded. Try again.");
        return;
      }

      _taskName = newName.trim();
    },
    enumerable: true,
    configurable: false,
  });

  Object.defineProperty(task, "description", {
    get() {
      return _desc;
    },
    set(newDesc) {
      if (typeof newDesc !== "string") {
        console.warn(
          `Description supplied, ${newDesc}, is not of type String.`
        );
        return;
      }

      if (newDesc.length > 500) {
        console.warn("Maximum 500 characters exceeded. Try again.");
        return;
      }

      _desc = newDesc.trim();
    },
    enumerable: true,
    configurable: false,
  });

  Object.defineProperty(task, "dueDate", {
    get() {
      return _dueDate;
    },
    set(newDueDate) {
      if (!isValidDate(newDueDate)) {
        console.warn(`Date supplied, ${newDueDate}, is not of type Date.`);
        return;
      }

      _dueDate = newDueDate;
    },
    enumerable: true,
    configurable: false,
  });

  Object.defineProperty(task, "priority", {
    get() {
      return _priority;
    },
    set(newPriority) {
      if (!isValidPriority(newPriority)) {
        console.warn(
          `Priority supplied, ${newPriority}, is not a valid input.`
        );
        return;
      }

      _priority = newPriority.toLowerCase();
    },
    enumerable: true,
    configurable: false,
  });

  Object.defineProperty(task, "listId", {
    get() {
      return _listId;
    },
    set(newListId) {
      if (typeof newListId !== "string") {
        console.warn(`List supplied, ${newList}, is not a valid list.`);
        return;
      } else {
        _listId = newListId;
      }
    },
    enumerable: true,
    configurable: false,
  });

  Object.defineProperty(task, "completed", {
    get() {
      return _completed;
    },
    set() {
      _completed = !_completed;
    },
    enumerable: true,
    configurable: false,
  });

  Object.defineProperty(task, "deleted", {
    get() {
      return _deleted;
    },
    set() {
      _deleted = !_deleted;
    },
    enumerable: true,
    configurable: false,
  });

  task.toggleCompleted = function () {
    this.completed = !this.completed;
  };

  task.toggleDeleted = function () {
    this.deleted = !this.deleted;
  };

  return task;
};

export const createToDoList = function (
  initialTitle,
  initialTaskList,
  initialId
) {
  let _title = initialTitle;
  let _taskList = isValidTaskList(initialTaskList) ? initialTaskList : [];
  let _id = initialId ? initialId : crypto.randomUUID();

  const todoList = {
    title: _title,
    id: _id,
    taskList: _taskList,
    // addNewTask: addNewTask,
  };

  Object.defineProperty(todoList, "title", {
    get() {
      return _title;
    },
    set(newTitle) {
      if (typeof newTitle !== "string") {
        console.warn(`Title supplied, ${newTitle}, is not of type String.`);
        return;
      }

      if (newTitle.length < 2) {
        console.warn("Minimum characters of two not met. Try again.");
        return;
      }

      if (newTitle.length > 70) {
        console.warn("Maximum 70 characters exceeded. Try again.");
        return;
      }

      _title = newTitle.trim();
    },
    enumerable: true,
    configurable: false,
  });

  Object.defineProperty(todoList, "taskList", {
    get() {
      return _taskList;
    },
    set(newTaskList) {
      if (!isValidTaskList(newTaskList)) {
        return;
      }

      _taskList = newTaskList;
    },
    enumerable: true,
    configurable: false,
  });

  todoList.addNewTask = function (newTask) {
    // implement task validation at some point
    // if (!isValidTask(newTask)) {
    //   console.warn("Invalid task format.");
    //   return;
    // }

    _taskList.push(newTask);
  };

  return todoList;
};

export const handleCreateTaskAndAssociations = function (
  taskData,
  lists,
  setLists
) {
  if (taskData.list === "create-new-list") {
    let newTask = createTask(taskData);
    let newList = createToDoList(taskData.listName);
    newTask.listId = newList.id;
    newList.addNewTask(newTask);
    setLists((prev) => [...prev, newList]);
    console.log(newList);
  }
};
