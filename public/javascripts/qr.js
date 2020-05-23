
function getNewData() {
    let inputText = document.getElementById('data').value
    console.log(inputText);
    getNewCanvas(inputText)
}

function getNewCanvas(data) {

    QRCode.toCanvas(document.getElementById('canvas'), data, function (error) {
        if (error) console.error(error);
        console.log('success!');
    })
}

document.getElementById('generate-button').addEventListener("click", e => {
    getNewData();
});