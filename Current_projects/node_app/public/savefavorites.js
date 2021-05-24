function addFavoriteHandlers() {
    // localStorage.removeItem('myfavorites')
    // Get all favorite places
    let favorites = document.querySelectorAll(".favorite")
    // Get current favorites OR empty array
    let favoriteObject = JSON.parse(localStorage.getItem('myfavorites') || "{}")

    // Add event listener to each beer card received
    favorites.forEach(favorite => {
        favorite.addEventListener('click', () => {
            if(favorite.checked) {
                favoriteObject['name'] = favorite.dataset.name
                favoriteObject['id'] = favorite.dataset.id
            } else {
                delete favoriteObject
            }

            // Stringify the array and put it into localStorage
            localStorage.setItem('myfavorites', JSON.stringify(favoriteObject))
        })
    })
}
window.onload = addFavoriteHandlers