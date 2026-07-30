// You can work here or download the template
// Array of 10 random tasks as strings
const tasks = [
  'Complete the project',
  'Attend the meeting',
  'Write a report',
  'Review the code',
  'Fix the bugs',
  'Update the documentation',
  'Plan the next sprint',
  'Conduct user testing',
  'Optimize the performance',
  'Design',
];

const addItemBtn = document.querySelector("#add-item-btn")
const itemList = document.querySelector('#item-list')

addItemBtn.addEventListener("click", () => {

    const randomIndex = Math.floor(Math.random() * tasks.length);
    const randomTask = tasks[randomIndex];

    const newLi = document.createElement("li");
    newLi.textContent = randomTask;

    itemList.appendChild(newLi);

    newLi.scrollIntoView({behavior: "smooth"})
})