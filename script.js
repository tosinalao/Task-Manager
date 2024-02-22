document.addEventListener('DOMContentLoaded', function () {
    const todo = [];
    const taskForm = document.getElementById('task-form');
    const taskList = document.getElementById('array_for_tasks');

    taskForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const title = document.getElementById('title-of-task').value;
        const priority = document.getElementById('priority-of-task').value;

        const checkedRadioButton = document.querySelector('[name=status-of-task]:checked');

        if (title.trim() !== '' && priority.trim() !== '' && checkedRadioButton) {
            const status = checkedRadioButton.value;

            const li = document.createElement('li');
            li.classList.add('task-html');
            li.innerHTML = `
                <table style="width:100%;border:1px solid black;">
                    <tr>
                        <td style="border:1px solid black;text-align:center;"><span>Task - ${title}</span></td>
                        <td style="border:1px solid black;text-align:center;"><span> Priority - ${priority}</span></td>
                        <td style="border:1px solid black;text-align:center;"><span> Status - ${status}</span></td>
                    </tr>
                </table>
                <div class="task-actions">
                    <button class="mark-as-complete"><i class="fas fa-check"></i> Completed</button>
                    <button class="remove"><i class="fas fa-trash"></i> Remove</button>
                </div>
            `;

            todo.push({ title, priority, status });
            taskList.appendChild(li);

            document.getElementById('title-of-task').value = '';
        } else {
            alert('Please enter all task information and select a status.');
        }
    });

    taskList.addEventListener('click', function (event) {
        const element = event.target;

        if (element.className === 'mark-as-complete') {
            element.parentElement.parentElement.classList.toggle('completed');
        }

        if (element.className === 'remove') {
            const index = Array.from(element.parentElement.parentElement.parentNode.children).indexOf(element.parentElement.parentElement);
            todo.splice(index, 1);
            element.parentElement.parentElement.remove();
        }
    });
});
