const ul = document.querySelector('ul');
        const input = document.getElementById('Task');
        let TaskArray = localStorage.getItem('Task') ? JSON.parse(localStorage.getItem('Task')) : [];

        TaskArray.forEach(addTask);

        function addTask(text) {
            const li = document.createElement('li');
            li.textContent = text;
            ul.appendChild(li);
        }

        function add() {
            TaskArray.push(input.value);
            localStorage.setItem('Task', JSON.stringify(TaskArray));
            addTask(input.value);
            input.value = '';
        }

        function del() {
            localStorage.clear();
            ul.innerHTML = '';
            TaskArray = [];
        }
        function retrieve() {
            const retrievedTasks = JSON.parse(localStorage.getItem('Task'));
            if (retrievedTasks && retrievedTasks.length > 0) {
                ul.innerHTML = ''; // Clear the current task list
                retrievedTasks.forEach(addTask);
            }
        }