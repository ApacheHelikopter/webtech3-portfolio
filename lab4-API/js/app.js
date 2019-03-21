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
            console.log(json.currently.cloudCover);
            document.querySelector(".weather").innerHTML = json.currently.summary;

            let cloudCover = json.currently.cloudCover;
            let hiddenTime = document.querySelector(".hidden");
            if(cloudCover<0.5){
                hiddenTime.className = "extraInfo";
            }
        });
    }
}

class Iss {
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
            let date2 = json.response[1].risetime*1000;
            console.log(date);
            let datePassTime = new Date(date);
            let datePassTime2 = new Date(date2); 
            
            let monthArray = ["Januari", "Februari", "Maart", "April", "Mei", "Juni", "Juli", "Augustus", "September", "Oktober", "November", "December"];
            
            let month = monthArray[datePassTime.getMonth()];  
            let month2 = monthArray[datePassTime2.getMonth()];  

            let day = datePassTime.getDate();
            let day2 = datePassTime2.getDate();

            let hour = datePassTime.getHours();
            let hour2 = datePassTime2.getHours();

            let minute = datePassTime.getMinutes();
            let minute2 = datePassTime2.getMinutes();

            let second = datePassTime.getSeconds();
            let second2 = datePassTime2.getSeconds();


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

            let time2 = day2+' '+month2+' '+hour2+':'+minute2+':'+second;
            document.querySelector(".iss_passTimesExtra").innerHTML = time2;
        });
    }
    
}



let weather = new Weather('0297b269ff060ebf50eb71071ede0355');
let iss = new Iss();