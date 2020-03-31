function renderMustache(datap,templatep,id){
    const data = fetch('./json/'+datap).then(response => response.json());
    const template = fetch('./templates/'+templatep).then(response => response.text());
    Promise.all([data, template])
        .then(response => {
            resolvedData = response[0];
            resolvedTemplate = response[1];
            Mustache.parse(resolvedTemplate);
            var output = Mustache.render(resolvedTemplate, resolvedData);
            return document.querySelector(id).innerHTML = output;
        }).catch(error => console.log('Unable to get all template data: ', error.message));
}
