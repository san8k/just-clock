import clockTemplate from './clock-template';

const main = document.querySelector(`main`);
main.appendChild(clockTemplate()); 

const tick = () => {
    setInterval(() => {
        main.innerHTML = ``;
        main.appendChild(clockTemplate()); 
    }, 1000);
};

tick();