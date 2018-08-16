var bookmarks = [{name: "Scanu Productions", url: "https://scanurag.com", id: 0}, {name: "Scanu roductions", url: "https://scanurag.com", id: 1}, {name: "Scanu oductions", url: "https://scanurag.com", id: 2}, {name: "canu Productions", url: "https://scanurag.com", id: 3}]


//Remove all existing bookmark elements
document.getElementById("bookmarksContainer").innerHTML = "";
//loop runs for each item in the array bookmarks
for (i=0; i<bookmarks.length; i++){
    //create new element
    var nBook = document.createElement("a");
    //assign it a name form the array
    nBook.innerHTML = bookmarks[i].name;
    //add the url to the bookmark so that it opens when clicked
    nBook.setAttribute("onclick", "loadBookmark('" + bookmarks[i].url + "')");
    //add the bookmark class to the new element
    nBook.classList.add("bookmarks");
    //define the container
    var container = document.getElementById("bookmarksContainer");
    //add the new element to the container
    container.appendChild(nBook);
}
