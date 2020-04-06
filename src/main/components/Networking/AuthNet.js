var globals = require('./NetworkingGlobals');

class AuthNet{

    static async is_valid_ssid(ssid)
    {
        const response = await fetch(globals.API_URL + globals.VALIDATE_SSID + `${ssid}`)
            .then((res)=>{return res.json()})
            .then((res)=>{return res.valid})
            .catch((err)=>{return false})
        return response
    }

    static login(user, pass)
    {
        return fetch(globals.API_URL + globals.LOGIN_API,
                        {
                            method: 'POST',
                            credentials: 'include',
                            headers: {
                                "Accept": "application/json",
                            },
                        body: JSON.stringify({
                            username: user,
                            password: pass
                        }),
                        }
                    )
            .then((response) => response.json())
            .then((data) =>
            {
                return data;
            })
            .catch((err) => console.error(err))
    }

    // static parseRidesData(jsonArr, onClickCallback, state)
    // {
    //     return jsonArr.map((json, key) => {
    //          return <RideBlock key={key} name={json.name} color={json.zone.color} id={json.id} location={json.zone.name} time={json.return_time} availableTickets={json.remaining_tickets.toString()}/>
    //     });
    // }
}

export default AuthNet;