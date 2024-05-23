let userscore = 0;
let compscore = 0;

        const comp = function() {
            let compchoice = '';
            let ans = Math.random();
            if (ans <= 1/3) {
                compchoice = 'rock';
            } else if (ans > 1/3 && ans <= 2/3) {
                compchoice = 'paper';
            } else {
                compchoice = 'scissor';
            }
            return compchoice;
        };

        const compare = function(choice1) {
            let choice2 = comp();
            console.log(`User choice: ${choice1}`);
            console.log(`Computer choice: ${choice2}`);
            
            if (choice1 === choice2) {
                statement.innerHTML = 'It is a draw';
            } else if (
                (choice1 === 'rock' && choice2 === 'scissor') ||
                (choice1 === 'paper' && choice2 === 'rock') ||
                (choice1 === 'scissor' && choice2 === 'paper')
            ) {
                statement.innerHTML = 'You win!';
                userscore++;
            } else {
                statement.innerHTML = 'You lose!';
                compscore++;
            }

            document.getElementById('scoreuser').textContent = userscore;
            document.getElementById('scorecomp').textContent = compscore;
        };

        document.querySelectorAll('.choice').forEach(choice => {
            choice.addEventListener('click', () => {
                const userchoice = choice.id;
                compare(userchoice);
            });
        });