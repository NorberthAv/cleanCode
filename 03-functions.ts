(() => {

    // función para obtener información de una película por Id
    function getMoviesById( movieId: string ) {
        console.log({ movieId });
    }

    // función para obtener información de los actores de una película - Actors o Cast // id = movieId getMovieCast
    function getInfoActorsByMovieId( id: string ) {
        console.log({ id });
    }

    // funcion para obtener el bio del actor por el id
    function getActorById( ActorId: string ) {
        console.log({ ActorId });
    }
    
    // Crear una película
    interface Movie {
        title:          string;
        description:    string;
        rating:         number;
        cast:           string[];
    }
    function createMovie({title, description, rating, cast} : Movie) {
        console.log({ title, description, rating, cast });
    }

    // Crea un nuevo actor
    function checkFullName( fullName: string ): boolean {
        console.log({ fullName });
        if ( fullName === 'fernando' ) return false;
        return true;
    }
    function createActor( fullName: string, birthdate: Date ): boolean {
        
        // tarea asincrona para verificar nombre
        // ..
        // ..
        const isValid = checkFullName(fullName);
      

        console.log('Crear actor');
        return true;        

    }

    


})();






