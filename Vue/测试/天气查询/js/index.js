new Vue({
    el:'.app',
    data:{
        city:'北京',
        weatherList:[]
    },
    methods:{
        searchWeather:function (){
            var that=this;
            axios.get('http://wthrcdn.etouch.cn/weather_mini?city='+this.city).then(function (response) {
                console.log(response)
                that.weatherList=response.data.data.forecast;
            }).catch(function (err) {
                console.log(err)
            })
        },
        changeWeather:function (city){
            this.city=city;
            this.searchWeather();
        }
    }
})