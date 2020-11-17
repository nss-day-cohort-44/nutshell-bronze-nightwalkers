import { LoginForm } from "./auth/LoginForm.js";
import { RegisterForm } from "./auth/RegisterForm.js";
import { Nutshell } from "./Nutshell.js";
import { taskButton } from "./tasks/TaskButton.js";
import { taskForm } from "./tasks/TaskForm.js";
import { getTasks } from "./tasks/TaskProvider.js";
import { TaskList } from "./tasks/TaskList.js";

/*
    1. Check if the user is authenticated by looking in session storage for `activeUser`
    2. If so, render the Nutshell component
    3. If not, render the login and registration forms
    4. Also, if the user authenticates, and the login form is initially shown
        ensure that the Nutshell component gets rendered
*/
LoginForm();
RegisterForm();
Nutshell();
getTasks();
taskButton();
taskForm();
TaskList();