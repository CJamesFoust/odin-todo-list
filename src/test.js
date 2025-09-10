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
    console.warn(`Supplied task list, ${arr}, does not have any values in array`);
  }

  return isValid;
}

const createTask = function (
  initialTaskName,
  initialDesc,
  initialDueDate,
  initialPriority,
  initialList
) {
  let _taskName = initialTaskName;
  let _desc = initialDesc;
  let _dueDate = initialDueDate;
  let _priority = initialPriority;
  let _list = initialList;
  let _completed = false;
  let _deleted = false;

  const task = {
    name: _taskName,
    description: _desc,
    dueDate: _dueDate,
    priority: _priority,
    list: _list,
    completed: _completed,
    deleted: _deleted,
  };

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

  Object.defineProperty(task, "list", {
    get() {
      return _list;
    },
    set(newList) {
      if (!isValidList(newList)) {
        console.warn(`List supplied, ${newList}, is not a valid list.`);
        return;
      } else {
        _list = newList;
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

const createToDoList = function (initialTitle, initialTaskList, initialId) {
  let _title = initialTitle;
  let _taskList = Array.isArray(initialTaskList) ? initialTaskList : [initialTaskList];
  let _id = initialId ? initialId :  crypto.randomUUID();

  const todoList = {
    title: _title,
    id: _id,
    taskList: _taskList,
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

  return todoList;
};
