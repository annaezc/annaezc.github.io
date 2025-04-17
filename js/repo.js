fetch("repos.json")
  .then((res) => res.json())
  .then((data) => {
    let output = "";
    data.forEach(function (repo) {
      output += `
        <div class="col-sm-4 mb-40">
          <div class="repo-card text-center">
        <a href="${repo.url}">
          <img class="repo-img" loading="lazy" src="${repo.banner}" alt="${repo.name}" 
        style="width:100%; aspect-ratio:1/1; object-fit:cover; object-position:center; height:auto; display:block;">
        </a>
        <div class="repo-title mt-2">
          <a href="${repo.url}"><h4>${repo.name}</h4></a>
        </div>
          </div>
        </div>
      `;
    });
    document.getElementById("repo-card").innerHTML = output;
  });
