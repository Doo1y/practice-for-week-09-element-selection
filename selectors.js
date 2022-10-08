const select = () => {
    /* Write queries for each of the following */

    /* Section 1 */
    // 1. Get all seeded fruit elements
    // Your code here
    const seeded = document.querySelectorAll("li.seed");
    console.log(seeded);

    // 2. Get all seedless fruit elements
    // Your code here
    const seedless = document.querySelectorAll("li.seedless");
    console.log(seedless);

    // 3. Get first seedless fruit element
    // Your code here
    const firstSeedless = document.querySelector(".seedless");
    console.log(firstSeedless);

    /* Section 2 */
    // 4. Get inner span with text "you"
    // Your code here
    const sectionTwo = document.querySelector("section#two");
    const sectionTwoChildDiv = sectionTwo.children[1];
    const innerSpan = sectionTwoChildDiv.children[0].children[0];
    console.log(innerSpan);

    // 5. Get all children of element "wrapper"
    // Your code here
    const wrapperDiv = document.querySelector("div#wrapper").children;
    console.log(wrapperDiv);

    // 6. Get all odd number list items in the list
    // Your code here
    const oddInList = document.querySelectorAll("li.odd");
    console.log(oddInList);

    // 7. Get all even number list items in the list
    // Your code here
    const evenInList = document.querySelectorAll("ol > li:not(.odd)");
    console.log(evenInList);

    /* Section 3 */
    // 8. Get all tech companies without a class name
    // Your code here
    const techCompaniesWithoutClass = document.querySelector("section#three > p > a:not([class])");
    console.log(techCompaniesWithoutClass);

    // 9. Get "Amazon" list element
    // Your code here
    const shopping = document.getElementsByClassName("shopping");
    console.log(shopping);

    // 10. Get all unicorn list elements (not the image element)
    // Your code here
    const unicornListElements = document.querySelectorAll("section#three > ul > li");
    console.log(unicornListElements);
}

window.onload = select;