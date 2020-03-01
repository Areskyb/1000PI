// fetch("https://wordsapiv1.p.rapidapi.com/words/?letterPattern=^", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "wordsapiv1.p.rapidapi.com",
// 		"x-rapidapi-key": "7c276f3231msha6b607e9767c23ep1c3116jsn3c40126e8814"
// 	}
// })
// .then(response => {
//    return response.json()
// }).then(res => console.log(res));

export const getWords = (regex) => {

    fetch(`https://wordsapiv1.p.rapidapi.com/words/?letterPattern=^${regex}$`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "wordsapiv1.p.rapidapi.com",
            "x-rapidapi-key": "7c276f3231msha6b607e9767c23ep1c3116jsn3c40126e8814"
        }
    })
    .then(response => {
        return response.json()
        
    });

}