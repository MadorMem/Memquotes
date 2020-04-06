import StorageHandler from '../DataHandlers/StorageHandler'
var globals = require('./NetworkingGlobals');

class GetTickets{
    static getTicketData()
    {
        const ticket = StorageHandler.getSessionStorageItem('ticket');
        StorageHandler.removeSessionStorageItem('ticket');
        return ticket;
    }

    static didOldTicketExpire(pin)
    {
        // Returns true if no old ticket was found / the old ticket has expired
        // Returns false if theres a ticket for that pin that hasn't expired.
        const oldTicket = StorageHandler.getLocalStorageItem(pin);
        const oldTicketDate = new Date(oldTicket);
        const currentDate = new Date();

        if(!oldTicket)
            return true;
        if(oldTicketDate > currentDate)
            return false;

        return true;
    }

    static getTickets(pin, rideid, errorCallback)
    {
        if(!this.didOldTicketExpire(pin))
        {
            errorCallback('Only one ticket can be held at any given time, try again later')
            return;
        }

        return fetch(globals.API_URL + globals.TICKET_API + globals.API_KEY + `&pin=${pin}&ride_id=${rideid}`,
                    {
                        method: "POST",
                        headers: {
                            "Accept": "application/json"
                        },
                    })
        .then((response) => response.json())
        .then((data) => 
        {
            if(data.code)
            {
                errorCallback(data.message)
                return false;
            }

            StorageHandler.addSessionStorageItem('ticket', JSON.stringify(data));
            StorageHandler.addLocalStorageItem(pin, data.return_time)
            return true;
        })
        .catch((err) => errorCallback(err.message))
    }

}

export default GetTickets;