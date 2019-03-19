class Weather {
    constructor(API_KEY){
        this.API_KEY = API_KEY;
        console.log("test");
        this.initialize();

    }

    initialize(){
        this.getMyLocation();
    }

    getMyLocation(){
        navigator.geolocation.getCurrentPosition(position => {
            let lat = position.coords.latitude;
            let lng = position.coords.longitude;
            this.getWeather(lat, lng);
            console.log(lat, lng);
        }, err => {
            console.log(err);
        });
    }

    getWeather(lat, lng){
        
        let urlWeather = `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${this.API_KEY}/${lat},${lng}?units=si`;
        fetch(urlWeather)
        .then(response => {
            return response.json();
        })
        .then(json => {
            console.log(json);
            console.log(json.currently.summary);
        });
    }


}

class Iss{
    constructor(){
        this.initialize();
    }

    initialize(){
        this.getMyLocation();
    }

    getMyLocation(){
        navigator.geolocation.getCurrentPosition(position => {
            let lat = position.coords.latitude;
            let lng = position.coords.longitude;
            this.getPassTimes(lat, lng);
        }, err => {
            console.log(err);
        });
    }

    getPassTimes(lat, lng){

        let urlISS = `https://cors-anywhere.herokuapp.com/http://api.open-notify.org/iss-pass.json?lat=${lat}&lon=${lng}`;
        fetch(urlISS)
        .then(response => {
            return response.json();
        })
        .then(json => {
            console.log(json);
            let date = json.response[0].risetime*1000;
            console.log(date);
            let datePassTime = new Date(date);
            console.log(datePassTime.toString());   
            let monthArray = ["Januari", "Februari", "Maart", "April", "Mei", "Juni", "Juli", "Augustus", "September", "Oktober", "November", "December"];
            let month = monthArray[datePassTime.getMonth()];   
            let day = datePassTime.getDate();
            let hour = datePassTime.getHours();
            let minute = datePassTime.getMinutes();
            let second = datePassTime.getSeconds();
            if (hour<10){
                hour = '0'+hour;
            }
            
            if (minute<10){
                minute = '0'+minute;
            }

            if (second<10){
                second = '0'+second;
            }
            let time = day+' '+month+' '+hour+':'+minute+':'+second;
            document.querySelector(".iss_passTimes").innerHTML = time;
        });
    }
    
}



let weather = new Weather('0297b269ff060ebf50eb71071ede0355');
let iss = new Iss();