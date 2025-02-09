import { ROLES, STATUSES } from "@/constants";

export const users = [
  {
    id: 1,
    name: "John Doe",
    role: ROLES.ADMIN,
    tckn: 12406352362,
  },
  {
    id: 2,
    name: "Tom Doe",
    role: ROLES.REGULAR,
    tckn: 54807902982,
  },
  {
    id: 3,
    name: "Jessy Doe",
    role: ROLES.REGULAR,
    tckn: 80958926614,
  },
];

export const tasks = [
  {
    id: 1,
    title: "Task 1",
    desc: "Task 1Task 1Task 1Task 1",
    status: STATUSES.COMPLETED.id,
    owner: {
      id: 1,
      name: "John Doe",
    },
    assignees: [
      {
        id: 1,
        name: "John Doe",
      },
      {
        id: 2,
        name: "Tom Doe",
      },
      {
        id: 3,
        name: "Tom Doe",
      },
      {
        id: 4,
        name: "Tom Doe",
      },
      {
        id: 5,
        name: "Tom Doe",
      },
    ],
  },
  {
    id: 2,
    title: "Task 2",
    desc: "Task 2Task 2Task 2Task 2",
    status: STATUSES.UNCOMPLETED.id,
    owner: {
      id: 1,
      name: "John Doe",
    },
    assignees: [
      {
        id: 1,
        name: "John Doe",
      },
      {
        id: 2,
        name: "Tom Doe",
      },
    ],
  },
  {
    id: 3,
    title: "Task 3",
    desc: "Task 3Task 3Task 3Task 3Task 3Task 3Task 3Task 3Task 3Task 3Task 3Task 3Task 3Task 3Task 3Task 3Task 3Task 3Task 3Task 3Task 3",
    status: STATUSES.INPROGRESS.id,
    owner: {
      id: 1,
      name: "John Doe",
    },
    assignees: [
      {
        id: 1,
        name: "John Doe",
      },
      {
        id: 2,
        name: "Tom Doe",
      },
    ],
  },
];
