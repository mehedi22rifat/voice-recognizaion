


function voice(){
    let voiceIs = new webkitSpeechRecognition()
    voiceIs.lang = "en-GB";
    voiceIs.onresult = function(event){
        console.log(event);
        document.getElementById('textBox').value=
        event.results[0][0].transcript;
    }
    voiceIs.start()
}