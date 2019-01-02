export default () => {
    const clock = document.createElement(`span`);

    const hours = () => new Date().getHours().toString().length > 1 ? new Date().getHours() : `0` + new Date().getHours();
    const minutes = () => new Date().getMinutes().toString().length > 1 ? new Date().getMinutes() : `0` + new Date().getMinutes();
    const seconds = () => new Date().getSeconds().toString().length > 1 ? new Date().getSeconds() : `0` + new Date().getSeconds();

    clock.innerHTML = `${hours()}:${minutes()}:${seconds()}`;

    return clock;
};