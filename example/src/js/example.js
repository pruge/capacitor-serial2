import { Serial } from 'capacitor-serial2';

window.testEcho = () => {
    const inputValue = document.getElementById("echoInput").value;
    Serial.echo({ value: inputValue })
}
