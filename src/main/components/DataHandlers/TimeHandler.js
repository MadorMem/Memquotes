
class TimeHandler{
    static dateToHoursMinutes(date)
    {
        if(date == null)
        return '00:00';

        let hours = String(date.getHours()).padStart(2, '0');
        let mins = String(date.getMinutes()).padStart(2, '0');
        return `${hours}:${mins}`;
    }
    
    static currentTimeOutsideLimit(minHour, maxHour)
    {
        const currentTime = new Date();
        return currentTime.getHours() < minHour || currentTime.getHours() > maxHour;
    }
}

export default TimeHandler;

