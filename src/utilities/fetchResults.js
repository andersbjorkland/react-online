const fetchResults = async (path, page, resultsPerPage, category) => {

    let categoryParam = "";
    if (category && category !== "latest") {
        categoryParam = category ? '&category=' + category : "";
    }

    let url = `https://andersbjorkland.se/projects-api?`
                    + `&pageSize=${resultsPerPage}`
                    + `&page=${page}`;
    
    url += categoryParam;


    let numberOfPages = 0;
    let response = await fetch(url);
    let result = await response.json();

    numberOfPages = await result["pages"];
    const results = await result["results"];

    return {results: results, pages: numberOfPages, currentPage: page};
}

export default fetchResults;