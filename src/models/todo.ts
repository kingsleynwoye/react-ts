class Todo {
  id: string;
  text: string;

  constructor(todoText: string) {
    this.id = new Date().toISOString(); // Genrate a unqice id
    this.text = todoText;
  }
}

export default Todo;
