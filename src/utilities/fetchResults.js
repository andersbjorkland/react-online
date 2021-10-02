const fetchResults = async (path, page, resultsPerPage, category) => {

    const categoryParam = category ? '&category=' . category : "";

    const url = `https://127.0.0.1:8000/projects-api?`
                    + `&pageSize=${resultsPerPage}`
                    + categoryParam
                    + `&page=${page}`;


    let numberOfPages = 0;
    let response = await fetch(url);
    let result = await response.json();

    numberOfPages = await result["pages"];
    const results = await result["results"];

    return {results: results, pages: numberOfPages, currentPage: page};
}

export default fetchResults;