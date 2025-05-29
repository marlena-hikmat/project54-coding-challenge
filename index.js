function generateTasks(objSlug) { 
  const tasks = [];
  const currentYear = new Date().getFullYear();
  
  for (let i = 0; i < 5; i++) {
    const taskNumber = (i + 1).toString().padStart(2, '0');
    const dueDate = new Date();
    dueDate.setDate(dueDate.getDate() + (i * 2));
    
    tasks.push({
      taskId: `OBJ-${currentYear}-999-T${taskNumber}`,  // Fix 1
      title: "Draft ICP Brief",
      dueDate: dueDate.toISOString().split('T')[0]      // Fix 2
    });
  }
  return tasks; // Fix 3 – returnera array med 5 objekt
}

if (typeof module !== 'undefined') {
  module.exports = { generateTasks };
}
