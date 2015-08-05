

class Source {

    constructor() {
        if(!this.fetch)
            console.error("La source " +
                this.constructor.name +
                " n'implémente pas la méthode `fetch` et ne permet donc pas de récupérer des données.");
    }

}

export default Source;