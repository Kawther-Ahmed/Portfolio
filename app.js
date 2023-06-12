// fill about
document.getElementById("about-txt").innerHTML = about;

// fill projects
projects.forEach(function (row) {
    // Create a new card element
    var card = document.createElement("div");
    card.classList.add("col-md-4"); // Set the column width for the card
    card.innerHTML = `
          <div class="card">
            <img src="${row.image}" class="card-img-top">
            <div class="card-body">
              <h5 class="card-title">${row.title}</h5>
              <div class="d-flex justify-content-between">
                <span class="h6 mb-2 text-muted">${row.tool}</span>
                <span class="card-text"><small class="text-muted">${row.date}</small></span>
              </div>
              <p class="card-text">${row.description}</p>
              <a href="${row.url}" class="stretched-link"></a>
            </div>
          </div>
        `;
    // Add the card to the row element
    document.getElementById("card-row").appendChild(card);
});