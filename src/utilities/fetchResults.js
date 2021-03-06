export const fetchArticles = async (page=1, resultsPerPage=1, category = "latest") => {
    let url = `https://andersbjorkland.se/articles-api`;
    url += `?page=${page}`
    url += `&pageSize=${resultsPerPage}`


    let categoryParam = "";
    if (category && category !== "latest") {
        categoryParam = '&tag=' + category;
        url += categoryParam;
    }

    let response = await fetch(url);
    let result = await response.json();

    return {...result};
}



export const fetchProjectsCategories = async () => {
    let url = `https://andersbjorkland.se/projects-api/categories`;

    let response = await fetch(url);
    let result = await response.json();

    return result;
}

const fetchResults = async (path, page, resultsPerPage, category) => {

    let categoryParam = "";
    if (category && category !== "latest") {
        categoryParam = '&category=' + category;
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