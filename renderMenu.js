function setActiveItem(active,resolvedData){
    for(var i = 0; i < resolvedData.entrySections.lenght;i++){
        if(resolvedData.entrySections[i].name===value){
            resolvedData.entrySections[i].active=true;
        }
    }
}

function renderMenu(active) {
  const data = fetch("./menu.json").then((response) => response.json());
  const template = fetch("./menu.mst").then((response) => response.text());
  Promise.all([data, template])
    .then((response) => {
      console.log(response);
      resolvedData = response[0];
      resolvedData = setActiveItem(active,resolvedData);
      resolvedTemplate = response[1];
      Mustache.parse(resolvedTemplate);
      var output = Mustache.render(resolvedTemplate, resolvedData);
      return (document.querySelector("#fxs_nav_position").innerHTML = output);
    })
    .catch((error) =>
      console.log("Unable to get all template data: ", error.message)
    );
}
