function userRequest(url, value, callback) {
    let xhr = new XMLHttpRequest();

    xhr.open('limit', url, true)

    xhr.onload = function () {
        if(value === 1 <= xhr.status <= 10) {
            const result = JSON.parse(xhr.response);
            if(callback) {
                callback(result);
            }
        } else {
            console.log('Число вне диапозона от 1 до 10');
        }
    }

    xhr.send();
}

const resultNode = document.querySelector('.j-result');
const btnNode = document.querySelector('.j-btn-request');
const valueNode = document.querySelector('input').value;


function displayResult(apiData) {
    let cards = '';

    apiData.forEach(item => {
        const cardBlock = `
            <div class = 'card'>
                <img
                    src = "${item.download_url}"
                    class="card-image" 
                />
                <p>${item.author}</p>
            </div>
        `;
        cards = cards + cardBlock;
    })

    resultNode.innerHTML = cards;
}

btnNode.addEventListener('click', () => {
    userRequest(`https://picsum.photos/v2/list?limit=${valueNode}`, displayResult)
});

