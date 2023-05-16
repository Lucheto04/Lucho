const options = {
    method: "GET",
    headers: {
        "X-RapidAPI-Key": "343f927d29msh160a667822bf493p182cbbjsne5b7b0fde73f",
        "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
    },
};

window.addEventListener("load", () => {
    document.querySelector(".buscar").addEventListener("click", (e) => {
        e.preventDefault();
        const buscar = document.querySelector(".buscarBarra").value;
        const url = `https://youtube138.p.rapidapi.com/search/?q=${buscar}`;
        fetch(url, options)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                buscarId(data);
            });
    });
});

function buscarId(data) {
    // optenemos el Video
    const ID = data.contents[1].video.videoId;
    document.querySelector(
        ".video"
    ).src = `https://www.youtube-nocookie.com/embed/${ID}`;

    // Obtenemos los videos relacionados
    const ID2 = data.contents[2].video.videoId;
    document.querySelector(".video2").src = `https://www.youtube-nocookie.com/embed/${ID2}`;

    const ID3 = data.contents[3].video.videoId;
    document.querySelector(".video3").src = `https://www.youtube-nocookie.com/embed/${ID3}`;

    const ID4 = data.contents[4].video.videoId;
    document.querySelector(".video4").src = `https://www.youtube-nocookie.com/embed/${ID4}`;

    const ID5 = data.contents[5].video.videoId;
    document.querySelector(".video5").src = `https://www.youtube-nocookie.com/embed/${ID5}`;

    // obtenemos el Logo
    const avatar = data.contents[1].video.author.avatar[0].url;
    document.querySelector(".avatar").src = avatar;

    // Traemos el Titulo
    document.querySelector(".nombre_video").innerHTML = `<h3>${data.contents[1].video.title}</h3>`;

    // Traemos el Nombre del Canal
    document.querySelector(".nombre_canal").innerHTML = `<h3>${data.contents[1].video.author.title}</h3>`;

    
    document.querySelector(".descripcion").innerText = data.contents[1].video.descriptionSnippet;

    // Traemos los comentarios 
    const url_comentarios = `https://youtube138.p.rapidapi.com/video/comments/?id=${ID}&hl=en&gl=US`;
    fetch(url_comentarios, options)
    .then((respons) => respons.json())
    .then((data) => {
        // console.log(data);
        comentarios(data)
    });

    const url_descripcion = `https://youtube138.p.rapidapi.com/video/details/?id=${ID}&hl=en&gl=US`;
    fetch(url_descripcion, options)
    .then((respons) => respons.json)
}

function comentarios(data) {
    // console.log(data.comments);
    let  acumulador_comentarios = '';
    for (const valor of data.comments) {
        // console.log(valor.content);
        acumulador_comentarios += `<hr>${valor.content}
        <hr>`;
    }
    document.getElementById('cometarios').innerHTML = acumulador_comentarios
}



