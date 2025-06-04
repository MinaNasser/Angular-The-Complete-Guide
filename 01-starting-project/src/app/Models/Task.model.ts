export interface task {
  id: string;
  userId: string;
  title: string;
  summary: string;
  dueDate: string | Date; // Use string or Date type for dueDate
  status: string; // 'pending' | 'completed'




}
