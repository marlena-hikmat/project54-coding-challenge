const { generateTasks } = require('../index.js');

describe('generateTasks', () => {
  it('ska returnera en array med 5 uppgifter', () => {
    const result = generateTasks("Acquire-High-Paying-Clients");
    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBe(5);
  });

  it('ska ha rätt format på taskId', () => {
    const result = generateTasks("Acquire-High-Paying-Clients");
    result.forEach(task => {
      expect(task.taskId).toMatch(/^OBJ-\d{4}-999-T\d{2}$/);
    });
  });

  it('ska ha rätt datumformat', () => {
    const result = generateTasks("Acquire-High-Paying-Clients");
    result.forEach(task => {
      expect(task.dueDate).toMatch(/^\d{4}-\d{2}-\d{2}$/);
    });
  });

  it('ska ha rätt titel', () => {
    const result = generateTasks("Acquire-High-Paying-Clients");
    result.forEach(task => {
      expect(task.title).toBe("Draft ICP Brief");
    });
  });

  it('ska öka dueDate med 2 dagar för varje uppgift', () => {
    const tasks = generateTasks("Acquire-High-Paying-Clients");
    const initialDate = new Date(tasks[0].dueDate);

    for (let i = 0; i < tasks.length; i++) {
      const expectedDate = new Date(initialDate);
      expectedDate.setDate(initialDate.getDate() + i * 2);

      const currentDate = new Date(tasks[i].dueDate);

      expect(currentDate.toISOString().split("T")[0])
        .toBe(expectedDate.toISOString().split("T")[0]);
    }
  });
});
