{
    // The scope of `random` is too loose 
    const random = Math.floor(Math.random() * 3);

    const getRandEvent = () => {
        if (random === 0) {
            return 'Marathon';
        } else if (random === 1) {
            return 'Triathlon';
        } else if (random === 2) {
            return 'Pentathlon';
        }
    };
    const event = getRandEvent();

    // The scope of `days` is too tight 
    const getTrainingDays = event => {
        let days;
        if (event === 'Marathon') {
            days = 50;
        } else if (event === 'Triathlon') {
            days = 100;
        } else if (event === 'Pentathlon') {
            days = 200;
        }

        return days;
    };
    const days = getTrainingDays(event);

    let name = 'Nala';
    // The scope of `name` is too tight 
    const logEvent = (name, event) => {
        console.log(`${name}'s events is: ${event}`);
    };
    logEvent(name, event);

    const logTime = (name, days) => {
        console.log(`${name}'s time to train is: ${days} days`);
    };
    logTime(name, days);


}
