function getImage() {
    const random = Math.floor(Math.random() * 9) + 1;   
    return '<img src="image/' + random + '.jpg">';
}

document.getElementById("image").innerHTML = getImage();