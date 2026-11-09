import { api } from "@/lib/api";
import type { Task } from "./types";



export async function fetchTasks(): Promise<Task[]> {
    const  {data} = await api.get<Task[]>('/tasks');
    return data;
}