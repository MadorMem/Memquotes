var globals = require('./NetworkingGlobals');

class QuotesRequests{
    static getQuotes(sorter, page, items)
    {
        return fetch(globals.API_URL + globals.QUOTES_API + `${sorter}/${page}/${items}`,
                        {
                            method: 'GET',
                            credentials: 'include',
                            headers: {
                                "Accept": "application/json",
                            }
                        }
                    )
            .then((response) => response.json())
            .then((data) =>
            {
                return data;
            })
            .catch((err) =>{ return Promise.reject(err)});
    }

    // static parseRidesData(jsonArr, onClickCallback, state)
    // {
    //     return jsonArr.map((json, key) => {
    //          return <RideBlock key={key} name={json.name} color={json.zone.color} id={json.id} location={json.zone.name} time={json.return_time} availableTickets={json.remaining_tickets.toString()}/>
    //     });
    // }
}

export default QuotesRequests;