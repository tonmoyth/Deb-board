// random background color
const themeButton = document.getElementById('theme-btn');
themeButton.addEventListener('click',function(){
    const randomNumber = Math.floor(Math.random()*16777215);
    const randomColor = "#" + randomNumber.toString(16);
    document.getElementById('body').style.backgroundColor = randomColor;
});

// current date
const d = new Date();
const date = d.toDateString();
const currentZone = document.getElementById('current-zone').innerText = date;

// completed button
const completedBtns = document.querySelectorAll('.completed-button');
for(const completedBtn of completedBtns){
    completedBtn.addEventListener('click',function(event){
        alert('Board updated successfully');

        const taskNumber = document.getElementById('task-number');
        const currentNumber = parseInt(taskNumber.innerText);
        const updatedNumber = currentNumber - 1;
        taskNumber.innerText = updatedNumber;

        if(taskNumber.innerText == 0){
            alert('congrates!!! You have completed all the current task')
        }

        const devBoardNumber = document.getElementById('dev-board-number');
        const currentDevNumber = parseInt(devBoardNumber.innerText);
        const updatedDevNumber = currentDevNumber + 1;
        devBoardNumber.innerText = updatedDevNumber;

        const titleTime = document.getElementById('title-time');
        const button = event.target;
        
        const parent = button.parentNode.parentNode;
        const h2 = parent.querySelector('h2').innerText;
        const div = document.createElement('div');

        const date  = new Date();
        let hours = parseInt(date.getHours());
        if(hours === 0){
            hours =  12;
        }else if(hours > 12){
            hours -= 12;
        }
        const minute = date.getMinutes();
        const second = date.getSeconds();
        
        div.innerHTML =`
        <p class="p-4 bg-[#F4F7FF] mb-2">You have complete the ${h2} ${hours}:${minute}:${second} AM </p> 
        `
        titleTime.appendChild(div);
        event.target.setAttribute('disabled','true');
        event.target.classList.add('bg-gray-300');
        
    })
};

document.getElementById('let-btn').addEventListener('click',function(){
    const titleTime = document.getElementById('title-time');
    const child = titleTime.querySelector('div');
    titleTime.removeChild(child);
});

// Discover Something New Today!
document.getElementById('discover').addEventListener('click',function(){
    window.location.href="question/index.html"
});


