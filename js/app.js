

async function bucarBoton()  {
    const id = document.querySelector('.formu-input').value;
    const url = `https://youtube138.p.rapidapi.com/video/details/?id=${id}&hl=en&gl=US`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '343f927d29msh160a667822bf493p182cbbjsne5b7b0fde73f',
            'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}


window.addEventListener('load', e => {
    document.querySelector('.buscar').addEventListener('click', bucarBoton())
})
