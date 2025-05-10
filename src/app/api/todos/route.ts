import { connectMongo } from '@/lib/database';
import Todo from '@/models/Todo';

function getErrorMessage(error: unknown): string {
  if (error instanceof Error) return error.message;
  return 'Unknown error';
}

export async function GET() {
  await connectMongo();

  try {
    const players = await Todo.find({}).lean();
    return new Response(JSON.stringify(players), { status: 200 });
  } catch (error) {
    console.error('Error fetching todos:', error);
    return new Response(JSON.stringify({ error: getErrorMessage(error) }), {
      status: 500,
    });
  }
}

export async function POST(request: Request) {
  await connectMongo();

  const response = await request.json();

  try {
    const todo = await Todo.create(response);
    return new Response(JSON.stringify(todo), { status: 201 });
  } catch (error) {
    console.error('Error creating todo:', error);
    return new Response(JSON.stringify({ error: getErrorMessage(error) }), {
      status: 400,
    });
  }
}
