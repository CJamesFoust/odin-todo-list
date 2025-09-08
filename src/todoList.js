
import { isValidDate, formatDate } from "./helpers";

const isValidPriority = function (value) {
  const allowed = ["high", "medium", "low"];
  return typeof value === "string" && allowed.includes(value.toLowerCase());
};

const isValidChecklist = function (arr) {
  let isValid = true;

  if (!Array.isArray(arr)) {
    console.warn(`Supplied value, ${arr}, is not of type Array`);
    return false;
  }

  arr.map((item, index) => {
    if (typeof item !== "string") {
      console.warn(`Supplied value, ${arr[index]}, is not of type String`);
      isValid = false;
    }
  });

  return isValid;
};

export const createToDoList = function (
  initialTitle,
  initialDesc,
  initialDueDate,
  initialPriority,
  initialChecklist
) {
  let _title = initialTitle;
  let _desc = initialDesc;
  let _dueDate = initialDueDate;
  let _priority = initialPriority.toLowerCase();
  let _checklist = initialChecklist;
  let _completed = false;
  let _deleted = false;

  const todoList = {
    title: _title,
    description: _desc,
    dueDate: _dueDate,
    priority: _priority,
    checklist: _checklist,
    completed: _completed,
    deleted: _deleted,
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

  Object.defineProperty(todoList, "description", {
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

  Object.defineProperty(todoList, "dueDate", {
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

  Object.defineProperty(todoList, "priority", {
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

  Object.defineProperty(todoList, "checklist", {
    get() {
      return _checklist;
    },
    set(newChecklist) {
      if (!isValidChecklist(newChecklist)) {
        return;
      }

      _checklist = newChecklist;
    },
    enumerable: true,
    configurable: false,
  });

  Object.defineProperty(todoList, "completed", {
    get() {
      return _completed;
    },
    set() {
      _completed = !_completed;
    },
    enumerable: true,
    configurable: false,
  });

  Object.defineProperty(todoList, "deleted", {
    get() {
      return _deleted;
    },
    set() {
      _deleted = !_deleted;
    },
    enumerable: true,
    configurable: false,
  });

  todoList.toggleCompleted = function () {
    this.completed = !this.completed;
  };

  todoList.toggleDeleted = function () {
    this.deleted = !this.deleted;
  };

  return todoList;
};
