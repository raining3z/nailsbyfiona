'use server';

import { revalidatePath } from 'next/cache';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export async function getTodos() {
  const response = await fetch(`${BASE_URL}/api/todos`);

  if (!response.ok) {
    const error = await response.json();
    throw new Error(
      error.error || `Failed to get posts: ${response.statusText}`
    );
  }

  return response.json();
}

export async function addTodo(formData: FormData) {
  const title = formData.get('title') as string;
  const description = formData.get('description') as string;
  const date = formData.get('date') as string;
  const priority = formData.get('priority') as 'low' | 'medium' | 'high';
  const assignedTo = formData.get('assignedTo') as
    | 'dad'
    | 'fiona'
    | 'annabelle';

  const todo = {
    title,
    description,
    dateAdded: new Date(date),
    priority,
    assignedTo,
    completed: false,
  };

  const response = await fetch(`${BASE_URL}/api/todos`, {
    body: JSON.stringify(todo),
    headers: { 'Content-Type': 'application/json' },
    method: 'POST',
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(
      error.error || `Failed to add todo: ${response.statusText}`
    );
  }

  revalidatePath('/todos');

  return response.json();
}
