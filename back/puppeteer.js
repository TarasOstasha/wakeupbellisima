const puppeteer = require('puppeteer'); // Require the Package we need...
const ReviewMessage = require('./models/review');



let scrape = async () => { // Prepare scrape...

    const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disabled-setuid-sandbox'] }); // Prevent non-needed issues for *NIX
    const page = await browser.newPage(); // Create request for the new page to obtain...

    // Replace with your Google Maps URL... Or Test the Microsoft one...
    //await page.goto('https://www.google.com/maps/place/Microsoft/@36.1275216,-115.1728651,17z/data=!3m1!5s0x80c8c416a26be787:0x4392ab27a0ae83e0!4m7!3m6!1s0x80c8c4141f4642c5:0x764c3f951cfc6355!8m2!3d36.1275216!4d-115.1706764!9m1!1b1');

    await page.goto('https://www.google.com/search?sxsrf=ALeKk02ln6tILavA1DmZChqdhrw26wXJsQ%3A1593054031026&source=hp&ei=ThP0XvfcNeSkgweamr3QCw&q=wake+up+bellisima&oq=wake+up+bellisima&gs_lcp=CgZwc3ktYWIQAzIECCMQJzICCCY6BwgjEOoCECc6BwgAELEDEEM6BAgAEEM6BwgAEBQQhwI6BQgAELEDOgIIADoFCAAQgwE6BggAEBYQHlDsCliZKmD1KmgBcAB4AYABjwWIAZMYkgEKMC4xMi4zLjUtMZgBAKABAaoBB2d3cy13aXqwAQo&sclient=psy-ab&ved=0ahUKEwj3u_nc_JvqAhVk0uAKHRpND7oQ4dUDCAk&uact=5#lrd=0x89c2f91bc1abe2a7:0x39b34b6388091f93,1,,,'); // Define the Maps URL to Scrape...
    await page.waitFor(1000); // In case Server has JS needed to be loaded...

    const result = await page.evaluate(() => { // Let's create variables and store values...

        let fullName = document.querySelectorAll('.TSUbDb'); // Full Name
        let postDate = document.querySelectorAll('.dehysf'); // Date Posted
        let starRating = document.querySelectorAll('.EBe2gf') // Star Rating
        let postReview = document.querySelectorAll('.jxjCjc > div:nth-child(3)>div:nth-child(2)>span');

        let name = [];
        fullName.forEach((node) => {
            name.push(node.innerText);
        })
        let date = [];
        postDate.forEach((node) => {
            date.push(node.innerText);
        })
        let stars = [];
        starRating.forEach((node) => {
            stars.push(node.getAttribute("aria-label"));
            //stars.push(node.innerHTML);

        })
        let reviews = [];
        postReview.forEach((node) => {
            reviews.push(node.innerText);
            //reviews.push(node.innerHTML);
        })
        let mainReviewArray = [];
        name.forEach((el, index) => {
            mainReviewArray.push({
                nameReview: name[index],
                created: date[index],
                stars: stars[index],
                messageReview: reviews[index]
            })

        });

        // let fullName = document.querySelector('.TSUbDb').innerText; // Full Name
        // let postDate = document.querySelector('.dehysf').innerText; // Date Posted
        // let starRating = document.querySelector('.EBe2gf').getAttribute("aria-label"); // Star Rating
        // let postReview = document.querySelector('.eX1cmf').nextElementSibling.innerText;


        return { // Return the results...
            // fullName,
            // postDate,
            // postReview,
            // starRating,
            // name,
            // date,
            // stars,
            // reviews,
            mainReviewArray
        }
    });

    browser.close(); // Close the Browser...
    return result; // Return the results with the Review...
};

async function refreshReviews() {
    const parsedReviews = await scrape();
    //.then(async () => { // Scrape and output the results...
    const currentReviews = await ReviewMessage.find(); // get exist reviews from DB
    parsedReviews.mainReviewArray.forEach((review) => { // loop reviews from google account
        const isExist = currentReviews.some((review2) => { // compare between reviews from google account and from DB
            return review2.messageReview == review.messageReview
        })
        if (!isExist) new ReviewMessage(review).save(); // save to DB
    })
    console.log(parsedReviews); // Yay, output the Results...
    // });
}
setTimeout(() =>{
    refreshReviews();
}, )






module.exports = scrape; 