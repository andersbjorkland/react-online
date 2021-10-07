const articleMetaDataClosure = () => {
    let lastCategory = "";
    let hasParsedForCategory = false;
    let hasParsedForTags = false;
    let hasParsed = false;
    let tagsArray = [];
    let itemsCount = 0;

    return async (category) => {
        hasParsedForCategory = category === lastCategory;
        hasParsed = hasParsedForCategory && hasParsedForTags;
        lastCategory = category;

        if (!hasParsed) {
            let url = `https://dev.to/api/articles`
            url += `?page=1&per_page=1000`;


            let categoryParam = "";
            if (category && category !== "latest") {
                categoryParam = '&tags=' + category;
                url += categoryParam;
            }
            url += `&username=andersbjorkland`;

            let response = await fetch(url);
            let result = await response.json();

            const items = await result.length;
            const tagList = await result.map(element => element.tag_list);

            if (!hasParsedForTags){
                const tags = Array.from(new Set(await tagList.flat()));

                if (tags.length > 0) {
                    tagsArray = tags;
                    hasParsedForTags = true;
                }
            }
            itemsCount = items;
            console.log({items, tagsArray, hasParsed});
        }
        return {items: itemsCount, tags: tagsArray};
    }
}

const getMetaData = articleMetaDataClosure();
export const fetchArticles = async (page=1, resultsPerPage=1, category = "latest") => {
    // let url = `https://127.0.0.1:8000/articles-api`
    // url += `?pageSize=${resultsPerPage}&page=${page}`;
    let meta = await getMetaData(category);
    if (page > Math.ceil(meta.items/resultsPerPage)){
        page = Math.ceil(meta.items/resultsPerPage);
    }
    let url = `https://dev.to/api/articles`
    url += `?page=${page}&per_page=${resultsPerPage}`;


    let categoryParam = "";
    if (category && category !== "latest") {
        categoryParam = '&tags=' + category;
        url += categoryParam;
    }
    url += `&username=andersbjorkland`;

    let response = await fetch(url);
    let result = await response.json();

    console.log(url, result);
    console.log(meta);

    return {result: result, meta: meta};
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