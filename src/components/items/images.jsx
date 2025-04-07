
function Images() {
    const imgs = [];
    for (var i = 1; i <= 15; i++) {
        imgs.push("src/assets/gallery-images/image-"+i)
    }
    return (imgs);
}

export default Images;