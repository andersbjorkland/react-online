import { useContext, useEffect, useState } from "react";
import { design, featured } from "../dev/data/showcases";

const fetchResults = async (path, page, resultsPerPage, category) => {
    console.log({path, page, resultsPerPage, category});

    const url = `https://127.0.0.1:8000/api/contents?&contentType=projects`
                    + `&pageSize=${resultsPerPage}`
                    + `&taxonomyValues%5B%5D=symfony`
                    + `&page=${page}`;
    // fetch(url)
    //     .then(response => response.json())
    //     .then(result => console.log(result["hydra:member"]));


    let numberOfPages = 0;
    let response = await fetch(url);
    let result = await response.json();

    const totalItems = await result["hydra:totalItems"];
    const results = await result["hydra:member"].map(element => {
        return {
            type: 'showcase',
            heading: element.extras.title,
            meta: {
                date: element.modifiedAt,
                author: element.authorName
            },
            url: element.fieldValues.live,
            github: element.fieldValues.github,
            download: element.fieldValues.file.url,
            img: {
                src: element.fieldValues.image.url,
                alt: element.fieldValues.image.alt,
                thumbnail: element.fieldValues.image.thumbnail
            },
            summary: element.fieldValues.teaser
        }
    });

    numberOfPages = Math.ceil(await totalItems / resultsPerPage);

    console.log(result);
    /*
  
    */

    // const fetchResults = (contents) => {
    //     numberOfPages = (Math.ceil(contents.length / resultsPerPage));
    //     const startIndex = (page - 1) * resultsPerPage;
    //     const endIndex = startIndex + resultsPerPage;
    //     return contents.slice(startIndex, endIndex);
    // }

    // switch (category) {
    //     case "design":
    //         results = fetchResults(design);
    //         break;
    //     default:
    //         results = fetchResults(featured);
    //         break;
    // }

    return {results: results, pages: numberOfPages, currentPage: page};
}

export default fetchResults;