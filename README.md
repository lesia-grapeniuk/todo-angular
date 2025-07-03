# 📝 Angular ToDo App

A responsive and interactive ToDo application built with Angular 17+.  
This project demonstrates core Angular concepts such as component-based structure, two-way data binding, validation, routing, and LocalStorage persistence.

## 🔧 Features

- ✅ Add, complete, and delete tasks  
- 🔁 Tasks are saved to **LocalStorage** and persist across browser sessions  
- 🚫 Input validation (prevents adding empty tasks)  
- 📱 Fully **responsive design** for mobile, tablet, and desktop  
- 🎨 Custom SCSS styling using BEM methodology  

## 🚀 Live Demo

👉 [Try the app live](https://lesia-grapeniuk.github.io/todo-angular/)

## 🖼️ Screenshots

> _Add a screenshot here if desired:_  
> ![ToDo Preview](./src/assets/screenshot.png)

## 🧰 Tech Stack

- **Angular 17+**  
- **TypeScript**  
- **SCSS**  
- **HTML5**  
- **LocalStorage API**  
- **Responsive design with media queries**

## 🧠 Key Angular Concepts Used

- Component-based architecture  
- Two-way binding with `[(ngModel)]`  
- Structural directives: `*ngFor`, `*ngIf`  
- Event binding and local state  
- Browser storage  
- Form validation  
- Routing (can be added later)

## 📁 Project Structure

src/
├── app/
│ ├── dashboard/todo/components/
│ │ ├── addtodo/ # Add new task
│ │ │ ├── addtodo.component.html
│ │ │ ├── addtodo.component.scss
│ │ │ └── addtodo.component.ts
│ │ ├── title/ # Section title component
│ │ │ ├── title.component.html
│ │ │ ├── title.component.scss
│ │ │ └── title.component.ts
│ │ └── todolist/ # Task list & single task display
│ │ ├── todolist.component.html
│ │ ├── todolist.component.scss
│ │ └── todolist.component.ts
│ │ ├── todo.component.html
│ │ ├── todo.component.scss
│ │ └── todo.component.ts
│
│ ├── shared/ # Shared resources
│ │ ├── interfaces/
│ │ │ ├── AuthorizationData.ts
│ │ │ ├── todo.ts
│ │ │ └── user-registration-data.ts
│ │ ├── services/
│ │ │ ├── local-storage-registration-api.service.ts
│ │ │ └── local-storage.service.ts
│ │ └── ui-ux-components/
│ │ ├── footer.component.ts
│ │ └── header.component.ts
│
│ ├── task.model.ts
│ ├── app.component.html
│ ├── app.component.scss
│ ├── app.component.ts
│ ├── app.module.ts
│ └── app-routing.module.ts
│
├── assets/
│ ├── icons/
│ ├── images/
│ └── styles/
│
├── environments/
│ ├── environment.ts
│ └── environment.prod.ts
│
├── index.html
├── main.ts
├── styles.scss
└── angular.json

