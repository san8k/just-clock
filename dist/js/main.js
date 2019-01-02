(function () {
    'use strict';

    var clockTemplate = () => {
        const clock = document.createElement(`span`);

        const hours = () => new Date().getHours().toString().length > 1 ? new Date().getHours() : `0` + new Date().getHours();
        const minutes = () => new Date().getMinutes().toString().length > 1 ? new Date().getMinutes() : `0` + new Date().getMinutes();
        const seconds = () => new Date().getSeconds().toString().length > 1 ? new Date().getSeconds() : `0` + new Date().getSeconds();

        clock.innerHTML = `${hours()}:${minutes()}:${seconds()}`;

        return clock;
    };

    const main = document.querySelector(`main`);
    main.appendChild(clockTemplate()); 

    const tick = () => {
        setInterval(() => {
            main.innerHTML = ``;
            main.appendChild(clockTemplate()); 
        }, 1000);
    };

    tick();

}());

//# sourceMappingURL=main.js.map
