export interface TodoDto {
  id: number;
  title: string;
  description: string;
  dateAdded: string;
  priority: 'low' | 'medium' | 'high';
  assignedTo: 'dad' | 'fiona' | 'annabelle';
  completed: boolean;
}

// remove after adding to mongo
export const todos: TodoDto[] = [
  {
    id: 1,
    title: 'Mow the lawn',
    description: 'Front and backyard need mowing before the weekend.',
    dateAdded: '2025-04-20',
    priority: 'medium',
    assignedTo: 'dad',
    completed: false,
  },
  {
    id: 2,
    title: 'Finish science project',
    description: 'Complete the volcano experiment and write report.',
    dateAdded: '2025-04-21',
    priority: 'high',
    assignedTo: 'fiona',
    completed: false,
  },
  {
    id: 3,
    title: 'Pick up groceries',
    description: 'Milk, eggs, bread, and vegetables.',
    dateAdded: '2025-04-19',
    priority: 'low',
    assignedTo: 'dad',
    completed: true,
  },
  {
    id: 4,
    title: 'Clean the hamster cage',
    description: 'Replace bedding and clean the water bottle.',
    dateAdded: '2025-04-22',
    priority: 'medium',
    assignedTo: 'annabelle',
    completed: false,
  },
  {
    id: 5,
    title: 'Organize the garage',
    description: 'Sort old boxes and donate unused items.',
    dateAdded: '2025-04-18',
    priority: 'high',
    assignedTo: 'dad',
    completed: false,
  },
  {
    id: 6,
    title: 'Practice piano',
    description: 'Work on the recital piece for 30 minutes.',
    dateAdded: '2025-04-23',
    priority: 'medium',
    assignedTo: 'fiona',
    completed: true,
  },
  {
    id: 7,
    title: 'Make birthday cards',
    description: 'Create handmade cards for Grandma and Grandpa.',
    dateAdded: '2025-04-17',
    priority: 'low',
    assignedTo: 'annabelle',
    completed: false,
  },
  {
    id: 8,
    title: 'Schedule dentist appointments',
    description: 'Call and set up checkups for the family.',
    dateAdded: '2025-04-24',
    priority: 'medium',
    assignedTo: 'dad',
    completed: false,
  },
  {
    id: 9,
    title: 'Read chapter book',
    description: 'Finish reading two chapters of the assigned book.',
    dateAdded: '2025-04-22',
    priority: 'low',
    assignedTo: 'annabelle',
    completed: true,
  },
  {
    id: 10,
    title: 'Update family calendar',
    description: 'Add upcoming sports games and school events.',
    dateAdded: '2025-04-21',
    priority: 'medium',
    assignedTo: 'dad',
    completed: false,
  },
];
